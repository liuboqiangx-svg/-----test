/**
 * 图像生成 Prompt 组装器
 *
 * 根据角色、情绪、场景等参数自动组装完整的图像生成 Prompt
 */

import "./prompts/characters/lin-ye"; // 导入并注册角色
import "./prompts/characters/shen-mo";
import "./prompts/characters/shu-ting";
import "./prompts/characters/gu-ran";
import {
  getCharacterPrompts,
  getExpressionTags,
  sceneKeywords,
  type CharacterPromptLibrary,
  type ExpressionSnippet,
  type ClothingSnippet,
  type SceneSnippet,
  type LightingSnippet,
  type CameraSnippet,
} from "./prompts/registry";

// ==================== 组装请求类型 ====================

/**
 * Prompt 组装请求
 */
export interface AssemblePromptRequest {
  /** 角色 ID */
  characterId: string;
  /** 情绪类型 */
  emotion?: string;
  /** 场景标签 */
  scene?: string;
  /** 服装标签 */
  clothing?: string;
  /** 光线标签 */
  lighting?: string;
  /** 相机角度 */
  camera?: string;
  /** 自定义补充 Prompt */
  customPrompt?: string;
  /** 是否包含质量标签 */
  includeQuality?: boolean;
}

/**
 * 组装结果
 */
export interface AssemblePromptResult {
  /** 完整 Prompt */
  prompt: string;
  /** 使用了哪些片段 */
  usedSnippets: {
    character: string;
    expression?: string;
    clothing?: string;
    scene?: string;
    lighting?: string;
    camera?: string;
  };
  /** 角色信息 */
  character: {
    id: string;
    name: string;
    description: string;
  };
}

/**
 * 场景自动推断结果
 */
interface InferredScene {
  /** 场景标签 */
  tag: string;
  /** 匹配的关键词 */
  matchedKeywords: string[];
  /** 场景描述 */
  description: string;
}

/**
 * 情绪到场景的默认映射
 */
const emotionToScene: Record<string, string> = {
  happy: "daily",
  excited: "outdoor",
  calm: "cafe",
  sad: "home",
  worried: "home",
  sleepy: "bedroom",
  clingy: "home",
  jealous: "street",
  passionate: "sunset",
  angry: "street",
  wronged: "home",
  shy: "cafe",
  surprised: "outdoor",
  composed: "office",
  anxious: "cafe",
  hurt: "bedroom",
};

/**
 * 情绪到服装的默认映射
 */
const emotionToClothing: Record<string, string> = {
  happy: "casual",
  excited: "sportswear",
  calm: "casual",
  sad: "home",
  worried: "home",
  sleepy: "home",
  clingy: "home",
  jealous: "casual",
  passionate: "casual",
  angry: "streetwear",
  wronged: "home",
  shy: "casual",
  surprised: "casual",
  composed: "formal",
  anxious: "casual",
  hurt: "home",
};

// ==================== Prompt 组装器 ====================

/**
 * Prompt 组装器
 */
export class PromptAssembler {
  /**
   * 组装完整 Prompt
   */
  static assemble(request: AssemblePromptRequest): AssemblePromptResult {
    // 获取角色 Prompt 库
    const library = getCharacterPrompts(request.characterId);

    if (!library) {
      throw new Error(`未找到角色 Prompt 库: ${request.characterId}`);
    }

    // 推断缺失的参数
    const inferred = this.inferMissingParams(request, library);

    // 获取各个片段
    const expression = this.getExpressionSnippet(inferred.emotion, library);
    const clothing = this.getClothingSnippet(inferred.clothing, library);
    const scene = this.getSceneSnippet(inferred.scene, library);
    const lighting = this.getLightingSnippet(inferred.lighting, library);
    const camera = this.getCameraSnippet(inferred.camera, library);

    // 组装 Prompt
    const prompt = this.buildPrompt({
      library,
      expression,
      clothing,
      scene,
      lighting,
      camera,
      customPrompt: request.customPrompt,
      includeQuality: request.includeQuality ?? true,
    });

    return {
      prompt,
      usedSnippets: {
        character: library.name,
        expression: expression?.englishDescription,
        clothing: clothing?.name,
        scene: scene?.name,
        lighting: lighting?.name,
        camera: camera?.name,
      },
      character: {
        id: library.id,
        name: library.name,
        description: library.description,
      },
    };
  }

  /**
   * 推断缺失的参数
   */
  private static inferMissingParams(
    request: AssemblePromptRequest,
    library: CharacterPromptLibrary
  ) {
    const emotion = request.emotion || this.getDefaultEmotion();
    const scene = request.scene || emotionToScene[emotion] || library.defaultScene;
    const clothing = request.clothing || emotionToClothing[emotion] || library.defaultClothing;
    const lighting = request.lighting || library.defaultLighting;
    const camera = request.camera || library.defaultCamera;

    return {
      characterId: request.characterId,
      emotion,
      scene,
      clothing,
      lighting,
      camera,
      customPrompt: request.customPrompt,
      includeQuality: request.includeQuality,
    };
  }

  /**
   * 获取默认情绪
   */
  private static getDefaultEmotion(): string {
    return "happy";
  }

  /**
   * 获取表情片段
   */
  private static getExpressionSnippet(
    mood: string | undefined,
    library: CharacterPromptLibrary
  ): ExpressionSnippet | undefined {
    if (!mood) return undefined;

    // 优先精确匹配
    const exact = library.expressions.find(e => e.mood === mood);
    if (exact) return exact;

    // 模糊匹配
    for (const expr of library.expressions) {
      if (expr.mood.includes(mood) || mood.includes(expr.mood)) {
        return expr;
      }
    }

    // 返回默认表情
    return library.expressions.find(e => e.mood === "calm");
  }

  /**
   * 获取服装片段
   */
  private static getClothingSnippet(
    tag: string | undefined,
    library: CharacterPromptLibrary
  ): ClothingSnippet | undefined {
    if (!tag) return undefined;

    // 精确匹配
    const exact = library.clothing.find(c => c.tag === tag);
    if (exact) return exact;

    // 模糊匹配
    for (const clothing of library.clothing) {
      if (clothing.tag.includes(tag) || tag.includes(clothing.tag) ||
          clothing.name.includes(tag)) {
        return clothing;
      }
    }

    return undefined;
  }

  /**
   * 获取场景片段
   */
  private static getSceneSnippet(
    scene: string | undefined,
    library: CharacterPromptLibrary
  ): SceneSnippet | undefined {
    if (!scene) return undefined;

    // 精确匹配
    const exact = library.scenes.find(s => s.tag === scene);
    if (exact) return exact;

    // 模糊匹配
    for (const s of library.scenes) {
      if (s.tag.includes(scene) || scene.includes(s.tag) ||
          s.name.includes(scene)) {
        return s;
      }
    }

    // 关键词匹配
    const keywords = sceneKeywords[scene] || [];
    for (const keyword of keywords) {
      for (const s of library.scenes) {
        if (s.prompt.toLowerCase().includes(keyword.toLowerCase())) {
          return s;
        }
      }
    }

    return undefined;
  }

  /**
   * 获取光线片段
   */
  private static getLightingSnippet(
    tag: string | undefined,
    library: CharacterPromptLibrary
  ): LightingSnippet | undefined {
    if (!tag) return undefined;

    // 精确匹配
    const exact = library.lighting.find(l => l.tag === tag);
    if (exact) return exact;

    // 模糊匹配
    for (const lighting of library.lighting) {
      if (lighting.tag.includes(tag) || tag.includes(lighting.tag) ||
          lighting.name.includes(tag)) {
        return lighting;
      }
    }

    return undefined;
  }

  /**
   * 获取相机角度片段
   */
  private static getCameraSnippet(
    tag: string | undefined,
    library: CharacterPromptLibrary
  ): CameraSnippet | undefined {
    if (!tag) return undefined;

    // 精确匹配
    const exact = library.cameras.find(c => c.tag === tag);
    if (exact) return exact;

    // 模糊匹配
    for (const camera of library.cameras) {
      if (camera.tag.includes(tag) || tag.includes(camera.tag) ||
          camera.name.includes(tag)) {
        return camera;
      }
    }

    return undefined;
  }

  /**
   * 构建完整 Prompt
   */
  private static buildPrompt(params: {
    library: CharacterPromptLibrary;
    expression?: ExpressionSnippet;
    clothing?: ClothingSnippet;
    scene?: SceneSnippet;
    lighting?: LightingSnippet;
    camera?: CameraSnippet;
    customPrompt?: string;
    includeQuality?: boolean;
  }): string {
    const parts: string[] = [];

    // 1. 基础人设
    parts.push(params.library.baseDescription);

    // 2. 表情
    if (params.expression) {
      parts.push(params.expression.prompt);
    }

    // 3. 服装
    if (params.clothing) {
      parts.push(params.clothing.prompt);
    }

    // 4. 场景背景
    if (params.scene) {
      parts.push(`Background: ${params.scene.prompt}`);
    }

    // 5. 光线
    if (params.lighting) {
      parts.push(params.lighting.prompt);
    }

    // 6. 相机角度
    if (params.camera) {
      parts.push(params.camera.prompt);
    }

    // 7. 自定义补充
    if (params.customPrompt) {
      parts.push(params.customPrompt);
    }

    // 8. 质量标签
    if (params.includeQuality) {
      parts.push("High quality, photorealistic, natural lighting, 8k");
    }

    return parts.join(", ");
  }

  /**
   * 预览组装结果（不生成 Prompt）
   */
  static preview(request: AssemblePromptRequest): {
    emotion: string;
    clothing: string;
    scene: string;
    lighting: string;
    camera: string;
  } {
    const library = getCharacterPrompts(request.characterId);

    if (!library) {
      throw new Error(`未找到角色 Prompt 库: ${request.characterId}`);
    }

    const inferred = this.inferMissingParams(request, library);
    const emotion = this.getExpressionSnippet(inferred.emotion, library);
    const clothing = this.getClothingSnippet(inferred.clothing, library);
    const scene = this.getSceneSnippet(inferred.scene, library);
    const lighting = this.getLightingSnippet(inferred.lighting, library);
    const camera = this.getCameraSnippet(inferred.camera, library);

    return {
      emotion: emotion?.description || "默认",
      clothing: clothing?.name || "默认",
      scene: scene?.name || "默认",
      lighting: lighting?.name || "默认",
      camera: camera?.name || "默认",
    };
  }

  /**
   * 获取所有可用的片段选项
   */
  static getAvailableOptions(characterId: string): {
    emotions: { tag: string; description: string }[];
    clothing: { tag: string; name: string }[];
    scenes: { tag: string; name: string }[];
    lighting: { tag: string; name: string }[];
    cameras: { tag: string; name: string }[];
  } | null {
    const library = getCharacterPrompts(characterId);

    if (!library) return null;

    return {
      emotions: library.expressions.map(e => ({ tag: e.mood, description: e.description })),
      clothing: library.clothing.map(c => ({ tag: c.tag, name: c.name })),
      scenes: library.scenes.map(s => ({ tag: s.tag, name: s.name })),
      lighting: library.lighting.map(l => ({ tag: l.tag, name: l.name })),
      cameras: library.cameras.map(c => ({ tag: c.tag, name: c.name })),
    };
  }
}

/**
 * 便捷函数：快速组装 Prompt
 */
export function assembleImagePrompt(request: AssemblePromptRequest): string {
  return PromptAssembler.assemble(request).prompt;
}

/**
 * 便捷函数：预览参数
 */
export function previewImagePrompt(request: AssemblePromptRequest) {
  return PromptAssembler.preview(request);
}
