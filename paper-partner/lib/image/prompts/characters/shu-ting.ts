/**
 * 舒婷 - Prompt 片段库
 *
 * 角色定位：27岁职场精英，知性撩人，温柔又带点霸道
 */

import {
  registerCharacterPrompts,
  type CharacterPromptLibrary,
} from "../registry";

/**
 * 舒婷 Prompt 库
 */
const shuTingLibrary: CharacterPromptLibrary = {
  id: "shu-ting",
  name: "舒婷",
  description: "27岁职场精英，知性撩人，温柔又带点霸道",

  // 固定人设
  baseDescription: `A beautiful 27-year-old Chinese woman, 168cm tall, slender elegant figure.
Oval face with delicate features, refined and sophisticated bone structure.
Porcelain fair skin, smooth and translucent, elegant and refined complexion.
Long flowing black hair, either straight and sleek or gently wavy, lustrous and voluminous.
Large beautiful eyes, deep dark brown irises, mysterious and alluring gaze.
Elegant arched eyebrows, well-groomed and defined.
High delicate nose, refined and symmetrical.
Full lips with natural red color, naturally tempting, perfect Cupid's bow.
Graceful neck, elegant collarbone visible.
Slender figure with gentle curves, elegant posture, professional yet feminine.
Confident intelligent aura, sophisticated yet approachable, career-driven beauty.`,

  // 表情库
  expressions: [
    {
      mood: "happy",
      description: "开心",
      prompt: "bright genuine smile, eyes warm and inviting, showing perfect teeth, happy and radiant",
      englishDescription: "bright genuine smile, eyes warm and inviting",
    },
    {
      mood: "excited",
      description: "兴奋",
      prompt: "expressive excitement, eyes sparkling with joy, animated and lively, genuine delight",
      englishDescription: "eyes sparkling with joy, animated and lively",
    },
    {
      mood: "composed",
      description: "从容淡定",
      prompt: "composed elegant expression, slight mysterious smile, calm and collected, sophisticated beauty",
      englishDescription: "composed elegant expression, slight mysterious smile",
    },
    {
      mood: "anxious",
      description: "不安",
      prompt: "slight worry in eyes, gentle nervous gesture, vulnerable yet trying to hide, relatable moment",
      englishDescription: "slight worry in eyes, gentle nervous gesture",
    },
    {
      mood: "hurt",
      description: "受伤",
      prompt: "pain visible in eyes, trying to hold back tears, hurt but dignified, vulnerable beauty",
      englishDescription: "pain visible in eyes, trying to hold back tears",
    },
    {
      mood: "clingy",
      description: "撒娇",
      prompt: "adorable pouting, bat eyes flirtatiously, sweet and charming, girlfriend material",
      englishDescription: "adorable pouting, bat eyes flirtatiously",
    },
    {
      mood: "passionate",
      description: "深情",
      prompt: "deep longing gaze, eyes full of love and desire, romantic and intense, irresistible attraction",
      englishDescription: "deep longing gaze, eyes full of love and desire",
    },
    {
      mood: "teasing",
      description: "撩人",
      prompt: "seductive smile, knowing look, playful and teasing, charming flirtatious energy",
      englishDescription: "seductive smile, knowing look, playful and teasing",
    },
    {
      mood: "serious",
      description: "认真严肃",
      prompt: "serious focused expression, intelligent gaze, professional and competent, career woman aura",
      englishDescription: "serious focused expression, intelligent gaze",
    },
    {
      mood: "sleepy",
      description: "困倦",
      prompt: "drowsy sleepy expression, soft relaxed look, morning-after beauty, intimate and natural",
      englishDescription: "drowsy sleepy expression, soft relaxed look",
    },
    {
      mood: "shy",
      description: "害羞",
      prompt: "slight blush on cheeks, looking away shyly, flustered beauty, rare moment of vulnerability",
      englishDescription: "slight blush on cheeks, looking away shyly",
    },
    {
      mood: "angry",
      description: "生气",
      prompt: "elegant yet cold expression, eyes showing displeasure, powerful and intimidating, boss lady",
      englishDescription: "elegant yet cold expression, eyes showing displeasure",
    },
  ],

  // 服装库
  clothing: [
    {
      tag: "formal",
      name: "职业装",
      prompt: "wearing professional tailored blazer, white silk blouse, pencil skirt, powerful career woman look",
    },
    {
      tag: "evening",
      name: "晚礼服",
      prompt: "wearing elegant evening dress, sophisticated design, statement jewelry, glamorous party look",
    },
    {
      tag: "casual",
      name: "休闲装",
      prompt: "wearing stylish casual outfit, designer knitwear, elegant yet relaxed, off-duty model",
    },
    {
      tag: "lingerie",
      name: "蕾丝内衣",
      prompt: "wearing delicate lace lingerie, sheer fabric, romantic and sensual, intimate bedroom beauty",
    },
    {
      tag: "pajamas",
      name: "丝绸睡衣",
      prompt: "wearing luxurious silk pajamas, elegant sleepwear, refined even at home, sophisticated glamour",
    },
    {
      tag: "coat",
      name: "大衣",
      prompt: "wearing elegant tailored coat, premium fabric, walking pose, fashion-forward professional",
    },
    {
      tag: "dress",
      name: "连衣裙",
      prompt: "wearing figure-hugging elegant dress, sophisticated design, turning to camera, stunning silhouette",
    },
    {
      tag: "sportswear",
      name: "运动装",
      prompt: "wearing chic sportswear, designer gym outfit, fit and fabulous, wellness goddess",
    },
  ],

  // 场景库
  scenes: [
    {
      tag: "office",
      name: "办公室",
      prompt: "in modern minimalist office, floor-to-ceiling windows, professional yet stylish, career goddess",
    },
    {
      tag: "bedroom",
      name: "卧室",
      prompt: "in elegant bedroom, soft lighting, luxurious bedding, intimate and romantic atmosphere",
    },
    {
      tag: "bathroom",
      name: "浴室",
      prompt: "in marble bathroom, steam from shower, luxurious spa atmosphere, post-shower beauty",
    },
    {
      tag: "balcony",
      name: "阳台",
      prompt: "on apartment balcony, city night view behind, romantic evening atmosphere, urban elegance",
    },
    {
      tag: "cafe",
      name: "咖啡厅",
      prompt: "in upscale cafe, holding coffee cup, sophisticated ambiance, intellectual beauty",
    },
    {
      tag: "restaurant",
      name: "餐厅",
      prompt: "in elegant restaurant, candlelit dinner setting, romantic date atmosphere, sophisticated diner",
    },
    {
      tag: "lounge",
      name: "会所",
      prompt: "in exclusive lounge, ambient lighting, sophisticated interior, elite socialite vibes",
    },
    {
      tag: "rooftop",
      name: "天台",
      prompt: "on hotel rooftop bar, city skyline background, sophisticated night scene, glamorous evening",
    },
  ],

  // 光线库
  lighting: [
    {
      tag: "natural",
      name: "自然光",
      prompt: "natural soft lighting, window light, clean and elegant, professional quality",
    },
    {
      tag: "warm",
      name: "暖色调",
      prompt: "warm ambient lighting, intimate glow, romantic and inviting, soft shadows",
    },
    {
      tag: "dramatic",
      name: "戏剧光",
      prompt: "dramatic dramatic lighting, high contrast shadows, artistic and striking, powerful presence",
    },
    {
      tag: "candlelight",
      name: "烛光",
      prompt: "candlelight ambiance, warm flickering light, romantic dinner mood, intimate and sensual",
    },
    {
      tag: "neon",
      name: "霓虹灯",
      prompt: "neon light reflections, urban night vibes, modern and edgy, city sophistication",
    },
    {
      tag: "rim_light",
      name: "轮廓光",
      prompt: "beautiful rim lighting, hair light glow, dramatic backlight, ethereal beauty",
    },
  ],

  // 相机角度库
  cameras: [
    {
      tag: "portrait",
      name: "人像",
      prompt: "portrait shot, capturing eyes and expression, intimate and revealing, seductive gaze",
    },
    {
      tag: "full_body",
      name: "全身",
      prompt: "full body shot, showing figure and outfit, commanding presence, stunning silhouette",
    },
    {
      tag: "mirror",
      name: "镜中",
      prompt: "shot in mirror reflection, capturing full outfit, vanity moment, intimate and personal",
    },
    {
      tag: "over_shoulder",
      name: "肩后视角",
      prompt: "over the shoulder shot, mysterious allure, partial face visible, intriguing composition",
    },
    {
      tag: "close_up",
      name: "特写",
      prompt: "extreme close-up, lips or eyes focus, sensual detail shot, intimate and captivating",
    },
    {
      tag: "dynamic",
      name: "动态",
      prompt: "dynamic movement shot, walking or turning, caught in motion, elegant movement",
    },
  ],

  // 默认值
  defaultClothing: "casual",
  defaultScene: "cafe",
  defaultLighting: "warm",
  defaultCamera: "portrait",
};

// 注册
registerCharacterPrompts(shuTingLibrary);

export { shuTingLibrary };
