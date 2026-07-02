/**
 * 顾燃 - Prompt 片段库
 *
 * 角色定位：25岁阳光直球街头潮男，帅气少年感，街头摄影常客
 */

import {
  registerCharacterPrompts,
  type CharacterPromptLibrary,
} from "../registry";

/**
 * 顾燃 Prompt 库
 */
const guRanLibrary: CharacterPromptLibrary = {
  id: "gu-ran",
  name: "顾燃",
  description: "25岁阳光直球街头潮男，帅气少年感，街头摄影常客",

  // 固定人设
  baseDescription: `A handsome 25-year-old Chinese man, 180cm tall, athletic lean muscular build.
Boyish handsome face with youthful charm, clean and fresh appearance.
Bright fair skin with healthy glow, natural clear complexion.
Stylish messy dark brown hair, effortlessly cool, slightly bleached tips or under dyed.
Large bright eyes, clear and sparkling, direct sincere gaze, no hidden thoughts.
Defined eyebrows, slightly thick and manly, natural expression.
High nose bridge, straight and distinctive, confident side profile.
Full lips, naturally rosy, easygoing smile showing teeth.
Strong jawline with slight stubble, mature charm while maintaining boyish looks.
Athletic body, visible muscles under casual clothes, street-style physique.
Confident street-smart aura, like the cool guy next door, approachable yet striking.`,

  // 表情库
  expressions: [
    {
      mood: "happy",
      description: "开心",
      prompt: "bright boyish grin, big genuine smile, eyes crinkling with joy, infectious happiness",
      englishDescription: "bright boyish grin, big genuine smile",
    },
    {
      mood: "excited",
      description: "兴奋",
      prompt: "huge excited smile, eyes bright with enthusiasm, can't contain excitement, pure joy",
      englishDescription: "huge excited smile, eyes bright with enthusiasm",
    },
    {
      mood: "passionate",
      description: "深情",
      prompt: "intense sincere gaze, eyes full of affection, devoted and serious, genuine romantic feelings",
      englishDescription: "intense sincere gaze, eyes full of affection",
    },
    {
      mood: "jealous",
      description: "吃醋",
      prompt: "sulky expression, puffing cheeks, looking away cutely, can't hide jealousy, funny cutie",
      englishDescription: "sulky expression, puffing cheeks, looking away",
    },
    {
      mood: "angry",
      description: "生气",
      prompt: "annoyed expression, furrowed brows, serious face, genuinely upset, can't pretend",
      englishDescription: "annoyed expression, furrowed brows, serious face",
    },
    {
      mood: "wronged",
      description: "委屈",
      prompt: "wronged puppy eyes, lower lip pouting, looking pitiful, seeking comfort, soft heart",
      englishDescription: "wronged puppy eyes, lower lip pouting",
    },
    {
      mood: "clinging",
      description: "撒娇",
      prompt: "clingy adorable expression, hugging someone, buried face, seeking attention, lovestruck",
      englishDescription: "clingy adorable expression, hugging someone",
    },
    {
      mood: "surprised",
      description: "惊讶",
      prompt: "shocked wide eyes, mouth open, caught off guard expression, genuine surprise reaction",
      englishDescription: "shocked wide eyes, mouth open",
    },
    {
      mood: "sleepy",
      description: "困倦",
      prompt: "drowsy sleepy eyes, lazy morning expression, bed head hair, just woke up, natural boy",
      englishDescription: "drowsy sleepy eyes, just woke up",
    },
    {
      mood: "cool",
      description: "耍酷",
      prompt: "cool nonchalant expression, slight smirk, trying to look cool but obviously cute, playful",
      englishDescription: "cool nonchalant expression, slight smirk",
    },
    {
      mood: "shy",
      description: "害羞",
      prompt: "flustered blush, avoiding eye contact, shy smile, embarrassed cutie, genuine shyness",
      englishDescription: "flustered blush, avoiding eye contact",
    },
    {
      mood: "serious",
      description: "认真",
      prompt: "serious focused expression, determined eyes, showing commitment, sincere and serious",
      englishDescription: "serious focused expression, determined eyes",
    },
  ],

  // 服装库
  clothing: [
    {
      tag: "streetwear",
      name: "街头潮牌",
      prompt: "wearing trendy streetwear, oversized hoodie, designer sneakers, layered style, urban cool",
    },
    {
      tag: "casual",
      name: "休闲装",
      prompt: "wearing casual white tee, denim jacket, comfortable jeans, effortless cool style",
    },
    {
      tag: "sports",
      name: "运动装",
      prompt: "wearing athletic sportswear, basketball jersey, sports shorts, athletic street style",
    },
    {
      tag: "leather",
      name: "皮衣",
      prompt: "wearing black leather jacket, cool biker style, chain accessories, rebellious edge",
    },
    {
      tag: "hoodie",
      name: "卫衣",
      prompt: "wearing oversized hoodie, hood down, comfortable street style, boy next door vibe",
    },
    {
      tag: "shirt",
      name: "衬衫",
      prompt: "wearing casual open shirt, layered over tee, relaxed fit, effortlessly handsome",
    },
    {
      tag: "suit",
      name: "西装",
      prompt: "wearing modern slim suit, contemporary style, young professional, handsome businessman",
    },
    {
      tag: "home",
      name: "居家服",
      prompt: "wearing comfortable home clothes, soft sweater, cozy loungewear, natural boyish charm",
    },
  ],

  // 场景库
  scenes: [
    {
      tag: "street",
      name: "街头",
      prompt: "on city street, urban backdrop, graffiti wall background, street photography style, cool urban vibe",
    },
    {
      tag: "rooftop",
      name: "天台",
      prompt: "on building rooftop, city skyline background, cool breeze, sunset city view, urban explorer",
    },
    {
      tag: "basketball",
      name: "篮球场",
      prompt: "at basketball court, sports atmosphere, athletic energy, basketball hoop in background, sporty",
    },
    {
      tag: "arcade",
      name: "电玩城",
      prompt: "in arcade, neon lights background, game machines, playful fun atmosphere, retro gaming vibes",
    },
    {
      tag: "convenience",
      name: "便利店",
      prompt: "at convenience store, late night setting, warm store lighting, everyday life beauty, relatable",
    },
    {
      tag: "cybercafe",
      name: "网咖",
      prompt: "in internet cafe, computer screen glow, late night gaming setup, gamer boy vibes",
    },
    {
      tag: "rooftop_night",
      name: "夜景天台",
      prompt: "on rooftop at night, city lights below, starry sky, romantic night atmosphere, dreamy",
    },
    {
      tag: "concert",
      name: "演唱会",
      prompt: "at concert, stage lights, music festival atmosphere, excited crowd energy, concert vibes",
    },
  ],

  // 光线库
  lighting: [
    {
      tag: "natural",
      name: "自然光",
      prompt: "natural daylight, soft shadows, clean and fresh, youthful energy, bright and clear",
    },
    {
      tag: "golden",
      name: "黄金时刻",
      prompt: "golden hour sunlight, warm glow, sunset lighting, romantic and warm, perfect golden light",
    },
    {
      tag: "neon",
      name: "霓虹灯",
      prompt: "neon light reflections, colorful urban nightlife, street light glow, modern urban romance",
    },
    {
      tag: "backlit",
      name: "逆光",
      prompt: "backlit by sunset, silhouette with rim light, warm golden glow, dramatic and romantic",
    },
    {
      tag: "flash",
      name: "闪光灯",
      prompt: "studio flash lighting, high key photography, fashion editorial style, clean and striking",
    },
    {
      tag: "blue_hour",
      name: "蓝调时刻",
      prompt: "blue hour lighting, cool blue tones, city night atmosphere, melancholic urban beauty",
    },
  ],

  // 相机角度库
  cameras: [
    {
      tag: "portrait",
      name: "人像",
      prompt: "portrait shot, close-up face, capturing handsome features, direct engaging gaze",
    },
    {
      tag: "full_body",
      name: "全身",
      prompt: "full body shot, street style pose, urban backdrop, cool stance, street photography style",
    },
    {
      tag: "half",
      name: "半身",
      prompt: "half body shot, casual pose, relaxed composition, approachable and cool",
    },
    {
      tag: "candid",
      name: "抓拍",
      prompt: "candid street style shot, natural moment caught, unposed authentic, street photography",
    },
    {
      tag: "dynamic",
      name: "动态",
      prompt: "action shot, jumping or moving, dynamic movement, energetic and lively, captured motion",
    },
    {
      tag: "selfie",
      name: "自拍视角",
      prompt: "selfie angle, holding phone camera, mirror selfie style, relatable and personal",
    },
  ],

  // 默认值
  defaultClothing: "streetwear",
  defaultScene: "street",
  defaultLighting: "natural",
  defaultCamera: "portrait",
};

// 注册
registerCharacterPrompts(guRanLibrary);

export { guRanLibrary };
