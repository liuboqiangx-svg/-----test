import { NextRequest, NextResponse } from "next/server";
import { getSessionFromCookie, getUserById } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const session = getSessionFromCookie(request.headers.get("cookie"));

  if (!session) {
    return NextResponse.json({ user: null });
  }

  const user = await getUserById(session.userId);
  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    },
  });
}
