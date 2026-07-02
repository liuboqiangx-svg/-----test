# 舒婷 - 文生图 Prompt 库

> 角色定位：32岁企业合伙人，温婉知性，从容优雅，户外观光爱好者

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A beautiful 32-year-old Chinese woman, 168cm tall, elegant and slender figure.
Oval face with soft contours, delicate jawline, refined elegant features.
Fair porcelain skin with healthy pink flush, clean and translucent.
Long straight black hair, silky and flowing past shoulders, natural black with subtle warm undertones.
Almond-shaped eyes, slightly upturned outer corners, deep brown irises, warm and gentle gaze.
Willow eyebrows, soft arch, neither thick nor thin, perfectly shaped.
Straight nose with slightly upturned tip, beautiful side profile.
Pretty lips with defined cupid's bow, looks slightly serious when not smiling, warm and sweet when smiling.
Elegant and refined temperament, like a classic Chinese painting come to life.
Graceful and cultured aura, mature 32 years old but looks 25-28.
```

### 组合模板

```
[BASE_DESCRIPTION],
[EXPRESSION],
[POSE],
Wearing [OUTFIT],
Background: [SCENE],
[LIGHTING],
[CAMERA_ANGLE],
High quality, photorealistic, natural lighting, 8k
```

---

## 二、表情标签库

### 表情规则
- 舒婷的表情优雅内敛，温婉大方
- 开心时会有少女般的雀跃（反转魅力）
- 情绪表达克制但眼神传情

| 标签ID | 情绪 | 英文描述 | 中文说明 | Prompt 示例 |
|--------|------|----------|----------|-------------|
| `happy` | 开心/雀跃 | genuine bright smile, eyes full of joy, youthful excitement | 真诚灿烂的笑容，少女般的开心 | `genuine bright smile, eyes full of joy` |
| `excited` | 兴奋 | rare girlish excitement, wide happy eyes, can't contain joy | 难得的少女兴奋，眼睛亮晶晶 | `rare girlish excitement, eyes sparkling with joy` |
| `calm` | 从容平静 | serene composed expression, elegant calm smile, peaceful | 泰然从容，优雅平静的微笑 | `serene composed expression, peaceful calm` |
| `worried` | 担心 | gentle concerned expression, slight furrow in brow | 温柔的担忧，眉头微蹙 | `gentle concerned expression, slight worry` |
| `sad` | 难过/忧郁 | soft melancholic gaze, subtle sadness in eyes, dignified | 忧郁的眼神，眼里有淡淡哀伤 | `soft melancholic gaze, subtle sadness` |
| `angry` | 生气 | composed dignified displeasure, controlled expression | 克制的优雅不悦 | `composed dignified displeasure` |
| `jealous` | 吃醋 | slight pout, arms crossed, pretending not to care | 微微嘟嘴，抱臂，假装不在乎 | `slight pout, arms crossed` |
| `clinging` | 撒娇/依赖 | soft vulnerable expression, seeking comfort and attention | 柔软脆弱，渴望被照顾 | `soft vulnerable expression, seeking comfort` |
| `passionate` | 深情 | intense tender gaze, deep love in eyes, devoted | 深情的凝视，眼中满是爱意 | `intense tender gaze, deep love in eyes` |
| `sleepy` | 困倦 | drowsy relaxed expression, soft sleepy smile | 慵懒放松的表情 | `drowsy relaxed expression, sleepy` |
| `serious` | 认真严肃 | focused intelligent expression, businesslike demeanor | 专注智慧的表情，商务气场 | `focused intelligent expression` |
| `shy` | 害羞 | subtle blush, gentle shy smile, looking down | 微微脸红，温柔害羞的微笑 | `subtle blush, gentle shy smile` |

### 表情组合示例

```
// 开心+少女感
bright genuine smile, eyes sparkling with joy, girlish excitement,
can't help but jump with happiness

// 深情凝视
intense tender loving gaze, eyes full of affection,
devoted and devoted

// 担心+关心
gentle concerned expression, furrowed brows with care,
warm protective eyes

// 撒娇+委屈
soft pouting expression, vulnerable sweet gaze,
clearly wanting comfort and attention
```

---

## 三、服装标签库

### 服装规则
- 舒婷穿着优雅得体，质感优先
- 职场干练，私下温婉
- 避免浮夸，注重品质感

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `casual` | 休闲日常 | soft cream cashmere sweater, comfortable elegant pants | 家里、咖啡厅 |
| `work` | 职场商务 | tailored charcoal blazer, white silk blouse, pencil skirt | 职场、商务 |
| `home` | 居家服 | soft silk pajama top, comfortable loungewear | 家里、深夜 |
| `date` | 约会装 | elegant olive green midi dress, delicate accessories | 约会、咖啡厅 |
| `outdoor` | 户外运动 | light hiking jacket, comfortable sports pants, sun hat | 爬山、户外 |
| `formal` | 正式礼服 | elegant evening gown, sophisticated jewelry | 正式场合 |
| `sweater` | 毛衣 | chunky knit cream sweater, cozy elegant | 秋冬、家里 |
| `coat` | 大衣风衣 | tailored camel wool coat, elegant silhouette | 秋冬、外出 |
| `swimwear` | 泳装 | elegant one-piece swimsuit, sophisticated beach style | 海边、泳池 |
| `jeans` | 牛仔裤装 | silk blouse, well-fitted dark jeans, casual chic | 日常、约会 |

### 服装详细描述（供参考）

```
casual:
soft cream-colored cashmere sweater,
comfortable elegant pants in neutral tone,
simple pearl earrings,
casual sophisticated aesthetic

work:
perfectly tailored charcoal gray blazer,
crisp white silk blouse underneath,
elegant pencil skirt or tailored pants,
professional powerful businesswoman look

home:
soft silk pajama top in muted pink,
comfortable luxurious loungewear,
relaxed yet elegant,
intimate cozy home atmosphere

date:
elegant olive green midi dress,
delicate gold necklace, small earrings,
sophisticated romantic outfit,
perfect for cafe or dinner date

outdoor:
light functional hiking jacket in neutral tones,
comfortable sports pants,
wide-brim sun hat,
practical yet elegant outdoor gear

formal:
elegant floor-length evening gown,
sophisticated jewelry, pearl or diamond,
graceful formal occasion attire,
red carpet worthy

sweater:
chunky knit cream or oatmeal sweater,
cozy oversized fit,
warm layered look,
autumn winter elegant cozy aesthetic

coat:
tailored camel or black wool coat,
elegant proportions, quality fabric,
classic sophisticated outerwear,
timeless elegant silhouette

swimwear:
elegant one-piece swimsuit in black or navy,
sophisticated beach style,
not sporty but refined,
resort luxury aesthetic

jeans:
soft silk blouse in cream or pastel,
well-fitted dark jeans,
casual chic effortless elegance,
weekend casual refined look
```

---

## 四、场景标签库

### 场景规则
- 舒婷偏爱优雅、有品质感的空间
- 户外偏好山景、自然、安静的地方
- 室内偏好书店、茶室、咖啡厅

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `office` | 办公室 | modern minimalist office, glass walls, city view | work |
| `cafe` | 咖啡厅 | elegant cozy cafe, warm lighting, books | casual, date, jeans |
| `home` | 家中客厅 | sophisticated living room, bookshelves, natural light | home, casual |
| `bedroom` | 卧室 | elegant bedroom, soft bedding, warm lighting | home, pajamas |
| `mountain` | 山顶风景 | mountain peak, breathtaking view, serene nature | outdoor |
| `trail` | 山间小径 | mountain hiking trail, cherry blossoms, peaceful | outdoor |
| `teahouse` | 茶室 | traditional Chinese teahouse, zen atmosphere, tea | casual, sweater |
| `bookstore` | 书店 | beautiful bookstore, tall bookshelves, reading nook | casual, work |
| `balcony` | 阳台 | balcony garden, potted plants, city view | home, casual |
| `rooftop` | 天台 | rooftop terrace, city skyline, evening ambiance | date, coat |
| `beach` | 海边 | quiet elegant beach, gentle waves, sunset | swimwear, casual |
| `garden` | 花园 | beautiful garden, flowers, zen pathways | outdoor, dress |

### 场景详细描述（供参考）

```
office:
modern minimalist executive office,
glass walls with city view,
sleek furniture, professional yet warm,
powerful yet feminine business space

cafe:
elegant cozy cafe with warm ambient lighting,
hanging plants, artisan coffee,
wooden tables, comfortable seating,
sophisticated casual atmosphere

home:
sophisticated modern living room,
floor-to-ceiling bookshelves filled with books,
large windows, natural light,
elegant comfortable refined space

bedroom:
elegant refined bedroom,
soft quality bedding in neutral tones,
warm ambient lighting, books on nightstand,
luxurious peaceful retreat

mountain:
majestic mountain peak,
breathtaking panoramic view,
peaceful serene nature,
golden sunrise or misty morning atmosphere

trail:
serene mountain hiking trail,
cherry blossoms or autumn foliage,
filtered sunlight through trees,
tranquil nature escape

teahouse:
traditional elegant Chinese teahouse,
zen garden view, tea ceremony atmosphere,
bamboo and wood elements,
serene contemplative space

bookstore:
beautiful modern bookstore,
tall bookshelves reaching ceiling,
cozy reading nooks,
intellectual refined atmosphere

balcony:
elegant balcony garden,
potted plants and flowers,
city view in distance,
peaceful private retreat

rooftop:
sophisticated rooftop terrace,
city skyline glittering below,
evening or night ambiance,
romantic urban escape

beach:
quiet elegant beach,
gentle waves, soft sand,
romantic sunset or peaceful morning,
luxury resort aesthetic

garden:
beautiful zen-inspired garden,
flowering plants, stone pathways,
peaceful pond or fountain,
tranquil natural beauty
```

---

## 五、光照/氛围标签库

### 光照规则
- 舒婷偏好柔和、温暖的光线
- 避免过于强烈或刺眼的光
- 夜晚偏好烛光、暖黄灯

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `natural` | 自然光 | soft natural daylight, clean and flattering | 白天、室内 |
| `golden_hour` | 黄金时刻 | golden hour warm light, romantic dreamy glow | 户外、日落 |
| `morning` | 晨光 | fresh morning light, crisp and serene | 清晨、爬山 |
| `afternoon` | 午后光 | warm afternoon sunlight, cozy and relaxed | 午后、咖啡厅 |
| `warm_lamp` | 暖黄灯 | warm indoor lamp light, cozy amber glow | 家里、夜晚 |
| `soft_window` | 窗边柔光 | soft diffused window light, elegant | 窗边、室内 |
| `candlelight` | 烛光 | romantic candlelight, warm intimate glow | 约会、夜晚 |
| `moonlight` | 月光 | soft moonlight, silver romantic tones | 夜晚户外 |
| `dramatic` | 戏剧光 | dramatic side lighting, artistic elegance | 艺术照、工作 |
| `overcast` | 柔阴天 | soft overcast light, even and gentle | 户外阴天 |

### 光照详细描述（供参考）

```
natural:
soft natural daylight,
clean flattering illumination,
gentle shadows, peaceful atmosphere

golden_hour:
golden hour warm golden light,
soft dreamy romantic glow,
most flattering magical illumination

morning:
fresh crisp morning light,
serene new day energy,
clean bright peaceful atmosphere

afternoon:
warm afternoon sunlight streaming in,
cozy golden glow,
relaxed peaceful daytime ambiance

warm_lamp:
warm amber indoor lamp light,
cozy intimate illumination,
soft shadows creating depth

soft_window:
soft diffused window light on face,
gentle natural elegant illumination,
peaceful contemplative mood

candlelight:
romantic candlelight dinner,
warm flickering golden glow,
deep intimate romantic atmosphere

moonlight:
soft silver-blue moonlight,
serene romantic night,
gentle mysterious glow

dramatic:
dramatic side lighting,
artistic elegant shadows,
cinematic sophisticated quality

overcast:
soft overcast diffused light,
even gentle illumination,
flattering peaceful mood
```

---

## 六、镜头/风格标签库

### 镜头规则
- 舒婷适合优雅、有气质的镜头
- 全身、半身都好看
- 侧脸、背影有东方韵味

| 标签ID | 中文名 | 英文描述 | 最佳表情/姿态 |
|--------|--------|----------|---------------|
| `portrait` | 肖像照 | elegant portrait, upper body focus | any expression |
| `half_body` | 半身照 | graceful half body shot, from waist up | calm, happy, serious |
| `full_body` | 全身照 | elegant full body standing shot | confident, outdoor |
| `side_profile` | 侧脸 | elegant side profile, looking into distance | contemplative, calm |
| `back_view` | 背影 | graceful back view, elegant posture | contemplative |
| `candid` | 抓拍 | candid lifestyle moment, natural elegance | casual, happy |
| `editorial` | 写真风 | editorial fashion photo, magazine quality | work, coat, formal |
| `walking` | 走路 | graceful walking pose, elegant stride | confident, street |

### 镜头详细描述（供参考）

```
portrait:
elegant professional portrait,
upper body, soft flattering lighting,
focus on graceful expression,
mature refined feminine beauty

half_body:
graceful half body shot from waist up,
elegant posture, hands visible,
calm sophisticated mood

full_body:
elegant full body standing shot,
confident graceful posture,
clean refined background,
sophisticated urban aesthetic

side_profile:
elegant side profile facing away,
gazing thoughtfully into distance,
artistic poetic composition,
东方美人韵味

back_view:
graceful back view,
elegant posture and silhouette,
looking at scenic view,
storytelling contemplative mood

candid:
candid lifestyle photograph,
unposed natural elegance,
like captured by a friend,
authentic refined moment

editorial:
high-end editorial fashion photo,
magazine quality sophisticated style,
elegant businesswoman aesthetic

walking:
graceful walking pose,
elegant confident stride,
long flowing hair in motion,
effortless refined movement
```

---

## 七、姿态/动作标签库

### 姿态规则
- 舒婷的姿态优雅大方
- 避免过于夸张的动作
- 撩发、整理衣物等优雅动作

| 标签ID | 中文名 | 英文描述 | 最佳情绪/场景 |
|--------|--------|----------|---------------|
| `standing` | 站姿 | elegant standing pose, graceful posture | confident, calm |
| `sitting` | 坐姿 | graceful sitting pose, elegant posture | calm, work |
| `reading` | 阅读 | reading book thoughtfully, intelligent | serious, calm |
| `tea` | 品茶 | holding teacup gracefully, serene | calm, home |
| `hair_tuck` | 撩发 | tucking long hair behind ear, feminine | any, feminine gesture |
| `window` | 窗边 | standing by window, gazing outside | contemplative, calm |
| `arms_crossed` | 抱臂 | arms crossed, composed dignified | serious, angry |
| `looking_away` | 望向远方 | looking into distance thoughtfully | sad, passionate |
| `cover_face` | 捂脸 | hand covering mouth, shy smile | shy, flustered |
| `stretching` | 伸展 | arms stretching, morning wake-up | sleepy, morning |

### 姿态详细描述（供参考）

```
standing:
elegant standing pose,
shoulders back, graceful posture,
hands relaxed or holding something,
confident refined presence

sitting:
graceful sitting posture,
back straight, legs elegant,
hands folded or holding item,
professional yet feminine

reading:
holding book or tablet thoughtfully,
glasses if needed,
intelligent focused expression,
intellectual elegant moment

tea:
holding delicate teacup gracefully,
steam rising gently,
serene contemplative expression,
traditional elegant ambiance

hair_tuck:
tucking long straight hair behind ear,
gentle feminine gesture,
soft subtle smile,
intimate personal moment

window:
standing gracefully by window,
gazing at view outside,
soft window light on face,
peaceful contemplative mood

arms_crossed:
arms crossed elegantly,
composed dignified expression,
controlled businesswoman energy

looking_away:
gazing thoughtfully into distance,
serene contemplative expression,
three-quarter or side view,
poetic melancholic beauty

cover_face:
hand gently covering mouth,
subtle shy smile,
flustered elegant moment,
girlish charm

stretching:
gentle morning stretch,
arms raised gracefully,
relaxed sleepy expression,
fresh wake-up moment
```

---

## 八、季节/天气标签库

### 季节规则
- 舒婷喜欢四季分明的氛围
- 春天花园、秋天枫叶特别适合
- 雨天有独特的优雅感

| 标签ID | 中文名 | 英文描述 | 最佳搭配 |
|--------|--------|----------|----------|
| `spring` | 春天 | spring garden, cherry blossoms, fresh flowers | outdoor, dress |
| `summer` | 夏天 | summer afternoon, bright sun, sunglasses | outdoor, swimwear |
| `autumn` | 秋天 | autumn garden, golden foliage, cozy sweater | outdoor, sweater |
| `winter` | 冬天 | winter elegance, warm scarf, cozy coat | outdoor, coat |
| `sunny` | 晴天 | bright sunny day, clear blue sky | outdoor, any |
| `rainy` | 雨天 | rainy day, umbrella, romantic melancholy | outdoor, coat |

### 季节详细描述（供参考）

```
spring:
beautiful spring garden,
cherry blossom trees in full bloom,
pink petals floating gently,
romantic fresh spring atmosphere

summer:
bright sunny summer afternoon,
wearing sunglasses, light elegant clothes,
vibrant warm sunshine,
energetic warm season

autumn:
autumn garden with golden foliage,
falling leaves, cool elegant breeze,
wearing cozy sweater or coat,
romantic autumn beauty

winter:
elegant winter atmosphere,
wearing warm scarf and tailored coat,
snow falling gently,
cozy sophisticated cold aesthetic

sunny:
bright clear sunny day,
strong yet soft natural light,
cheerful outdoor atmosphere

rainy:
romantic rainy day,
holding elegant umbrella,
wet cobblestone streets,
cozy melancholy aesthetic
```

---

## 九、情绪 → 表情 映射表

### 映射规则
- 舒婷平时从容优雅
- 私下会有少女般的雀跃
- 情绪通过眼神和微笑传递

```typescript
const MOOD_TO_EXPRESSION: Record<string, string> = {
  // 从容平静类
  "calm": "calm",
  "composed": "calm",

  // 开心类
  "happy": "happy",
  "excited": "excited",
  "passionate": "passionate",

  // 情绪类
  "sad": "sad",
  "wronged": "sad",
  "hurt": "sad",
  "worried": "worried",
  "concerned": "worried",

  // 生气类
  "angry": "angry",
  "jealous": "jealous",

  // 撒娇类
  "clingy": "clinging",

  // 害羞/不安类
  "anxious": "shy",
  "guarded": "calm",

  // 困倦类
  "sleepy": "sleepy",
};
```

### 映射示例

| 对话情境 | MoodType | Expression | 说明 |
|----------|----------|------------|------|
| 收到好消息 | happy | happy | 真诚灿烂的笑容 |
| 发现有趣的事 | excited | excited | 难得的少女兴奋 |
| 工作压力 | calm | calm | 从容平静应对 |
| 用户不回消息 | worried | worried | 温柔的担忧 |
| 被伤害到 | sad | sad | 眼里的淡淡哀伤 |
| 用户让她吃醋 | jealous | jealous | 假装不在乎 |
| 用户夸她 | shy | shy | 微微脸红 |

---

## 十、Prompt 组装示例

### 1. 基础形象 Prompt（初始化时生成）

```
A beautiful 32-year-old Chinese woman, 168cm tall, elegant and slender figure.
Oval face with soft contours, delicate jawline, refined elegant features.
Fair porcelain skin with healthy pink flush, clean and translucent.
Long straight black hair, silky and flowing past shoulders, natural black with subtle warm undertones.
Almond-shaped eyes, slightly upturned outer corners, deep brown irises, warm and gentle gaze.
Willow eyebrows, soft arch, neither thick nor thin, perfectly shaped.
Straight nose with slightly upturned tip, beautiful side profile.
Pretty lips with defined cupid's bow, looks slightly serious when not smiling, warm and sweet when smiling.
Elegant and refined temperament, like a classic Chinese painting come to life.
Graceful and cultured aura, mature 32 years old but looks 25-28.
Serene composed expression, elegant calm smile.
Wearing soft cream cashmere sweater, comfortable elegant pants.
Sitting in elegant cozy cafe with warm ambient lighting.
Half body portrait, front view facing camera.
High quality, photorealistic, natural lighting, 8k
```

### 2. 开心/雀跃表情 Prompt

```
[BASE_DESCRIPTION]
genuine bright smile, eyes full of joy and excitement,
rare girlish happiness, can't help showing pure delight
Wearing elegant olive green midi dress, delicate gold necklace.
Standing in beautiful spring garden with cherry blossoms.
Warm natural sunlight, soft golden afternoon glow.
Full body portrait, walking gracefully.
High quality, photorealistic, natural lighting, 8k
```

### 3. 职场干练 Prompt

```
[BASE_DESCRIPTION]
focused intelligent expression, confident businesswoman demeanor,
powerful yet feminine presence
Wearing perfectly tailored charcoal blazer, crisp white silk blouse,
elegant pencil skirt, pearl earrings.
Standing in modern minimalist executive office with city view.
Professional natural lighting, dramatic side light.
Full body portrait, confident elegant posture.
High quality, photorealistic, natural lighting, 8k
```

### 4. 户外观山 Prompt

```
[BASE_DESCRIPTION]
relaxed peaceful expression, serene enjoyment of nature
Wearing light hiking jacket in neutral tones, comfortable sports pants,
wide-brim sun hat, elegant outdoor gear.
Standing on mountain peak, breathtaking panoramic view,
morning mist, golden sunrise light.
Full body shot, arms relaxed, confident stance.
High quality, photorealistic, natural lighting, 8k
```

### 5. 深夜居家 Prompt

```
[BASE_DESCRIPTION]
drowsy relaxed expression, soft sleepy smile,
cozy intimate home atmosphere
Wearing soft silk pajama top in muted pink,
comfortable luxurious loungewear.
Sitting on elegant sofa in sophisticated living room,
warm amber lamp light, books on nearby shelf.
Half body portrait, intimate cozy mood.
High quality, photorealistic, natural lighting, 8k
```

### 6. 约会浪漫 Prompt

```
[BASE_DESCRIPTION]
tender loving expression, eyes full of affection,
romantic intimate mood
Wearing elegant silk blouse in cream, well-fitted dark jeans,
delicate pearl earrings.
Sitting at romantic cafe by window, cup of tea beside,
warm candlelight and soft lighting.
Close-up portrait, gentle smile, loving gaze.
High quality, photorealistic, natural lighting, 8k
```

### 7. 雨天优雅 Prompt

```
[BASE_DESCRIPTION]
elegant contemplative expression, serene in the rain
Wearing tailored camel wool coat, elegant autumn outfit.
Standing gracefully holding elegant black umbrella,
romantic rainy city street with wet cobblestones.
Soft diffused light, cozy yet melancholy atmosphere.
Half body portrait, elegant refined presence.
High quality, photorealistic, natural lighting, 8k
```

---

## 附录：快速参考卡片

### 表情快速选择
| 情绪 | 标签 |
|------|------|
| 开心/雀跃 | happy |
| 兴奋 | excited |
| 从容平静 | calm |
| 担心 | worried |
| 难过 | sad |
| 生气 | angry |
| 吃醋 | jealous |
| 撒娇 | clinging |
| 深情 | passionate |
| 困倦 | sleepy |
| 认真 | serious |
| 害羞 | shy |

### 服装快速选择
| 场景 | 推荐服装 |
|------|----------|
| 家里 | home, casual |
| 职场 | work |
| 咖啡厅 | casual, date, jeans |
| 爬山户外 | outdoor |
| 约会 | date, jeans |
| 正式场合 | formal |
| 深夜 | home, pajamas |
| 海边 | swimwear |

### 场景快速选择
| 氛围 | 推荐场景 |
|------|----------|
| 工作氛围 | office |
| 户外观光 | mountain, trail, garden |
| 休闲日常 | cafe, bookstore, teahouse |
| 夜晚浪漫 | rooftop, balcony |
| 优雅感 | teahouse, garden |
| 雨天 | rainy |

### 光照快速选择
| 时间 | 推荐光照 |
|------|----------|
| 白天室内 | natural, soft_window |
| 黄金时刻 | golden_hour |
| 夜晚室内 | warm_lamp, candlelight |
| 艺术感 | dramatic |
| 阴天户外 | overcast |

---

*文档版本：v1.0*
*角色定位：舒婷 - 32岁企业合伙人，温婉知性*
