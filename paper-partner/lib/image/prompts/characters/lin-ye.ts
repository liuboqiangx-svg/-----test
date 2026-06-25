/**
 * 林野 - Prompt 片段库
 *
 * 角色定位：24岁户外博主，健美阳光，日常分享旅行、健身、生活
 */

import {
  registerCharacterPrompts,
  type CharacterPromptLibrary,
} from "../registry";

/**
 * 林野 Prompt 库
 */
const linYeLibrary: CharacterPromptLibrary = {
  id: "lin-ye",
  name: "林野",
  description: "24岁户外博主，健美阳光，日常分享旅行、健身、生活",

  // 固定人设（所有图片必须保留）
  baseDescription: `A beautiful 24-year-old Chinese girl, 163cm tall, athletic and curvy figure.
Round oval face with a hint of baby fat, short rounded chin.
Healthy tan skin with sun-kissed glow, slightly dewy texture.
Short wavy chestnut-brown hair, slightly curled at tips, bouncy and voluminous.
Large round almond-shaped eyes, bright dark brown irises, sparkling and expressive.
Sword eyebrows with defined arch, slightly heroic charm.
Rounded nose tip, very cute.
Full plump lips, naturally rosy and pouty.
Perfect white teeth, healing smile.
Expressive face, full of life and energy, never poker-faced.
Athletic body with visible abs, peach butt, curvy silhouette.
Confident and vibrant aura, like a little sun.`,

  // 表情库
  expressions: [
    {
      mood: "happy",
      description: "开心",
      prompt: "bright big smile, eyes squinted from laughing, showing white teeth, pure joy",
      englishDescription: "bright big smile, eyes squinted from laughing",
    },
    {
      mood: "excited",
      description: "兴奋",
      prompt: "mouth wide open, laughing with pure joy, arms raised in excitement, sparkling eyes",
      englishDescription: "mouth wide open laughing, arms raised",
    },
    {
      mood: "clingy",
      description: "撒娇",
      prompt: "pouting, making kissy face, cheeks puffed, batting eyelashes playfully",
      englishDescription: "pouting, making kissy face, cheeks puffed",
    },
    {
      mood: "angry",
      description: "生气",
      prompt: "eyebrows furrowed, pouting lips, sassy attitude, hands on hips, playfully annoyed",
      englishDescription: "eyebrows furrowed, pouting lips, sassy",
    },
    {
      mood: "wronged",
      description: "委屈",
      prompt: "lower lip pouting, eyes slightly watery, trying not to cry, sad puppy eyes",
      englishDescription: "lower lip pouting, eyes slightly watery",
    },
    {
      mood: "shy",
      description: "害羞",
      prompt: "blushing cheeks, looking down shyly, slight shy smile, playing with hair",
      englishDescription: "blushing, looking down shyly, slight smile",
    },
    {
      mood: "surprised",
      description: "惊讶",
      prompt: "eyes wide open, mouth slightly open, shocked but delighted expression",
      englishDescription: "eyes wide open, mouth slightly open",
    },
    {
      mood: "jealous",
      description: "吃醋",
      prompt: "arms crossed, slight pout, looking away unimpressed, pretending not to care",
      englishDescription: "arms crossed, slight pout, looking away",
    },
    {
      mood: "passionate",
      description: "深情",
      prompt: "soft loving gaze, gentle tender smile, eyes full of affection, romantic mood",
      englishDescription: "soft gaze, gentle smile, loving eyes",
    },
    {
      mood: "sleepy",
      description: "困倦",
      prompt: "drowsy half-closed eyes, yawning, relaxed drowsy expression, cozy mood",
      englishDescription: "drowsy eyes, yawning, relaxed expression",
    },
    {
      mood: "calm",
      description: "平静",
      prompt: "relaxed calm expression, peaceful serene smile, peaceful eyes, enjoying the moment",
      englishDescription: "relaxed calm expression, peaceful smile",
    },
    {
      mood: "worried",
      description: "担心",
      prompt: "concerned eyebrows, biting lower lip, worried caring expression, gentle concern",
      englishDescription: "concerned eyebrows, biting lip, worried",
    },
  ],

  // 服装库
  clothing: [
    {
      tag: "sportswear",
      name: "运动装",
      prompt: "wearing vibrant athletic sportswear, sports bra and matching leggings, colorful design, dynamic pose",
    },
    {
      tag: "outdoor",
      name: "户外装",
      prompt: "wearing light hiking gear, breathable outdoor jacket, sports shorts, hiking boots, adventurous look",
    },
    {
      tag: "swimwear",
      name: "泳装",
      prompt: "wearing cute one-piece swimsuit, athletic figure in swimwear, beach-ready, sun-kissed skin",
    },
    {
      tag: "casual",
      name: "休闲装",
      prompt: "wearing casual tank top, denim shorts, relaxed fit, casual chic, everyday beauty",
    },
    {
      tag: "home",
      name: "居家服",
      prompt: "wearing cozy oversized sweater, comfortable loungewear, relaxed home vibes, natural beauty",
    },
    {
      tag: "fitness",
      name: "健身服",
      prompt: "wearing tight fitness wear, crop top, high-waisted leggings, gym-ready, athletic and confident",
    },
    {
      tag: "dress",
      name: "连衣裙",
      prompt: "wearing cute summer dress, floral pattern, flowy design, feminine and charming",
    },
    {
      tag: "workout",
      name: "运动健身",
      prompt: "wearing athletic gym outfit, sports bra, running shorts, sweaty from workout, healthy glow",
    },
  ],

  // 场景库
  scenes: [
    {
      tag: "mountain",
      name: "山顶",
      prompt: "standing on mountain peak, breathtaking mountain landscape behind, arms spread wide, conqueror pose, epic vista",
    },
    {
      tag: "beach",
      name: "海边",
      prompt: "at beautiful sandy beach, turquoise water, gentle waves, beach vibes, tropical paradise",
    },
    {
      tag: "forest",
      name: "森林",
      prompt: "in lush green forest, sunlight filtering through trees, magical forest atmosphere, nature lover",
    },
    {
      tag: "waterfall",
      name: "瀑布",
      prompt: "near spectacular waterfall, misty atmosphere, powerful water behind, adventurous explorer",
    },
    {
      tag: "sunset",
      name: "日落",
      prompt: "golden sunset background, warm orange and pink sky, silhouette with beautiful sunset, romantic moment",
    },
    {
      tag: "city",
      name: "城市",
      prompt: "in trendy urban setting, city skyline background, modern architecture, city explorer vibes",
    },
    {
      tag: "cafe",
      name: "咖啡厅",
      prompt: "in cozy cafe, warm interior, coffee in hand, relaxed afternoon vibes, aesthetic cafe moment",
    },
    {
      tag: "home",
      name: "家里",
      prompt: "in cozy home setting, comfortable living space, natural home lighting, relaxed and authentic",
    },
    {
      tag: "gym",
      name: "健身房",
      prompt: "in modern gym, workout equipment background, fitness atmosphere, healthy and strong",
    },
    {
      tag: "pool",
      name: "泳池",
      prompt: "at swimming pool, crystal clear water, poolside vibes, refreshing summer feel",
    },
  ],

  // 光线库
  lighting: [
    {
      tag: "natural",
      name: "自然光",
      prompt: "natural sunlight, soft natural lighting, outdoors, realistic",
    },
    {
      tag: "golden",
      name: "黄金时刻",
      prompt: "golden hour lighting, warm sunset glow, magical golden light, dreamy atmosphere",
    },
    {
      tag: "soft",
      name: "柔和光",
      prompt: "soft diffused lighting, gentle shadows, flattering light, portrait quality",
    },
    {
      tag: "backlit",
      name: "逆光",
      prompt: "backlit portrait, sun behind, beautiful rim light, ethereal glow effect",
    },
    {
      tag: "dramatic",
      name: "戏剧光",
      prompt: "dramatic lighting, high contrast, artistic shadows, cinematic quality",
    },
    {
      tag: "morning",
      name: "晨光",
      prompt: "morning light, fresh and clean, bright and energetic, new day atmosphere",
    },
  ],

  // 相机角度库
  cameras: [
    {
      tag: "portrait",
      name: "人像",
      prompt: "portrait shot, close-up face, beautiful head and shoulders composition",
    },
    {
      tag: "full_body",
      name: "全身",
      prompt: "full body shot, showing complete figure, athletic silhouette, dynamic pose",
    },
    {
      tag: "half",
      name: "半身",
      prompt: "half body shot, waist up, balanced composition, expressive",
    },
    {
      tag: "wide",
      name: "广角",
      prompt: "wide angle shot, showing environment, landscape included, immersive",
    },
    {
      tag: "dynamic",
      name: "动态",
      prompt: "dynamic action pose, capturing movement, energetic and lively",
    },
    {
      tag: "eye_level",
      name: "平视",
      prompt: "eye-level camera angle, natural perspective, engaging gaze",
    },
  ],

  // 默认值
  defaultClothing: "casual",
  defaultScene: "outdoor",
  defaultLighting: "natural",
  defaultCamera: "portrait",
};

// 注册
registerCharacterPrompts(linYeLibrary);

export { linYeLibrary };
