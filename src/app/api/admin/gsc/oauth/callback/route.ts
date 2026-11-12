import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { exchangeCodeForTokens } from "@/lib/gsc-oauth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function verifyState(state: string, cookieState: string | undefined) {
  if (!state || !cookieState || state !== cookieState) return false;
  const [nonce, sig] = state.split(".");
  if (!nonce || !sig) return false;
  const secret = process.env.ADMIN_SESSION_SECRET?.trim() || "dev";
  const expected = createHmac("sha256", secret).update(nonce).digest("hex");
  return sig === expected;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state") ?? "";
  const err = searchParams.get("error");

  const base =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://phuketseo.com");

  if (err) {
    return NextResponse.redirect(`${base}/admin?gsc_oauth=error&reason=${encodeURIComponent(err)}`);
  }
  if (!code) {
    return NextResponse.redirect(`${base}/admin?gsc_oauth=error&reason=missing_code`);
  }

  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookieState = cookieHeader
    .split(";")
    .map((p) => p.trim())
    .find((p) => p.startsWith("gsc_oauth_state="))
    ?.slice("gsc_oauth_state=".length);

  if (!verifyState(state, cookieState)) {
    return NextResponse.redirect(`${base}/admin?gsc_oauth=error&reason=invalid_state`);
  }

  try {
    await exchangeCodeForTokens(code);
    const res = NextResponse.redirect(`${base}/admin?gsc_oauth=connected`);
    res.cookies.set("gsc_oauth_state", "", { path: "/", maxAge: 0 });
    return res;
  } catch (e) {
    const message = e instanceof Error ? e.message : "oauth_failed";
    return NextResponse.redirect(
      `${base}/admin?gsc_oauth=error&reason=${encodeURIComponent(message)}`,
    );
  }
}
