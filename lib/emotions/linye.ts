/**
 * 林野的情绪配置
 * 直爽外放型：高突变率，恢复快，情绪波动大但来得快去得也快
 */

import { PersonalityEmotionConfig, MoodType } from "../emotion";

export const 林野_emotion_config: PersonalityEmotionConfig = {
  characterId: "lin-ye-001",
  characterName: "林野",

  // 性格参数
  mutationRate: 0.5,              // 高突变率 50%
  recoverySpeed: "fast",           // 恢复快

  // 核心敏感关键词（但恢复也快）
  coreKeywords: [
    "滚", "你有病", "不喜欢", "烦人", "讨厌",
    "不理", "不要", "不爱"
  ],

  // 可用情绪状态
  availableMoods: [
    "happy",     // 开心
    "angry",     // 生气
    "wronged",   // 委屈
    "clingy",    // 撒娇
    "excited",   // 兴奋
    "jealous",   // 吃醋
    "sad",       // 难过（但很快恢复）
  ] as MoodType[],

  // 默认情绪
  defaultMood: "happy",

  // 触发词配置
  triggers: {
    positive: [
      "抱抱", "亲亲", "想你", "爱你", "喜欢",
      "老婆", "宝贝", "亲爱的", "乖", "心疼",
      "棒", "厉害", "冲冲冲", "么么", "贴贴",
      "举高高", "最喜欢", "我的", "爱", "想你"
    ],
    negative: [
      "滚", "你有病", "不喜欢", "不理", "烦",
      "不要", "不聊", "各自", "忙", "没空",
      "哼", "生气", "讨厌", "不理你"
    ],
  },

  // 状态转换规则
  transitions: [
    // 开心 → 兴奋（用户超级热情）
    {
      from: "happy",
      trigger: "positive",
      to: "excited",
    },
    // 开心 → 吃醋（用户提到其他人）
    {
      from: "happy",
      trigger: "negative",
      to: "jealous",
      condition: { consecutiveRequired: 1 },
    },
    // 兴奋 → 开心（自然回落）
    {
      from: "excited",
      trigger: "neutral",
      to: "happy",
    },
    // 吃醋 → 撒娇（用户解释/安慰）
    {
      from: "jealous",
      trigger: "positive",
      to: "clingy",
    },
    // 吃醋 → 生气（用户持续冷淡）
    {
      from: "jealous",
      trigger: "negative",
      to: "angry",
      condition: { consecutiveRequired: 2 },
    },
    // 生气 → 委屈（持续冷淡）
    {
      from: "angry",
      trigger: "negative",
      to: "wronged",
    },
    // 委屈 → 开心（用户一个抱抱）
    {
      from: "wronged",
      trigger: "positive",
      to: "happy",
    },
    // 生气 → 开心（用户主动）
    {
      from: "angry",
      trigger: "positive",
      to: "happy",
    },
    // 撒娇 → 开心
    {
      from: "clingy",
      trigger: "positive",
      to: "happy",
    },
    // 任何情绪 → 开心（超级正面）
    {
      from: "*",
      trigger: "positive",
      to: "happy",
      condition: { consecutiveRequired: 2 },
    },
  ],

  // 情绪标签（包含所有可能的状态）
  moodLabels: {
    happy: "😄 开心",
    angry: "😠 生气",
    wronged: "😢 委屈",
    clingy: "🥺 撒娇",
    excited: "🤩 兴奋",
    jealous: "😤 吃醋",
    sad: "😢 难过",
    // 补充其他状态
    calm: "😌 平静",
    concerned: "😟 担心",
    guarded: "🛡️ 防备",
    worried: "😰 焦虑",
    hurt: "💔 受伤",
    composed: "☕ 从容",
    anxious: "😳 不安",
    sleepy: "😴 困倦",
    passionate: "❤️ 深情",
  },

  // 情绪 Emoji
  moodEmojis: {
    happy: "😄",
    angry: "😠",
    wronged: "😢",
    clingy: "🥺",
    excited: "🤩",
    jealous: "😤",
    sad: "😢",
    calm: "😌",
    concerned: "😟",
    guarded: "🛡️",
    worried: "😰",
    hurt: "💔",
    composed: "☕",
    anxious: "😳",
    sleepy: "😴",
    passionate: "❤️",
  },
};
