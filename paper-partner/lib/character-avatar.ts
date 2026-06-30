/**
 * 角色头像配置
 *
 * 存储每个角色的头像图片路径，用于图生图时作为角色一致性参考
 * 支持本地路径和 Base64 格式
 */

import fs from "fs";
import path from "path";

export interface CharacterAvatar {
  /** 角色 ID */
  characterId: string;
  /** 头像文件路径（public 目录下的相对路径） */
  localPath: string;
  /** Base64 格式数据（懒加载缓存） */
  base64?: string;
  /** MIME 类型 */
  mimeType: string;
}

/**
 * 角色头像列表
 * 路径相对于 public 目录
 */
export const CHARACTER_AVATARS: CharacterAvatar[] = [
  {
    characterId: "shu-ting",
    localPath: "/avatars/舒婷.jpeg",
    mimeType: "image/jpeg",
  },
  // 其他角色头像配置（需要先生成头像）
  // {
  //   characterId: "lu-chen-001",
  //   localPath: "/avatars/晓晓.png",
  //   mimeType: "image/png",
  // },
];

/**
 * 头像缓存（懒加载）
 */
const avatarCache: Map<string, string> = new Map();

/**
 * 获取角色的头像 Base64 数据
 */
export function getCharacterAvatarBase64(characterId: string): string | null {
  // 先检查缓存
  if (avatarCache.has(characterId)) {
    return avatarCache.get(characterId)!;
  }

  // 查找角色头像配置
  const avatar = CHARACTER_AVATARS.find((a) => a.characterId === characterId);
  if (!avatar) {
    return null;
  }

  try {
    // 构建完整路径（相对于项目根目录的 public 文件夹）
    const publicDir = path.join(process.cwd(), "public");
    const fullPath = path.join(publicDir, avatar.localPath);

    // 读取文件并转换为 Base64
    const fileBuffer = fs.readFileSync(fullPath);
    const base64 = fileBuffer.toString("base64");
    const dataUrl = `data:${avatar.mimeType};base64,${base64}`;

    // 缓存
    avatarCache.set(characterId, dataUrl);

    return dataUrl;
  } catch (error) {
    console.error(`[Avatar] Failed to load avatar for ${characterId}:`, error);
    return null;
  }
}

/**
 * 检查角色是否有头像
 */
export function hasCharacterAvatar(characterId: string): boolean {
  const avatar = CHARACTER_AVATARS.find((a) => a.characterId === characterId);
  return avatar !== undefined;
}

/**
 * 获取所有已配置头像的角色 ID 列表
 */
export function getConfiguredAvatarCharacterIds(): string[] {
  return CHARACTER_AVATARS.map((a) => a.characterId);
}