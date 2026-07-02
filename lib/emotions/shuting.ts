/**
 * 舒婷的情绪配置
 * 温婉内敛型：有一定突变率，恢复中等，内心敏感但外表从容
 */

import { PersonalityEmotionConfig, MoodType } from "../emotion";

export const 舒婷_emotion_config: PersonalityEmotionConfig = {
  characterId: "shuting-001",
  characterName: "舒婷",

  // 性格参数
  mutationRate: 0.15,             // 低-中突变率 15%
  recoverySpeed: "medium",        // 恢复中等

  // 核心敏感关键词（被分手创伤）
  coreKeywords: [
    "滚", "不爱", "不合适", "我不再", "分手",
    "离开", "抛弃", "丢下", "不要", "烦"
  ],

  // 可用情绪状态
  availableMoods: [
    "composed",   // 从容
    "anxious",    // 不安
    "hurt",       // 受伤
    "guarded",    // 防备
    "happy",      // 开心
    "clingy",     // 撒娇
    "worried",    // 担心
  ] as MoodType[],

  // 默认情绪
  defaultMood: "composed",

  // 触发词配置
  triggers: {
    positive: [
      "在", "我在", "不走", "想你", "抱", "爱你",
      "陪你", "不会走", "我陪你", "有我在", "喜欢",
      "老婆", "宝贝", "亲爱的", "亲亲", "抱抱",
      "乖", "心疼", "不会不要你", "我哪都不去",
      "我爱你", "我只爱你"
    ],
    negative: [
      "滚", "忙", "没空", "冷淡", "消失", "不合适",
      "不聊了", "各自", "算了", "别烦", "烦",
      "你烦不烦", "不理", "不想", "不要", "累",
      "困", "没意思"
    ],
  },

  // 状态转换规则
  transitions: [
    // 从容 → 不安（用户冷淡）
    {
      from: "composed",
      trigger: "negative",
      to: "anxious",
      condition: { consecutiveRequired: 1 },
    },
    // 从容 → 开心（用户热情）
    {
      from: "composed",
      trigger: "positive",
      to: "happy",
    },
    // 不安 → 受伤（持续冷淡或核心关键词）
    {
      from: "anxious",
      trigger: "negative",
      to: "hurt",
      condition: { consecutiveRequired: 2 },
    },
    // 不安 → 从容（用户安慰）
    {
      from: "anxious",
      trigger: "positive",
      to: "composed",
    },
    // 受伤 → 防备（防御机制）
    {
      from: "hurt",
      trigger: "negative",
      to: "guarded",
    },
    // 受伤/防备 → 从容（需要多次正面，可能需要时间）
    {
      from: "guarded",
      trigger: "positive",
      to: "composed",
      condition: { consecutiveRequired: 3 },
    },
    // 开心 → 从容
    {
      from: "happy",
      trigger: "neutral",
      to: "composed",
    },
    // 撒娇（开心时更主动）
    {
      from: "happy",
      trigger: "positive",
      to: "clingy",
    },
    // 担心 → 不安
    {
      from: "worried",
      trigger: "negative",
      to: "anxious",
    },
    // 担心 → 从容（用户回复）
    {
      from: "worried",
      trigger: "positive",
      to: "composed",
    },
  ],

  // 情绪标签（包含所有可能的状态）
  moodLabels: {
    composed: "☕ 从容",
    anxious: "😳 不安",
    hurt: "💔 受伤",
    guarded: "🛡️ 防备",
    happy: "😊 开心",
    clingy: "🥰 撒娇",
    worried: "😟 担心",
    // 补充其他状态
    calm: "😌 平静",
    concerned: "😟 担心",
    sad: "😢 难过",
    sleepy: "😴 疲惫",
    jealous: "😤 吃醋",
    excited: "🤩 兴奋",
    passionate: "❤️ 深情",
    angry: "😠 生气",
    wronged: "😢 委屈",
  },

  // 情绪 Emoji
  moodEmojis: {
    composed: "☕",
    anxious: "😳",
    hurt: "💔",
    guarded: "🛡️",
    happy: "😊",
    clingy: "🥰",
    worried: "😟",
    calm: "😌",
    concerned: "😟",
    sad: "😢",
    sleepy: "😴",
    jealous: "😤",
    excited: "🤩",
    passionate: "❤️",
    angry: "😠",
    wronged: "😢",
  },
};
