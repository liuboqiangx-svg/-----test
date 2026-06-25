# MCP 工具目录

本目录管理项目使用的 MCP (Model Context Protocol) 工具。

## 目录结构

```
mcp/
├── README.md           # 本文件
└── mcp-servers.json    # MCP 服务器配置列表
```

## 当前使用的 MCP 服务器

### chrome-devtools

浏览器开发者工具 MCP，提供 Chrome DevTools Protocol 操作能力。

**功能：**
- 页面导航和控制 (`navigate_page`)
- 页面快照和元素交互 (`take_snapshot`, `click`, `fill`)
- 网络请求监控 (`list_network_requests`)
- 性能分析 (`performance_start_trace`)
- 截图 (`take_screenshot`)
- 控制台日志 (`list_console_messages`)
- 表单填写 (`fill_form`, `type_text`)
- 文件上传 (`upload_file`)
- 设备模拟 (`emulate`)

**安装方式：**
```bash
claude mcp add chrome-devtools -s user -t stdio -- npx -y chrome-devtools-mcp@latest --no-usage-statistics --no-performance-crux
```

**使用方式：**
在 Claude Code 对话中直接使用，例如：
- `/mcp__chrome-devtools__navigate_page` - 导航到指定 URL
- `/mcp__chrome-devtools__take_snapshot` - 获取页面快照
- `/mcp__chrome-devtools__take_screenshot` - 截图

## 添加新的 MCP 服务器

1. 在 `mcp-servers.json` 中添加服务器配置
2. 运行安装命令：`claude mcp add <name> -s project ...`
3. 更新本 README.md

## 作用域说明

- `-s user` - 全局安装，所有项目可用
- `-s project` - 仅当前项目可用
