/**
 * 语音合成 - 日志工具
 * 统一的日志记录，支持可观测性
 */

/**
 * 日志级别
 */
export type VoiceLogLevel = "debug" | "info" | "warn" | "error";

/**
 * 日志条目
 */
export interface VoiceLogEntry {
  timestamp: string;
  level: VoiceLogLevel;
  provider: string;
  message: string;
  duration_ms?: number;
  status_code?: number;
  error_summary?: string;
  metadata?: Record<string, unknown>;
}

/**
 * 日志工具类
 */
class VoiceLogger {
  private provider: string;
  private enabled: boolean;

  constructor(provider: string, enabled: boolean = true) {
    this.provider = provider;
    this.enabled = enabled;
  }

  /**
   * 记录请求开始
   */
  logRequestStart(options: Record<string, unknown>): void {
    if (!this.enabled) return;

    const entry: VoiceLogEntry = {
      timestamp: this.getTimestamp(),
      level: "info",
      provider: this.provider,
      message: "Voice synthesis request started",
      metadata: {
        request_id: options.requestId,
        text_length: String(options.text || "").length,
        speaker: options.speaker,
        format: options.format,
      },
    };

    this.log(entry);
  }

  /**
   * 记录请求成功
   */
  logRequestSuccess(
    duration_ms: number,
    status_code: number,
    metadata?: Record<string, unknown>
  ): void {
    if (!this.enabled) return;

    const entry: VoiceLogEntry = {
      timestamp: this.getTimestamp(),
      level: "info",
      provider: this.provider,
      message: "Voice synthesis request succeeded",
      duration_ms,
      status_code,
      metadata,
    };

    this.log(entry);
  }

  /**
   * 记录请求失败
   */
  logRequestError(
    error: Error,
    duration_ms: number,
    status_code?: number
  ): void {
    if (!this.enabled) return;

    const entry: VoiceLogEntry = {
      timestamp: this.getTimestamp(),
      level: "error",
      provider: this.provider,
      message: "Voice synthesis request failed",
      duration_ms,
      status_code,
      error_summary: this.summarizeError(error),
    };

    this.log(entry);
  }

  /**
   * 记录信息
   */
  info(message: string, metadata?: Record<string, unknown>): void {
    if (!this.enabled) return;

    const entry: VoiceLogEntry = {
      timestamp: this.getTimestamp(),
      level: "info",
      provider: this.provider,
      message,
      metadata,
    };

    this.log(entry);
  }

  /**
   * 记录警告
   */
  warn(message: string, metadata?: Record<string, unknown>): void {
    if (!this.enabled) return;

    const entry: VoiceLogEntry = {
      timestamp: this.getTimestamp(),
      level: "warn",
      provider: this.provider,
      message,
      metadata,
    };

    this.log(entry);
  }

  /**
   * 记录调试信息
   */
  debug(message: string, metadata?: Record<string, unknown>): void {
    if (!this.enabled) return;

    const entry: VoiceLogEntry = {
      timestamp: this.getTimestamp(),
      level: "debug",
      provider: this.provider,
      message,
      metadata,
    };

    this.log(entry);
  }

  /**
   * 通用日志记录
   */
  private log(entry: VoiceLogEntry): void {
    const prefix = `[${this.provider}]`;
    const meta = entry.metadata ? ` ${JSON.stringify(entry.metadata)}` : "";

    switch (entry.level) {
      case "debug":
        console.debug(
          `${prefix} ${entry.message}${meta} ${entry.duration_ms ? `[${entry.duration_ms}ms]` : ""}`
        );
        break;
      case "info":
        console.info(
          `${prefix} ${entry.message}${meta} ${entry.duration_ms ? `[${entry.duration_ms}ms]` : ""}`
        );
        break;
      case "warn":
        console.warn(
          `${prefix} ${entry.message}${meta} ${entry.duration_ms ? `[${entry.duration_ms}ms]` : ""}`
        );
        break;
      case "error":
        console.error(
          `${prefix} ${entry.message}${meta} ${entry.duration_ms ? `[${entry.duration_ms}ms]` : ""} ${entry.error_summary ? `[${entry.error_summary}]` : ""}`
        );
        break;
    }
  }

  /**
   * 获取当前时间戳
   */
  private getTimestamp(): string {
    return new Date().toISOString();
  }

  /**
   * 简化错误信息
   */
  private summarizeError(error: Error): string {
    if (error.name === "VoiceGenerationError") {
      return `${error.message} (${(error as unknown as { code: string }).code})`;
    }
    return `${error.name}: ${error.message}`;
  }
}

/**
 * 创建日志实例
 */
export function createVoiceLogger(provider: string): VoiceLogger {
  return new VoiceLogger(provider, process.env.NODE_ENV !== "test");
}

/**
 * 性能计时器
 */
export class PerformanceTimer {
  private startTime: number;

  constructor() {
    this.startTime = Date.now();
  }

  /**
   * 获取已耗时（毫秒）
   */
  getElapsed(): number {
    return Date.now() - this.startTime;
  }

  /**
   * 获取已耗时并重置
   */
  getElapsedAndReset(): number {
    const elapsed = this.getElapsed();
    this.startTime = Date.now();
    return elapsed;
  }
}
