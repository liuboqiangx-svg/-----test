/**
 * 图像生成模块 - 导出索引
 * 统一导出所有公开接口
 */

// 类型导出
export {
  type GenerateImageRequest,
  type GenerateImageResponse,
  type GenerateImageData,
  type GenerateImageError,
  type GenerateImageMeta,
  type ImageSize,
  type ErrorType,
  type ProviderConfig,
  type ProviderOptions,
  type ProviderRawResponse,
  type ProviderImageData,
  type ProviderUsage,
  IMAGE_SIZE_MAP,
  ERROR_CODES,
  ERROR_TYPE_MAP,
} from "./types";

// 错误导出
export {
  ImageGenerationError,
  invalidApiKeyError,
  accessDeniedError,
  rateLimitedError,
  serverError,
  timeoutError,
  networkError,
  validationError,
  unknownError,
  createErrorFromStatus,
  getErrorDisplayMessage,
} from "./errors";

// 服务导出
export {
  ImageService,
  getImageService,
  resetImageService,
  type ImageServiceConfig,
} from "./service";

// Provider 导出
export {
  ImageProvider,
  registerProvider,
  getProvider,
  getRegisteredProviders,
} from "./provider";

// 火山引擎 Provider
export {
  VolcanoImageProvider,
  createVolcanoProvider,
} from "./providers/volcano";
