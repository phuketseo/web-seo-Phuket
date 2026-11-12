import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  getAdminSessionSecret,
  isAdminConfigured,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      {
        error:
          "ยังไม่ได้ตั้ง ADMIN_PASSWORD และ ADMIN_SESSION_SECRET ใน .env.local",
      },
      { status: 503 },
    );
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!verifyAdminPassword(body.password ?? "")) {
    return NextResponse.json({ error: "รหัสผ่านไม่ถูกต้อง" }, { status: 401 });
  }

  const token = getAdminSessionSecret();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return res;
}
