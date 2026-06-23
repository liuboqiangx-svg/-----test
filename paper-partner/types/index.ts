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

export interface CharacterState {
  id: string;
  user_id: string;
  character_id: string;
  mood: "happy" | "calm" | "miss" | "lonely" | "slight_jealous" | "sleepy";
  intimacy: number; // 0 - 100
  last_message_at?: string;
  next_proactive_at?: string;
  updated_at: string;
}

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
