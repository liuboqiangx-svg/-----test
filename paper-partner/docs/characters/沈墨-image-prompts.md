# 沈墨 - 文生图 Prompt 库

> 角色定位：34岁建筑师，沉稳内敛，温柔深沉，户外爬山爱好者

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A handsome 34-year-old Chinese man, 183cm tall, lean and well-proportioned figure.
Angular yet refined face with clean jawline, sculptural side profile.
Fair clean skin with subtle healthy tan from outdoor work.
Short black hair, naturally parted or slightly tousled, clean and neat.
Single eyelid or inner double eyelid, slightly drooping outer corners, deep black irises, quiet and focused gaze.
Clean eyebrows, neither thick nor thin, slightly furrowed when thinking.
High straight nose with slightly tapered tip, beautiful side profile.
Thin lips, looks restrained when not smiling, gentle subtle smile when happy.
Calm and introverted temperament, like a warm cup of tea, quiet but hard to ignore presence.
Mature and refined aura, 34 years old but looks early 30s.
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

| 标签ID | 情绪 | 英文描述 | 中文说明 | Prompt 示例 |
|--------|------|----------|----------|-------------|
| `happy` | 开心/浅笑 | gentle subtle smile, eyes crinkling slightly at corners, quiet joy | 嘴角微扬，眼角带笑 | `gentle subtle smile, eyes crinkling slightly` |
| `excited` | 兴奋 | rare genuine wide smile, eyes bright with excitement | 难得的大笑，眼里有光 | `rare genuine wide smile, eyes bright with excitement` |
| `calm` | 从容平静 | relaxed calm expression, peaceful serene gaze, composed | 放松从容，宁静泰然 | `relaxed calm expression, peaceful serene gaze` |
| `worried` | 担心 | concerned furrowed brows, gentle worried eyes | 眉头微蹙，温柔担忧 | `concerned furrowed brows, gentle worried expression` |
| `sad` | 难过/忧伤 | soft melancholic smile, distant contemplative gaze | 忧郁微笑，出神凝望 | `soft melancholic smile, distant gaze` |
| `angry` | 生气 | cold restrained expression, firm jaw, serious | 冷峻克制，下颌紧绑 | `cold restrained expression, firm jaw` |
| `jealous` | 吃醋 | slight pout, looking away, pretending not to care | 微嘟着嘴，不在乎的样子 | `slight pout, looking away` |
| `clinging` | 撒娇/依赖 | vulnerable soft expression, seeking comfort | 柔软脆弱，渴望安慰 | `vulnerable soft expression, seeking comfort` |
| `passionate` | 深情 | intense affectionate gaze, devoted loving eyes | 深情凝视，眼中含爱 | `intense affectionate gaze, devoted eyes` |
| `sleepy` | 困倦 | drowsy tired eyes, relaxed sleepy expression | 睡眼惺忪，放松慵懒 | `drowsy tired eyes, relaxed expression` |
| `serious` | 认真严肃 | focused penetrating gaze, thoughtful expression | 专注深邃，沉思表情 | `focused penetrating gaze, thoughtful` |
| `shy` | 害羞 | slight blush, looking down shyly, reserved smile | 微微脸红，低头羞涩 | `slight blush, looking down shyly` |

### 表情组合示例

```
// 开心+害羞
gentle smile with slight blush, eyes looking down, quiet happiness

// 担心+关心
concerned expression with gentle care, furrowed brows, warm eyes

// 深情的凝视
intense loving gaze, eyes full of affection, devoted and tender

// 克制的不安
restrained expression hiding vulnerability, subtle tension in jaw
```

---

## 三、服装标签库

### 服装规则
- 沈墨穿着偏简约、质感、有品位
- 避免浮夸，注重剪裁和材质
- 户外装功能性但不邋遢

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `casual` | 休闲日常 | soft gray cashmere sweater, comfortable pants, minimal | 家里、咖啡厅 |
| `home` | 居家服 | simple white T-shirt, loose knit cardigan, cozy | 家里、深夜 |
| `work` | 职场衬衫 | perfectly tailored dark navy shirt, sleeves rolled up | 工作室、职场 |
| `formal` | 正装西服 | well-fitted dark suit, minimalist design | 正式场合 |
| `outdoor` | 户外爬山 | light hiking jacket, comfortable sports pants, baseball cap | 爬山、户外 |
| `jeans` | 牛仔裤白衬衫 | crisp white linen shirt, dark jeans, casual elegant | 约会、日常 |
| `turtleneck` | 高领毛衣 | black turtleneck sweater, sophisticated minimalist | 工作、艺术场合 |
| `coat` | 大衣外套 | tailored wool overcoat, clean lines | 秋冬、外出 |
| `swimwear` | 泳装 | fitted swimming trunks, athletic build | 游泳、海边 |
| `pajamas` | 睡衣 | dark comfortable pajamas, soft cotton | 家里、深夜 |

### 服装详细描述（供参考）

```
casual:
soft gray cashmere sweater, well-fitted,
comfortable casual pants, minimal design,
simple and refined aesthetic

home:
simple white cotton T-shirt, loose soft knit cardigan,
relaxed comfortable fit, cozy home atmosphere

work:
perfectly tailored dark navy shirt,
sleeves casually rolled up,
professional yet relaxed architect style

formal:
well-fitted dark charcoal suit,
minimalist design, quality fabric,
elegant and sophisticated

outdoor:
light functional hiking jacket in earth tones,
comfortable sports pants, wearing baseball cap,
practical outdoor gear but stylish

jeans:
crisp white linen shirt, slightly rolled sleeves,
dark well-fitted jeans, minimalist leather watch,
casual elegant date look

turtleneck:
classic black turtleneck sweater,
sophisticated minimalist aesthetic,
artistic intellectual vibe

coat:
tailored wool overcoat in camel or navy,
clean lines, elegant proportions,
stylish autumn winter outerwear

swimwear:
fitted dark swimming trunks,
lean athletic swimmer's build,
relaxed beach ready

pajamas:
dark comfortable cotton pajamas,
soft well-worn fabric,
intimate home atmosphere
```

---

## 四、场景标签库

### 场景规则
- 沈墨偏爱安静、有质感的空间
- 户外偏好自然、山景、安静的地方
- 室内偏好简约设计、有书/咖啡的场景

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `studio` | 设计工作室 | minimalist architect studio, models and drawings, natural light | work, turtleneck |
| `mountain` | 山顶风景 | mountain peak, breathtaking view, mist, sunrise | outdoor |
| `trail` | 山间小径 | mountain hiking trail, forest, peaceful nature | outdoor |
| `cafe` | 咖啡厅 | cozy minimalist cafe, warm lighting, coffee aroma | casual, jeans |
| `home` | 家中客厅 | modern minimalist living room, large windows, books | home, casual |
| `bedroom` | 卧室 | cozy bedroom, soft lighting, architectural books | pajamas, home |
| `balcony` | 阳台 | balcony with city view, evening ambiance, plants | casual, sweater |
| `library` | 书房/图书馆 | grand library with bookshelves, quiet intellectual space | turtleneck, formal |
| `window` | 窗边 | standing by large window, city or nature view | any indoor |
| `rooftop` | 天台 | rooftop terrace, city skyline at night, stars visible | casual, coat |
| `rainy` | 雨天窗外 | standing by rain-streaked window, melancholic mood | turtleneck, sweater |
| `beach` | 海边 | quiet beach, early morning, gentle waves | swimwear, casual |

### 场景详细描述（供参考）

```
studio:
minimalist architect design studio,
architectural models and blueprints on desk,
large windows with natural light,
clean organized workspace with creative energy

mountain:
majestic mountain peak, breathtaking panoramic view,
morning mist in distance, golden sunrise light,
adventurous peaceful atmosphere

trail:
serene mountain hiking trail,
green forest on both sides,
filtered sunlight through trees,
tranquil nature escape

cafe:
cozy minimalist cafe with warm ambient lighting,
hanging plants, artisan coffee,
wooden furniture, peaceful afternoon atmosphere

home:
modern minimalist living room,
floor-to-ceiling windows, natural light,
clean furniture with quality materials,
books and plants as decoration

bedroom:
cozy minimalist bedroom,
soft warm lighting, architectural books on nightstand,
clean linen bedding, peaceful retreat

balcony:
modern balcony overlooking city,
evening city lights beginning to glow,
potted plants, comfortable seating,
romantic urban twilight atmosphere

library:
grand intellectual library,
tall bookshelves filled with books,
comfortable reading chair,
quiet contemplative atmosphere

window:
standing by large floor-to-ceiling window,
soft natural light on face,
peaceful contemplative mood,
view of nature or city below

rooftop:
rooftop terrace at night,
city skyline glittering with lights,
starry sky above, gentle breeze,
romantic urban escape

rainy:
standing by rain-streaked window,
moody blue-gray tones outside,
warm interior contrasting,
poetic melancholic atmosphere

beach:
quiet peaceful beach at early morning,
gentle waves, soft sand, no crowds,
golden sunrise, serene solitude
```

---

## 五、光照/氛围标签库

### 光照规则
- 沈墨偏好柔和、自然的光线
- 避免过于强烈或刺眼的光
- 夜晚偏好温暖的室内灯光

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `natural` | 自然光 | natural soft daylight, clean and bright | 白天户外、室内 |
| `golden_hour` | 黄金时刻 | golden hour warm light, soft shadows, dreamy | 户外、日出日落 |
| `morning` | 晨光 | fresh morning sunlight, crisp and clean | 清晨、爬山 |
| `afternoon` | 午后光 | warm afternoon light, soft golden glow | 午后、咖啡厅 |
| `warm_lamp` | 暖黄灯 | warm indoor lamp lighting, cozy amber glow | 家里、夜晚 |
| `soft_window` | 窗边柔光 | soft window light, diffused natural | 窗边、室内 |
| `moonlight` | 月光 | soft moonlight, silver blue tones | 夜晚户外 |
| `dramatic` | 戏剧光 | dramatic side lighting, artistic shadows | 艺术照、工作室 |
| `overcast` | 阴天柔光 | soft overcast light, even and flattering | 户外阴天 |
| `candlelight` | 烛光 | romantic candlelight, warm intimate glow | 约会、夜晚 |

### 光照详细描述（供参考）

```
natural:
natural soft daylight, clean and bright,
even lighting with gentle shadows,
fresh and peaceful atmosphere

golden_hour:
golden hour warm light streaming in,
soft golden shadows, dreamy romantic quality,
most flattering natural illumination

morning:
fresh morning sunlight, crisp clean light,
new day energy, refreshing atmosphere,
soft gentle wake-up glow

afternoon:
warm afternoon sunlight through windows,
soft golden afternoon glow,
relaxed peaceful daytime atmosphere

warm_lamp:
warm amber indoor lamp light,
cozy intimate illumination,
soft shadows creating depth and warmth

soft_window:
soft diffused window light,
gentle natural illumination on face,
peaceful contemplative mood

moonlight:
soft silver-blue moonlight,
serene peaceful night atmosphere,
gentle romantic glow

dramatic:
dramatic side lighting creating artistic shadows,
high contrast, cinematic quality,
intellectual artistic atmosphere

overcast:
soft overcast diffused light,
even flattering illumination,
gentle peaceful mood

candlelight:
romantic candlelight dinner setting,
warm flickering golden glow,
deep intimate romantic atmosphere
```

---

## 六、镜头/风格标签库

### 镜头规则
- 沈墨适合稳重、有深度的镜头
- 避免过于张扬的角度
- 侧脸、背影有故事感

| 标签ID | 中文名 | 英文描述 | 最佳表情/姿态 |
|--------|--------|----------|---------------|
| `portrait` | 肖像照 | professional portrait, upper body focus | any expression |
| `half_body` | 半身照 | half body shot, from waist up | calm, serious, passionate |
| `full_body` | 全身照 | full body standing shot | confident, outdoor |
| `side_profile` | 侧脸 | elegant side profile, looking into distance | contemplative, calm |
| `back_view` | 背影 | contemplative back view, looking at view | thoughtful, calm |
| `candid` | 抓拍 | candid lifestyle moment, unposed natural | casual, happy |
| `editorial` | 写真风 | editorial fashion photo, magazine quality | formal, coat |
| `window_shot` | 窗边照 | standing by window, soft light on face | serious, contemplative |

### 镜头详细描述（供参考）

```
portrait:
professional portrait photography,
upper body, soft natural lighting,
focus on facial expression and eyes,
mature refined aesthetic

half_body:
half body shot from waist up,
relaxed pose, hands visible,
calm contemplative mood

full_body:
full body standing shot,
confident relaxed posture,
clean background,
architectural aesthetic

side_profile:
elegant side profile facing away,
gazing thoughtfully into distance,
artistic contemplative composition

back_view:
contemplative back view,
looking at scenic view ahead,
storytelling composition,
melancholic poetic mood

candid:
candid lifestyle photograph,
unposed natural moment,
like captured by a friend,
authentic relaxed feel

editorial:
high-end editorial fashion photo,
magazine quality composition,
sophisticated mature style

window_shot:
standing by window with soft light,
serene contemplative expression,
looking slightly away,
intimate artistic mood
```

---

## 七、姿态/动作标签库

### 姿态规则
- 沈墨的姿态稳重、不张扬
- 避免过于夸张的动作
- 手插兜、抱臂、托腮等内敛姿态

| 标签ID | 中文名 | 英文描述 | 最佳情绪/场景 |
|--------|--------|----------|---------------|
| `standing` | 站姿 | standing with hands in pockets, relaxed | calm, casual |
| `sitting` | 坐着 | sitting casually on chair, relaxed posture | calm, work |
| `leaning` | 靠着 | leaning against wall, casual cool pose | calm, street |
| `thinking` | 思考 | hand on chin, thoughtful contemplation | serious, worried |
| `reading` | 阅读 | reading book or blueprint, focused | serious, work |
| `holding_coffee` | 手持咖啡 | holding warm coffee cup, cozy | calm, home, cafe |
| `arms_crossed` | 抱臂 | arms crossed, slightly guarded or confident | serious, angry |
| `looking_away` | 望向远方 | looking into distance thoughtfully | calm, sad, passionate |
| `hair_tuck` | 撩发/扶额 | tucking hair or touching forehead, thoughtful | worried, thinking |
| `phone` | 看手机 | looking at phone with soft expression | calm, home |

### 姿态详细描述（供参考）

```
standing:
standing relaxed with hands in pockets,
confident calm posture,
slight tilt of head,
quiet self-assured presence

sitting:
sitting casually on comfortable chair,
relaxed open posture,
one arm resting on armrest,
peaceful contemplative mood

leaning:
leaning casually against wall,
one leg crossed, relaxed cool pose,
arms also relaxed or in pockets,
effortlessly stylish

thinking:
one hand supporting chin,
thoughtful contemplative expression,
furrowed brows slightly,
intellectual deep in thought

reading:
holding book or architectural blueprint,
reading glasses if needed,
focused attention,
quiet intellectual moment

holding_coffee:
cradling warm coffee cup with both hands,
gentle steam rising,
cozy relaxed expression,
peaceful morning ritual

arms_crossed:
arms crossed on chest,
slightly firm jaw,
can be guarded or confidently serious

looking_away:
gazing thoughtfully into distance,
peaceful contemplative expression,
side or three-quarter view,
storytelling melancholic mood

hair_tuck:
tucking hair behind ear or touching forehead,
subtle thoughtful gesture,
quiet concerned or thinking expression

phone:
looking down at phone screen,
soft smile on lips,
casual intimate domestic moment
```

---

## 八、季节/天气标签库

### 季节规则
- 沈墨喜欢四季分明的氛围
- 秋冬场景偏多（毛衣、大衣）
- 雨天有独特的故事感

| 标签ID | 中文名 | 英文描述 | 最佳搭配 |
|--------|--------|----------|----------|
| `spring` | 春天 | spring morning, cherry blossoms, fresh green | outdoor, casual |
| `summer` | 夏天 | hot summer day, sunglasses, light clothes | outdoor, swimwear |
| `autumn` | 秋天 | autumn foliage, golden leaves, cool breeze | outdoor, coat, sweater |
| `winter` | 冬天 | winter atmosphere, scarf, cold but cozy | outdoor, coat |
| `sunny` | 晴天 | bright sunny day, clear blue sky | outdoor, any |
| `rainy` | 雨天 | rainy day mood, rain on window | indoor, window_shot |

### 季节详细描述（供参考）

```
spring:
beautiful spring morning,
cherry blossom trees in bloom,
soft pink petals floating,
fresh spring air feeling

summer:
hot summer afternoon,
wearing sunglasses, light summer clothes,
bright intense sunlight,
energetic warm season

autumn:
autumn day with golden foliage,
falling leaves, cool autumn breeze,
warm layered clothing,
cozy romantic season

winter:
cold winter day,
wearing warm scarf and coat,
breath visible in air,
cozy cold aesthetic

sunny:
bright clear sunny day,
strong natural light,
cheerful outdoor atmosphere

rainy:
rainy day atmosphere,
raindrops on window,
moody contemplative feeling,
cozy indoor warmth contrast
```

---

## 九、情绪 → 表情 映射表

### 映射规则
- 沈墨情绪表达克制内敛
- 优先使用眼神传递情绪
- 微笑多为浅笑，不外放大笑

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
| 用户夸他 | happy | happy | 嘴角微扬，眼里带笑 |
| 收到礼物 | excited | excited | 难得的真挚笑容，眼里有光 |
| 用户不回消息 | worried | worried | 眉头微蹙，克制担忧 |
| 被伤害到 | sad | sad | 忧郁微笑，出神 |
| 工作顺利 | calm | calm | 从容平静 |
| 用户让他吃醋 | jealous | jealous | 假装不在乎但在意 |

---

## 十、Prompt 组装示例

### 1. 基础形象 Prompt（初始化时生成）

```
A handsome 34-year-old Chinese man, 183cm tall, lean and well-proportioned figure.
Angular yet refined face with clean jawline, sculptural side profile.
Fair clean skin with subtle healthy tan from outdoor work.
Short black hair, naturally parted or slightly tousled, clean and neat.
Single eyelid or inner double eyelid, slightly drooping outer corners, deep black irises, quiet and focused gaze.
Clean eyebrows, neither thick nor thin, slightly furrowed when thinking.
High straight nose with slightly tapered tip, beautiful side profile.
Thin lips, looks restrained when not smiling, gentle subtle smile when happy.
Calm and introverted temperament, like a warm cup of tea, quiet but hard to ignore presence.
Mature and refined aura, 34 years old but looks early 30s.
Gentle subtle smile, peaceful serene expression.
Wearing soft gray cashmere sweater, comfortable casual pants.
Standing in cozy minimalist cafe with warm ambient lighting.
Half body shot, front view facing camera.
High quality, photorealistic, natural lighting, 8k
```

### 2. 开心表情变化 Prompt

```
[BASE_DESCRIPTION]
gentle subtle smile, eyes crinkling slightly at corners with quiet joy,
rare genuine happiness radiating from expression
Wearing crisp white linen shirt with sleeves rolled up.
Standing in sunlit balcony overlooking city view.
Natural bright daylight, golden afternoon glow.
Portrait shot, soft window light on face.
High quality, photorealistic, natural lighting, 8k
```

### 3. 深情凝视 Prompt

```
[BASE_DESCRIPTION]
intense affectionate gaze, eyes full of love and devotion,
looking at viewer with deep tender emotion
Wearing simple black turtleneck sweater, sophisticated minimalist.
Standing on rooftop terrace at golden hour, city skyline behind.
Romantic warm golden hour lighting, soft breeze.
Close-up portrait, side profile looking at camera.
High quality, photorealistic, natural lighting, 8k
```

### 4. 爬山户外场景 Prompt

```
[BASE_DESCRIPTION]
relaxed happy expression, peaceful contemplative mood
Wearing light hiking jacket in earth tones, comfortable sports pants,
baseball cap, practical outdoor gear.
Standing on mountain peak, breathtaking panoramic view,
morning mist in distance, golden sunrise light.
Full body shot, standing confidently, arms relaxed.
High quality, photorealistic, natural lighting, 8k
```

### 5. 深夜独处 Prompt

```
[BASE_DESCRIPTION]
drowsy tired eyes, relaxed sleepy expression,
peaceful content domestic mood
Wearing dark comfortable cotton pajamas, soft well-worn fabric.
Sitting on cozy sofa late at night, holding warm mug,
warm amber lamp light, architectural books on nearby shelf.
Intimate half body shot, soft warm lighting.
High quality, photorealistic, natural lighting, 8k
```

### 6. 雨天窗边 Prompt

```
[BASE_DESCRIPTION]
soft melancholic contemplative expression,
looking thoughtfully into distance
Wearing soft charcoal gray sweater, cozy layered look.
Standing by large rain-streaked window, city view visible,
moody blue-gray tones outside, warm interior contrasting.
Dramatic side lighting, artistic cinematic composition.
High quality, photorealistic, natural lighting, 8k
```

### 7. 约会等待 Prompt

```
[BASE_DESCRIPTION]
patient gentle expression, slight anticipation in eyes,
looking at phone then glancing up
Wearing elegant dark green casual blazer over white T-shirt,
well-fitted dark jeans.
Sitting at small cafe table by window, cup of black coffee beside,
warm cozy cafe interior, soft afternoon light.
Candid lifestyle shot, romantic anticipatory mood.
High quality, photorealistic, natural lighting, 8k
```

---

## 附录：快速参考卡片

### 表情快速选择
| 情绪 | 标签 |
|------|------|
| 开心/浅笑 | happy |
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
| 家里/日常 | home, casual |
| 咖啡厅 | casual, jeans |
| 工作室 | work, turtleneck |
| 爬山户外 | outdoor |
| 约会 | jeans, casual |
| 正式场合 | formal, coat |
| 深夜 | pajamas, home |
| 游泳 | swimwear |

### 场景快速选择
| 氛围 | 推荐场景 |
|------|----------|
| 工作氛围 | studio |
| 户外爬山 | mountain, trail |
| 休闲日常 | cafe, home |
| 夜晚浪漫 | rooftop, balcony |
| 沉思感 | window, rainy |
| 安静海边 | beach |

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
*角色定位：沈墨 - 34岁建筑师，沉稳内敛*
