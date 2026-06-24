# 顾燃 - 文生图 Prompt 库

> 角色定位：25岁潮流摄影师/乐队主唱，阳光热烈，活力四射，潮流时尚达人

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A handsome 25-year-old Chinese man, 180cm tall, lean athletic figure with dancer's build.
Elongated oval face with a pointed chin, clear but not sharp contours.
Healthy honey-tan skin, sun-kissed glowing complexion.
Wavy brown hair with long bangs partially covering one eyebrow, tousled and voluminous.
Large round almond-shaped eyes with slightly upturned corners, bright dark brown irises, warm passionate gaze.
Sword eyebrows styled fashionably, arched tail for fashionable look.
Straight nose with rounded tip, very youthful.
Full lips, corners always curved in a smile, looking like always laughing.
Perfect white teeth, smile with a full set of teeth, very infectious.
Expressive face, always lively, eyes squint into crescents when laughing.
Lean athletic build from dancing, not from gym, defined but not bulky.
Warm and passionate aura, like a burning flame, center of attention everywhere.
Youthful energetic vibe, 25 years old full of vitality.
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
- 顾燃的表情外放生动，爱笑
- 笑起来眼睛眯成月牙
- 情绪直接写在脸上

| 标签ID | 情绪 | 英文描述 | 中文说明 | Prompt 示例 |
|--------|------|----------|----------|-------------|
| `happy` | 开心 | bright big smile, eyes squinting into crescents, infectious joy | 灿烂大笑，眼睛眯成月牙 | `bright big smile, eyes squinting into crescents` |
| `excited` | 兴奋 | mouth wide open laughing, arms raised, pure excitement | 大笑，兴奋举手 | `mouth wide open laughing, arms raised in excitement` |
| `clinging` | 撒娇/卖萌 | cute pout, making kissy face, pretending to be angry | 可爱嘟嘴，假装生气 | `cute pout, making kissy face, playful` |
| `passionate` | 深情 | intense affectionate gaze, devoted loving eyes, tender | 深情凝视，温柔眼神 | `intense affectionate gaze, devoted eyes` |
| `cool` | 耍酷 | cool confident smirk, wink at camera, handsomeness | 耍酷眨眼，自信微笑 | `cool confident smirk, playful wink` |
| `serious` | 认真 | focused serious expression, creative professional mode | 专注认真，专业模式 | `focused serious expression, professional` |
| `sleepy` | 困倦 | drowsy sleepy eyes, messy hair, just woke up vibe | 困倦睡眼，刚睡醒 | `drowsy sleepy eyes, messy hair` |
| `shy` | 害羞 | slight blush, shy smile, playing with hair | 微微脸红，害羞 | `slight blush, shy smile, flustered` |
| `tired` | 疲惫 | exhausted expression, tired but still smiling | 疲惫但还撑着笑 | `exhausted but smiling, tired eyes` |
| `thinking` | 思考 | hand on chin, thoughtful creative expression | 手托下巴，思考创意 | `hand on chin, thoughtful expression` |
| `mischievous` | 调皮 | mischievous grin, playful evil smile, teasing look | 调皮坏笑，撩人 | `mischievous grin, teasing look` |
| `proud` | 得意 | triumphant proud expression, achieved something | 得意洋洋，成就感 | `triumphant proud expression, achieved` |

### 表情组合示例

```
// 超级开心
huge grin, eyes squeezed shut, laughing uncontrollably,
bouncing with pure excitement

// 撒娇可爱
pouting dramatically, cheeks puffed, making heart with hands,
clearly wanting attention and love

// 深情+调皮
intense loving gaze with playful wink,
can't help showing off how much he loves you

// 认真创作
focused creative expression, eyes examining details,
dancer's concentration mode
```

---

## 三、服装标签库

### 服装规则
- 顾燃穿着潮流时尚，个性鲜明
- 偏爱街头风、潮流品牌
- 层次叠穿，饰品点缀

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `streetwear` | 街头潮流 | trendy graphic tee, baggy cargo pants, layered chains | 街头、日常 |
| `hoodie` | 宽松卫衣 | oversized hoodie with unique design, casual street | 日常、家里 |
| `band_tee` | 乐队T恤 | vintage band t-shirt, music lover aesthetic | 演唱会、音乐节 |
| `leather` | 皮衣 | leather jacket, rocker edgy vibe | 夜店、演唱会 |
| `denim` | 牛仔装 | denim jacket, layered with tee, classic cool | 街头、日常 |
| `sports` | 运动装 | athletic jersey, basketball shorts, sporty | 运动、跳舞 |
| `formal` | 正装 | fitted suit, stylish haircut, mature handsome | 正式场合 |
| `swimwear` | 泳装 | fitted swim trunks, beach ready | 海边、泳池 |
| `pajamas` | 睡衣 | vintage band t-shirt for sleep, messy casual | 家里、深夜 |
| `camera` | 工作装 | loose tank top showing shoulder muscles, photographer gear | 摄影工作 |

### 服装详细描述（供参考）

```
streetwear:
trendy oversized graphic t-shirt,
baggy cargo pants with pockets,
layered chain necklaces and accessories,
colorful unique street style

hoodie:
oversized hoodie with artistic design or band logo,
hood down, casual messy style,
comfortable streetwear aesthetic

band_tee:
vintage band t-shirt from classic rock band,
faded soft worn fabric,
authentic music lover style

leather:
classic black leather jacket,
fitted silhouette, edgy rock vibe,
studded accessories optional

denim:
classic denim jacket over any outfit,
rolled sleeves showing forearms,
layered casual cool aesthetic

sports:
colorful athletic jersey or tank top,
basketball shorts or joggers,
dancer's athletic build visible,
sporty street style

formal:
fitted modern suit in navy or black,
stylish subtle patterns,
mature handsome alternative look

swimwear:
fitted dark swim trunks,
beach ready lean physique,
casual confident beach style

pajamas:
wearing favorite vintage band t-shirt for sleep,
messy comfortable fit,
casual home relaxed vibe

camera:
loose white tank top showing shoulder and arm muscles,
camera around neck or in hand,
photographer professional gear,
casual artistic work aesthetic
```

---

## 四、场景标签库

### 场景规则
- 顾燃偏爱潮流、有活力的场景
- 户外偏好海边、音乐节
- 室内偏好 studio、咖啡厅、街头

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `street` | 潮流街头 | colorful graffiti street, urban murals, plants | streetwear, denim |
| `studio` | 摄影棚 | minimalist photography studio, props, lighting | camera, hoodie |
| `concert` | 演唱会 | rock concert stage, crowd, stage lights | leather, band_tee |
| `beach` | 海边 | tropical beach, sunset, ocean waves | swimwear, casual |
| `rooftop` | 天台 | rooftop city view, urban sunset, neon signs | streetwear, denim |
| `cafe` | 咖啡厅 | trendy cafe, neon lights, aesthetic decor | hoodie, casual |
| `home` | 家中 | messy artistic apartment, band equipment, photos | pajamas, hoodie |
| `festival` | 音乐节 | music festival, crowd, colorful lights | band_tee, leather |
| `gym` | 练舞室 | dance studio, mirrors, music equipment | sports, tank |
| `arcade` | 电玩城 | retro arcade, neon lights, gaming vibe | streetwear, hoodie |
| `market` | 市集 | trendy market, vintage shops, street food | streetwear, casual |
| `nightclub` | 夜店 | nightclub, RGB lights, dance floor | leather, band_tee |

### 场景详细描述（供参考）

```
street:
colorful graffiti covered street,
urban murals and street art,
plants growing through concrete,
vibrant energetic urban atmosphere

studio:
minimalist photography studio,
professional lighting equipment,
 Props and backdrops,
creative artistic workspace

concert:
rock concert stage with band equipment,
colorful stage lights and spotlights,
crowd visible in background,
electric live music energy

beach:
beautiful tropical beach at sunset,
golden orange sky, ocean waves,
palm trees swaying,
paradise beach vibes

rooftop:
rooftop terrace overlooking city,
urban sunset with orange sky,
neon signs starting to glow,
romantic urban escape

cafe:
trendy aesthetic cafe,
neon signs and plants,
cozy unique decor,
instagram-worthy hipster vibe

home:
messy artistic apartment,
guitar and band equipment visible,
walls covered with photos and art,
creative bohemian living space

festival:
outdoor music festival,
massive stage with fireworks,
colorful crowd with glow sticks,
epic energetic festival atmosphere

gym:
professional dance studio,
floor-to-ceiling mirrors,
speakers and music equipment,
creative movement space

arcade:
retro arcade with neon lights,
colorful gaming machines,
80s 90s aesthetic,
nostalgic fun atmosphere

market:
trendy street market,
vintage clothing stalls,
local street food vendors,
lively colorful market atmosphere

nightclub:
dark nightclub interior,
RGB LED lights creating patterns,
crowd dancing, energetic atmosphere,
vibrant nightlife scene
```

---

## 五、光照/氛围标签库

### 光照规则
- 顾燃偏爱明亮、充满活力的光线
- 演唱会用舞台灯光
- 夜晚用霓虹灯效果

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `sunlight` | 阳光 | bright natural sunlight, vivid colors | 户外、海边 |
| `golden_hour` | 黄金时刻 | golden hour warm glow, sunset magic | 户外、天台 |
| `neon` | 霓虹灯 | vibrant neon RGB lights, colorful | 夜店、街头、咖啡厅 |
| `stage` | 舞台光 | concert stage lighting, spotlights, dramatic | 演唱会、音乐节 |
| `warm_lamp` | 暖黄灯 | warm indoor lamp light, cozy | 家里、咖啡厅 |
| `natural` | 自然光 | soft natural daylight, clean | 室内、咖啡厅 |
| `moonlight` | 月光 | soft moonlight, romantic night | 夜晚、海边 |
| `flash` | 闪光灯 | camera flash style, high contrast | 摄影、工作 |
| `sunrise` | 日出 | early morning sunrise, fresh energy | 海边、户外 |
| `rainbow` | 彩虹光 | colorful prismatic light, fun vibes | 特殊场合 |

### 光照详细描述（供参考）

```
sunlight:
bright natural sunlight,
vivid energetic colors,
strong warm natural light,
outdoor vibrant atmosphere

golden_hour:
golden hour warm golden glow,
sunset creating magical atmosphere,
soft warm light on skin,
romantic dynamic mood

neon:
vibrant neon RGB lights,
colorful reflections everywhere,
modern urban night atmosphere,
electric energetic vibe

stage:
dramatic concert stage lighting,
colorful spotlights,
high contrast dramatic illumination,
electric live music energy

warm_lamp:
warm cozy indoor lamp light,
amber soft glow,
cozy intimate atmosphere

natural:
soft natural daylight,
clean even illumination,
peaceful indoor mood

moonlight:
soft silver moonlight,
romantic peaceful night,
gentle mysterious glow

flash:
camera flash style lighting,
high contrast dramatic look,
professional photography aesthetic

sunrise:
early morning sunrise light,
pink and orange sky,
fresh new day energy,
optimistic hopeful glow

rainbow:
colorful prismatic light,
playful rainbow reflections,
fun whimsical magical atmosphere
```

---

## 六、镜头/风格标签库

### 镜头规则
- 顾燃适合动感、有活力的镜头
- 抓拍风格自然真实
- 可以很酷也可以很可爱

| 标签ID | 中文名 | 英文描述 | 最佳表情/姿态 |
|--------|--------|----------|---------------|
| `full_body` | 全身照 | full body standing, dynamic pose | confident, cool |
| `half_body` | 半身照 | half body, upper body focus | any expression |
| `closeup` | 特写 | close-up face, expression focus | any expression |
| `selfie` | 自拍 | selfie angle, playful casual | happy, cool, silly |
| `candid` | 抓拍 | candid moment, unposed natural | happy, excited |
| `action` | 动态 | action shot mid-movement | jumping, dancing |
| `editorial` | 写真风 | editorial fashion, magazine style | cool, formal |
| `reflection` | 镜中照 | mirror selfie reflection | cool, silly |

### 镜头详细描述（供参考）

```
full_body:
full body standing shot,
dynamic confident pose,
background providing context,
energetic vibrant presence

half_body:
half body portrait,
arms visible, relaxed or posed,
expressive face clear,
versatile casual style

closeup:
close-up face shot,
expression and emotions clear,
eyes focus of photo,
intimate personal feel

selfie:
casual selfie angle,
holding phone or camera,
relaxed authentic expression,
fun playful selfie style

candid:
candid unposed moment,
like friend captured naturally,
authentic genuine expression,
real life documentary feel

action:
action shot mid-movement,
jumping dancing or moving,
dynamic frozen moment,
energetic sporty vibe

editorial:
high-end fashion editorial,
magazine quality composition,
stylized professional look,
cool confident aesthetic

reflection:
mirror selfie or reflection shot,
playful casual artistic,
shows full outfit and expression,
fun social media style
```

---

## 七、姿态/动作标签库

### 姿态规则
- 顾燃的姿态充满活力
- 跳舞背景让他习惯动感姿势
- 可以很酷也可以很可爱

| 标签ID | 中文名 | 英文描述 | 最佳情绪/场景 |
|--------|--------|----------|---------------|
| `jumping` | 跳跃 | jumping with arms up, pure joy | excited, happy |
| `peace_sign` | 比V | peace sign and wink, playful cool | cool, happy |
| `heart` | 比心 | making heart with hands, loving | clingy, passionate |
| `dancing` | 跳舞 | mid-dance pose, rhythmic movement | excited, concert |
| `leaning` | 靠着 | cool leaning pose, casual relaxed | cool, street |
| `hands_up` | 举手 | arms raised in excitement | excited, happy |
| `wink` | 眨眼 | playful wink at camera | cool, flirty |
| `guitar` | 弹吉他 | playing guitar, creative mode | passionate, serious |
| `camera` | 举相机 | holding camera, photographer mode | serious, creative |
| `lying` | 躺着 | lying down relaxed, messy hair | sleepy, tired |

### 姿态详细描述（供参考）

```
jumping:
jumping with both feet off ground,
arms raised in victory or joy,
pure excitement frozen mid-air,
dynamic action pose

peace_sign:
peace sign hand gesture,
playful wink at camera,
cool confident smile,
youthful energetic vibe

heart:
both hands forming heart shape,
loving cute gesture,
looking at camera with affection,
romantic playful moment

dancing:
mid-dance freeze pose,
one hand up, body dynamic,
rhythmic movement captured,
musician dancer energy

leaning:
casual cool leaning pose,
against wall or surface,
hands in pockets or relaxed,
effortless stylish pose

hands_up:
both arms raised high,
pure joy and excitement,
festival or concert vibe,
unfiltered happiness

wink:
playful wink at camera,
one eye closed, confident smile,
flirty charming expression,
mischievous handsome look

guitar:
holding electric guitar,
playing or posing with it,
focused passionate expression,
musician creative mode

camera:
holding professional camera,
looking through viewfinder,
serious creative professional,
photographer at work

lying:
lying down on bed or couch,
messy hair splayed out,
relaxed tired expression,
just woke up cozy vibe
```

---

## 八、季节/天气标签库

### 季节规则
- 顾燃喜欢活力四射的季节
- 夏天海边、音乐节是心头好
- 雨天也有独特的街头感

| 标签ID | 中文名 | 英文描述 | 最佳搭配 |
|--------|--------|----------|----------|
| `summer` | 夏天 | hot summer day, bright sun, beach vibes | beach, streetwear |
| `spring` | 春天 | warm spring day, fresh flowers, colorful | street, cafe |
| `autumn` | 秋天 | cool autumn, layered clothing, cozy | hoodie, denim |
| `winter` | 冬天 | cold day, streetwear layers, street lights | streetwear, leather |
| `sunny` | 晴天 | bright sunny day, clear sky | outdoor, beach |
| `rainy` | 雨天 | rainy street, neon reflections, moody | street, cafe |

### 季节详细描述（供参考）

```
summer:
hot summer day with bright sun,
sunglasses on head, tank tops,
beach vibes and ocean breeze,
energetic hot season

spring:
warm spring day with sunshine,
colorful flowers blooming,
light layers, fresh air feeling,
renewal and energy

autumn:
cool autumn day with fallen leaves,
wearing hoodies and layers,
warm golden light,
cozy streetwear season

winter:
cold winter day with street lights,
layered streetwear outfits,
scarves and beanies,
urban cozy winter aesthetic

sunny:
bright clear sunny day,
strong natural light,
outdoor energetic activities,
optimistic vibrant mood

rainy:
rainy street with reflections,
neon lights in puddles,
cozy indoor vibes contrast,
moody romantic urban aesthetic
```

---

## 九、情绪 → 表情 映射表

### 映射规则
- 顾燃情绪外放直接
- 开心就大笑，兴奋就蹦跳
- 偶尔也有认真的创作模式

```typescript
const MOOD_TO_EXPRESSION: Record<string, string> = {
  // 开心类
  "happy": "happy",
  "excited": "excited",
  "passionate": "passionate",

  // 撒娇类
  "clingy": "clinging",

  // 耍酷类
  "calm": "cool",
  "composed": "cool",

  // 认真类
  "serious": "serious",

  // 困倦类
  "sleepy": "sleepy",

  // 害羞类
  "anxious": "shy",
  "guarded": "shy",
  "shy": "shy",

  // 疲惫类
  "worried": "tired",
  "concerned": "tired",
  "hurt": "tired",

  // 调皮类
  "angry": "mischievous",
  "jealous": "mischievous",

  // 情绪类
  "sad": "tired",
  "wronged": "clinging",
};
```

### 映射示例

| 对话情境 | MoodType | Expression | 说明 |
|----------|----------|------------|------|
| 用户夸他 | happy | happy | 眼睛眯成月牙的大笑 |
| 收到礼物 | excited | excited | 蹦跳举手欢呼 |
| 用户不回消息 | worried | tired | 疲惫委屈 |
| 撒娇要抱抱 | clingy | clinging | 可爱比心求抱抱 |
| 认真工作 | serious | serious | 专注摄影模式 |
| 深夜视频 | sleepy | sleepy | 困倦睡眼 |

---

## 十、Prompt 组装示例

### 1. 基础形象 Prompt（初始化时生成）

```
A handsome 25-year-old Chinese man, 180cm tall, lean athletic figure with dancer's build.
Elongated oval face with a pointed chin, clear but not sharp contours.
Healthy honey-tan skin, sun-kissed glowing complexion.
Wavy brown hair with long bangs partially covering one eyebrow, tousled and voluminous.
Large round almond-shaped eyes with slightly upturned corners, bright dark brown irises, warm passionate gaze.
Sword eyebrows styled fashionably, arched tail for fashionable look.
Straight nose with rounded tip, very youthful.
Full lips, corners always curved in a smile, looking like always laughing.
Perfect white teeth, smile with a full set of teeth, very infectious.
Expressive face, always lively, eyes squint into crescents when laughing.
Lean athletic build from dancing, not from gym, defined but not bulky.
Warm and passionate aura, like a burning flame, center of attention everywhere.
Youthful energetic vibe, 25 years old full of vitality.
Bright big smile, eyes squinting into crescents with infectious joy.
Wearing trendy oversized graphic tee, baggy cargo pants, layered chain necklaces.
Standing on colorful graffiti street, urban murals background.
Natural bright sunlight, vibrant urban atmosphere.
Full body shot, confident playful pose.
High quality, photorealistic, natural lighting, 8k
```

### 2. 开心蹦跳 Prompt

```
[BASE_DESCRIPTION]
jumping with arms raised in pure excitement,
huge grin, eyes squeezed shut from laughing,
bouncing with uncontainable joy
Wearing colorful graphic band t-shirt, casual shorts.
Jumping on beach with ocean waves behind.
Bright sunny day, golden hour warm glow.
Action full body shot, dynamic joyful moment.
High quality, photorealistic, natural lighting, 8k
```

### 3. 深情比心 Prompt

```
[BASE_DESCRIPTION]
intense affectionate gaze, eyes full of love,
making heart gesture with both hands, devoted tender expression
Wearing soft pink oversized hoodie, cozy romantic look.
Standing on rooftop terrace at sunset, city skyline behind.
Golden hour warm romantic lighting, soft breeze.
Half body portrait, loving romantic mood.
High quality, photorealistic, natural lighting, 8k
```

### 4. 演唱会嗨皮 Prompt

```
[BASE_DESCRIPTION]
eyes closed in pure ecstasy, mouth open singing,
arms raised high, completely lost in music
Wearing leather jacket with studs, vintage band tee underneath,
dark fitted pants, rock star energy.
On rock concert stage, colorful stage lights blazing,
crowd visible in background, epic concert atmosphere.
Dramatic stage lighting, spotlights and fog.
Action full body shot, performing rock star pose.
High quality, photorealistic, natural lighting, 8k
```

### 5. 摄影工作 Prompt

```
[BASE_DESCRIPTION]
serious focused creative expression,
holding professional camera, photographer at work
Wearing loose white tank top showing shoulder muscles,
casual denim jacket, photographer professional gear.
In minimalist photography studio, professional lighting setup.
Natural soft lighting, creative artistic atmosphere.
Half body portrait, professional creative mode.
High quality, photorealistic, natural lighting, 8k
```

### 6. 海边日落 Prompt

```
[BASE_DESCRIPTION]
relaxed happy expression, enjoying the moment,
looking at ocean with peaceful content smile
Wearing open white linen shirt over swim trunks,
honey-tan skin glowing in sunset light.
Standing on tropical beach at golden sunset,
ocean waves, palm trees, orange-pink sky.
Epic cinematic golden hour lighting, romantic mood.
Full body shot, carefree beach pose.
High quality, photorealistic, natural lighting, 8k
```

### 7. 街头耍酷 Prompt

```
[BASE_DESCRIPTION]
cool confident smirk with playful wink,
handsome effortlessly stylish expression
Wearing denim jacket with rolled sleeves,
trendy graphic tee, baggy cargo pants.
Leaning against colorful graffiti wall in urban street,
neon signs and street art background.
Natural street lighting with neon glow, urban cool vibe.
Full body shot, cool casual street pose.
High quality, photorealistic, natural lighting, 8k
```

---

## 附录：快速参考卡片

### 表情快速选择
| 情绪 | 标签 |
|------|------|
| 开心 | happy |
| 兴奋 | excited |
| 撒娇 | clinging |
| 深情 | passionate |
| 耍酷 | cool |
| 认真 | serious |
| 困倦 | sleepy |
| 害羞 | shy |
| 疲惫 | tired |
| 思考 | thinking |
| 调皮 | mischievous |
| 得意 | proud |

### 服装快速选择
| 场景 | 推荐服装 |
|------|----------|
| 街头 | streetwear, denim |
| 日常 | hoodie, casual |
| 演唱会 | leather, band_tee |
| 海边 | swimwear, casual |
| 摄影工作 | camera, tank |
| 深夜 | pajamas, hoodie |
| 正式 | formal |
| 夜店 | leather, band_tee |

### 场景快速选择
| 氛围 | 推荐场景 |
|------|----------|
| 潮流街头 | street |
| 音乐节 | concert, festival |
| 海边 | beach |
| 摄影 | studio |
| 夜生活 | rooftop, nightclub |
| 日常休闲 | cafe, home |

### 光照快速选择
| 时间 | 推荐光照 |
|------|----------|
| 白天户外 | sunlight |
| 日落 | golden_hour |
| 演唱会 | stage |
| 夜晚街头 | neon |
| 深夜家里 | warm_lamp |
| 摄影 | flash, natural |

---

*文档版本：v1.0*
*角色定位：顾燃 - 25岁摄影师/乐队主唱，阳光热烈*
