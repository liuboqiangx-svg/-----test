---
name: browser-debug
version: 1.0.0
description: "浏览器调试与前端问题诊断。当用户需要用浏览器测试、查看控制台错误、检查网络请求、分析性能问题、修复前端 bug，或说「用浏览器打开测试」「查看页面问题」「检查控制台」时使用此技能。"
metadata:
  requires:
    mcp: ["chrome-devtools"]
---

# 浏览器调试与问题诊断

使用 Chrome DevTools MCP 工具进行全面的前端测试和调试。

## 核心工具链

### 1. 页面导航与快照

```javascript
// 打开页面
navigate_page(type: "url", url: "http://localhost:3000")

// 获取页面快照（查看 UI 结构）
take_snapshot()

// 截图（可视化验证）
take_screenshot()
```

### 2. Console 错误分析

```javascript
// 查看控制台消息（过滤 error 和 warn）
list_console_messages(types: ["error", "warn"])

// 获取特定错误详情
get_console_message(msgid: <id>)

// 查看网络相关错误
list_console_messages(types: ["error"])
list_network_requests()
```

### 3. 网络请求检查

```javascript
// 查看所有网络请求
list_network_requests()

// 获取请求详情（headers, timing, response）
get_network_request(reqid: <id>)

// 检查 XHR/Fetch 请求
list_network_requests(resourceTypes: ["xhr", "fetch"])
```

### 4. JavaScript 调试

```javascript
// 在页面执行 JavaScript
evaluate_script(function: `
  // 查看全局状态
  console.log(window.__NEXT_DATA__)
  // 检查 React DevTools
  return document.body.innerHTML.length
`)

// 检查 localStorage/sessionStorage
evaluate_script(function: `
  JSON.stringify({
    localStorage: {...localStorage},
    sessionStorage: {...sessionStorage}
  })
`)
```

### 5. 性能分析

```javascript
// Lighthouse 审计
lighthouse_audit(mode: "navigation", device: "desktop")

// 性能追踪
performance_start_trace(reload: true)
performance_stop_trace()

// Core Web Vitals 分析
performance_analyze_insight(insightSetId: "...", insightName: "CLS")
```

## 诊断流程

### 标准调试流程

```
1. 导航到目标页面
   └─> navigate_page(url: "...")

2. 获取页面快照了解结构
   └─> take_snapshot()

3. 截图记录当前状态
   └─> take_screenshot()

4. 检查 Console 错误
   └─> list_console_messages(types: ["error", "warn"])

5. 检查网络请求
   └─> list_network_requests()

6. 执行 JS 检查状态
   └─> evaluate_script(...)

7. 定位问题后修复代码
   └─> 使用 Edit/Write 工具修改源文件

8. 刷新页面验证修复
   └─> navigate_page(type: "reload")
```

### 常见场景

| 场景 | 工具组合 |
|------|----------|
| 页面样式问题 | take_snapshot + take_screenshot |
| JS 报错 | list_console_messages + evaluate_script |
| API 请求失败 | list_network_requests + get_network_request |
| 性能慢 | performance_start_trace + lighthouse_audit |
| 表单不工作 | evaluate_script 检查表单状态 + network 检查提交 |
| 白屏/加载失败 | take_snapshot + console + network |

## 示例操作

### 检查登录页面问题

```javascript
// 1. 打开登录页
navigate_page(url: "http://localhost:3000/login")

// 2. 查看页面结构
take_snapshot()

// 3. 检查控制台错误
list_console_messages(types: ["error"])

// 4. 尝试登录操作
fill_form(elements: [{uid: "<input-uid>", value: "test@example.com"}])
click(uid: "<button-uid>")

// 5. 检查是否有新错误
list_console_messages()
list_network_requests()
```

### 分析 API 请求问题

```javascript
// 1. 打开页面触发 API
navigate_page(url: "http://localhost:3000/chat")

// 2. 查看网络请求
list_network_requests()

// 3. 获取失败请求详情
get_network_request(reqid: <failed-request-id>)

// 4. 检查请求 Payload
evaluate_script(function: `
  // 模拟请求参数
  return {
    endpoint: '/api/chat',
    method: 'POST',
    body: { content: 'test' }
  }
`)
```

## 修复后验证

修复代码后，必须验证：

1. **功能测试** - 执行核心用户操作
2. **Console 清洁** - 确保无新错误
3. **截图对比** - 确认 UI 正确
4. **网络请求** - 确认 API 正常

```javascript
// 刷新页面
navigate_page(type: "reload")

// 重新检查
list_console_messages(types: ["error"])
take_screenshot()
```

## 错误分析与解释

当发现 Console 错误或代码问题时，必须用**通俗易懂**的方式向用户解释：

### 解释结构

每次发现错误后，必须包含以下三部分：

```
1. 🔍 问题是什么
   - 直接说明错误是什么

2. 💡 为什么会出错
   - 解释技术原理
   - 说明代码哪里出了问题

3. 🎨 形象比喻
   - 用生活化的比喻帮助理解
   - 让非技术人员也能明白
```

### 解释示例

#### 示例 1：Cannot read property 'xxx' of undefined

```
🔍 问题是什么：
   代码试图读取 undefined 或 null 的属性，就像试图打开一个空盒子里的东西。

💡 为什么会出错：
   在访问 user?.profile?.name 之前，user 可能还没有加载完成，
   或者 API 返回的数据结构与预期不符。JavaScript 在找不到对象时返回 undefined，
   而 undefined 没有 name 属性，所以报错。

🎨 形象比喻：
   想象你叫朋友把"第三个抽屉里的文件"递给你，但朋友还没打开柜子，
   你就开始翻找——当然什么都找不到！
   解决方法是：先确认柜子（数据）真的在那里，再开始翻找。
```

#### 示例 2：Failed to fetch / API 请求失败

```
🔍 问题是什么：
   前端无法从后端获取数据，请求在半路"迷路"了。

💡 为什么会出错：
   可能是：
   - 后端服务器没启动（地址不存在）
   - 网络连接断了（网线拔了）
   - 后端返回了错误（CORS 跨域限制）
   - 请求超时（等太久被放弃了）

🎨 形象比喻：
   就像你给朋友发微信问事情，但：
   - 他手机关机了（服务器没启动）
   - 你手机没信号（网络断了）
   - 他把你拉黑了（被 CORS 拦截）
   - 他半小时才回你（请求超时）
```

#### 示例 3：Maximum update depth exceeded

```
🔍 问题是什么：
   组件陷入无限循环，不断更新自己直到浏览器崩溃。

💡 为什么会出错：
   通常是 useEffect 依赖数组设置错误，导致：
   状态更新 → 触发 useEffect → 再次更新状态 → 再次触发 useEffect...
   循环永远不会停止。

🎨 形象比喻：
   想象你站在两面镜子中间，镜子互相反射你的倒影，
   倒影里的倒影里的倒影...无限循环，直到画面模糊成一团。
   解决方法：告诉镜子（useEffect）"只看一次，不要每次都重新看"。
```

#### 示例 4：Rendered fewer hooks than expected

```
🔍 问题是什么：
   React 组件在渲染过程中 hooks 的数量突然变少了。

💡 为什么会出错：
   Hooks 必须在组件顶层调用，顺序很重要。
   如果在条件语句、循环或嵌套函数中调用 hooks，
   会破坏 hooks 的调用顺序，导致 React 找不到对应的 state。

🎨 形象比喻：
   想象你在排队买票，但你一会儿说"我要排第三个"，一会儿又说"我要排第一个"，
   工作人员（React）完全搞不清楚你在哪个位置。
   解决方法是：老老实实从队尾排队，不要中途换位置。
```

#### 示例 5：SyntaxError: Unexpected token

```
🔍 问题是什么：
   代码写错字了，JavaScript 看不懂你在说什么。

💡 为什么会出错：
   可能是：
   - 少了括号 ) } ]
   - 中英文符号混用（"）vs "）
   - 多了奇怪的字符
   - 字符串没加引号

🎨 形象比喻：
   就像写中文时突然蹦出一个日文字，别人根本不认识。
   检查一下是不是引号、括号不匹配，或者不小心用了中文标点。
```

### 解释原则

| 原则 | 说明 |
|------|------|
| **先安抚** | "别担心，这是个常见问题" |
| **说人话** | 避免技术术语，或立即解释 |
| **有画面** | 比喻要具体、有场景感 |
| **给方案** | 解释完立即提供修复方案 |
| **举一反三** | 顺便提醒类似问题的预防方法 |

## 注意事项

- **优先查看 Console** - 大多数问题会在这里报错
- **检查 Network** - API 问题是前端崩溃的常见原因
- **使用 Snapshot** - 理解页面结构才能精准定位
- **小步验证** - 每改一处就刷新测试，不要一次改太多
- **解释先行** - 修复前先解释问题，让用户理解再动手
