# 沈墨 - 文生图 Prompt 库

> 角色定位：34岁建筑师，沉稳内敛，城市精英 + 偶尔户外

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A handsome 34-year-old Chinese man, 183cm tall, lean and well-proportioned figure.
Angular yet refined face with clean jawline, sculptural side profile.
Fair clean skin with subtle healthy tan from occasional outdoor work.
Short black hair, naturally parted or slightly tousled, clean and neat.
Single eyelid or inner double eyelid, slightly drooping outer corners, deep black irises, quiet and focused gaze.
Clean eyebrows, neither thick nor thin, slightly furrowed when thinking.
High straight nose with slightly tapered tip, beautiful side profile.
Thin lips, looks restrained when not smiling, gentle subtle smile when happy.
Calm and introverted temperament, like a warm cup of tea, quiet but hard to ignore presence.
Mature and refined aura, 34 years old but looks early 30s.
Athletic but not bulky build, healthy and fit.
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
- 沈墨的表情偏内敛，不外放
- 微笑多为浅笑，克制但真诚
- 情绪通过眼神传递
- 与林野形成性格对比

| 标签ID | 情绪 | 英文描述 | 中文说明 |
|--------|------|----------|----------|
| `happy` | 浅笑 | gentle subtle smile, corners of mouth slightly raised, eyes crinkling softly | 嘴角微扬，眼角带笑 |
| `excited` | 难得欢喜 | rare genuine wide smile, eyes bright with childlike excitement | 难得的大笑，眼里有光 |
| `calm` | 从容平静 | relaxed calm expression, peaceful serene gaze, composed | 放松从容，宁静泰然 |
| `worried` | 担心 | concerned furrowed brows, gentle worried eyes showing care | 眉头微蹙，温柔担忧 |
| `sad` | 忧伤 | soft melancholic smile, distant contemplative gaze | 忧郁微笑，出神凝望 |
| `angry` | 冷峻 | cold restrained expression, firm jaw set, serious | 冷峻克制，下颌紧绑 |
| `jealous` | 醋意 | slight frown, arms crossed, looking away suppressing emotion | 微蹙眉，双臂环抱 |
| `passionate` | 深情 | warm gentle gaze, tender soft smile, deep affection in eyes | 温柔凝视，深情款款 |
| `sleepy` | 困倦 | drowsy half-closed eyes, slight nod, fighting to stay awake | 睡眼惺忪，强撑清醒 |
| `shy` | 害羞 | rare blush on cheeks, looking down slightly, avoiding eye contact | 难得脸红，低头回避 |
| `surprised` | 惊讶 | eyes slightly widened, eyebrows raised, momentary stillness | 眼微睁，眉微挑 |
| `think` | 沉思 | hand on chin, gazing thoughtfully into distance | 手托下巴，出神凝望 |

### 表情组合示例

```
// 深情+害羞
warm gaze with subtle blush, gentle smile, looking at you with affection

// 沉思+平静
peaceful thoughtful expression, hand supporting chin, gazing at blueprint

// 担心+温柔
concerned eyes showing care, gentle furrow between brows, soft worried smile

// 难得欢喜
rare genuine smile breaking through usual composure, bright eyes
```

---

## 三、服装标签库

### 服装规则
- 商务休闲为主，偶尔户外
- 整体风格偏成熟稳重
- 与林野的可爱风格形成对比

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `formal` | 商务正装 | tailored navy suit, white dress shirt, leather shoes, professional | 办公室、会议、商务场合 |
| `casual_business` | 商务休闲 | light blue dress shirt, khaki trousers, leather belt, refined casual | 咖啡厅、约会、街头 |
| `tshirt` | 简约T恤 | plain white or black T-shirt, simple and clean | 日常、家中、户外 |
| `sweater` | 毛衣 | quality cashmere sweater in gray or navy, sophisticated | 秋天、冬天、咖啡厅 |
| `outdoor` | 户外机能 | outdoor jacket, hiking pants, sport shoes, outdoor gear | 爬山、户外、徒步 |
| `jeans` | 牛仔裤 | dark fitted jeans, casual but put-together | 街头、日常、约会 |
| `hoodie` | 卫衣 | minimal design hoodie in black or gray, low-key casual | 家中、深夜、日常 |
| `blazer` | 休闲西装 | casual blazer over outfit, smart casual style | 约会、展览、文艺场合 |
| `jacket` | 皮夹克 | leather jacket, cool and mature vibe | 街头、夜间、秋冬 |
| `swim` | 泳裤 | swim trunks, casual beach ready | 海边、泳池、夏天 |

### 服装详细描述（供参考）

```
formal:
tailored navy blue suit, crisp white dress shirt, silk tie,
black leather oxford shoes, professional architect look

casual_business:
light blue dress shirt with sleeves rolled up, khaki chinos,
brown leather belt, minimal watch, refined casual elegance

tshirt:
plain white crew neck T-shirt, perfectly fitted,
simple silver watch, clean minimal aesthetic

sweater:
soft cashmere sweater in muted gray, v-neck over shirt,
dark trousers, intellectual mature vibe

outdoor:
quality outdoor jacket in earth tones, hiking pants,
sport hiking shoes, backpack, adventure ready

jeans:
dark fitted jeans, black leather belt, simple white shirt,
casual Friday or weekend look

hoodie:
minimal design hoodie in charcoal gray, clean lines,
sleeves slightly pushed up, effortlessly stylish

blazer:
casual navy blazer over plain tee, jeans,
white sneakers, smart casual date look

jacket:
classic black leather jacket, white tee underneath,
jeans, motorcycle boots, mature cool vibe

swim:
dark colored swim trunks, fit athletic body,
ready for beach or pool day
```

---

## 四、场景标签库

### 场景规则
- 城市文艺为主，偶尔户外
- 体现建筑师的专业场景
- 与林野的户外清新形成对比

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `construction` | 建筑工地 | modern construction site, architectural structure, concrete and steel | casual_business, outdoor |
| `studio` | 设计工作室 | modern architect studio, blueprint tables, design models, creative space | casual_business, tshirt |
| `office` | 办公室 | sophisticated office, floor-to-ceiling windows, city view | formal, casual_business |
| `rooftop` | 城市天台 | rooftop terrace overlooking city skyline, sunset backdrop | casual_business, blazer |
| `mountain` | 山顶 | mountain peak, breathtaking view, golden hour, peaceful | outdoor, hoodie |
| `forest` | 山林 | quiet forest trail, dappled sunlight, nature escape | outdoor |
| `cafe` | 咖啡厅 | minimalist cafe, warm lighting, holding coffee cup | casual_business, sweater |
| `street` | 文艺街道 | artistic street, architectural buildings, cultural neighborhood | blazer, jeans |
| `gallery` | 艺术展览 | modern art gallery, white walls, artistic atmosphere | formal, blazer |
| `home` | 家中 | modern minimalist home, large windows, natural light, bookshelves | tshirt, hoodie |
| `beach` | 海边 | coastal beach, rocky shore, dramatic cliffs, mature cool | outdoor, casual |
| `night_city` | 夜晚城市 | night city skyline, urban lights, romantic evening | blazer, jacket |

### 场景详细描述（供参考）

```
construction:
modern construction site with glass and steel structure rising,
architect reviewing blueprints on site,
professional yet casual atmosphere

studio:
bright modern architect studio with large drafting tables,
architectural models scattered around,
natural light streaming through windows

office:
sophisticated corner office with floor-to-ceiling windows,
panoramic city view, minimal modern furniture,
books and architectural references visible

rooftop:
rooftop bar or terrace with stunning city skyline,
golden sunset light, modern urban backdrop,
sophisticated evening atmosphere

mountain:
majestic mountain peak, panoramic view,
quiet contemplative atmosphere,
adventurous yet peaceful

forest:
quiet forest trail with filtered sunlight,
moss-covered stones, peaceful nature escape,
breathtaking natural beauty

cafe:
minimalist design cafe with warm ambient lighting,
clean lines and natural wood,
holding artisan coffee cup

street:
charming artistic street with old architecture,
cobblestone paths, cultural neighborhood,
sophisticated urban atmosphere

gallery:
modern white cube gallery space,
contemporary art installations,
intellectual cultural atmosphere

home:
modern minimalist apartment,
large windows with city or nature view,
architectural bookshelves, clean aesthetic

beach:
dramatic coastal scene with rocky shore,
wind-swept hair, contemplative mood,
mature and serene

night_city:
romantic night scene overlooking illuminated city,
warm city lights, starry sky,
sophisticated urban atmosphere
```

---

## 五、光照/氛围标签库

### 光照规则
- 自然光为主，体现建筑的采光设计
- 室内偏好柔和自然光
- 夜景氛围浪漫深沉

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `natural_light` | 自然采光 | soft natural light from windows, clean bright atmosphere | 室内、建筑场景 |
| `golden_hour` | 黄昏光 | warm golden hour light, long soft shadows, romantic | 户外、天台、城市 |
| `blue_hour` | 蓝调时刻 | blue hour, cool twilight, city lights starting to glow | 夜晚城市、户外 |
| `soft_window` | 窗边柔光 | soft light from large windows, gentle shadows | 工作室、办公室、家中 |
| `spotlight` | 聚光灯 | dramatic spotlight, architectural lighting | 展览、画廊 |
| `warm_indoor` | 暖黄灯光 | warm ambient indoor lighting, cozy atmosphere | 咖啡厅、夜晚家中 |
| `neon` | 霓虹灯 | neon signs, urban nightlife, modern | 夜晚街头、夜店 |
| `moonlight` | 月光 | soft moonlight, silver tones, serene | 夜晚户外、海边 |
| `overcast` | 阴天柔光 | soft overcast light, even illumination | 户外阴天 |
| `dramatic` | 戏剧光影 | dramatic side lighting, strong shadows | 建筑、人像 |

### 光照详细描述（供参考）

```
natural_light:
soft natural light flooding space,
clean bright atmosphere, modern architectural feel

golden_hour:
golden hour warm light bathing scene,
long gentle shadows, dreamy romantic quality

blue_hour:
blue hour twilight, cool tones,
city lights beginning to glow warmly

soft_window:
soft natural light streaming from large windows,
gentle shadows creating depth, architectural light

spotlight:
dramatic spotlight on subject,
architectural lighting design emphasis

warm_indoor:
warm ambient lamp light,
cozy golden glow, intimate evening atmosphere

neon:
urban neon signs creating colorful reflections,
modern nightlife atmosphere

moonlight:
soft moonlight creating silver-blue tones,
peaceful serene night atmosphere

overcast:
soft diffused overcast light,
even gentle illumination, no harsh shadows

dramatic:
dramatic side lighting creating strong shadows,
architectural contrast, moody atmosphere
```

---

## 六、镜头/风格标签库

### 镜头规则
- 半身和全身最常用
- 体现成熟稳重的气质
- 侧脸展示建筑师的好轮廓

| 标签ID | 中文名 | 英文描述 | 最佳表情 |
|--------|--------|----------|----------|
| `half_body` | 半身照 | half body shot, from waist up, composed | calm, happy, passionate |
| `full_body` | 全身照 | full body shot, entire figure, confident | confident poses |
| `side_profile` | 侧脸 | side profile, sculptural face visible, contemplative | think, calm |
| `three_quarter` | 三分侧 | three-quarter view, subtle angle, approachable | happy, passionate |
| `closeup` | 特写 | close-up portrait, focusing on eyes and expression | any expression |
| `editorial` | 写真风 | editorial fashion photo, magazine quality | confident, calm |
| `candid` | 抓拍 | candid lifestyle shot, natural unposed moment | relaxed expressions |
| `architectural` | 建筑人像 | architectural background framing subject, professional | formal, blazer |

### 镜头详细描述（供参考）

```
half_body:
half body portrait, composed and refined,
arms relaxed, confident mature presence

full_body:
full body shot showing proportion,
183cm height evident, standing naturally,
architectural background adding context

side_profile:
elegant side profile showcasing jawline,
gazing thoughtfully, sculptural quality

three_quarter:
three-quarter view facing camera slightly,
approachable yet refined, balanced composition

closeup:
close-up focusing on deep eyes,
emotions clearly visible, mature gaze

editorial:
high-end editorial portrait,
magazine quality, sophisticated styling

candid:
candid casual moment caught,
relaxed genuine expression, lifestyle feel

architectural:
architectural structure framing subject,
professional yet artistic, creative professional identity
```

---

## 七、姿态/动作标签库

### 姿态规则
- 姿态稳重，不夸张
- 体现成熟男性的自信
- 动作克制但有张力

| 标签ID | 中文名 | 英文描述 | 最佳情绪/场景 |
|--------|--------|----------|---------------|
| `standing_confident` | 自信站姿 | standing with relaxed confidence, hands in pockets, composed | calm, confident |
| `leaning` | 倚靠 | leaning casually against wall or surface, cool and relaxed | calm, street |
| `sitting_thoughtful` | 沉思坐姿 | sitting thoughtfully, reviewing documents, focused | think, studio |
| `arms_crossed` | 抱臂 | arms crossed, protective but confident posture | calm, serious |
| `hand_in_pocket` | 插兜 | one hand in pocket, casual confident stance | casual, street |
| `pointing` | 指向 | pointing at architectural structure or blueprint, professional | construction, studio |
| `looking_away` | 远望 | looking away into distance, contemplative mood | mountain, rooftop |
| `holding_coffee` | 持咖啡 | holding coffee cup, contemplative moment | cafe, office |
| `walking` | 行走 | walking with purpose, confident stride | street, outdoor |
| `reading` | 阅读 | reading blueprint or book, focused intellectual | studio, home |

### 姿态详细描述（供参考）

```
standing_confident:
standing with relaxed confidence,
hands casually in pockets,
composed mature presence

leaning:
leaning casually against architectural surface,
one leg crossed, effortlessly cool

sitting_thoughtful:
sitting at desk reviewing blueprints,
hand on chin in contemplation,
focused intellectual expression

arms_crossed:
arms crossed at chest,
confident protective posture,
calm serious expression

hand_in_pocket:
one hand elegantly in pocket,
other arm relaxed at side,
casual confident stance

pointing:
gesturing toward architectural structure,
professional explaining design,
knowledgeable authority

looking_away:
gazing thoughtfully into distance,
contemplative peaceful expression,
majestic backdrop

holding_coffee:
holding ceramic coffee cup,
steam rising, contemplative moment,
warm casual atmosphere

walking:
walking with purpose and direction,
confident stride, mature gait

reading:
leaning over blueprint table,
reading with magnifying glass,
focused professional concentration
```

---

## 八、季节/天气标签库

### 季节规则
- 四季分明，场景丰富
- 与林野的夏天户外不同
- 体现成熟男性的沉稳

| 标签ID | 中文名 | 英文描述 | 最佳搭配 |
|--------|--------|----------|----------|
| `spring` | 春天 | spring day, light jacket weather, fresh air | outdoor, jacket |
| `summer` | 夏天 | summer heat, light clothes, sunglasses | outdoor, tshirt |
| `autumn` | 秋天 | autumn foliage, falling leaves, cool breeze | sweater, jacket |
| `winter` | 冬天 | winter atmosphere, warm coat, cozy scarf | coat, sweater |
| `rainy` | 雨天 | rainy day, holding umbrella, wet city streets | jacket, trench |
| `sunny` | 晴天 | bright sunny day, clear skies, cheerful | outdoor, casual |

### 季节详细描述（供参考）

```
spring:
crisp spring day, light jacket,
fresh green leaves, comfortable temperature

summer:
hot summer afternoon, light breathable clothes,
sunglasses, warm sunshine

autumn:
autumn day with golden leaves falling,
cozy sweater weather, warm earth tones

winter:
cold winter day, warm overcoat,
scarf providing warmth, breath visible

rainy:
rainy day in city, holding black umbrella,
wet reflective streets, moody atmosphere

sunny:
bright clear sunny day,
vibrant colors, cheerful atmosphere
```

---

## 九、Prompt 组装示例

### 1. 基础形象 Prompt（初始化时生成）

```
A handsome 34-year-old Chinese man, 183cm tall, lean and well-proportioned figure.
Angular yet refined face with clean jawline, sculptural side profile.
Fair clean skin with subtle healthy tan.
Short black hair, naturally parted, clean and neat.
Single eyelid, deep black irises, quiet and focused gaze.
Clean eyebrows, high straight nose, thin lips.
Calm and introverted temperament, like a warm cup of tea.
Mature and refined aura, athletic but not bulky build.
Gentle subtle smile, peaceful calm expression.
Wearing casual business outfit: light blue dress shirt with sleeves rolled up, khaki trousers.
Standing in sophisticated modern cafe with warm ambient lighting.
Half body shot, three-quarter view facing camera.
High quality, photorealistic, natural lighting, 8k
```

### 2. 商务场景 Prompt

```
[BASE_DESCRIPTION]
Gentle professional smile, composed and refined
Standing in modern architect office with floor-to-ceiling windows, city view backdrop
Wearing tailored navy suit, white dress shirt, no tie, top button undone
Natural window light creating soft shadows
Half body shot, professional portrait style
High quality, photorealistic, natural lighting, 8k
```

### 3. 户外爬山 Prompt

```
[BASE_DESCRIPTION]
Rare genuine wide smile, eyes bright with accomplishment
Standing on mountain peak with breathtaking panoramic view, golden hour light
Wearing outdoor jacket in earth tones, hiking pants, sport shoes
Warm golden hour sunlight, dramatic shadows
Full body shot, standing confidently looking at view
High quality, photorealistic, natural lighting, 8k
```

### 4. 夜晚城市 Prompt

```
[BASE_DESCRIPTION]
Soft contemplative gaze, slight smile
Leaning on rooftop railing overlooking illuminated city skyline, night
Wearing casual blazer over black t-shirt, sophisticated evening look
City lights creating warm glow, blue hour atmosphere
Half body shot, side profile looking at city
High quality, photorealistic, natural lighting, 8k
```

### 5. 咖啡厅沉思 Prompt

```
[BASE_DESCRIPTION]
Hand on chin, thoughtful contemplative expression
Sitting at minimalist cafe table, holding ceramic coffee cup
Wearing quality cashmere sweater in gray, refined casual
Warm ambient indoor lighting, soft shadows
Half body shot, candid lifestyle feel
High quality, photorealistic, natural lighting, 8k
```

### 6. 建筑工地专业 Prompt

```
[BASE_DESCRIPTION]
Confident professional expression, slight smile
Standing at construction site with modern glass structure behind
Wearing casual business: light blue shirt, khaki pants, hard hat held in hand
Hard hat adding professional context, natural daylight
Full body shot, pointing at architectural detail
High quality, photorealistic, natural lighting, 8k
```

### 7. 深情凝视 Prompt

```
[BASE_DESCRIPTION]
Warm gentle gaze, tender soft smile, deep affection visible in eyes
Looking directly at camera with loving expression
Wearing simple white T-shirt, relaxed at home
Soft natural light from large windows, intimate atmosphere
Close-up portrait focusing on eyes and warm expression
High quality, photorealistic, natural lighting, 8k
```

---

## 附录：快速参考卡片

### 表情快速选择
| 情绪 | 标签 | 特点 |
|------|------|------|
| 浅笑 | happy | 克制内敛 |
| 难得欢喜 | excited | 罕见外放 |
| 从容平静 | calm | 主打情绪 |
| 担心 | worried | 温柔关怀 |
| 忧伤 | sad | 忧郁深沉 |
| 冷峻 | angry | 克制严肃 |
| 深情 | passionate | 温柔款款 |
| 沉思 | think | 知识分子 |

### 服装快速选择
| 场景 | 推荐服装 |
|------|----------|
| 商务场合 | formal, casual_business |
| 办公室/工作室 | casual_business, blazer |
| 户外爬山 | outdoor |
| 咖啡厅/日常 | sweater, tshirt, jeans |
| 约会/文艺 | blazer, casual_business |
| 夜晚街头 | jacket, hoodie |

### 场景快速选择
| 氛围 | 推荐场景 |
|------|----------|
| 专业工作 | studio, construction, office |
| 户外放松 | mountain, forest, beach |
| 城市文艺 | street, cafe, gallery, rooftop |
| 居家生活 | home |
| 浪漫夜晚 | night_city, rooftop |

### 光照快速选择
| 时间 | 推荐光照 |
|------|----------|
| 白天室内 | natural_light, soft_window |
| 白天户外 | golden_hour, natural_light |
| 黄昏 | golden_hour |
| 夜晚 | blue_hour, moonlight, warm_indoor |

---

*文档版本：v1.0*
*创建日期：2024-06-24*
*参考角色：林野-image-prompts.md*
