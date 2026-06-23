# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

纸片人男友是一个 AI 陪伴聊天应用，基于 Next.js 构建，使用 OpenAI API 实现与虚拟角色的智能对话。

## 开发命令

```bash
cd paper-partner
npm run dev      # 启动开发服务器 (http://localhost:3000)
npm run build    # 生产构建
npm run start    # 启动生产服务器
npm run lint     # 运行 ESLint 检查
```

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 16.2.9 (App Router) |
| 语言 | TypeScript 5 |
| 数据库 | SQLite (better-sqlite3, WAL 模式) |
| AI | OpenAI SDK v6 |
| 样式 | Tailwind CSS v4 |
| UI 组件 | lucide-react |

## 项目结构

```
paper-partner/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   ├── chat/          # 对话接口 (GET 历史 / POST 发送)
│   │   ├── init/          # 初始化接口
│   │   └── state/         # 角色状态管理
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/
│   └── ChatRoom.tsx       # 聊天界面组件 (use client)
├── lib/
│   ├── character.ts       # 默认角色配置 (陆沉)
│   ├── db.ts              # SQLite 数据库操作
│   ├── llm.ts             # OpenAI API 封装
│   ├── memory.ts           # 记忆提取与管理
│   └── proactive.ts       # 主动消息调度
├── types/index.ts         # TypeScript 类型定义
└── paper-partner.db      # SQLite 数据库文件
```

## 数据库表结构

- **users** - 用户信息
- **characters** - 角色配置
- **messages** - 聊天消息
- **memories** - 提取的用户记忆
- **character_states** - 角色状态 (心情值、亲密度、下次主动消息时间)

## 环境变量配置

复制 `.env.local.example` 为 `.env.local`：

```bash
USE_MOCK_LLM=true           # 开发模式，无需 API Key
OPENAI_API_KEY=xxx          # 生产环境使用真实 API
OPENAI_BASE_URL=xxx         # 可选：自定义 API 端点
LLM_MODEL=gpt-4o-mini       # 可选：指定模型
```

## 核心功能

1. **AI 对话** - 基于 OpenAI 的智能回复，支持 Mock 模式
2. **记忆系统** - 从对话中提取用户信息并持久化
3. **状态追踪** - 角色的心情值和亲密度
4. **主动消息** - 角色定时主动发起对话

## API 设计

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/init` | GET | 初始化用户/获取历史 |
| `/api/chat` | GET | 获取聊天历史 |
| `/api/chat` | POST | 发送消息并获取回复 |
| `/api/state` | GET/POST | 获取/更新角色状态 |

## 路径别名

使用 `@/*` 指向项目根目录，例如：
```typescript
import { db } from '@/lib/db'
import type { Character } from '@/types'
```
