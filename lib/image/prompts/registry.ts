/**
 * 图像生成 Prompt 片段注册表
 *
 * 统一管理所有角色的 Prompt 片段
 * 每个角色包含：固定人设、表情库、服装库、场景库、光线库、相机角度
 */

import type { MoodType } from "@/types";

// ==================== 基础类型 ====================

/**
 * 表情片段
 */
export interface ExpressionSnippet {
  /** 情绪标签 */
  mood: MoodType | string;
  /** 中文说明 */
  description: string;
  /** 英文 Prompt */
  prompt: string;
  /** 英文说明 */
  englishDescription: string;
}

/**
 * 服装片段
 */
export interface ClothingSnippet {
  /** 服装标签 */
  tag: string;
  /** 中文名 */
  name: string;
  /** 英文 Prompt */
  prompt: string;
}

/**
 * 场景片段
 */
export interface SceneSnippet {
  /** 场景标签 */
  tag: string;
  /** 中文说明 */
  name: string;
  /** 英文 Prompt */
  prompt: string;
}

/**
 * 光线片段
 */
export interface LightingSnippet {
  /** 光线标签 */
  tag: string;
  /** 中文说明 */
  name: string;
  /** 英文 Prompt */
  prompt: string;
}

/**
 * 相机角度片段
 */
export interface CameraSnippet {
  /** 角度标签 */
  tag: string;
  /** 中文说明 */
  name: string;
  /** 英文 Prompt */
  prompt: string;
}

/**
 * 角色 Prompt 库
 */
export interface CharacterPromptLibrary {
  /** 角色 ID */
  id: string;
  /** 角色名 */
  name: string;
  /** 角色定位 */
  description: string;
  /** 固定人设（所有图片必须保留） */
  baseDescription: string;
  /** 表情库 */
  expressions: ExpressionSnippet[];
  /** 服装库 */
  clothing: ClothingSnippet[];
  /** 场景库 */
  scenes: SceneSnippet[];
  /** 光线库 */
  lighting: LightingSnippet[];
  /** 相机角度库 */
  cameras: CameraSnippet[];
  /** 默认服装 */
  defaultClothing: string;
  /** 默认场景 */
  defaultScene: string;
  /** 默认光线 */
  defaultLighting: string;
  /** 默认相机 */
  defaultCamera: string;
}

// ==================== 注册表 ====================

/**
 * 角色 Prompt 库注册表
 */
export const characterPromptRegistry: Record<string, CharacterPromptLibrary> = {};

/**
 * 注册角色 Prompt 库
 */
export function registerCharacterPrompts(library: CharacterPromptLibrary): void {
  characterPromptRegistry[library.id] = library;
}

/**
 * 获取角色 Prompt 库
 */
export function getCharacterPrompts(characterId: string): CharacterPromptLibrary | undefined {
  return characterPromptRegistry[characterId];
}

/**
 * 获取所有已注册的角色 ID
 */
export function getRegisteredCharacterIds(): string[] {
  return Object.keys(characterPromptRegistry);
}

// ==================== 默认片段映射 ====================

/**
 * 通用情绪到角色情绪的映射
 * 用于在没有精确匹配时查找相似的情绪
 */
export const moodMapping: Record<string, string[]> = {
  // 开心类
  happy: ["happy", "excited", "passionate"],
  excited: ["excited", "happy"],
  passionate: ["passionate", "happy"],

  // 平静类
  calm: ["calm", "sleepy"],
  sleepy: ["sleepy", "calm"],

  // 消极类
  sad: ["sad", "worried"],
  worried: ["worried", "sad"],
  anxious: ["worried", "sad"],

  // 防御类
  guarded: ["calm", "worried"],
  hurt: ["sad", "worried"],

  // 撒娇类
  clingy: ["clingy", "passionate"],
  jealous: ["jealous", "angry"],
  angry: ["angry", "jealous"],
  wronged: ["sad", "angry"],

  // 其他
  composed: ["calm", "happy"],
  concerned: ["worried", "calm"],
};

/**
 * 通用场景标签到英文关键词的映射
 */
export const sceneKeywords: Record<string, string[]> = {
  // 户外
  mountain: ["mountain", "peak", "hiking", "outdoor"],
  beach: ["beach", "seaside", "ocean", "coastal"],
  forest: ["forest", "woods", "nature", "green"],
  park: ["park", "garden", "nature", "green"],

  // 室内
  home: ["home", "living room", "cozy", "apartment"],
  bedroom: ["bedroom", "cozy", "soft lighting"],
  cafe: ["cafe", "coffee shop", "cozy", "interior"],
  office: ["office", "workspace", "professional"],

  // 特殊场景
  night: ["night", "evening", "city lights", "stars"],
  sunset: ["sunset", "golden hour", "warm light", "dusk"],
  sunrise: ["sunrise", "morning light", "dawn", "golden hour"],
  rain: ["rain", "rainy", "window", "cozy"],

  // 日常
  daily: ["daily life", "casual", "relaxed"],
  travel: ["travel", "adventure", "exploring"],
  workout: ["gym", "workout", "fitness", "athletic"],
};

/**
 * 获取情绪对应的表情标签
 */
export function getExpressionTags(mood: string, availableExpressions: ExpressionSnippet[]): string[] {
  // 优先精确匹配
  const exactMatch = availableExpressions.find(e => e.mood === mood);
  if (exactMatch) {
    return [exactMatch.prompt];
  }

  // 其次模糊匹配
  const similarMoods = moodMapping[mood] || [];
  for (const similarMood of similarMoods) {
    const match = availableExpressions.find(e => e.mood === similarMood);
    if (match) {
      return [match.prompt];
    }
  }

  // 返回默认表情
  const defaultExpr = availableExpressions.find(e => e.mood === "calm");
  return defaultExpr ? [defaultExpr.prompt] : [];
}
