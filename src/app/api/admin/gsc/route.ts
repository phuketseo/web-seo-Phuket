import { NextResponse } from "next/server";
import { fetchGscSnapshot, getGscAuthStatus, isGscRangeKey, type GscRangeKey } from "@/lib/gsc";
import { readGscCache, writeGscCache } from "@/lib/gsc-cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const refresh = searchParams.get("refresh") === "1";
  const range: GscRangeKey = isGscRangeKey(searchParams.get("range"))
    ? (searchParams.get("range") as GscRangeKey)
    : "28d";
  const status = await getGscAuthStatus();

  if (!refresh) {
    const cached = await readGscCache(range);
    if (cached) {
      return NextResponse.json({
        source: "cache",
        configured: status.configured,
        auth: status,
        data: cached,
      });
    }
  }

  if (!status.configured) {
    return NextResponse.json(
      {
        source: "none",
        configured: false,
        auth: status,
        error: status.oauthClientReady
          ? "ตั้งค่า OAuth client แล้ว — กด Connect GSC เพื่ออนุญาตสิทธิ์ Search Console"
          : "ยังไม่ได้ตั้ง GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET",
        data: null,
      },
      { status: 200 },
    );
  }

  try {
    const data = await fetchGscSnapshot(range);
    await writeGscCache(data);
    return NextResponse.json({
      source: "live",
      configured: true,
      auth: status,
      data,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "GSC fetch failed";
    const cached = await readGscCache(range);
    return NextResponse.json(
      {
        source: cached ? "cache" : "none",
        configured: true,
        auth: status,
        error: message,
        data: cached,
      },
      { status: cached ? 200 : 502 },
    );
  }
}
