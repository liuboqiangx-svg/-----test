/**
 * PostgreSQL 数据库 Schema 初始化
 *
 * 自动创建表结构和索引
 */

import { query } from "./pool";

/**
 * 数据库初始化 SQL
 */
const SCHEMA_SQL = `
-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 角色配置表
CREATE TABLE IF NOT EXISTS characters (
  id TEXT PRIMARY KEY,
  config_json JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 消息表
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  character_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'character')),
  content TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'text' CHECK (type IN ('text', 'voice', 'image', 'sticker')),
  media_url TEXT,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- 记忆表
CREATE TABLE IF NOT EXISTS memories (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  character_id TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('user_fact', 'relationship', 'preference', 'habit')),
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, character_id, category, key)
);

-- 角色状态表
CREATE TABLE IF NOT EXISTS character_states (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  character_id TEXT NOT NULL,
  mood TEXT NOT NULL DEFAULT 'calm',
  intimacy INTEGER NOT NULL DEFAULT 10 CHECK (intimacy >= 0 AND intimacy <= 100),
  mood_intensity INTEGER,
  last_message_at TIMESTAMP WITH TIME ZONE,
  next_proactive_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, character_id)
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_messages_user_character ON messages(user_id, character_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_memories_user_character ON memories(user_id, character_id);
CREATE INDEX IF NOT EXISTS idx_character_states_user ON character_states(user_id, character_id);
`;

/**
 * 初始化数据库
 */
export async function initDatabase(): Promise<void> {
  console.log("[Database] Initializing PostgreSQL schema...");

  try {
    await query(SCHEMA_SQL);
    console.log("[Database] PostgreSQL schema initialized successfully");
  } catch (error) {
    console.error("[Database] Failed to initialize schema:", error);
    throw error;
  }
}

/**
 * 清理测试数据（仅用于开发）
 */
export async function clearTestData(): Promise<void> {
  console.log("[Database] Clearing test data...");

  await query("DELETE FROM messages WHERE user_id LIKE 'test-%'");
  await query("DELETE FROM memories WHERE user_id LIKE 'test-%'");
  await query("DELETE FROM character_states WHERE user_id LIKE 'test-%'");
  await query("DELETE FROM users WHERE id LIKE 'test-%'");

  console.log("[Database] Test data cleared");
}
