import { NextResponse } from "next/server";
import { getGscAuthStatus } from "@/lib/gsc";
import { getOAuthRedirectUri } from "@/lib/gsc-oauth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const status = await getGscAuthStatus();
  return NextResponse.json({
    ...status,
    redirectUri: getOAuthRedirectUri(),
  });
}
