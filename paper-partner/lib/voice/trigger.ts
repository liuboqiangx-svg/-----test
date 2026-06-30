/**
 * 语音触发器 - 决定是否触发语音播放
 *
 * 触发条件：
 * 1. 用户触发关键词：想听、语音、发语音、声音、说话、读给我听、念念、speak/voice/audio
 * 2. 情绪自动触发：happy、excited、clingy、passionate
 */

// 用户触发关键词
const USER_TRIGGER_KEYWORDS = [
  // 中文
  "想听", "语音", "发语音", "声音", "说话", "读给我听", "念念",
  "播放", "朗读", "说一遍", "再说一遍", "说下", "讲讲",
  // 英文
  "speak", "voice", "audio", "read", "play voice", "say it",
];

// 情绪触发列表
const MOOD_TRIGGERS: string[] = ["happy", "excited", "clingy", "passionate", "adoring"];

/**
 * 检测用户消息是否触发语音
 */
export function shouldTriggerVoiceFromUser(message: string): boolean {
  const lower = message.toLowerCase();
  return USER_TRIGGER_KEYWORDS.some(keyword => lower.includes(keyword.toLowerCase()));
}

/**
 * 检测角色情绪是否触发语音
 */
export function shouldTriggerVoiceFromMood(mood: string): boolean {
  return MOOD_TRIGGERS.includes(mood.toLowerCase());
}

/**
 * 综合判断是否触发语音
 * 用户消息触发 > 情绪触发
 */
export function shouldSpeak(
  userMessage: string,
  characterMood: string,
  options?: {
    forceVoice?: boolean;  // 强制语音（API 可设置）
    disableMoodTrigger?: boolean; // 禁用情绪触发（配置项）
  }
): boolean {
  // 如果强制语音，直接返回 true
  if (options?.forceVoice) return true;

  // 用户消息触发优先
  if (shouldTriggerVoiceFromUser(userMessage)) return true;

  // 情绪触发（可配置禁用）
  if (!options?.disableMoodTrigger && shouldTriggerVoiceFromMood(characterMood)) return true;

  return false;
}