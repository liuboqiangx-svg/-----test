/**
 * 顾燃的情绪配置
 * 阳光热烈型：极高突变率，恢复快，情绪丰富且外放
 */

import { PersonalityEmotionConfig, MoodType } from "../emotion";

export const 顾燃_emotion_config: PersonalityEmotionConfig = {
  characterId: "gu-ran-001",
  characterName: "顾燃",

  // 性格参数
  mutationRate: 0.6,              // 极高突变率 60%
  recoverySpeed: "fast",          // 恢复快

  // 核心敏感关键词（但马上就会被正面冲淡）
  coreKeywords: [
    "滚", "不爱", "不喜欢", "烦", "你有病",
    "不管", "算了"
  ],

  // 可用情绪状态
  availableMoods: [
    "excited",     // 兴奋
    "jealous",     // 吃醋
    "sad",         // 委屈
    "clingy",      // 撒娇
    "passionate",  // 深情
    "happy",       // 开心
    "angry",       // 生气（但很快恢复）
  ] as MoodType[],

  // 默认情绪
  defaultMood: "excited",

  // 触发词配置
  triggers: {
    positive: [
      "老婆", "爱你", "想你", "抱抱", "亲亲",
      "我的", "最喜欢", "乖", "棒", "厉害",
      "冲冲冲", "一起", "陪", "爱", "想你",
      "不滚", "不走", "在", "我也在", "老公"
    ],
    negative: [
      "滚", "你有病", "不理", "烦", "不爱",
      "不喜欢", "没空", "各自", "不管", "算了",
      "不聊", "困", "累", "不想"
    ],
  },

  // 状态转换规则
  transitions: [
    // 兴奋 → 吃醋（用户冷淡或提到其他人）
    {
      from: "excited",
      trigger: "negative",
      to: "jealous",
    },
    // 兴奋 → 更兴奋（用户超级热情）
    {
      from: "excited",
      trigger: "positive",
      to: "excited",
    },
    // 吃醋 → 撒娇（用户安慰）
    {
      from: "jealous",
      trigger: "positive",
      to: "clingy",
    },
    // 吃醋 → 委屈（持续冷淡）
    {
      from: "jealous",
      trigger: "negative",
      to: "sad",
    },
    // 委屈 → 撒娇（用户主动）
    {
      from: "sad",
      trigger: "positive",
      to: "clingy",
    },
    // 撒娇 → 深情（用户回应）
    {
      from: "clingy",
      trigger: "positive",
      to: "passionate",
    },
    // 深情 → 开心（用户回应）
    {
      from: "passionate",
      trigger: "positive",
      to: "excited",
    },
    // 委屈/撒娇 → 开心（用户一个抱抱）
    {
      from: "sad",
      trigger: "positive",
      to: "happy",
    },
    // 任何负面 → 开心（超级正面，2次）
    {
      from: "*",
      trigger: "positive",
      to: "happy",
      condition: { consecutiveRequired: 2 },
    },
    // 生气 → 开心（用户主动就OK）
    {
      from: "angry",
      trigger: "positive",
      to: "happy",
    },
    // 开心 → 兴奋
    {
      from: "happy",
      trigger: "positive",
      to: "excited",
    },
  ],

  // 情绪标签（包含所有可能的状态）
  moodLabels: {
    excited: "🤩 兴奋",
    jealous: "😤 吃醋",
    sad: "😢 委屈",
    clingy: "🥺 撒娇",
    passionate: "❤️ 深情",
    happy: "😄 开心",
    angry: "😠 生气",
    // 补充其他状态（林野可能涉及）
    calm: "😌 平静",
    concerned: "😟 担心",
    guarded: "🛡️ 防备",
    worried: "😰 焦虑",
    hurt: "💔 受伤",
    composed: "☕ 从容",
    anxious: "😳 不安",
    sleepy: "😴 困倦",
    wronged: "😢 委屈",
  },

  // 情绪 Emoji
  moodEmojis: {
    excited: "🤩",
    jealous: "😤",
    sad: "😢",
    clingy: "🥺",
    passionate: "❤️",
    happy: "😄",
    angry: "😠",
    calm: "😌",
    concerned: "😟",
    guarded: "🛡️",
    worried: "😰",
    hurt: "💔",
    composed: "☕",
    anxious: "😳",
    sleepy: "😴",
    wronged: "😢",
  },
};
