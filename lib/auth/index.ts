import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema-drizzle";

const SALT_ROUNDS = 10;
const SESSION_COOKIE_NAME = "session_id";
const SESSION_EXPIRY_DAYS = 7;

// 内存会话存储（生产环境应使用 Redis）
const sessions = new Map<string, { userId: string; expiresAt: Date }>();

export interface User {
  id: string;
  email: string | null;
  name: string;
  isAdmin: boolean;
  status: string;
  createdAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
}

/**
 * 哈希密码
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * 验证密码
 */
export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * 创建用户
 */
export async function createUser(
  email: string,
  password: string,
  name: string
): Promise<User> {
  const id = uuidv4();
  const passwordHash = await hashPassword(password);
  const now = new Date();

  await db.insert(users).values({
    id,
    email,
    passwordHash,
    name,
    isAdmin: false,
    status: "active",
    createdAt: now,
    updatedAt: now,
  });

  return {
    id,
    email,
    name,
    isAdmin: false,
    status: "active",
    createdAt: now,
  };
}

/**
 * 根据邮箱获取用户
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      isAdmin: users.isAdmin,
      status: users.status,
      passwordHash: users.passwordHash,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (result.length === 0) return null;

  const row = result[0];
  return {
    id: row.id,
    email: row.email!,
    name: row.name,
    isAdmin: row.isAdmin!,
    status: row.status!,
    createdAt: row.createdAt,
  };
}

/**
 * 根据 ID 获取用户
 */
export async function getUserById(id: string): Promise<User | null> {
  const result = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      isAdmin: users.isAdmin,
      status: users.status,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);

  if (result.length === 0) return null;

  const row = result[0];
  return {
    id: row.id,
    email: row.email!,
    name: row.name,
    isAdmin: row.isAdmin!,
    status: row.status!,
    createdAt: row.createdAt,
  };
}

/**
 * 验证用户登录
 */
export async function verifyLogin(
  email: string,
  password: string
): Promise<User | null> {
  const result = await db
    .select({
      id: users.id,
      email: users.email,
      name: users.name,
      isAdmin: users.isAdmin,
      status: users.status,
      passwordHash: users.passwordHash,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (result.length === 0) return null;

  const row = result[0];
  if (!row.passwordHash) return null;

  const isValid = await verifyPassword(password, row.passwordHash);
  if (!isValid) return null;

  return {
    id: row.id,
    email: row.email!,
    name: row.name,
    isAdmin: row.isAdmin!,
    status: row.status!,
    createdAt: row.createdAt,
  };
}

/**
 * 创建会话
 */
export function createSession(userId: string): Session {
  const sessionId = uuidv4();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + SESSION_EXPIRY_DAYS);

  sessions.set(sessionId, { userId, expiresAt });

  return { id: sessionId, userId, expiresAt };
}

/**
 * 获取会话
 */
export function getSession(sessionId: string): Session | null {
  const session = sessions.get(sessionId);
  if (!session) return null;

  if (session.expiresAt < new Date()) {
    sessions.delete(sessionId);
    return null;
  }

  return { id: sessionId, ...session };
}

/**
 * 删除会话
 */
export function deleteSession(sessionId: string): void {
  sessions.delete(sessionId);
}

/**
 * 从 Cookie 获取会话
 */
export function getSessionFromCookie(cookieHeader: string | null): Session | null {
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(";").reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>
  );

  const sessionId = cookies[SESSION_COOKIE_NAME];
  if (!sessionId) return null;

  return getSession(sessionId);
}

/**
 * 生成 Set-Cookie 头
 */
export function createSessionCookie(session: Session): string {
  const maxAge = Math.floor(
    (session.expiresAt.getTime() - Date.now()) / 1000
  );
  return `${SESSION_COOKIE_NAME}=${session.id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}`;
}

/**
 * 生成删除会话的 Cookie
 */
export function deleteSessionCookie(): string {
  return `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}

export { SESSION_COOKIE_NAME };
