import { NextRequest, NextResponse } from "next/server";
import { deleteSession, deleteSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const sessionId = request.cookies.get("session_id")?.value;

  if (sessionId) {
    deleteSession(sessionId);
  }

  const response = NextResponse.json({ success: true });
  response.headers.set("Set-Cookie", deleteSessionCookie());
  return response;
}
