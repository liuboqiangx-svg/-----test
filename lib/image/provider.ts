/**
 * 图像生成 - Provider 接口定义
 * 抽象图像生成的 Provider 接口，便于扩展和替换
 */

import {
  ProviderConfig,
  ProviderOptions,
  ProviderRawResponse,
  GenerateImageResponse,
} from "./types";

/**
 * Provider 接口
 * 定义图像生成器的标准接口
 */
export interface ImageProvider {
  /**
   * 提供商名称
   */
  readonly name: string;

  /**
   * 生成图像
   * @param options 生成选项
   * @returns 生成结果
   */
  generate(options: ProviderOptions): Promise<ProviderRawResponse>;

  /**
   * 获取提供商配置
   */
  getConfig(): ProviderConfig;
}

/**
 * Provider 工厂函数类型
 */
export type ProviderFactory = (config: ProviderConfig) => ImageProvider;

/**
 * Provider 注册表
 */
const providerRegistry: Map<string, ProviderFactory> = new Map();

/**
 * 注册 Provider
 */
export function registerProvider(name: string, factory: ProviderFactory): void {
  providerRegistry.set(name, factory);
}

/**
 * 获取 Provider
 */
export function getProvider(name: string, config: ProviderConfig): ImageProvider | null {
  const factory = providerRegistry.get(name);
  if (!factory) {
    return null;
  }
  return factory(config);
}

/**
 * 获取所有已注册的 Provider 名称
 */
export function getRegisteredProviders(): string[] {
  return Array.from(providerRegistry.keys());
}
