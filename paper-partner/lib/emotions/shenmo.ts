/**
 * 沈墨的情绪配置
 * 沉稳内敛型：突变率低，恢复慢，情绪变化少但持久
 */

import { PersonalityEmotionConfig, MoodType } from "../emotion";

export const 沈墨_emotion_config: PersonalityEmotionConfig = {
  characterId: "shen-mo-001",
  characterName: "沈墨",

  // 性格参数
  mutationRate: 0.08,              // 极低突变率 8%
  recoverySpeed: "slow",           // 恢复极慢

  // 核心敏感关键词（触发后很难恢复）
  coreKeywords: [
    "不合适", "消失", "滚", "不告而别", "分手",
    "我不爱你", "我没空", "各自", "算了", "没什么"
  ],

  // 可用情绪状态
  availableMoods: [
    "calm",      // 平静
    "concerned", // 担心
    "sad",       // 难过
    "guarded",   // 防备
    "happy",     // 开心
    "sleepy",    // 疲惫
  ] as MoodType[],

  // 默认情绪
  defaultMood: "calm",

  // 触发词配置
  triggers: {
    positive: [
      "在", "我在", "不走", "想你", "抱", "爱你",
      "陪你", "不会走", "我陪你", "有我在", "喜欢",
      "想你", "抱抱", "么么", "亲亲", "亲爱的",
      "老婆", "傻瓜", "笨蛋", "乖", "心疼"
    ],
    negative: [
      "滚", "忙", "没空", "冷", "消失", "不合适",
      "不聊了", "睡了", "各自", "没什么", "算了",
      "别烦", "烦", "累", "困", "没意思", "无聊"
    ],
  },

  // 状态转换规则
  transitions: [
    // 平静 → 担心（用户冷淡）
    {
      from: "calm",
      trigger: "negative",
      to: "concerned",
      condition: { consecutiveRequired: 1 },
    },
    // 平静 → 开心（用户热情）
    {
      from: "calm",
      trigger: "positive",
      to: "happy",
      condition: { consecutiveRequired: 1 },
    },
    // 担心 → 难过（持续冷淡）
    {
      from: "concerned",
      trigger: "negative",
      to: "sad",
      condition: { consecutiveRequired: 2 },
    },
    // 担心 → 平静（用户安慰）
    {
      from: "concerned",
      trigger: "positive",
      to: "calm",
    },
    // 难过 → 防备（核心关键词）
    {
      from: "sad",
      trigger: "negative",
      to: "guarded",
      condition: { intensityAbove: 60 },
    },
    // 防备 → 平静（需要多次正面）
    {
      from: "guarded",
      trigger: "positive",
      to: "calm",
      condition: { consecutiveRequired: 3 },
      nextState: "calm",
    },
    // 开心 → 平静（自然回落）
    {
      from: "happy",
      trigger: "neutral",
      to: "calm",
    },
    // 平静/难过/担心 → 平静（长时间无刺激）
    {
      from: "*",
      trigger: "positive",
      to: "calm",
      condition: { consecutiveRequired: 4 },
    },
  ],

  // 情绪标签（包含所有可能的状态）
  moodLabels: {
    calm: "😌 平静",
    concerned: "😟 担心",
    sad: "😢 难过",
    guarded: "🛡️ 防备",
    happy: "😊 开心",
    sleepy: "😴 疲惫",
    // 补充其他状态
    clingy: "🥰 撒娇",
    jealous: "😤 吃醋",
    worried: "😰 焦虑",
    hurt: "💔 受伤",
    composed: "☕ 从容",
    anxious: "😳 不安",
    excited: "🤩 兴奋",
    passionate: "❤️ 深情",
    angry: "😠 生气",
    wronged: "😢 委屈",
  },

  // 情绪 Emoji
  moodEmojis: {
    calm: "😌",
    concerned: "😟",
    sad: "😢",
    guarded: "🛡️",
    happy: "😊",
    sleepy: "😴",
    clingy: "🥰",
    jealous: "😤",
    worried: "😰",
    hurt: "💔",
    composed: "☕",
    anxious: "😳",
    excited: "🤩",
    passionate: "❤️",
    angry: "😠",
    wronged: "😢",
  },
};
