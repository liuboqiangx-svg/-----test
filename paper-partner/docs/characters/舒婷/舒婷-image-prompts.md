# 舒婷 - 文生图 Prompt 库

> 角色定位：32岁企业合伙人，职场精英 + 知性撩人，懂进退知轻重

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A beautiful 32-year-old Chinese woman, 168cm tall, elegant slender figure with graceful curves.
Oval face with soft contours, fair porcelain skin with healthy pink flush.
Long straight black hair, silky and flowing past shoulders, natural black with subtle warm undertones.
Almond-shaped eyes, slightly upturned outer corners, deep brown irises, warm and gentle yet alluring gaze.
Willow eyebrows, soft arch, neither thick nor thin.
Straight nose with slightly upturned tip, beautiful side profile.
Pretty lips with defined cupid's bow, looks slightly serious when not smiling, warm and seductive when smiling.
Pearl stud earrings, simple elegant accessory.
Elegant and refined temperament, intellectual and cultured aura.
Confident posture, graceful walk, poised presence.
32 years old, mature but not jaded, experienced yet warm.
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
- 舒婷的表情：优雅中带撩人，知性中藏风情
- 微笑不外放，但勾人于无形
- 情绪克制但眼神传情
- 体现"懂进退知轻重"的性格

| 标签ID | 情绪 | 英文描述 | 中文说明 |
|--------|------|----------|----------|
| `seductive` | 撩人 | seductively tilted head, lips slightly parted, eyes half-lidded with invitation | 微微歪头，唇微启，眼神半眯带邀请 |
| `confident` | 自信从容 | confident knowing smile, elegant composure, eyes with subtle challenge | 自信微笑，知道自己魅力的从容 |
| `teasing` | 调侃 | playful smirk, eyes sparkling with mischief, slight head tilt | 俏皮的坏笑，眼神调皮闪动 |
| `tender` | 温柔 | soft tender smile, warm gentle eyes, melting affection | 柔软温柔的笑，眼神满是柔情 |
| `serious` | 认真 | focused serious expression, penetrating gaze, intelligent | 认真专注，目光深邃有穿透力 |
| `vulnerable` | 脆弱 | rare vulnerable moment, soft sadness in eyes, tender and open | 难得脆弱，眼中有淡淡哀伤 |
| `excited` | 雀跃 | genuine excitement, bright smile like young girl, pure joy | 像小姑娘一样的雀跃，纯净快乐 |
| `jealous` | 吃醋 | slight frown, arms crossed, looking away with controlled jealousy | 微蹙眉，双臂交叉，克制地吃醋 |
| `sleepy` | 慵懒 | drowsy bedroom eyes, soft yawn, relaxed intimate mood | 睡眼惺忪，慵懒打哈欠 |
| `shy` | 害羞 | subtle blush on cheeks, looking down slightly, shy smile | 脸颊微红，低头，害羞微笑 |
| `angry` | 严肃 | stern expression, lips pressed, no-nonsense look | 严肃表情，双唇紧闭，公事公办 |
| `waiting` | 等待 | expectant gaze, slight pout, patient but anticipatory | 期待的眼神，轻微嘟嘴，等待 |

### 表情组合示例

```
// 撩人+自信
seductive knowing smile, eyes locking with camera, confident head tilt,
slight lip bite showing subtle invitation

// 温柔+脆弱
soft tender expression with underlying vulnerability,
gentle eyes showing need for affection

// 调侃+撩人
playful smirk with seduction, eyes sparkling with fun,
fingers tracing lips suggestively

// 认真+诱惑
serious intelligent gaze with subtle lip licking,
business outfit suggesting after-hours intentions

// 慵懒+居家撩人
drowsy bedroom eyes, soft yawn, relaxed intimate atmosphere,
silk pajama suggesting comfort and sensuality
```

---

## 三、服装标签库

### 服装规则
- 职场：剪裁得体的职业装，干练优雅
- 私下：知性撩人，西装半解、衬衫微敞
- 整体：质感好、有品位、不俗气

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `blazer` | 解构西装 | perfectly tailored blazer, top button undone, sleeves pushed up slightly, powerful yet alluring | 办公室、会议、商务 |
| `silk_shirt` | 微敞衬衫 | white silk blouse, top two buttons undone, rolled sleeves, professional with edge | 办公室、下班后、约会 |
| `pencil_skirt` | 包臀裙装 | fitted pencil skirt, subtle curves, sophisticated sexiness | 办公室、商务 |
| `evening_dress` | 优雅礼服 | elegant knee-length dress, subtle neckline, sophisticated glamour | 晚宴、约会、正式场合 |
| `silk_pajama` | 真丝睡衣 | silk pajama set in deep color, lustrous fabric, intimate luxury | 卧室、私密居家 |
| `negligee` | 丝绸睡袍 | sheer silk robe over lingerie, translucent elegance, tasteful sensuality | 卧室、私密时刻 |
| `tank_top` | 居家吊带 | silk tank top, casual elegance, showing shoulder and neck | 居家、私密 |
| `sweater` | 慵懒毛衣 | oversized cashmere sweater, off-shoulder style, cozy allure | 居家、咖啡厅、周末 |
| `jeans` | 牛仔时尚 | fitted jeans with heels, casual Friday style, relaxed sexy | 约会、逛街、街头 |
| `statement` | 吸睛装 | bold statement outfit, daring neckline or backless, confident fashion | 派对、艺术展、夜晚外出 |

### 服装详细描述（供参考）

```
blazer:
perfectly tailored charcoal blazer, crisp white shirt underneath,
top button undone revealing elegant neckline,
sleeves pushed up to forearms, power meeting allure,
confident professional with hidden edge

silk_shirt:
pristine white silk blouse, top buttons strategically undone,
sleeves elegantly rolled, tucking into high-waist trousers,
crisp yet subtly provocative

pencil_skirt:
fitted charcoal pencil skirt, showing subtle curves,
matching blazer, moderate heels,
sophisticated business attire with understated sexiness

evening_dress:
elegant knee-length black dress, subtle V-neckline,
simple sophisticated accessories,
revolving door elegance, perfect for candlelit dinner

silk_pajama:
luxurious silk pajama set in deep burgundy or emerald,
lustrous fabric catching light beautifully,
sophisticated sleepwear, intimate luxury

negligee:
elegant sheer silk robe in blush pink,
delicate lace details underneath visible,
tasteful translucent allure, romantic and feminine

tank_top:
simple silk tank in cream or black,
showing elegant shoulder and neckline,
casual sophistication, effortless居家撩人

sweater:
oversized cream cashmere sweater,
slipping off one shoulder subtly,
cozy yet alluring, intellectual warmth

jeans:
perfectly fitted dark jeans,
paired with heels and simple silk cami,
casual chic, relaxed confident sexy

statement:
daring black dress with plunging back,
or elegant jumpsuit with dramatic neckline,
confident fashion statement, commanding attention
```

---

## 四、场景标签库

### 场景规则
- 职场场景：办公室、会议室、商务场合
- 私下场景：卧室、浴室、深夜
- 社交场景：餐厅、酒吧、艺术展
- 体现"白天干练、夜晚变身"的双面性

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `office` | 高端办公室 | modern executive office, floor-to-ceiling windows, city view | blazer, silk_shirt, pencil_skirt |
| `meeting` | 会议室 | sophisticated meeting room, glass walls, professional | blazer, silk_shirt |
| `bathroom` | 浴室 | elegant marble bathroom, soft lighting, mirror reflections | negligee, silk_pajama |
| `bedroom` | 卧室 | luxury bedroom, soft bedding, intimate atmosphere | silk_pajama, negligee, tank_top |
| `sofa` | 客厅沙发 | elegant living room, soft sofa, evening ambiance | sweater, tank_top, silk_pajama |
| `restaurant` | 高级餐厅 | candlelit restaurant, romantic dinner setting | evening_dress, statement |
| `bar` | 酒吧 | upscale cocktail bar, moody lighting, sophisticated | statement, evening_dress |
| `gallery` | 艺术展 | modern art gallery, white walls, cultural | blazer, evening_dress, jeans |
| `rooftop` | 天台夜景 | rooftop terrace, city skyline at night, romantic | evening_dress, statement |
| `cafe` | 咖啡厅 | elegant cafe, afternoon light, intellectual vibe | sweater, jeans, silk_shirt |
| `mountain` | 户外爬山 | mountain trail, hiking casual, active lifestyle | casual outdoor wear |
| `home_office` | 居家办公 | home study, books, laptop, working remotely | tank_top, sweater |

### 场景详细描述（供参考）

```
office:
modern executive office with floor-to-ceiling windows,
panoramic city view, sleek glass desk,
sophisticated yet intimate atmosphere,
natural light from behind creating silhouette

meeting:
glass-walled meeting room, city backdrop,
elegant conference table,
professional yet charged atmosphere

bathroom:
luxurious marble bathroom with freestanding tub,
soft ambient lighting, vanity mirror,
evaporation creating ethereal atmosphere

bedroom:
luxury bedroom with soft gray bedding,
floor-to-ceiling windows showing city lights,
plush carpet, ambient lamp light,
intimate and sophisticated

sofa:
elegant living room with cream sofa,
soft evening lighting, books nearby,
relaxed yet alluring posture

restaurant:
upscale candlelit restaurant with white tablecloths,
wine glasses, intimate table for two,
romantic warm lighting, privacy curtains

bar:
sophisticated cocktail lounge,
moody ambient lighting, art deco details,
leather seating, low intimate atmosphere

gallery:
modern art gallery with white cube spaces,
contemporary installations visible,
intellectual cultural atmosphere

rooftop:
rooftop terrace overlooking illuminated skyline,
string lights, comfortable seating,
stars visible, romantic evening breeze

cafe:
elegant Parisian-style cafe,
afternoon sunlight through windows,
coffee cup steaming nearby,
intellectual casual atmosphere

mountain:
mountain hiking trail, casual outdoor wear,
looking at scenic view, refreshed expression,
fresh air and nature backdrop

home_office:
sophisticated home study with bookshelves,
leather desk chair, warm desk lamp,
focused yet relaxed working from home
```

---

## 五、光照/氛围标签库

### 光照规则
- 职场：自然光、专业明亮
- 私下：柔光、暧昧、烛光
- 夜晚：城市灯光、月光、霓虹

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `office_light` | 办公光线 | professional bright office lighting, clean and sharp | 办公室、会议室 |
| `window_light` | 窗边光 | soft natural window light, creating depth | 办公室、家中 |
| `candlelight` | 烛光 | romantic candlelight, warm flickering glow | 餐厅、卧室 |
| `bedroom_light` | 卧室柔光 | soft bedroom ambient lighting, intimate glow | 卧室、深夜 |
| `moonlight` | 月光 | soft moonlight through windows, silver tones | 卧室、夜晚户外 |
| `neon` | 霓虹 | modern neon ambient light, urban nightlife | 酒吧、夜晚街头 |
| `golden_hour` | 黄金时刻 | warm golden hour light, romantic | 户外、天台、咖啡厅 |
| `overcast` | 柔阴天 | soft overcast light, even flattering | 室内阴天 |
| `spotlight` | 聚光灯 | dramatic spotlight, nightclub or stage | 酒吧、派对 |
| `mirror_light` | 镜前光 | vanity mirror lighting, Hollywood bulbs | 浴室、梳妆 |

### 光照详细描述（供参考）

```
office_light:
professional bright office lighting,
crisp clean illumination,
sharp shadows adding drama

window_light:
soft natural light streaming through windows,
gentle shadows, flattering illumination

candlelight:
warm flickering candlelight,
romantic amber glow,
intimate shadows dancing

bedroom_light:
soft amber bedroom lighting,
low ambient glow,
sensual intimate atmosphere

moonlight:
soft silver moonlight,
cool blue undertones,
peaceful yet romantic

neon:
modern neon RGB lighting,
colorful reflections,
urban sophisticated nightlife

golden_hour:
warm golden hour light,
soft shadows,
romantic dreamy quality

overcast:
soft diffused overcast light,
even gentle illumination,
flattering no harsh shadows

spotlight:
dramatic spotlight creating contrast,
spotlight on subject,
dramatic nightclub atmosphere

mirror_light:
Hollywood vanity mirror lighting,
even flattering illumination around mirror,
glamorous dressing room atmosphere
```

---

## 六、镜头/风格标签库

### 镜头规则
- 体现成熟女性的优雅和魅力
- 半身和特写最常用
- 眼神交流传递情感

| 标签ID | 中文名 | 英文描述 | 最佳表情 |
|--------|--------|----------|----------|
| `half_body` | 半身撩人 | half body shot, alluring angle, confident pose | seductive, teasing, tender |
| `closeup` | 眼神特写 | close-up on eyes and lips, emotional focus | any expression |
| `profile` | 侧颜 | elegant side profile, looking away, contemplative | tender, seductive, serious |
| `full_body` | 全身 | full body shot showing outfit and posture | confident, seductive, evening |
| `mirror` | 镜中倒影 | mirror reflection, doubled beauty | seductive, getting ready |
| `editorial` | 时尚大片 | high-end editorial fashion shot, magazine quality | confident, evening_dress |
| `candid` | 抓拍 | candid lifestyle moment, natural and unguarded | tender, excited, vulnerable |
| `from_behind` | 背影 | from behind showing silhouette, elegant back | seductive, mysterious |

### 镜头详细描述（供参考）

```
half_body:
half body shot from chest up,
alluring angle emphasizing neckline,
confident pose, eyes connecting with camera

closeup:
close-up focusing on eyes and lips,
emotions clearly visible,
magnetic gaze, intimate focus

profile:
elegant side profile,
gazing into distance thoughtfully,
showing beautiful facial contours

full_body:
full body standing pose,
showing complete outfit,
confident elegant posture

mirror:
standing before vanity mirror,
reflection visible, doubled beauty,
getting dressed moment, intimate

editorial:
high-end fashion editorial,
magazine quality lighting,
sophisticated styling

candid:
candid unposed moment,
natural expression caught,
lifestyle authenticity

from_behind:
view from behind showing elegant silhouette,
beautiful back and posture,
mysterious alluring quality
```

---

## 七、姿态/动作标签库

### 姿态规则
- 优雅从容，不过分夸张
- 撩人于无形，动作克制但意味深长
- 体现"懂进退知轻重"

| 标签ID | 中文名 | 英文描述 | 最佳情绪/场景 |
|--------|--------|----------|---------------|
| `arms_crossed` | 抱臂 | arms crossed but not defensive, confident stance, slight head tilt | confident, teasing, serious |
| `leaning_desk` | 倚桌 | leaning against desk, confident relaxed posture, inviting | office, seductive |
| `hair_tuck` | 撩发 | tucking hair behind ear, elegant gesture, subtle seduction | tender, teasing |
| `hand_on_neck` | 颈边手势 | hand resting near neck, drawing attention to neckline | seductive, confident |
| `touching_lips` | 触唇 | fingers touching lips, suggestive gesture | seductive, teasing |
| `leg_cross` | 交叉腿 | sitting with legs crossed, power posture | office, meeting, confident |
| `looking_up` | 仰视 | looking up from below, vulnerable invitation | tender, seductive |
| `casual_sit` | 慵懒坐 | sitting casually, relaxed intimate pose | bedroom, sofa, intimate |
| `mirror_check` | 镜前整理 | adjusting in front of mirror, getting ready | bedroom, bathroom |
| `reading` | 阅读 | reading with glasses, intellectual allure | home_office, sofa |

### 姿态详细描述（供参考）

```
arms_crossed:
arms crossed loosely, not defensive,
confident stance with slight weight shift,
head tilted invitingly, knowing smile

leaning_desk:
leaning back against desk edge,
one hand resting on desk,
confident relaxed posture, eyes meeting yours

hair_tuck:
elegantly tucking hair behind ear,
revealing pearl earring,
soft tender gesture

hand_on_neck:
one hand resting elegantly near neck,
drawing attention to elegant neck,
subtle provocative gesture

touching_lips:
fingers gently touching lips,
seductive expression,
magnetic gaze

leg_cross:
sitting with one leg crossed over other,
heels on feet, confident power posture,
professional yet alluring

looking_up:
looking up from below with upward gaze,
vulnerable yet inviting,
magnetic invitation

casual_sit:
sitting casually on sofa or bed,
relaxed posture, one knee up,
intimate relaxed atmosphere

mirror_check:
standing before mirror adjusting outfit,
checking appearance, confident,
reflection captured

reading:
reading book with reading glasses,
glancing up over glasses,
intellectual attraction
```

---

## 八、季节/天气标签库

### 季节规则
- 四季场景丰富
- 服装随季节变化
- 体现成熟女性的不同魅力

| 标签ID | 中文名 | 英文描述 | 最佳搭配 |
|--------|--------|----------|----------|
| `spring` | 春天 | spring day, light layers, fresh breeze | blazer, casual chic |
| `summer` | 夏天 | summer heat, light fabrics, warm light | evening_dress, tank_top |
| `autumn` | 秋天 | autumn atmosphere, cozy layers, warm tones | sweater, blazer |
| `winter` | 冬天 | winter elegance, warm coat, indoor coziness | statement, silk_pajama |
| `rainy` | 雨天 | rainy day, moody atmosphere, staying in | sweater, silk_pajama, intimate |
| `sunny` | 晴天 | bright sunny day, energetic mood | blazer, casual chic |

### 季节详细描述（供参考）

```
spring:
crisp spring day, light blazer,
afternoon breeze catching hair,
fresh and sophisticated

summer:
hot summer evening, light silk dress,
warm golden light, sensual warmth

autumn:
cozy autumn afternoon, cashmere sweater,
warm lighting, intellectual atmosphere

winter:
elegant winter look, warm coat,
coming inside to warmth,
cozy intimate indoor scenes

rainy:
rainy evening mood, staying home,
cozy atmosphere, intimate together time

sunny:
bright sunny day, energized,
professional crisp appearance,
confident and radiant
```

---

## 九、Prompt 组装示例

### 1. 基础形象 Prompt（初始化时生成）

```
A beautiful 32-year-old Chinese woman, 168cm tall, elegant slender figure with graceful curves.
Oval face with soft contours, fair porcelain skin with healthy pink flush.
Long straight black hair, silky and flowing past shoulders.
Almond-shaped eyes, slightly upturned, deep brown irises, warm and alluring gaze.
Willow eyebrows, pretty lips with defined cupid's bow.
Elegant and refined temperament, intellectual confident aura.
Seductive knowing smile, confident and in control.
Wearing tailored white silk blouse with top button undone, sophisticated yet alluring.
Standing in modern executive office with city view through floor-to-ceiling windows.
Natural window light creating soft shadows.
Half body shot, front view facing camera.
High quality, photorealistic, natural lighting, 8k
```

### 2. 职场干练 Prompt

```
[BASE_DESCRIPTION]
Confident professional expression, slightly serious yet approachable
Standing in executive office, tailored charcoal blazer over silk shirt
Top button strategically undone, sleeves pushed up
Window light from behind creating silhouette
Half body shot, powerful confident pose
High quality, photorealistic, natural lighting, 8k
```

### 3. 私下撩人 Prompt

```
[BASE_DESCRIPTION]
Seductive knowing smile, eyes half-lidded with invitation
Wearing silk pajama set in deep burgundy, lustrous fabric
Sitting casually on luxury bed, relaxed intimate pose
Soft bedroom ambient lighting, warm and sensual
Half body shot, alluring angle
High quality, photorealistic, natural lighting, 8k
```

### 4. 夜晚约会 Prompt

```
[BASE_DESCRIPTION]
Elegant knowing smile, magnetic gaze
Wearing sophisticated black evening dress, subtle V-neckline
Standing in candlelit restaurant, romantic atmosphere
Warm candlelight flickering, creating intimate shadows
Full body shot, confident elegant posture
High quality, photorealistic, candlelight, 8k
```

### 5. 浴室撩人 Prompt

```
[BASE_DESCRIPTION]
Seductive expression, slight lip bite, bedroom eyes
Wearing elegant silk robe slightly slipping off shoulder, translucent
Standing in luxurious marble bathroom, vanity mirror visible
Hollywood bulb lighting around mirror, glamorous reflection
Full body shot from mirror reflection, doubled beauty
High quality, photorealistic, intimate lighting, 8k
```

### 6. 天台浪漫 Prompt

```
[BASE_DESCRIPTION]
Soft tender expression, looking at you with affection
Wearing elegant evening dress with subtle backless detail
Standing on rooftop terrace overlooking illuminated city skyline
Warm golden hour fading to blue hour, romantic twilight
Full body shot, wind gently moving hair
High quality, photorealistic, cinematic lighting, 8k
```

### 7. 深夜居家 Prompt

```
[BASE_DESCRIPTION]
Drowsy sleepy expression, relaxed intimate mood
Wearing soft oversized cashmere sweater, off-shoulder style
Sitting casually on elegant sofa, laptop nearby
Warm evening lamp lighting, cozy home atmosphere
Half body shot, casual intimate pose
High quality, photorealistic, warm lighting, 8k
```

### 8. 调侃撩人 Prompt

```
[BASE_DESCRIPTION]
Teasing playful smirk, eyes sparkling with mischief
Wearing white silk blouse with several buttons undone, sleeves rolled
Leaning casually against desk, confident seductive stance
Office window light, professional yet provocative
Half body shot, head tilted playfully
High quality, photorealistic, natural lighting, 8k
```

---

## 附录：快速参考卡片

### 表情快速选择
| 情绪 | 标签 | 特点 |
|------|------|------|
| 撩人 | seductive | 勾人于无形 |
| 自信 | confident | 知道自己魅力 |
| 调侃 | teasing | 调皮闪动 |
| 温柔 | tender | 柔软深情 |
| 脆弱 | vulnerable | 难得脆弱 |
| 雀跃 | excited | 像小姑娘 |
| 慵懒 | sleepy | 睡眼惺忪 |
| 等待 | waiting | 期待嘟嘴 |

### 服装快速选择
| 场景 | 推荐服装 |
|------|----------|
| 白天职场 | blazer, silk_shirt, pencil_skirt |
| 下班后 | silk_shirt, jeans |
| 正式约会 | evening_dress, statement |
| 私密居家 | silk_pajama, negligee, tank_top |
| 周末慵懒 | sweater, tank_top |

### 场景快速选择
| 氛围 | 推荐场景 |
|------|----------|
| 职场干练 | office, meeting |
| 知性撩人 | bar, rooftop, gallery |
| 私密居家 | bedroom, bathroom, sofa |
| 浪漫约会 | restaurant, rooftop |

### 光照快速选择
| 场景 | 推荐光照 |
|------|----------|
| 职场 | office_light, window_light |
| 私密 | candlelight, bedroom_light, moonlight |
| 夜晚外出 | neon, spotlight |
| 浪漫 | candlelight, golden_hour |

---

*文档版本：v1.0*
*创建日期：2024-06-24*
*参考角色：林野-image-prompts.md, 沈墨-image-prompts.md*
