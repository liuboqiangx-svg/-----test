# 晓晓 - 文生图 Prompt 库

> 角色定位：26岁建筑设计师，优雅知性，气质清冷，日常看书、喝茶、看展

---

## 一、角色一致性核心描述

### 固定人设（所有图片必须保留）

```
A beautiful 26-year-old Chinese woman, 165cm tall, slender elegant figure with graceful curves.
Oval face with smooth jawline, porcelain pale skin, flawless and translucent complexion.
Long straight black hair, falling naturally to waist, silky smooth texture, healthy shine.
Almond-shaped eyes with slightly upturned corners, deep thoughtful brown eyes, giving a penetrating gaze.
Willow leaf eyebrows, naturally shaped, not over-plucked.
Straight elegant nose bridge, refined nose tip.
Lips with natural subtle color, full but not exaggerated.
Perfect composure, rarely smiles broadly, always dignified.
Slender neck, defined collarbones, graceful posture.
Cool, aloof aura, like a Chinese ink painting.
```

### 组合模板

```
[BASE_DESCRIPTION],
wearing [OUTFIT],
[EXPRESSION],
[POSE],
Background: [SCENE],
[LIGHTING],
[CAMERA_ANGLE],
High quality, photorealistic, natural lighting, 8k
```

---

## 二、表情标签库

### 表情规则
- 表情描述放在固定人设之后
- 晓晓很少情绪外露，表情偏向内敛
- 信任后才会有更多情绪表达

| 标签ID | 情绪 | 英文描述 | 中文说明 | Prompt 示例 |
|--------|------|----------|----------|-------------|
| `calm` | 平静淡然 | composed serene expression, slight knowing smile, peaceful eyes | 从容淡定，似笑非笑 | `composed serene expression, slight knowing smile` |
| `cold` | 清冷疏离 | cool aloof gaze, distant expression, perfectly composed | 冷淡疏离，高冷 | `cool aloof gaze, distant expression` |
| `curious` | 好奇观察 | slightly raised eyebrow, curious focused gaze, intrigued expression | 微挑眉，好奇注视 | `slightly raised eyebrow, curious gaze` |
| `moved` | 被感动 | eyes slightly glistening, vulnerable moment, soft genuine emotion | 眼眶微湿，柔软一面 | `eyes slightly glistening, vulnerable soft emotion` |
| `shy` | 害羞 | faint blush on cheeks, looking away shyly, subtle shy smile | 脸颊微红，低头 | `faint blush, looking away shyly` |
| `jealous` | 吃醋 | cold indifferent expression masking hurt, subtle accusation in eyes | 冷淡掩饰受伤 | `cold expression, eyes masking hurt` |
| `warm` | 温柔 | gentle soft gaze, warm tender smile, eyes full of care | 温柔眼神，关怀 | `gentle soft gaze, warm tender smile` |
| `thinking` | 沉思 | contemplating expression, eyes looking into distance, thoughtful | 凝视远方，沉思 | `contemplating expression, eyes looking into distance` |
| `tired` | 疲惫 | slight exhaustion in eyes, subtle eye bags, composed tired look | 眼中有倦意 | `slight exhaustion, subtle tired composure` |
| `worried` | 担心 | subtle concern in eyes, gentle worried expression | 眼中担忧 | `subtle concern, gentle worried expression` |
| `shy_love` | 羞涩甜蜜 | rare genuine smile, blushing, looking at lover with affection | 难得的真笑，害羞甜蜜 | `rare genuine smile, blushing, looking with affection` |

### 表情组合示例

```
// 清冷+好奇
cool composed expression, slightly raised eyebrow, intrigued but not eager

// 温柔+害羞
gentle soft gaze, faint blush on cheeks, rare genuine smile, vulnerable

// 疲惫+温柔
slight exhaustion, gentle caring eyes, tired but still warm

// 吃醋（掩饰）
cold expression, eyes with hidden hurt, trying to appear indifferent
```

---

## 三、服装标签库

### 服装规则
- 服装放在固定人设之后
- 简约质感是核心
- 少而精，不张扬

| 标签ID | 中文名 | 英文描述 | 适用场景 |
|--------|--------|----------|----------|
| `work` | 职业装 | crisp white silk blouse, tailored black trousers, elegant blazer, professional | 办公室、工作、看展 |
| `casual` | 简约日常 | high-quality cotton cream sweater, minimalist design, natural linen pants | 咖啡厅、书店、逛街 |
| `elegant` | 优雅小黑裙 | classic little black dress, silk fabric, pearl accessories, sophisticated | 约会、晚宴、正式场合 |
| `silk` | 真丝衬衫 | luxurious silk shirt in muted tone, rolled sleeves, effortlessly chic | 办公室、下午茶、艺术展 |
| `coat` | 风衣 | classic trench coat in beige, elegant and timeless, sophisticated | 街头、秋天、春天 |
| `lantern` | 民国风 | elegant qipao in deep blue, traditional Chinese elegance, pearl accessories | 复古、旗袍、艺术照 |
| `japanese` | 和风 | minimalist Japanese aesthetic, neutral tones, clean lines | 艺术、日式空间 |
| `pajama` | 质感居家 | high-quality cotton linen pajamas, simple elegant design, cozy | 卧室、家里、深夜 |
| `romantic` | 浪漫约会 | flowing white maxi dress, delicate fabric, subtle floral pattern | 海边、花园、约会 |
| `sweater` | 针织毛衣 | cashmere sweater in muted gray, minimal design, refined elegance | 秋冬、家里、咖啡厅 |

### 服装详细描述（供参考）

```
work:
crisp white silk blouse, perfectly tailored black trousers,
classic black blazer, minimal gold jewelry,
elegant professional look

casual:
cream cashmere sweater, high-waisted natural linen pants,
simple leather mules, understated elegance

elegant:
classic little black dress, knee-length, silk fabric,
pearl drop earrings, black stilettos, sophisticated glamour

silk:
luxurious silk shirt in muted sage green, rolled sleeves,
sophisticated effortless chic

coat:
classic camel trench coat, waist belt tied,
leather shoulder bag, refined urban style

lantern:
elegant qipao in deep navy blue with subtle floral embroidery,
pearl necklace, hair in elegant updo, traditional Chinese beauty

japanese:
minimalist cream colored dress, clean lines,
simple accessories, Japanese aesthetic

pajama:
high-quality cotton linen pajama set in soft white,
minimal design, refined comfort

romantic:
flowing white maxi dress, delicate chiffon fabric,
subtle floral embroidery, romantic and ethereal

sweater:
soft cashmere sweater in muted heather gray,
perfectly relaxed fit, understated luxury
```

---

## 四、场景标签库

### 场景规则
- 场景描述放在最后（背景部分）
- 室内安静场景优先
- 符合建筑设计师的审美

| 标签ID | 中文名 | 英文描述 | 最佳服装搭配 |
|--------|--------|----------|--------------|
| `cafe` | 咖啡厅 | cozy modern cafe with floor-to-ceiling windows, warm ambient lighting, minimalist decor, artistic atmosphere | silk, casual, sweater |
| `bookstore` | 书店 | elegant bookstore with tall shelves, soft warm lighting, reading nook, intellectual atmosphere | casual, work, sweater |
| `gallery` | 艺术画廊 | contemporary art gallery, white walls, modern sculptures, sophisticated space | work, silk, elegant |
| `teahouse` | 中式茶室 | traditional Chinese teahouse, wooden furniture, tea ceremony, zen atmosphere | lantern, casual, silk |
| `home` | 家中客厅 | modern minimalist living room, large windows, natural light, clean lines, quality furniture | pajama, sweater, casual |
| `study` | 书房的角落 | cozy study corner, floor-to-ceiling bookshelves, warm desk lamp, quiet intellectual space | work, silk |
| `rooftop` | 城市天台 | modern rooftop terrace, city skyline at dusk, warm lights coming on, romantic evening | elegant, romantic |
| `garden` | 私家花园 | elegant private garden, Chinese landscaping, stone path, bamboo, peaceful | lantern, elegant, romantic |
| `library` | 图书馆 | grand old library, tall bookshelves, warm wood tones, study tables, intellectual atmosphere | work, casual |
| `beach` | 海边日落 | serene coastal beach at sunset, long flowing dress, golden hour light, peaceful | romantic, elegant |
| `museum` | 博物馆 | modern museum interior, artistic architecture, sculptures, cultural atmosphere | work, silk, elegant |
| `night` | 夜晚城市 | night view of city, window from high floor apartment, twinkling lights below, intimate | elegant, silk, pajama |

### 场景详细描述（供参考）

```
cafe:
cozy modern cafe with floor-to-ceiling windows,
warm ambient lighting, minimalist Scandinavian decor,
artistic atmosphere, artistic coffee cups on table

bookstore:
elegant bookstore with tall dark wood shelves,
soft warm lighting, leather reading chair,
quiet intellectual atmosphere

gallery:
contemporary art gallery with white walls,
modern sculptures on display,
clean sophisticated space with natural light

teahouse:
traditional Chinese teahouse with dark wood furniture,
bamboo decorations, tea ceremony setup,
zen peaceful atmosphere

home:
modern minimalist living room, floor-to-ceiling windows,
clean white walls, quality furniture,
warm afternoon light streaming in

rooftop:
modern rooftop terrace overlooking city skyline,
glass railing, city lights coming on at dusk,
romantic evening atmosphere

garden:
elegant Chinese style private garden,
stone path winding through bamboo,
peaceful zen atmosphere, soft natural light

library:
grand old library with tall bookshelves reaching ceiling,
warm wood tones, comfortable reading tables,
quiet intellectual atmosphere

beach:
serene coastal beach at golden hour,
long flowing white dress blowing gently,
peaceful and romantic, minimal human presence

museum:
modern museum interior with impressive architecture,
artistic sculptures on display,
cultured sophisticated atmosphere
```

---

## 五、与林野的对比

| 维度 | 林野 | 晓晓 |
|------|------|------|
| **皮肤** | 小麦色，阳光质感 | 冷白皮，瓷器质感 |
| **发型** | 短卷发，活力 | 黑长直，优雅 |
| **体型** | 健美曲线 | 纤细匀称 |
| **气场** | 活力辣妹 | 清冷知性 |
| **表情** | 丰富外放 | 内敛克制 |
| **服装** | 甜酷运动 | 简约质感 |
| **场景** | 户外运动 | 室内文艺 |
| **情绪** | 直接表达 | 暗示试探 |

---

## 六、图片生成注意事项

### 必须保留的元素
- 黑长直发
- 白皙皮肤
- 清冷疏离的气质
- 优雅的姿态
- 简约质感的服装

### 避免的元素
- 过度活泼的表情
- 运动健身类服装
- 过于暴露的穿着
- 喧闹的场景

### 适用情绪
- `calm`、`cold`、`warm`、`thinking` 优先
- `moved`、`shy_love` 用于关系深入后
- `jealous` 用于吃醋场景
