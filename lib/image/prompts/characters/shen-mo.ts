/**
 * 沈墨 - Prompt 片段库
 *
 * 角色定位：34岁建筑师，沉稳内敛，温柔深沉，户外爬山爱好者
 */

import {
  registerCharacterPrompts,
  type CharacterPromptLibrary,
} from "../registry";

/**
 * 沈墨 Prompt 库
 */
const shenMoLibrary: CharacterPromptLibrary = {
  id: "shen-mo",
  name: "沈墨",
  description: "34岁建筑师，沉稳内敛，温柔深沉，户外爬山爱好者",

  // 固定人设
  baseDescription: `A handsome 34-year-old Chinese man, 183cm tall, lean and well-proportioned figure.
Angular yet refined face with clean jawline, sculptural side profile.
Fair clean skin with subtle healthy tan from outdoor work.
Short black hair, naturally parted or slightly tousled, clean and neat.
Single eyelid or inner double eyelid, slightly drooping outer corners, deep black irises, quiet and focused gaze.
Clean eyebrows, neither thick nor thin, slightly furrowed when thinking.
High straight nose with slightly tapered tip, beautiful side profile.
Thin lips, looks restrained when not smiling, gentle subtle smile when happy.
Calm and introverted temperament, like a warm cup of tea, quiet but hard to ignore presence.
Mature and refined aura, 34 years old but looks early 30s.`,

  // 表情库
  expressions: [
    {
      mood: "happy",
      description: "开心/浅笑",
      prompt: "gentle subtle smile, eyes crinkling slightly at corners, quiet joy, warm gaze",
      englishDescription: "gentle subtle smile, eyes crinkling slightly",
    },
    {
      mood: "excited",
      description: "兴奋",
      prompt: "rare genuine wide smile, eyes bright with excitement, rarely showing such emotion",
      englishDescription: "rare genuine wide smile, eyes bright with excitement",
    },
    {
      mood: "calm",
      description: "从容平静",
      prompt: "relaxed calm expression, peaceful serene gaze, composed, quiet confidence",
      englishDescription: "relaxed calm expression, peaceful serene gaze",
    },
    {
      mood: "worried",
      description: "担心",
      prompt: "concerned furrowed brows, gentle worried eyes, subtle care visible",
      englishDescription: "concerned furrowed brows, gentle worried expression",
    },
    {
      mood: "sad",
      description: "难过/忧伤",
      prompt: "soft melancholic smile, distant contemplative gaze, deep thoughts in eyes",
      englishDescription: "soft melancholic smile, distant gaze",
    },
    {
      mood: "angry",
      description: "生气",
      prompt: "cold restrained expression, firm jaw, serious gaze, controlled anger",
      englishDescription: "cold restrained expression, firm jaw",
    },
    {
      mood: "jealous",
      description: "吃醋",
      prompt: "slight pout, looking away, pretending not to care, hiding true feelings",
      englishDescription: "slight pout, looking away",
    },
    {
      mood: "clingy",
      description: "撒娇/依赖",
      prompt: "vulnerable soft expression, seeking comfort, rare moment of openness",
      englishDescription: "vulnerable soft expression, seeking comfort",
    },
    {
      mood: "passionate",
      description: "深情",
      prompt: "intense affectionate gaze, devoted loving eyes, deep emotion barely contained",
      englishDescription: "intense affectionate gaze, devoted eyes",
    },
    {
      mood: "sleepy",
      description: "困倦",
      prompt: "drowsy tired eyes, relaxed sleepy expression, soft vulnerable look",
      englishDescription: "drowsy tired eyes, relaxed expression",
    },
    {
      mood: "serious",
      description: "认真严肃",
      prompt: "focused penetrating gaze, thoughtful expression, architect's concentration",
      englishDescription: "focused penetrating gaze, thoughtful",
    },
    {
      mood: "shy",
      description: "害羞",
      prompt: "slight blush, looking down shyly, reserved smile, rare flustered moment",
      englishDescription: "slight blush, looking down shyly",
    },
  ],

  // 服装库
  clothing: [
    {
      tag: "casual",
      name: "休闲日常",
      prompt: "wearing soft gray cashmere sweater, comfortable pants, minimal design, casual refined",
    },
    {
      tag: "home",
      name: "居家服",
      prompt: "wearing simple white T-shirt, loose knit cardigan, cozy home atmosphere",
    },
    {
      tag: "work",
      name: "职场衬衫",
      prompt: "wearing perfectly tailored dark navy shirt, sleeves casually rolled up, professional architect style",
    },
    {
      tag: "formal",
      name: "正装西服",
      prompt: "wearing well-fitted dark charcoal suit, minimalist design, elegant and sophisticated",
    },
    {
      tag: "outdoor",
      name: "户外爬山",
      prompt: "wearing light hiking jacket in earth tones, comfortable sports pants, baseball cap, outdoor adventurer",
    },
    {
      tag: "jeans",
      name: "牛仔裤白衬衫",
      prompt: "wearing crisp white linen shirt, dark well-fitted jeans, casual elegant date look",
    },
    {
      tag: "turtleneck",
      name: "高领毛衣",
      prompt: "wearing classic black turtleneck sweater, sophisticated minimalist aesthetic, intellectual vibe",
    },
    {
      tag: "coat",
      name: "大衣外套",
      prompt: "wearing tailored wool overcoat in camel, clean lines, elegant autumn winter outerwear",
    },
  ],

  // 场景库
  scenes: [
    {
      tag: "mountain",
      name: "山顶",
      prompt: "standing on mountain summit, vast mountain vista behind, peaceful yet powerful presence, nature and man",
    },
    {
      tag: "studio",
      name: "工作室",
      prompt: "in minimalist architect studio, blueprint drawings nearby, creative workspace, intellectual atmosphere",
    },
    {
      tag: "cafe",
      name: "咖啡厅",
      prompt: "in quiet elegant cafe, holding coffee cup, contemplative mood, sophisticated ambiance",
    },
    {
      tag: "library",
      name: "书房",
      prompt: "in private study, bookshelves in background, intellectual atmosphere, focused and refined",
    },
    {
      tag: "rooftop",
      name: "天台",
      prompt: "on building rooftop, city skyline at dusk, urban landscape below, contemplative man at rest",
    },
    {
      tag: "forest",
      name: "森林",
      prompt: "in quiet forest, sunlight filtering through trees, man in harmony with nature, peaceful solitude",
    },
    {
      tag: "bridge",
      name: "桥上",
      prompt: "standing on elegant bridge, architectural structure behind, city lights in distance, sophisticated urban",
    },
    {
      tag: "sunset",
      name: "日落",
      prompt: "silhouette against golden sunset, warm evening light, romantic and contemplative, peaceful moment",
    },
  ],

  // 光线库
  lighting: [
    {
      tag: "natural",
      name: "自然光",
      prompt: "natural window light, soft shadows, clean and sophisticated, natural elegance",
    },
    {
      tag: "golden",
      name: "黄金时刻",
      prompt: "warm golden hour lighting, sunset glow, romantic and warm atmosphere",
    },
    {
      tag: "soft",
      name: "柔和光",
      prompt: "soft diffused lighting, gentle shadows, portrait quality, flattering and refined",
    },
    {
      tag: "blue_hour",
      name: "蓝调时刻",
      prompt: "blue hour lighting, cool tones, urban sophistication, melancholic beauty",
    },
    {
      tag: "studio",
      name: "棚灯",
      prompt: "professional studio lighting, clean background, dramatic portrait, sophisticated",
    },
    {
      tag: "window",
      name: "窗光",
      prompt: "dramatic window light, side lighting, artistic shadows, contemplative mood",
    },
  ],

  // 相机角度库
  cameras: [
    {
      tag: "portrait",
      name: "人像",
      prompt: "portrait shot, close-up face, capturing expression and eyes, intimate and revealing",
    },
    {
      tag: "side_profile",
      name: "侧脸",
      prompt: "side profile shot, sculptural face highlighted, architectural quality, artistic composition",
    },
    {
      tag: "half",
      name: "半身",
      prompt: "half body shot, waist up, balanced composition, confident and composed",
    },
    {
      tag: "full_body",
      name: "全身",
      prompt: "full body shot, showing posture and presence, commanding yet relaxed",
    },
    {
      tag: "three_quarter",
      name: "三分侧",
      prompt: "three-quarter angle, classic portrait composition, mysterious and intriguing",
    },
    {
      tag: "from_below",
      name: "仰拍",
      prompt: "shot from below looking up, powerful presence, imposing and confident",
    },
  ],

  // 默认值
  defaultClothing: "casual",
  defaultScene: "cafe",
  defaultLighting: "natural",
  defaultCamera: "portrait",
};

// 注册
registerCharacterPrompts(shenMoLibrary);

export { shenMoLibrary };
