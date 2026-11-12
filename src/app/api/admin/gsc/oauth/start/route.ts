import { NextResponse } from "next/server";
import { createHmac, randomBytes } from "crypto";
import { getOAuthAuthUrl, isOAuthClientConfigured } from "@/lib/gsc-oauth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function signState(nonce: string) {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim() || "dev";
  const sig = createHmac("sha256", secret).update(nonce).digest("hex");
  return `${nonce}.${sig}`;
}

export async function GET() {
  if (!isOAuthClientConfigured()) {
    return NextResponse.json(
      {
        error:
          "ยังไม่ได้ตั้ง GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET ใน .env.local",
      },
      { status: 503 },
    );
  }

  const nonce = randomBytes(16).toString("hex");
  const state = signState(nonce);
  const url = getOAuthAuthUrl(state);

  const res = NextResponse.redirect(url);
  res.cookies.set("gsc_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 10,
  });
  return res;
}
