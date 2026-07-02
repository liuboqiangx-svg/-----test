import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  verifyLogin,
  createSession,
  createSessionCookie,
} from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱"),
  password: z.string().min(1, "请输入密码"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = loginSchema.parse(body);

    const user = await verifyLogin(data.email, data.password);
    if (!user) {
      return NextResponse.json(
        { error: "邮箱或密码错误" },
        { status: 401 }
      );
    }

    if (user.status === "suspended") {
      return NextResponse.json(
        { error: "账户已被停用" },
        { status: 403 }
      );
    }

    const session = createSession(user.id);
    const cookie = createSessionCookie(session);

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    });

    response.headers.set("Set-Cookie", cookie);
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "登录失败" },
      { status: 500 }
    );
  }
}
