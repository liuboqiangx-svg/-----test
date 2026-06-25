/**
 * PostgreSQL 数据库操作层
 *
 * 迁移自 SQLite 版本，保持相同的接口
 */

import { v4 as uuidv4 } from "uuid";
import { query, transaction } from "./pool";
import { initDatabase } from "./schema";
import {
  CharacterProfile,
  CharacterState,
  Memory,
  Message,
  MessageType,
  User,
} from "@/types";

// 数据库是否已初始化
let initialized = false;

/**
 * 初始化数据库
 */
export async function initDatabaseAsync(): Promise<void> {
  if (!initialized) {
    await initDatabase();
    initialized = true;
  }
}

/**
 * 获取或创建用户
 */
export async function getOrCreateUser(
  name = "主人",
  userId?: string
): Promise<User> {
  if (userId) {
    const existing = await query<User>(
      "SELECT * FROM users WHERE id = $1",
      [userId]
    );
    if (existing.rows.length > 0) {
      return existing.rows[0];
    }
  }

  const user: User = {
    id: userId ?? uuidv4(),
    name,
    created_at: new Date().toISOString(),
  };

  await query(
    "INSERT INTO users (id, name, created_at) VALUES ($1, $2, $3)",
    [user.id, user.name, user.created_at]
  );

  return user;
}

/**
 * 保存角色配置
 */
export async function saveCharacter(character: CharacterProfile): Promise<void> {
  await query(
    `INSERT INTO characters (id, config_json)
     VALUES ($1, $2)
     ON CONFLICT (id) DO UPDATE SET config_json = $2`,
    [character.id, JSON.stringify(character)]
  );
}

/**
 * 获取角色配置
 */
export async function getCharacter(
  id: string
): Promise<CharacterProfile | undefined> {
  const result = await query<{ config_json: string }>(
    "SELECT config_json FROM characters WHERE id = $1",
    [id]
  );

  if (result.rows.length === 0) return undefined;
  return JSON.parse(result.rows[0].config_json) as CharacterProfile;
}

/**
 * 插入消息
 */
export async function insertMessage(
  message: Omit<Message, "id" | "created_at" | "is_read"> & {
    is_read?: boolean;
  }
): Promise<Message> {
  const id = uuidv4();
  const created_at = new Date().toISOString();
  const is_read = message.is_read ?? false;

  await query(
    `INSERT INTO messages (id, user_id, character_id, role, content, type, media_url, is_read, created_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
    [
      id,
      message.user_id,
      message.character_id,
      message.role,
      message.content,
      message.type,
      message.media_url ?? null,
      is_read,
      created_at,
    ]
  );

  return {
    ...message,
    id,
    created_at,
    is_read,
  } as Message;
}

/**
 * 获取消息列表
 */
export async function getMessages(
  userId: string,
  characterId: string,
  limit = 100
): Promise<Message[]> {
  const result = await query<Message>(
    `SELECT * FROM messages
     WHERE user_id = $1 AND character_id = $2
     ORDER BY created_at DESC
     LIMIT $3`,
    [userId, characterId, limit]
  );

  return result.rows.reverse().map(parseMessage);
}

/**
 * 标记消息已读
 */
export async function markMessagesAsRead(
  userId: string,
  characterId: string
): Promise<void> {
  await query(
    `UPDATE messages SET is_read = TRUE
     WHERE user_id = $1 AND character_id = $2 AND role = 'character' AND is_read = FALSE`,
    [userId, characterId]
  );
}

/**
 * 插入或更新记忆
 */
export async function upsertMemory(
  userId: string,
  characterId: string,
  category: Memory["category"],
  key: string,
  value: string
): Promise<Memory> {
  const id = uuidv4();
  const now = new Date().toISOString();

  await query(
    `INSERT INTO memories (id, user_id, character_id, category, key, value, created_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     ON CONFLICT (user_id, character_id, category, key)
     DO UPDATE SET value = $6, updated_at = $8`,
    [id, userId, characterId, category, key, value, now, now]
  );

  return {
    id,
    user_id: userId,
    character_id: characterId,
    category,
    key,
    value,
    created_at: now,
    updated_at: now,
  };
}

/**
 * 获取记忆列表
 */
export async function getMemories(
  userId: string,
  characterId: string,
  categories?: Memory["category"][]
): Promise<Memory[]> {
  if (categories && categories.length > 0) {
    const placeholders = categories.map((_, i) => `$${i + 3}`).join(",");
    const result = await query<Memory>(
      `SELECT * FROM memories
       WHERE user_id = $1 AND character_id = $2 AND category IN (${placeholders})
       ORDER BY updated_at DESC`,
      [userId, characterId, ...categories]
    );
    return result.rows.map(parseMemory);
  }

  const result = await query<Memory>(
    `SELECT * FROM memories
     WHERE user_id = $1 AND character_id = $2
     ORDER BY updated_at DESC`,
    [userId, characterId]
  );

  return result.rows.map(parseMemory);
}

/**
 * 获取角色状态
 */
export async function getCharacterState(
  userId: string,
  characterId: string
): Promise<CharacterState | undefined> {
  const result = await query<CharacterState>(
    "SELECT * FROM character_states WHERE user_id = $1 AND character_id = $2",
    [userId, characterId]
  );

  return result.rows[0];
}

/**
 * 更新角色状态
 */
export async function updateCharacterState(
  userId: string,
  characterId: string,
  updates: Partial<Omit<CharacterState, "id" | "user_id" | "character_id">>
): Promise<CharacterState> {
  const now = new Date().toISOString();
  const existing = await getCharacterState(userId, characterId);

  if (!existing) {
    const id = uuidv4();
    const newState: CharacterState = {
      id,
      user_id: userId,
      character_id: characterId,
      mood: updates.mood ?? "calm",
      intimacy: updates.intimacy ?? 10,
      mood_intensity: updates.mood_intensity,
      last_message_at: updates.last_message_at,
      next_proactive_at: updates.next_proactive_at,
      updated_at: now,
    };

    await query(
      `INSERT INTO character_states (id, user_id, character_id, mood, intimacy, mood_intensity, last_message_at, next_proactive_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        id,
        userId,
        characterId,
        newState.mood,
        newState.intimacy,
        newState.mood_intensity ?? null,
        newState.last_message_at ?? null,
        newState.next_proactive_at ?? null,
        now,
      ]
    );

    return newState;
  }

  const updated: CharacterState = {
    ...existing,
    ...updates,
    updated_at: now,
  };

  await query(
    `UPDATE character_states
     SET mood = $1, intimacy = $2, mood_intensity = $3,
         last_message_at = $4, next_proactive_at = $5, updated_at = $6
     WHERE user_id = $7 AND character_id = $8`,
    [
      updated.mood,
      updated.intimacy,
      updated.mood_intensity ?? null,
      updated.last_message_at ?? null,
      updated.next_proactive_at ?? null,
      now,
      userId,
      characterId,
    ]
  );

  return updated;
}

// ============ 辅助函数 ============

function parseMessage(row: unknown): Message {
  const r = row as Record<string, unknown>;
  return {
    id: r.id as string,
    user_id: r.user_id as string,
    character_id: r.character_id as string,
    role: r.role as "user" | "character",
    content: r.content as string,
    type: (r.type as MessageType) || "text",
    media_url: (r.media_url as string | null) ?? undefined,
    is_read: Boolean(r.is_read),
    created_at: (r.created_at as Date)?.toISOString() ?? new Date().toISOString(),
  };
}

function parseMemory(row: unknown): Memory {
  const r = row as Record<string, unknown>;
  return {
    id: r.id as string,
    user_id: r.user_id as string,
    character_id: r.character_id as string,
    category: r.category as Memory["category"],
    key: r.key as string,
    value: r.value as string,
    created_at: (r.created_at as Date)?.toISOString() ?? new Date().toISOString(),
    updated_at: (r.updated_at as Date)?.toISOString() ?? new Date().toISOString(),
  };
}

// ============ 兼容旧代码（同步版本）============

// 确保数据库已初始化（用于同步调用）
let syncInitialized = false;

export function initDatabaseSync(): void {
  if (!syncInitialized) {
    // 在 Next.js 中，同步初始化应该在 API 路由中调用 initDatabaseAsync
    // 这里只是标记，避免重复调用
    syncInitialized = true;
  }
}

// 兼容旧代码的同步版本（实际是异步，但保持接口一致）
export const getOrCreateUserSync = getOrCreateUser;
export const saveCharacterSync = saveCharacter;
export const getCharacterSync = getCharacter;
export const insertMessageSync = insertMessage;
export const getMessagesSync = getMessages;
export const markMessagesAsReadSync = markMessagesAsRead;
export const upsertMemorySync = upsertMemory;
export const getMemoriesSync = getMemories;
export const getCharacterStateSync = getCharacterState;
export const updateCharacterStateSync = updateCharacterState;
