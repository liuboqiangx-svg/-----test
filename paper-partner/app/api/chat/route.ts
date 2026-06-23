import { NextRequest, NextResponse } from "next/server";
import {
  getMessages,
  initDatabase,
  insertMessage,
  markMessagesAsRead,
  saveCharacter,
} from "@/lib/db";
import { DEFAULT_CHARACTER } from "@/lib/character";
import { generateCharacterReply, isMockMode } from "@/lib/llm";
import { getMemoryPromptText } from "@/lib/memory";
import { getCharacterState, updateCharacterState } from "@/lib/db";

// 确保数据库已初始化
let initialized = false;
function ensureInit() {
  if (!initialized) {
    initDatabase();
    saveCharacter(DEFAULT_CHARACTER);
    initialized = true;
  }
}

export async function GET(request: NextRequest) {
  ensureInit();
  const searchParams = request.nextUrl.searchParams;
  const characterId = searchParams.get("characterId") || DEFAULT_CHARACTER.id;

  // 简单鉴权：使用 deviceId 作为用户标识
  const deviceId = request.headers.get("x-device-id") || "anonymous";
  const userId = deviceId;

  const messages = getMessages(userId, characterId, 100);
  const state = getCharacterState(userId, characterId);
  markMessagesAsRead(userId, characterId);

  return NextResponse.json({
    messages,
    character: DEFAULT_CHARACTER,
    state,
    mockMode: isMockMode(),
  });
}

export async function POST(request: NextRequest) {
  ensureInit();

  try {
    const body = await request.json();
    const { content, characterId } = body;

    if (!content?.trim()) {
      return NextResponse.json({ error: "消息内容不能为空" }, { status: 400 });
    }

    const deviceId = request.headers.get("x-device-id") || "anonymous";
    const userId = deviceId;
    const charId = characterId || DEFAULT_CHARACTER.id;

    // 保存用户消息
    const userMsg = insertMessage({
      user_id: userId,
      character_id: charId,
      role: "user",
      content: content.trim(),
      type: "text",
    });

    // 获取历史和记忆
    const history = getMessages(userId, charId, 20).map((m) => ({
      role: m.role,
      content: m.content,
    }));
    const memoryText = getMemoryPromptText(userId, charId);
    const state = getCharacterState(userId, charId);
    const nickname =
      state
        ? undefined
        : DEFAULT_CHARACTER.nicknames_for_user[
            Math.floor(Math.random() * DEFAULT_CHARACTER.nicknames_for_user.length)
          ];

    // 生成角色回复
    const result = await generateCharacterReply({
      userName: userId,
      characterName: DEFAULT_CHARACTER.display_name,
      characterProfile: DEFAULT_CHARACTER.speech_style,
      memories: [],
      history,
      currentMessage: content.trim() + memoryText,
      mood: state?.mood || "calm",
      intimacy: state?.intimacy || 10,
      nickname,
    });

    // 保存角色回复
    const charMsg = insertMessage({
      user_id: userId,
      character_id: charId,
      role: "character",
      content: result.content,
      type: "text",
    });

    // 更新角色状态
    updateCharacterState(userId, charId, {
      mood: (result.mood as "happy" | "calm" | "miss" | "lonely" | "slight_jealous" | "sleepy") || "calm",
      intimacy: Math.min(100, (state?.intimacy || 10) + DEFAULT_CHARACTER.intimacy_growth.reply),
      last_message_at: new Date().toISOString(),
      next_proactive_at: new Date(Date.now() + 1000 * 60 * 20).toISOString(),
    });

    return NextResponse.json({
      userMessage: userMsg,
      characterMessage: charMsg,
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
