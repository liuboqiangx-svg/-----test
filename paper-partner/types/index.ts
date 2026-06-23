export type MessageRole = "user" | "character";
export type MessageType = "text" | "voice" | "image" | "sticker";

export interface Message {
  id: string;
  user_id: string;
  character_id: string;
  role: MessageRole;
  content: string;
  type: MessageType;
  media_url?: string;
  is_read: boolean;
  created_at: string;
}

export interface Memory {
  id: string;
  user_id: string;
  character_id: string;
  category: "user_fact" | "relationship" | "preference" | "habit";
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
}

// 支持所有角色的情绪类型
export type MoodType =
  | "calm"        // 平静/从容
  | "concerned"   // 担心
  | "sad"         // 难过/悲伤
  | "guarded"     // 防备/警惕
  | "happy"       // 开心
  | "clingy"      // 撒娇/粘人
  | "jealous"     // 吃醋/不满
  | "worried"     // 焦虑
  | "hurt"        // 受伤
  | "composed"    // 淡定/从容（女版）
  | "anxious"     // 不安
  | "excited"     // 兴奋（男版）
  | "passionate"  // 深情
  | "sleepy"      // 困倦
  | "angry"       // 生气（林野）
  | "wronged";    // 委屈

export interface CharacterState {
  id: string;
  user_id: string;
  character_id: string;
  mood: MoodType;
  intimacy: number; // 0 - 100
  mood_intensity?: number; // 情绪强度 0-100
  last_message_at?: string;
  next_proactive_at?: string;
  updated_at: string;
}

// 情绪标签映射
export const MOOD_LABELS: Record<MoodType, string> = {
  calm: "😌 平静",
  concerned: "😟 担心",
  sad: "😢 难过",
  guarded: "🛡️ 防备",
  happy: "😊 开心",
  clingy: "🥰 撒娇",
  jealous: "😤 吃醋",
  worried: "😰 焦虑",
  hurt: "💔 受伤",
  composed: "☕ 从容",
  anxious: "😳 不安",
  excited: "🤩 兴奋",
  passionate: "❤️ 深情",
  sleepy: "😴 困倦",
  angry: "😠 生气",
  wronged: "😢 委屈",
};

// 情绪 Emoji 映射
export const MOOD_EMOJIS: Record<MoodType, string> = {
  calm: "😌",
  concerned: "😟",
  sad: "😢",
  guarded: "🛡️",
  happy: "😊",
  clingy: "🥰",
  jealous: "😤",
  worried: "😰",
  hurt: "💔",
  composed: "☕",
  anxious: "😳",
  excited: "🤩",
  passionate: "❤️",
  sleepy: "😴",
  angry: "😠",
  wronged: "😢",
};

export interface CharacterProfile {
  id: string;
  name: string;
  display_name: string;
  age: number;
  occupation: string;
  avatar_url: string;
  sticker_url: string;
  personality: string[];
  speech_style: string;
  nicknames_for_user: string[];
  daily_schedule: Record<number, string>;
  proactive_topics: string[];
  intimacy_growth: {
    reply: number;
    share: number;
    miss: number;
  };
}

export interface User {
  id: string;
  name: string;
  created_at: string;
}
