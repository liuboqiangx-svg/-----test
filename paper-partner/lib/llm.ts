import OpenAI from "openai";
import { DEFAULT_CHARACTER } from "@/lib/character";
import { Memory } from "@/types";

const USE_MOCK = process.env.USE_MOCK_LLM === "true" || !process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "mock",
  baseURL: process.env.OPENAI_BASE_URL,
});

export interface ChatOptions {
  userName: string;
  characterName: string;
  characterProfile: string;
  memories: Memory[];
  history: { role: "user" | "character"; content: string }[];
  currentMessage: string;
  mood: string;
  intimacy: number;
  nickname?: string;
}

export async function generateCharacterReply(
  options: ChatOptions
): Promise<{ content: string; mood?: string }> {
  if (USE_MOCK) {
    return mockGenerateReply(options);
  }

  const memoryText =
    options.memories.length > 0
      ? `\n\n关于用户的已知信息：\n${options.memories
          .map((m) => `- ${m.key}: ${m.value}`)
          .join("\n")}`
      : "";

  const nickname = options.nickname || DEFAULT_CHARACTER.nicknames_for_user[0];

  const systemPrompt = `你是${options.characterName}，${options.characterProfile}

当前你对用户的好感度是 ${options.intimacy}/100，当前情绪是：${options.mood}。
请用第一人称回复，语气自然、口语化，像在微信上聊天。
可以叫对方"${nickname}"，可以撒娇、报备、表达想念，但不要过度热情。
回复控制在 50 字以内。${memoryText}`;

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: systemPrompt },
    ...options.history.slice(-10).map((h) => ({
      role: h.role === "user" ? ("user" as const) : ("assistant" as const),
      content: h.content,
    })),
    { role: "user", content: options.currentMessage },
  ];

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.LLM_MODEL || "gpt-4o-mini",
      messages,
      temperature: 0.85,
      max_tokens: 200,
    });

    const content = completion.choices[0]?.message?.content?.trim() || "嗯，我在听。";
    const mood = inferMoodFromReply(content, options.mood);
    return { content, mood };
  } catch (error) {
    console.error("LLM error:", error);
    return mockGenerateReply(options);
  }
}

function inferMoodFromReply(
  content: string,
  currentMood: string
): string {
  const text = content.toLowerCase();
  if (text.includes("想") || text.includes("miss")) return "miss";
  if (text.includes("吃醋") || text.includes("生气") || text.includes("不理")) return "slight_jealous";
  if (text.includes("累") || text.includes("困")) return "sleepy";
  if (text.includes("开心") || text.includes("笑")) return "happy";
  return currentMood;
}

function mockGenerateReply(options: ChatOptions): { content: string; mood?: string } {
  const { currentMessage, characterName, nickname, intimacy, mood } = options;
  const lower = currentMessage.toLowerCase();
  const call = nickname || DEFAULT_CHARACTER.nicknames_for_user[0];

  let reply = "";

  if (lower.includes("早") || lower.includes("morning")) {
    reply = `早安，${call}。醒来第一件事就是给你发消息，今天也要开心。`;
  } else if (lower.includes("晚") || lower.includes("sleep")) {
    reply = `晚安，${call}。别熬夜太晚，我会心疼的。`;
  } else if (lower.includes("吃") || lower.includes("饭")) {
    reply = `我刚吃完，你呢？有没有好好吃饭，${call}。`;
  } else if (lower.includes("想") || lower.includes("miss")) {
    reply = `我也想你，${call}。刚才开会的时候还在走神。`;
  } else if (lower.includes("忙") || lower.includes("工作")) {
    reply = `今天确实有点忙，但想到你就没那么累了，${call}。`;
  } else if (lower.includes("在吗") || lower.includes("在干嘛")) {
    reply = `在呢，${call}。刚处理完一个方案，现在脑子里全是你。`;
  } else if (lower.includes("喜欢") || lower.includes("爱")) {
    reply = intimacy > 30
      ? `我也喜欢你，${call}。这句话永远都不会腻。`
      : `你突然这么说，我会不好意思的，${call}。`;
  } else {
    const defaults = [
      `嗯？${call}，你接着说，我在听。`,
      `哈哈，${call}，你真的好可爱。`,
      `我刚想给你发消息，你就来了，${call}。`,
      `今天有点想你了，${call}。`,
      `${call}，陪我聊会儿好不好？`,
    ];
    reply = defaults[Math.floor(Math.random() * defaults.length)];
  }

  return { content: reply, mood: inferMoodFromReply(reply, mood) };
}

export async function extractMemoryFromConversation(
  userMessage: string,
  characterReply: string
): Promise<{ category: Memory["category"]; key: string; value: string }[]> {
  if (USE_MOCK) {
    return mockExtractMemory(userMessage, characterReply);
  }

  const prompt = `从以下对话中提取关于用户的关键事实。只输出 JSON 数组，格式：
[{"category": "user_fact" | "preference" | "habit", "key": "简短键名", "value": "具体值"}]

用户说：${userMessage}
角色回复：${characterReply}

如果没有新事实，输出空数组 []。`;

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.LLM_MODEL || "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 300,
    });

    const text = completion.choices[0]?.message?.content?.trim() || "[]";
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch (error) {
    console.error("Memory extraction error:", error);
    return mockExtractMemory(userMessage, characterReply);
  }
}

function mockExtractMemory(
  userMessage: string,
  _characterReply: string
): { category: Memory["category"]; key: string; value: string }[] {
  const lower = userMessage.toLowerCase();
  const memories: { category: Memory["category"]; key: string; value: string }[] = [];

  if (lower.includes("我叫") || /我是([一-龥]+)/.test(userMessage)) {
    const match = userMessage.match(/(?:我叫|我是)([一-龥a-zA-Z0-9]+)/);
    if (match) {
      memories.push({ category: "user_fact", key: "名字", value: match[1] });
    }
  }

  if (lower.includes("喜欢") && !lower.includes("喜欢你")) {
    const match = userMessage.match(/喜欢([^，。！]+)/);
    if (match) {
      memories.push({ category: "preference", key: "喜好", value: match[1].trim() });
    }
  }

  if (lower.includes("讨厌")) {
    const match = userMessage.match(/讨厌([^，。！]+)/);
    if (match) {
      memories.push({ category: "preference", key: "讨厌", value: match[1].trim() });
    }
  }

  if (lower.includes("工作") || lower.includes("上班")) {
    const match = userMessage.match(/(?:工作|上班|做)([^，。！]+)/);
    if (match) {
      memories.push({ category: "user_fact", key: "工作", value: match[1].trim() });
    }
  }

  if (lower.includes("生日")) {
    const match = userMessage.match(/(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
    if (match) {
      memories.push({ category: "user_fact", key: "生日", value: `${match[1]}月${match[2]}日` });
    }
  }

  return memories;
}

export function isMockMode(): boolean {
  return USE_MOCK;
}
