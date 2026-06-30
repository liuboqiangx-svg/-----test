import { NextRequest, NextResponse } from "next/server";
import {
  getMessages,
  initDatabaseAsync,
  insertMessage,
  markMessagesAsRead,
  saveCharacter,
  getCharacterState,
  updateCharacterState,
} from "@/lib/db/index-drizzle";
import { DEFAULT_CHARACTER, getCharacterById } from "@/lib/character";
import { generateCharacterReply, isMockMode } from "@/lib/llm";
import { MoodType } from "@/types";
import { detectImageTrigger } from "@/lib/image/trigger";
import { getCharacterAvatarBase64, hasCharacterAvatar } from "@/lib/character-avatar";
import { getImageService } from "@/lib/image/service";

// 确保数据库已初始化
let initialized = false;
async function ensureInit() {
  if (!initialized) {
    await initDatabaseAsync();
    await saveCharacter(DEFAULT_CHARACTER);
    initialized = true;
  }
}

export async function GET(request: NextRequest) {
  await ensureInit();
  const searchParams = request.nextUrl.searchParams;
  const characterId = searchParams.get("characterId") || DEFAULT_CHARACTER.id;

  // 简单鉴权：使用 deviceId 作为用户标识
  const deviceId = request.headers.get("x-device-id") || "anonymous";
  const userId = deviceId;

  // 获取当前角色配置
  const characterConfig = getCharacterById(characterId) || DEFAULT_CHARACTER;

  const messages = await getMessages(userId, characterId, 100);
  const state = await getCharacterState(userId, characterId);
  await markMessagesAsRead(userId, characterId);

  return NextResponse.json({
    messages,
    character: characterConfig,
    state,
    mockMode: isMockMode(),
  });
}

export async function POST(request: NextRequest) {
  await ensureInit();

  try {
    const body = await request.json();
    const { content, characterId } = body;

    if (!content?.trim()) {
      return NextResponse.json({ error: "消息内容不能为空" }, { status: 400 });
    }

    const deviceId = request.headers.get("x-device-id") || "anonymous";
    const userId = deviceId;
    const charId = characterId || DEFAULT_CHARACTER.id;

    // 获取当前角色配置
    const characterConfig = getCharacterById(charId) || DEFAULT_CHARACTER;

    // 保存用户消息
    const userMsg = await insertMessage({
      user_id: userId,
      character_id: charId,
      role: "user",
      content: content.trim(),
      type: "text",
    });

    // 获取历史
    const history = (await getMessages(userId, charId, 20)).map((m) => ({
      role: m.role,
      content: m.content,
    }));
    const state = await getCharacterState(userId, charId);
    const nickname =
      state
        ? undefined
        : characterConfig.nicknames_for_user[
            Math.floor(Math.random() * characterConfig.nicknames_for_user.length)
          ];

    // 检测是否触发图片生成
    const imageTrigger = detectImageTrigger(content.trim());
    const shouldGenerateImage = imageTrigger.triggered &&
                                 hasCharacterAvatar(charId) &&
                                 imageTrigger.suggestedScene;

    // 生成角色回复（使用当前角色的配置）
    const result = await generateCharacterReply({
      userName: userId,
      characterId: charId,
      characterName: characterConfig.display_name,
      characterProfile: characterConfig.speech_style,
      memories: [],
      history,
      currentMessage: content.trim(),
      mood: state?.mood || "calm",
      intimacy: state?.intimacy || 10,
      nickname,
    });

    // 保存角色回复
    const charMsg = await insertMessage({
      user_id: userId,
      character_id: charId,
      role: "character",
      content: result.content,
      type: "text",
    });

    // 如果触发图片生成，生成图片并保存
    let imageMessage = null;
    if (shouldGenerateImage) {
      const avatarBase64 = getCharacterAvatarBase64(charId);
      if (avatarBase64) {
        const imageService = getImageService();
        const imageResult = await imageService.generateCharacterImage({
          characterId: charId,
          scene: imageTrigger.suggestedScene,
          reference_images: [avatarBase64],
          image_prompt: `A beautiful woman in a ${imageTrigger.suggestedScene}, natural pose, high quality photo`,
        });

        if (imageResult.success && imageResult.data) {
          imageMessage = await insertMessage({
            user_id: userId,
            character_id: charId,
            role: "character",
            content: imageResult.data.url,
            type: "image",
          });
        }
      }
    }

    // 更新角色状态（使用当前角色的亲密度成长配置）
    const newState = await updateCharacterState(userId, charId, {
      mood: (result.mood as MoodType) || "calm",
      intimacy: Math.min(100, (state?.intimacy || 10) + characterConfig.intimacy_growth.reply),
      mood_intensity: result.intensity,
      last_message_at: new Date().toISOString(),
      next_proactive_at: new Date(Date.now() + 1000 * 60 * 20).toISOString(),
    });

    return NextResponse.json({
      userMessage: userMsg,
      characterMessage: charMsg,
      imageMessage,
      state: newState,
      moodChanged: result.moodChanged,
      moodLabel: result.moodLabel,
      moodEmoji: result.moodEmoji,
      triggerType: result.triggerType,
      triggerWord: result.triggerWord,
      mockMode: isMockMode(),
    });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}
