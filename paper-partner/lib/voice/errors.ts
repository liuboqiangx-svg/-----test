/**
 * 语音合成 - 错误处理
 * 统一的错误分类和错误类定义
 */

import {
  ErrorType,
  SynthesizeError,
  ERROR_CODES,
} from "./types";

/**
 * 语音生成错误类
 */
export class VoiceGenerationError extends Error {
  public readonly code: string;
  public readonly type: ErrorType;
  public readonly statusCode?: number;
  public readonly isRetryable: boolean;

  constructor(
    code: string,
    message: string,
    type: ErrorType,
    statusCode?: number
  ) {
    super(message);
    this.name = "VoiceGenerationError";
    this.code = code;
    this.type = type;
    this.statusCode = statusCode;
    this.isRetryable = this.computeRetryable();
  }

  /**
   * 判断是否可重试
   */
  private computeRetryable(): boolean {
    return (
      this.type === "rate_limit" ||
      this.type === "server" ||
      this.type === "network" ||
      this.type === "timeout"
    );
  }

  /**
   * 转换为统一的错误响应
   */
  toResponse(): SynthesizeError {
    return {
      code: this.code,
      message: this.message,
      type: this.type,
    };
  }
}

/**
 * 错误工厂函数
 */

/**
 * 创建认证错误 (401)
 */
export function invalidApiKeyError(): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.INVALID_API_KEY,
    "API Key 无效或已过期，请检查配置",
    "auth",
    401
  );
}

/**
 * 创建访问拒绝错误 (403)
 */
export function accessDeniedError(): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.ACCESS_DENIED,
    "访问被拒绝，请检查 API 权限",
    "auth",
    403
  );
}

/**
 * 创建限流错误 (429)
 */
export function rateLimitedError(retryAfter?: number): VoiceGenerationError {
  const message = retryAfter
    ? `请求过于频繁，请在 ${retryAfter} 秒后重试`
    : "请求过于频繁，请稍后再试";
  return new VoiceGenerationError(
    ERROR_CODES.RATE_LIMITED,
    message,
    "rate_limit",
    429
  );
}

/**
 * 创建服务器错误 (5xx)
 */
export function serverError(statusCode: number = 500): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.SERVER_ERROR,
    "服务器繁忙，请稍后再试",
    "server",
    statusCode
  );
}

/**
 * 创建超时错误
 */
export function timeoutError(): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.REQUEST_TIMEOUT,
    "请求超时，请检查网络连接后重试",
    "timeout"
  );
}

/**
 * 创建网络错误
 */
export function networkError(underlyingError?: string): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.NETWORK_ERROR,
    underlyingError
      ? `网络错误: ${underlyingError}`
      : "网络连接失败，请检查网络",
    "network"
  );
}

/**
 * 创建验证错误 (400)
 */
export function validationError(message: string): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.VALIDATION_ERROR,
    message,
    "validation",
    400
  );
}

/**
 * 创建存储错误
 */
export function storageError(message: string): VoiceGenerationError {
  return new VoiceGenerationError(
    ERROR_CODES.STORAGE_ERROR,
    message,
    "storage"
  );
}

/**
 * 创建未知错误
 */
export function unknownError(error?: unknown): VoiceGenerationError {
  const message =
    error instanceof Error ? error.message : "发生未知错误，请稍后再试";
  return new VoiceGenerationError(
    ERROR_CODES.UNKNOWN_ERROR,
    message,
    "unknown"
  );
}

/**
 * 根据 HTTP 状态码创建错误
 */
export function createErrorFromStatus(
  status: number,
  responseBody?: string
): VoiceGenerationError {
  switch (status) {
    case 401:
      return invalidApiKeyError();
    case 403:
      return accessDeniedError();
    case 429:
      return rateLimitedError();
    case 500:
    case 502:
    case 503:
    case 504:
      return serverError(status);
    default:
      return unknownError(responseBody);
  }
}

/**
 * 根据错误类型获取用户友好的错误消息
 */
export function getErrorDisplayMessage(error: VoiceGenerationError): string {
  const messages: Record<ErrorType, string> = {
    auth: "🔐 认证失败，请联系管理员检查 API 配置",
    rate_limit: "⏰ 请求太频繁了，休息一下再试吧",
    server: "🔧 服务器开小差了，等会儿再试试",
    timeout: "⏱️ 请求超时了，可能是网络不太好",
    network: "📶 网络好像有点问题，检查一下网络吧",
    validation: "📝 参数好像有点问题",
    storage: "💾 文件存储出了问题，请稍后重试",
    unknown: "❓ 出了点小状况，再试一次看看",
  };

  return messages[error.type] || "合成失败了，请稍后重试";
}
