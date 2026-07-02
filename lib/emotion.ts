/**
 * 情绪系统核心模块
 * 支持：触发词检测、情绪状态机、突变规则、循环机制
 */

// ==================== 类型定义 ====================

export type MoodType =
  | "calm"        // 平静/从容
  | "concerned"   // 担心
  | "sad"         // 难过/悲伤
  | "guarded"     // 防备/警惕
  | "happy"       // 开心
  | "clingy"      // 撒娇/粘人
  | "jealous"     // 吃醋/不满
  | "worried"     // 焦虑
  | "hurt"        // 受伤
  | "composed"    // 淡定/从容（女版）
  | "anxious"     // 不安
  | "excited"     // 兴奋（男版）
  | "passionate"  // 深情
  | "sleepy"      // 困倦
  | "angry"       // 生气（林野）
  | "wronged";    // 委屈

export interface MoodChange {
  from: MoodType;
  to: MoodType;
  trigger: string;
  timestamp: number;
  intensity: number;
}

export interface EmotionState {
  current: MoodType;
  intensity: number;       // 0-100
  triggeredBy: string | null;
  startedAt: number;
  history: MoodChange[];
  consecutivePositive: number;  // 连续正面次数
  consecutiveNegative: number;   // 连续负面次数
  lastMoodChangeAt: number;
}

export interface TriggerConfig {
  positive: string[];
  negative: string[];
}

export interface PersonalityEmotionConfig {
  characterId: string;
  characterName: string;

  // 性格参数
  mutationRate: number;           // 基础突变率 0-1
  recoverySpeed: "fast" | "medium" | "slow";  // 恢复速度

  // 核心敏感关键词（高权重）
  coreKeywords: string[];

  // 情绪状态列表
  availableMoods: MoodType[];

  // 默认情绪
  defaultMood: MoodType;

  // 触发词配置
  triggers: {
    positive: string[];   // 正面触发词
    negative: string[];  // 负面触发词
  };

  // 状态转换规则
  transitions: MoodTransition[];

  // 情绪到标签的映射
  moodLabels: Record<MoodType, string>;

  // 情绪到 emoji 的映射
  moodEmojis: Record<MoodType, string>;
}

export interface MoodTransition {
  from: MoodType | "*";       // * 表示任意
  trigger: "positive" | "negative" | "neutral";
  to: MoodType;
  condition?: {
    consecutiveRequired?: number;  // 需要连续触发次数
    intensityAbove?: number;        // 情绪强度阈值
  };
  nextState?: MoodType;       // 如果条件不满足，转移到这个状态
}

// ==================== 情绪系统核心类 ====================

export class EmotionEngine {
  private config: PersonalityEmotionConfig;
  private state: EmotionState;

  constructor(config: PersonalityEmotionConfig, initialState?: Partial<EmotionState>) {
    this.config = config;
    this.state = {
      current: config.defaultMood,
      intensity: 50,
      triggeredBy: null,
      startedAt: Date.now(),
      history: [],
      consecutivePositive: 0,
      consecutiveNegative: 0,
      lastMoodChangeAt: Date.now(),
      ...initialState,
    };
  }

  /**
   * 检测消息中的触发词
   */
  detectTrigger(message: string): {
    type: "positive" | "negative" | "neutral";
    word: string | null;
    intensity: number;
  } {
    const lowerMessage = message.toLowerCase();

    // 检测正面触发词
    for (const word of this.config.triggers.positive) {
      if (lowerMessage.includes(word.toLowerCase())) {
        return {
          type: "positive",
          word,
          intensity: this.calculateIntensity(word, "positive"),
        };
      }
    }

    // 检测负面触发词
    for (const word of this.config.triggers.negative) {
      if (lowerMessage.includes(word.toLowerCase())) {
        return {
          type: "negative",
          word,
          intensity: this.calculateIntensity(word, "negative"),
        };
      }
    }

    return { type: "neutral", word: null, intensity: 0 };
  }

  /**
   * 计算触发词强度
   */
  private calculateIntensity(word: string, type: "positive" | "negative"): number {
    // 核心关键词权重更高
    if (this.config.coreKeywords.some(k => word.toLowerCase().includes(k.toLowerCase()))) {
      return 80;
    }
    // 普通触发词
    return type === "positive" ? 60 : 70;
  }

  /**
   * 处理情绪变化
   */
  processMessage(message: string): {
    newState: EmotionState;
    changed: boolean;
    trigger: string | null;
    triggerType: "positive" | "negative" | "neutral";
  } {
    const trigger = this.detectTrigger(message);

    if (trigger.type === "neutral") {
      // 中性消息，可能逐渐恢复
      this.handleRecovery();
      return {
        newState: { ...this.state },
        changed: false,
        trigger: null,
        triggerType: "neutral",
      };
    }

    // 计算是否触发突变
    const shouldChange = this.shouldTriggerChange(trigger);

    if (!shouldChange) {
      // 更新连续计数，但不改变情绪
      this.updateConsecutiveCount(trigger.type);
      return {
        newState: { ...this.state },
        changed: false,
        trigger: trigger.word,
        triggerType: trigger.type,
      };
    }

    // 计算新情绪
    const newMood = this.calculateNextMood(trigger.type, trigger.intensity);
    const oldMood = this.state.current;

    // 更新状态
    if (newMood !== oldMood) {
      this.state.history.push({
        from: oldMood,
        to: newMood,
        trigger: trigger.word || "unknown",
        timestamp: Date.now(),
        intensity: trigger.intensity,
      });

      this.state.current = newMood;
      this.state.intensity = Math.min(100, trigger.intensity);
      this.state.triggeredBy = trigger.word;
      this.state.startedAt = Date.now();
      this.state.lastMoodChangeAt = Date.now();
    }

    this.updateConsecutiveCount(trigger.type);

    return {
      newState: { ...this.state },
      changed: newMood !== oldMood,
      trigger: trigger.word,
      triggerType: trigger.type,
    };
  }

  /**
   * 判断是否触发情绪变化
   */
  private shouldTriggerChange(trigger: ReturnType<typeof this.detectTrigger>): boolean {
    const baseRate = this.config.mutationRate;

    // 核心关键词触发率更高
    const keywordBonus = this.config.coreKeywords.some(
      k => trigger.word?.toLowerCase().includes(k.toLowerCase())
    ) ? 0.4 : 0;

    // 连续触发增加概率
    const consecutiveBonus = (() => {
      if (trigger.type === "positive") {
        return Math.min(0.3, this.state.consecutivePositive * 0.1);
      } else {
        return Math.min(0.3, this.state.consecutiveNegative * 0.1);
      }
    })();

    // 计算最终概率
    const probability = Math.min(0.95, baseRate + keywordBonus + consecutiveBonus);

    // 心理保护机制：防御性角色对负面触发更敏感
    if (trigger.type === "negative" && this.config.recoverySpeed === "slow") {
      // 沉稳型角色对负面更敏感，恢复慢
      return Math.random() < probability * 1.2;
    }

    return Math.random() < probability;
  }

  /**
   * 计算下一个情绪状态
   */
  private calculateNextMood(
    triggerType: "positive" | "negative",
    intensity: number
  ): MoodType {
    // 查找匹配的转换规则
    const matchingTransition = this.config.transitions.find(t => {
      if (t.from !== "*" && t.from !== this.state.current) {
        return false;
      }
      if (t.trigger !== triggerType) {
        return false;
      }
      if (t.condition?.consecutiveRequired) {
        const currentConsecutive = triggerType === "positive"
          ? this.state.consecutivePositive
          : this.state.consecutiveNegative;
        if (currentConsecutive < t.condition.consecutiveRequired) {
          return false;
        }
      }
      if (t.condition?.intensityAbove) {
        if (this.state.intensity < t.condition.intensityAbove) {
          return false;
        }
      }
      return true;
    });

    if (matchingTransition) {
      return matchingTransition.to;
    }

    // 默认转换逻辑
    if (triggerType === "positive") {
      return this.getDefaultPositiveMood();
    } else {
      return this.getDefaultNegativeMood();
    }
  }

  /**
   * 获取默认正面情绪
   */
  private getDefaultPositiveMood(): MoodType {
    // 根据角色特性返回不同的正面情绪
    if (this.config.availableMoods.includes("happy")) return "happy";
    if (this.config.availableMoods.includes("excited")) return "excited";
    if (this.config.availableMoods.includes("calm")) return "calm";
    return this.config.defaultMood;
  }

  /**
   * 获取默认负面情绪
   */
  private getDefaultNegativeMood(): MoodType {
    // 根据角色特性返回不同的负面情绪
    if (this.config.availableMoods.includes("sad")) return "sad";
    if (this.config.availableMoods.includes("worried")) return "worried";
    if (this.config.availableMoods.includes("hurt")) return "hurt";
    if (this.config.availableMoods.includes("jealous")) return "jealous";
    return "sad";
  }

  /**
   * 处理恢复机制
   */
  private handleRecovery(): void {
    const timeSinceChange = Date.now() - this.state.lastMoodChangeAt;

    // 根据恢复速度决定恢复阈值
    const recoveryThreshold = (() => {
      switch (this.config.recoverySpeed) {
        case "fast": return 30000;      // 30秒
        case "medium": return 120000;    // 2分钟
        case "slow": return 300000;      // 5分钟
      }
    })();

    // 超过恢复阈值，情绪强度降低
    if (timeSinceChange > recoveryThreshold && this.state.intensity > 30) {
      this.state.intensity = Math.max(30, this.state.intensity - 10);
    }

    // 重置连续计数
    this.state.consecutivePositive = 0;
    this.state.consecutiveNegative = 0;
  }

  /**
   * 更新连续计数
   */
  private updateConsecutiveCount(type: "positive" | "negative"): void {
    if (type === "positive") {
      this.state.consecutivePositive++;
      this.state.consecutiveNegative = 0;
    } else {
      this.state.consecutiveNegative++;
      this.state.consecutivePositive = 0;
    }
  }

  /**
   * 获取当前状态
   */
  getState(): EmotionState {
    return { ...this.state };
  }

  /**
   * 获取情绪标签
   */
  getMoodLabel(): string {
    return this.config.moodLabels[this.state.current] || this.state.current;
  }

  /**
   * 获取情绪 Emoji
   */
  getMoodEmoji(): string {
    return this.config.moodEmojis[this.state.current] || "😐";
  }

  /**
   * 获取配置
   */
  getConfig(): PersonalityEmotionConfig {
    return this.config;
  }

  /**
   * 重置状态
   */
  reset(): void {
    this.state = {
      current: this.config.defaultMood,
      intensity: 50,
      triggeredBy: null,
      startedAt: Date.now(),
      history: [],
      consecutivePositive: 0,
      consecutiveNegative: 0,
      lastMoodChangeAt: Date.now(),
    };
  }
}

// ==================== 工具函数 ====================

/**
 * 创建情绪引擎实例
 */
export function createEmotionEngine(
  config: PersonalityEmotionConfig,
  initialState?: Partial<EmotionState>
): EmotionEngine {
  return new EmotionEngine(config, initialState);
}

/**
 * 检测消息中的触发词（纯函数版本）
 */
export function detectTriggerWords(
  message: string,
  triggers: TriggerConfig
): { type: "positive" | "negative" | "neutral"; words: string[] } {
  const lowerMessage = message.toLowerCase();
  const positiveWords: string[] = [];
  const negativeWords: string[] = [];

  for (const word of triggers.positive) {
    if (lowerMessage.includes(word.toLowerCase())) {
      positiveWords.push(word);
    }
  }

  for (const word of triggers.negative) {
    if (lowerMessage.includes(word.toLowerCase())) {
      negativeWords.push(word);
    }
  }

  if (positiveWords.length > 0) {
    return { type: "positive", words: positiveWords };
  }
  if (negativeWords.length > 0) {
    return { type: "negative", words: negativeWords };
  }
  return { type: "neutral", words: [] };
}

/**
 * 生成情绪状态描述（用于注入到 Prompt）
 */
export function buildEmotionPrompt(
  currentMood: MoodType,
  intensity: number,
  moodLabels: Record<MoodType, string>,
  recentHistory?: MoodChange[]
): string {
  const label = moodLabels[currentMood] || currentMood;

  let emotionContext = `\n\n【当前情绪状态】`;
  emotionContext += `\n- 当前情绪：${label}`;
  emotionContext += `\n- 情绪强度：${intensity}/100`;

  if (recentHistory && recentHistory.length > 0) {
    const lastChange = recentHistory[recentHistory.length - 1];
    const timeSinceLastChange = Math.round((Date.now() - lastChange.timestamp) / 60000);
    emotionContext += `\n- 上次情绪变化：${timeSinceLastChange}分钟前因"${lastChange.trigger}"从${lastChange.from}变为${lastChange.to}`;
  }

  return emotionContext;
}
