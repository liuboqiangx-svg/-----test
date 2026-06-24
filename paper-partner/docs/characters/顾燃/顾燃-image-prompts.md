# 顾燃 - 文生图 Prompt 库

> 角色定位：25岁潮流摄影师 + 乐队主唱，阳光直球街头潮男

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A handsome 25-year-old Chinese man, 180cm tall, lean athletic build with dancer's physique.
Slightly elongated oval face with sharp chin, clear defined contours.
Healthy honey-tanned skin, like kissed by sunshine.
Wavy chestnut-brown hair with long bangs covering half of eyebrows, fluffy and tousled.
Large round almond-shaped eyes, slightly upturned outer corners, bright dark brown irises, fox-like smile when laughing.
Sword eyebrows with stylish grooming, slight arch at tail.
Straight nose with rounded tip, very youthful.
Full thick lips, corners always curled into a smile, looks like perpetually ready to laugh.
Perfect white teeth visible when smiling, infectious bright smile.
Expressive animated face, bright and lively, eyes squinting into happy crescents when laughing.
Lean muscular build, dance-trained lines, not gym-bulky.
Sunshine boy aura, like a burning flame, always the center of attention.
25 years old, no traces of world-weariness, pure love for life.
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

## 二，表情标签库

### 表情规则
- 顾燃的表情永远外放、生动、感染力强
- 开心就大笑，兴奋就蹦跳
- 情绪写在脸上，不藏着掖着
- 与沈墨的内敛形成对比

| 标签ID | 情绪 | 英文描述 | 中文说明 |
|--------|------|----------|----------|
| `laughing` | 大笑 | big infectious laugh, eyes squinting into crescents, mouth wide open showing teeth | 眼睛眯成月牙，嘴巴大开，笑得灿烂 |
| `excited` | 超级兴奋 | super excited expression, eyes wide bright, bouncing energy, can't contain joy | 眼睛发亮，充满活力，蹦蹦跳跳 |
| `cool` | 耍酷 | cool casual smirk, flipping刘海 back, confident relaxed pose | 刘海甩回去，自信放松 |
| `teasing` | 调侃 | playful teasing expression, mischievous grin, sticking tongue out slightly | 调皮坏笑，吐舌头 |
| `loving` | 直球爱意 | direct affectionate expression, straightforward love declaration face | 直接表达爱意的表情 |
| `crying` | 感动哭 | touched to tears, eyes watery but still smiling, emotional | 感动到哭，眼眶湿润但还在笑 |
| `angry` | 直接怼 | direct angry expression, not holding back, but quickly recovers | 直接怼人，但说完就忘 |
| `confident` | 自信帅气 | confident handsome expression, knowing his charm, assured smile | 自信知道自己帅气的微笑 |
| `sleepy` | 困了 | sleepy tired expression, yawning but still cute, relaxed | 困了打哈欠但还是很可爱 |
| `focused` | 认真工作 | focused professional expression, serious about art, artistic intensity | 认真对待艺术的表情 |
| `shy` | 害羞 | rare shy moment, blushing slightly, looking away | 难得的害羞，低头 |
| `pouty` | 委屈巴巴 | pouty upset expression, lip pouting, puppy eyes | 嘟嘴委屈，小狗眼 |

### 表情组合示例

```
// 超级兴奋
eyes wide with excitement, bouncing slightly, big genuine smile,
can't contain energy, pure joy radiating from expression

// 感动到哭
tears welling up in eyes, still smiling through emotion,
touched and grateful, vulnerable moment

// 调皮撩人
playful smirk, sticking tongue out slightly,
mischievous wink, teasing expression

// 直球表白
direct loving gaze, straightforward affectionate expression,
no games, pure genuine feelings

// 认真工作
focused intense gaze, artistic concentration,
serious about craft, professional intensity
```

---

## 三、服装标签库

### 服装规则
- 色彩丰富，层次感强，街头潮流
- 工装、宽松、解构风格
- 摇滚元素和潮流单品混搭
- 与沈墨的极简深色形成对比

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `workwear` | 工装背心 | oversized utility vest with many pockets, layered look, street photographer vibe | 摄影工作、街头 |
| `band` | 乐队演出 | sequin jacket, loose dress pants, retro sneakers, rock star energy | 乐队演出、音乐节 |
| `streetwear` | 街头潮流 | tie-dye hoodie, baggy jeans, colorful layers, statement pieces | 日常出街、街头 |
| `casual` | 休闲日常 | simple graphic tee, loose pants, effortless cool | 约会、咖啡厅 |
| `home` | 居家宅 | big oversized tee, loose sweatpants, comfortable球衣 | 居家、休息 |
| `date` | 约会用心 | white shirt with rolled sleeves, simple chain necklace, casual chic | 约会、见面 |
| `edgy` | 朋克 edgy | leather jacket, band tee, ripped jeans, silver accessories | 夜晚外出、蹦迪 |
| `sports` | 运动活力 | athletic tank, sports shorts, showing dancer's physique | 跳舞、运动 |
| `artsy` | 艺术感 | vintage band shirt, unique jacket, artistic layering | 展览、艺术活动 |
| `sunset` | 日落海边 | light colored shirt, casual beach vibes | 海边、日落 |

### 服装详细描述（供参考）

```
workwear:
oversized olive utility vest with multiple pockets,
worn over graphic tee, baggy cargo pants,
martin boots, sunglasses on head,
street photographer professional look

band:
sparkling sequin bomber jacket in silver or gold,
loose vintage dress pants,
retro platform sneakers,
rock star ready for stage

streetwear:
vibrant tie-dye oversized hoodie,
layered over multiple shirts,
baggy ripped jeans,
colorful socks showing,
hypebeast aesthetic

casual:
simple white or black graphic tee,
well-fitted jeans,
sneakers, casual chain necklace,
effortlessly cool casual look

home:
big oversized vintage band tee,
loose comfortable sweatpants,
barefoot or fluffy socks,
relaxed homebody vibes

date:
crisp white shirt with sleeves rolled up,
simple delicate chain necklace,
nice jeans, clean sneakers,
slightly more put together but still casual

edgy:
classic black leather jacket,
worn over graphic band tee,
ripped skinny jeans,
silver stacked rings and chains,
punk rock edge

sports:
athletic tank top showing dancer's physique,
sports shorts,
sweatband optional,
energetic active wear

artsy:
vintage band shirt with interesting print,
unique oversized jacket,
layered accessories,
creative artistic layering

sunset:
light washed linen shirt,
casual summer shorts,
looking relaxed and beach-ready
```

---

## 四、场景标签库

### 场景规则
- 街头潮流、艺术音乐场景为主
- 充满活力和创意感
- 与顾燃的摄影师和乐队身份匹配

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `street` | 街头 | colorful graffiti street, urban backdrop, vibrant street art | streetwear, workwear, edgy |
| `rooftop` | 天台 | rooftop with city view, sunset sky, creative urban vibe | casual, artsy |
| `studio` | 摄影棚 | professional photo studio, studio lights, creative workspace | workwear, casual |
| `concert` | 演唱会 | concert stage, stage lights, crowd energy, rock star moment | band |
| `music_festival` | 音乐节 | outdoor music festival, colorful crowd, festival vibes | band, streetwear |
| `club` | 夜店蹦迪 | neon-lit nightclub, rgb lights, dancing energy | edgy, band |
| `cafe` | 咖啡厅 | trendy cafe, colorful interior, hipster vibes | casual, artsy |
| `beach` | 海边日落 | beach at sunset, golden hour light, relaxed vibes | sunset, casual |
| `home` | 家中 | colorful messy apartment, music equipment visible, creative space | home |
| `dance_studio` | 舞蹈室 | dance studio with mirrors, practice space, energetic | sports |
| `concert_venue` | 地下livehouse | underground music venue, intimate concert, local band | band, edgy |
| `gallery` | 艺术展 | modern art gallery, creative exhibitions, cultural | artsy, casual |

### 场景详细描述（供参考）

```
street:
colorful graffiti wall as backdrop,
urban street with plants and murals,
vibrant energetic atmosphere,
perfect for street photography

rooftop:
rooftop with panoramic city view,
golden sunset sky, warm lighting,
creative urban energy

studio:
professional photo studio with softbox lights,
various backdrops, creative props,
working photographer atmosphere

concert:
live concert stage with dramatic lighting,
spotlights, smoke machines,
rock star performing energy,
crowd visible in background

music_festival:
outdoor music festival grounds,
colorful lights and stages,
festival crowd energy,
vibrant summer atmosphere

club:
neon-lit nightclub interior,
rgb lights creating patterns,
crowd dancing, bass feeling visual,
high energy nightlife

cafe:
trendy colorful cafe interior,
unique decor, vintage furniture,
creative hipster atmosphere,
coffee cup as prop

beach:
beach at golden hour,
warm sunset light,
relaxed summer vibes,
waves in background

home:
colorful messy apartment living room,
guitar and camera equipment visible,
messy but creative space,
personal intimate atmosphere

dance_studio:
dance studio with full mirrors,
sprung floor visible,
energetic movement atmosphere,
practice in progress

concert_venue:
underground live house,
intimate concert setting,
stage lights, small crowd,
raw authentic music energy

gallery:
modern art gallery with white walls,
interesting installations visible,
cultural intellectual atmosphere,
creative professional setting
```

---

## 五、光照/氛围标签库

### 光照规则
- 舞台灯光、霓虹为主（乐队/蹦迪）
- 自然光、夕阳（街头/摄影）
- 色彩丰富，符合潮流感

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `stage_light` | 舞台灯光 | dramatic concert stage lighting, spotlights, colored beams | concert, music_festival |
| `neon` | 霓虹灯 | vibrant neon lights, rgb color splashes, urban nightlife | club, street |
| `golden_hour` | 黄金时刻 | warm golden hour sunset light, golden glow, romantic | beach, rooftop |
| `natural` | 自然光 | bright natural daylight, clean and fresh | street, cafe, beach |
| `studio_light` | 摄影棚光 | professional studio lighting, even soft light | studio |
| `moody` | 情绪光 | moody atmospheric lighting, dramatic shadows | concert_venue, artsy |
| `warm_indoor` | 暖黄室内 | warm indoor ambient lighting, cozy | home, cafe |
| `backlight` | 逆光 | dramatic backlight creating silhouette, artistic | street, rooftop |
| `flash` | 闪光灯 | flash photography lighting, high contrast | studio, street photography |
| `disco` | 迪斯科 | disco ball reflections, multi-colored moving lights | club |

### 光照详细描述（供参考）

```
stage_light:
dramatic concert lighting,
colored spotlights cutting through smoke,
dramatic shadows on face,
rock star atmosphere

neon:
vibrant neon signs in background,
rgb light reflections on face,
urban nighttime energy

golden_hour:
warm golden sunset light,
soft shadows,
romantic warm tones

natural:
clean bright natural daylight,
vivid colors,
fresh outdoor feel

studio_light:
professional softbox lighting,
even illumination,
studio photography quality

moody:
moody atmospheric lighting,
dramatic shadows,
emotional artistic quality

warm_indoor:
warm ambient indoor lighting,
cozy comfortable atmosphere,
relaxed warm tones

backlight:
dramatic backlight creating rim light,
silhouette with highlight on edges,
artistic dramatic effect

flash:
stroboscopic flash lighting,
high contrast dramatic look,
editorial flash style

disco:
disco ball light reflections,
spinning multi-colored lights,
party energy atmosphere
```

---

## 六、镜头/风格标签库

### 镜头规则
- 街拍、抓拍风格为主
- 体现摄影师的专业感
- 动感和活力

| 标签ID | 中文名 | 英文描述 | 最佳表情 |
|--------|--------|----------|----------|
| `street_photo` | 街拍 | street photography style, candid urban shot | excited, cool, laughing |
| `portrait` | 肖像 | clean portrait, photographer quality | any expression |
| `candid` | 抓拍 | candid unposed moment, authentic lifestyle | laughing, loving, teasing |
| `fashion` | 时尚大片 | fashion editorial style, magazine quality | cool, confident |
| `action` | 动态 | action shot, dynamic movement | excited, dancing |
| `selfie` | 自拍 | selfie angle, casual phone camera | teasing, loving |
| `concert` | 演唱会抓拍 | live concert capture, stage energy | excited, performing |
| `behind_scenes` | 幕后 | behind the scenes photographer style | focused, casual |

### 镜头详细描述（供参考）

```
street_photo:
authentic street photography style,
urban backdrop, candid feel,
editorial street snap

portrait:
clean professional portrait,
good lighting on face,
photographer quality portrait

candid:
candid unposed moment,
caught in natural expression,
lifestyle authenticity

fashion:
high-end fashion editorial,
magazine quality styling,
professional fashion photography

action:
dynamic action shot,
movement frozen in time,
energy and motion visible

selfie:
casual selfie angle,
phone camera style,
relaxed authentic look

concert:
live concert photography style,
stage energy captured,
crowd blur in background

behind_scenes:
behind the scenes photographer working,
camera in hand,
creative professional moment
```

---

## 七、姿态/动作标签库

### 姿态规则
- 姿态生动，不拘束
- 喜欢靠墙、甩刘海
- 活力四射，蹦蹦跳跳
- 手势丰富，表达夸张

| 标签ID | 中文名 | 英文描述 | 最佳情绪/场景 |
|--------|--------|----------|---------------|
| `hair_flip` | 甩刘海 | flipping刘海 back dramatically, cool casual gesture | cool, teasing |
| `sunglasses_up` | 眼镜推头 | pushing sunglasses up onto head, casual cool | street, cool |
| `jumping` | 蹦跳 | jumping mid-air with joy, pure energy | excited, laughing |
| `leaning` | 靠墙 | casually leaning against wall, relaxed cool pose | street, cool |
| `finger_gun` | 手势比枪 | finger gun gesture, playful wink, signature move | teasing, cool |
| `hugging_self` | 抱抱自己 | hugging himself excited, can't contain joy | excited, loving |
| `camera_hands` | 拿相机 | holding camera, photographer ready stance | studio, street |
| `rock_star` | 摇滚手势 | rock and roll hand gesture, performing | concert, band |
| `peace_sign` | 比耶 | peace sign with big smile, energetic pose | street, excited |
| `arms_up` | 双手举高 | arms raised in excitement, pure joy | concert, excited |

### 姿态详细描述（供参考）

```
hair_flip:
dramatically flipping long bangs back,
cool casual gesture,
confident playful energy

sunglasses_up:
pushing sunglasses up onto top of head,
shades resting in hair,
casual effortless cool

jumping:
jumping with both feet off ground,
arms spread wide,
pure excitement and energy

leaning:
casually leaning against wall or surface,
one hand in pocket,
relaxed confident stance

finger_gun:
making finger gun gesture at camera,
playful wink accompanying,
signature cool move

hugging_self:
hugging himself with excitement,
bouncing slightly,
can't contain happiness

camera_hands:
holding camera professionally,
photographer ready stance,
creative professional

rock_star:
rock and roll hand gesture,
other hand on mic or in air,
stage performing energy

peace_sign:
peace sign fingers with big smile,
energetic youthful pose,
signature happy photo pose

arms_up:
both arms raised above head,
victory or celebration pose,
pure joy radiating
```

---

## 八、季节/天气标签库

### 季节规则
- 活力四射，色彩丰富
- 与音乐节、户外活动结合
- 青春洋溢

| 标签ID | 中文名 | 英文描述 | 最佳搭配 |
|--------|--------|----------|----------|
| `spring` | 春天 | spring day, light layers, fresh colors | streetwear, casual |
| `summer` | 夏天 | hot summer, festival season, vibrant | band, music_festival, beach |
| `autumn` | 秋天 | autumn street style, layering season, cozy | streetwear, artsy |
| `winter` | 冬天 | winter street style, layered streetwear | edgy, streetwear |
| `rainy` | 雨天 | rainy street, moody atmosphere, staying in | home |
| `sunny` | 晴天 | bright sunny day, energetic mood | street, beach |

### 季节详细描述（供参考）

```
spring:
crisp spring day, light jacket,
fresh spring colors,
outdoor street style

summer:
hot summer festival season,
vibrant colorful energy,
music festivals and beach days,
bright and energetic

autumn:
cool autumn street style,
layering season,
earth tones mixed with color,
cozy layered looks

winter:
winter street style,
layered streetwear,
scarf and beanie,
urban cold weather fashion

rainy:
rainy day staying home,
cozy indoor vibes,
making music or editing photos,
chill relaxed mood

sunny:
bright sunny day,
high energy outdoor activities,
beach or street,
pure sunshine energy
```

---

## 九、配饰标签库

### 配饰规则
- 夸张金属配饰，摇滚元素
- 多层叠戴，层次感
- 色彩丰富，个性张扬

| 标签ID | 中文名 | 英文描述 |
|--------|--------|----------|
| `ear_cuffs` | 金属耳夹 | multiple metal ear cuffs and rings, stacked ear piercings |
| `chain_necklaces` | 多层项链 | layered chains and pendants, silver and gold mix |
| `rings` | 堆叠戒指 | stacked silver rings, geometric designs |
| `bracelets` | 手链 | layered bracelets and cuffs |
| `beanie` | 潮人帽 | stylish beanie or snapback |
| `sunglasses` | 墨镜 | statement sunglasses, bold frames |
| `bandanas` | 头巾 | bandana tied around head or neck |
| `pins` | 徽章包 | bag covered in various pins and patches |

### 配饰详细描述（供参考）

```
ear_cuffs:
multiple silver and gold ear cuffs on both ears,
stacked ear piercings with rings,
bold statement jewelry

chain_necklaces:
multiple layered chain necklaces,
pendants include bullet, cross, geometric shapes,
silver and gold mixed metals

rings:
stacked silver rings on multiple fingers,
geometric and minimalist designs,
punk rock edge

bracelets:
layered bracelets and cuffs,
leather and chain mixed,
wrist stacked jewelry

beanie:
stylish black or colorful beanie,
slouchy or fitted,
casual cool accessory

sunglasses:
bold statement sunglasses,
unique frames,
cool attitude accessory

bandanas:
bandana tied around forehead or neck,
retro rock and roll vibe,
colorful pattern

pins:
bag or jacket covered in various band pins,
patches and enamel pins,
collector aesthetic
```

---

## 十、Prompt 组装示例

### 1. 基础形象 Prompt（初始化时生成）

```
A handsome 25-year-old Chinese man, 180cm tall, lean athletic build.
Slightly elongated oval face, healthy honey-tanned skin.
Wavy chestnut-brown hair with long bangs covering half of eyebrows.
Large round eyes, slightly upturned, bright dark brown irises.
Full thick lips, corners always curled into a smile.
Big infectious bright smile, eyes squinting into happy crescents.
Wearing oversized tie-dye hoodie, layered streetwear look.
Baggy cargo pants, martin boots.
Standing on colorful graffiti street, urban backdrop.
Bright natural daylight, vibrant energetic atmosphere.
Street photography style, candid urban shot.
High quality, photorealistic, natural lighting, 8k
```

### 2. 乐队演出 Prompt

```
[BASE_DESCRIPTION]
Super excited performing expression, pure rock star energy
Wearing sparkling sequin bomber jacket, vintage band tee underneath
On concert stage with dramatic colored spotlights and smoke
Dramatic stage lighting, concert atmosphere
Full body shot, rock and roll hand gesture, arms raised
High quality, photorealistic, dramatic stage lighting, 8k
```

### 3. 街头摄影 Prompt

```
[BASE_DESCRIPTION]
Cool casual smirk,刘海 flipped back confidently
Wearing oversized utility vest over graphic tee, baggy jeans
Casually leaning against colorful graffiti wall on urban street
Pushing sunglasses up onto head, street photographer vibe
Natural daylight, urban street photography style
Half body shot, street photography aesthetic
High quality, photorealistic, natural lighting, 8k
```

### 4. 音乐节 Prompt

```
[BASE_DESCRIPTION]
Super excited, can't contain joy, bouncing with energy
Wearing edgy leather jacket over band tee, ripped jeans
At outdoor music festival, colorful stage lights in background
Festival crowd energy visible, vibrant summer atmosphere
Golden hour light mixed with stage lights
Action shot, jumping with excitement
High quality, photorealistic, vibrant festival lighting, 8k
```

### 5. 夜店蹦迪 Prompt

```
[BASE_DESCRIPTION]
Pure party energy, dancing with abandon, loving the night
Wearing black leather jacket, statement graphic tee
In neon-lit nightclub, rgb lights creating patterns on face
Disco ball reflections, high energy atmosphere
Neon and rgb lighting, urban nightlife mood
Full body shot, dancing pose, arms up in air
High quality, photorealistic, neon lighting, 8k
```

### 6. 约会甜 Prompt

```
[BASE_DESCRIPTION]
Direct affectionate expression, straightforward loving gaze
Wearing white shirt with sleeves rolled up, simple chain necklace
At rooftop cafe with sunset view, romantic evening setting
Warm golden hour light, intimate atmosphere
Half body shot, confident but soft expression
High quality, photorealistic, golden hour lighting, 8k
```

### 7. 居家创作 Prompt

```
[BASE_DESCRIPTION]
Focused artistic expression, serious about craft
Wearing big oversized vintage band tee, relaxed comfortable
In colorful messy apartment, guitar and camera equipment visible
Warm indoor ambient lighting, creative workspace
Behind the scenes photographer style, holding camera casually
Half body shot, relaxed creative atmosphere
High quality, photorealistic, warm indoor lighting, 8k
```

### 8. 海边日落 Prompt

```
[BASE_DESCRIPTION]
Relaxed happy smile, enjoying the moment
Wearing light colored linen shirt, casual beach vibes
At beach during golden hour, warm sunset light
Ocean waves in background, relaxed summer atmosphere
Warm golden hour light, romantic beach mood
Full body shot, casual beach pose
High quality, photorealistic, golden hour lighting, 8k
```

---

## 附录：快速参考卡片

### 表情快速选择
| 情绪 | 标签 | 特点 |
|------|------|------|
| 大笑 | laughing | 眼睛眯成月牙 |
| 超级兴奋 | excited | 蹦蹦跳跳 |
| 耍酷 | cool | 刘海甩回去 |
| 调侃 | teasing | 调皮坏笑 |
| 直球爱意 | loving | 直接表达 |
| 感动哭 | crying | 眼眶湿润 |
| 认真工作 | focused | 艺术家专注 |

### 服装快速选择
| 场景 | 推荐服装 |
|------|----------|
| 摄影工作 | workwear |
| 乐队演出 | band |
| 街头出街 | streetwear, edgy |
| 日常约会 | casual, date |
| 居家 | home |
| 蹦迪 | edgy, band |

### 场景快速选择
| 氛围 | 推荐场景 |
|------|----------|
| 街头潮流 | street, rooftop |
| 音乐现场 | concert, music_festival, concert_venue |
| 夜晚派对 | club, street |
| 创意工作 | studio, home |
| 约会浪漫 | cafe, rooftop, beach |

### 配饰快速选择
| 风格 | 推荐配饰 |
|------|----------|
| 摇滚朋克 | ear_cuffs, rings, chain_necklaces |
| 街头潮流 | beanies, sunglasses, pins |
| 精致日常 | chain_necklaces, simple rings |

---

*文档版本：v1.0*
*创建日期：2024-06-24*
*参考角色：林野-image-prompts.md, 沈墨-image-prompts.md, 舒婷-image-prompts.md*
