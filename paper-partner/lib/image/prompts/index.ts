/**
 * 图像生成 Prompt 片段 - 统一导出
 *
 * 自动注册所有角色 Prompt 库
 */

// 按顺序导入，触发注册
import "./characters/lin-ye";
import "./characters/shen-mo";
import "./characters/shu-ting";
import "./characters/gu-ran";

// 导出注册表工具
export {
  registerCharacterPrompts,
  getCharacterPrompts,
  getRegisteredCharacterIds,
  getExpressionTags,
  moodMapping,
  sceneKeywords,
  type CharacterPromptLibrary,
  type ExpressionSnippet,
  type ClothingSnippet,
  type SceneSnippet,
  type LightingSnippet,
  type CameraSnippet,
} from "./registry";
