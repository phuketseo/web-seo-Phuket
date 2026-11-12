import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ADMIN_COOKIE,
  getAdminSessionSecret,
  isAdminConfigured,
  verifyAdminSessionToken,
} from "@/lib/admin-auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === "/admin/login";
  const isLoginApi = pathname === "/api/admin/login";
  const isGscOAuthCallback = pathname === "/api/admin/gsc/oauth/callback";
  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin");

  if (!isAdminPage && !isAdminApi) {
    return NextResponse.next();
  }

  // login + OAuth callback จาก Google ต้องเข้าได้โดยไม่ต้องมี session
  if (isLoginPage || isLoginApi || isGscOAuthCallback) {
    return NextResponse.next();
  }

  if (!isAdminConfigured() || !getAdminSessionSecret()) {
    if (isAdminApi) {
      return NextResponse.json(
        {
          error:
            "Admin ยังไม่ตั้งค่า ADMIN_PASSWORD และ ADMIN_SESSION_SECRET ใน .env.local",
        },
        { status: 503 },
      );
    }
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("error", "not_configured");
    return NextResponse.redirect(url);
  }

  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  if (verifyAdminSessionToken(token)) {
    return NextResponse.next();
  }

  if (isAdminApi) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = request.nextUrl.clone();
  url.pathname = "/admin/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
