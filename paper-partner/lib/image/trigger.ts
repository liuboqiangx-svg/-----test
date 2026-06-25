/**
 * 图像生成触发器
 *
 * 检测用户消息是否触发图像生成
 */

import type { MoodType } from "@/types";

/**
 * 触发关键词列表
 */
export const IMAGE_TRIGGER_KEYWORDS = [
  // 中文
  "发图片",
  "发照片",
  "发张图片",
  "发张照片",
  "发个图",
  "发个照片",
  "想看",
  "想看看",
  "想看照片",
  "想看图片",
  "看看你",
  "看看照片",
  "看看图片",
  "你的照片",
  "你的图片",
  "给我看",
  "给我看看",
  "给我发",
  "长什么样",
  "长啥样",
  "发个自拍",
  "自拍看看",
  "你的样子",
  "看看你",
  "想看你的",
  "发一下",
  "拍一张",
  "给张照片",
  "给张图片",

  // 英文（备用）
  "send photo",
  "send pic",
  "send me a pic",
  "send image",
  "want to see",
  "show me",
  "show me a photo",
  "your photo",
  "your picture",
];

/**
 * 触发检测结果
 */
export interface TriggerResult {
  /** 是否触发 */
  triggered: boolean;
  /** 触发原因 */
  reason?: "keyword" | "emotion_change" | "proactive";
  /** 触发的关键词 */
  keyword?: string;
  /** 建议的场景 */
  suggestedScene?: string;
}

/**
 * 场景关键词映射
 */
const SCENE_KEYWORDS: Record<string, string[]> = {
  beach: ["海边", "沙滩", "游泳", "海", "沙滩"],
  mountain: ["爬山", "登山", "山顶", "户外", "徒步"],
  cafe: ["咖啡", "喝咖啡", "咖啡厅", "奶茶", "下午茶"],
  home: ["家里", "在家", "回家", "睡觉", "睡前", "刚醒"],
  sunset: ["日落", "黄昏", "傍晚", "夕阳"],
  office: ["上班", "工作", "办公室", "加班"],
  bedroom: ["睡觉", "睡前", "刚醒", "在床上", "卧室"],
  street: ["逛街", "出门", "街头", "城市"],
  gym: ["健身", "运动", "跑步", "锻炼"],
  pool: ["游泳", "泳池", "海边", "沙滩"],
};

/**
 * 情绪到场景的映射
 */
const EMOTION_TO_SCENE: Partial<Record<MoodType, string>> = {
  happy: "cafe",
  excited: "outdoor",
  calm: "cafe",
  sleepy: "bedroom",
  clingy: "home",
  passionate: "sunset",
  jealous: "street",
  worried: "home",
  sad: "home",
};

/**
 * 检测消息是否触发图像生成
 */
export function detectImageTrigger(
  message: string,
  currentEmotion?: MoodType,
  previousEmotion?: MoodType
): TriggerResult {
  const lowerMessage = message.toLowerCase();

  // 1. 关键词检测
  for (const keyword of IMAGE_TRIGGER_KEYWORDS) {
    if (lowerMessage.includes(keyword.toLowerCase())) {
      // 尝试推断场景
      const suggestedScene = inferSceneFromMessage(message);

      return {
        triggered: true,
        reason: "keyword",
        keyword,
        suggestedScene,
      };
    }
  }

  // 2. 情绪显著变化检测（可选）
  if (currentEmotion && previousEmotion && currentEmotion !== previousEmotion) {
    // 情绪剧烈变化（强度超过阈值）可以考虑触发
    // 这里暂时不启用，因为可能导致频繁触发
    // const emotionChanged = Math.abs(emotionIntensity - previousIntensity) > 30;
    // if (emotionChanged) {
    //   return { triggered: true, reason: "emotion_change" };
    // }
  }

  return { triggered: false };
}

/**
 * 从消息中推断场景
 */
export function inferSceneFromMessage(message: string): string | undefined {
  const lowerMessage = message.toLowerCase();

  for (const [scene, keywords] of Object.entries(SCENE_KEYWORDS)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return scene;
      }
    }
  }

  return undefined;
}

/**
 * 从情绪推断场景
 */
export function inferSceneFromEmotion(emotion: MoodType): string | undefined {
  return EMOTION_TO_SCENE[emotion];
}

/**
 * 随机选择场景
 */
export function getRandomScene(): string {
  const scenes = [
    "beach",
    "mountain",
    "cafe",
    "street",
    "sunset",
    "home",
  ];
  return scenes[Math.floor(Math.random() * scenes.length)];
}

/**
 * 检查冷却时间
 * 防止短时间内重复触发
 */
export class ImageTriggerCooldown {
  private lastTriggerTime: number = 0;
  private cooldownMs: number;

  constructor(cooldownSeconds: number = 60) {
    this.cooldownMs = cooldownSeconds * 1000;
  }

  /**
   * 检查是否可以触发
   */
  canTrigger(): boolean {
    const now = Date.now();
    return now - this.lastTriggerTime >= this.cooldownMs;
  }

  /**
   * 记录触发时间
   */
  recordTrigger(): void {
    this.lastTriggerTime = Date.now();
  }

  /**
   * 获取剩余冷却时间（秒）
   */
  getRemainingCooldown(): number {
    const elapsed = Date.now() - this.lastTriggerTime;
    const remaining = this.cooldownMs - elapsed;
    return Math.max(0, Math.ceil(remaining / 1000));
  }

  /**
   * 重置冷却
   */
  reset(): void {
    this.lastTriggerTime = 0;
  }
}
