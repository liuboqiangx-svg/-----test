import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getSessionFromCookie,
  getUserById,
} from "@/lib/auth";

/**
 * 管理员保护 - 检查用户是否已登录且是管理员
 */
export async function requireAdmin(request: NextRequest) {
  const sessionId = request.cookies.get("session_id")?.value;

  if (!sessionId) {
    return NextResponse.json(
      { error: "请先登录" },
      { status: 401 }
    );
  }

  const session = getSessionFromCookie(request.headers.get("cookie"));
  if (!session) {
    return NextResponse.json(
      { error: "会话已过期，请重新登录" },
      { status: 401 }
    );
  }

  const user = await getUserById(session.userId);
  if (!user) {
    return NextResponse.json(
      { error: "用户不存在" },
      { status: 401 }
    );
  }

  if (!user.isAdmin) {
    return NextResponse.json(
      { error: "需要管理员权限" },
      { status: 403 }
    );
  }

  return null; // 通过验证
}

/**
 * 登录保护 - 检查用户是否已登录
 */
export async function requireAuth(request: NextRequest) {
  const session = getSessionFromCookie(request.headers.get("cookie"));

  if (!session) {
    return NextResponse.json(
      { error: "请先登录" },
      { status: 401 }
    );
  }

  const user = await getUserById(session.userId);
  if (!user) {
    return NextResponse.json(
      { error: "用户不存在" },
      { status: 401 }
    );
  }

  return null;
}
