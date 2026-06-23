/**
 * 角色情绪配置导出
 */

import { PersonalityEmotionConfig } from "../emotion";
import { 沈墨_emotion_config } from "./shenmo";
import { 舒婷_emotion_config } from "./shuting";
import { 林野_emotion_config } from "./linye";
import { 顾燃_emotion_config } from "./guran";

// 角色 ID 到配置的映射
export const characterEmotionConfigs: Record<string, PersonalityEmotionConfig> = {
  "shen-mo-001": 沈墨_emotion_config,
  "lu-chen-001": 沈墨_emotion_config,  // 陆沉暂时复用沈墨的配置
  "shuting-001": 舒婷_emotion_config,
  "lin-ye-001": 林野_emotion_config,
  "gu-ran-001": 顾燃_emotion_config,
};

// 获取角色的情绪配置
export function getEmotionConfig(characterId: string): PersonalityEmotionConfig | null {
  return characterEmotionConfigs[characterId] || null;
}

// 获取默认情绪配置（用于未知角色）
export function getDefaultEmotionConfig(): PersonalityEmotionConfig {
  return 沈墨_emotion_config; // 默认使用沈墨的配置
}

export {
  沈墨_emotion_config,
  舒婷_emotion_config,
  林野_emotion_config,
  顾燃_emotion_config,
};
