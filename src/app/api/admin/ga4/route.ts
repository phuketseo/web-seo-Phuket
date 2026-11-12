import { NextResponse } from "next/server";
import {
  fetchGa4Snapshot,
  getGa4AuthStatus,
  isGa4RangeKey,
  type Ga4RangeKey,
} from "@/lib/ga4";
import { readGa4Cache, writeGa4Cache } from "@/lib/ga4-cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const refresh = searchParams.get("refresh") === "1";
  const range: Ga4RangeKey = isGa4RangeKey(searchParams.get("range"))
    ? (searchParams.get("range") as Ga4RangeKey)
    : "28d";
  const status = await getGa4AuthStatus();

  if (!refresh) {
    const cached = await readGa4Cache(range);
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
        error: !status.oauthClientReady
          ? "ยังไม่ได้ตั้ง GOOGLE_OAUTH_CLIENT_ID / GOOGLE_OAUTH_CLIENT_SECRET"
          : !status.oauthConnected
            ? "ยังไม่ได้ Connect Google — กดปุ่ม Connect Google ในหน้า Admin"
            : "ยังไม่มีสิทธิ์ Analytics — กด Connect Google อีกครั้งเพื่ออนุญาต GA4",
        data: null,
      },
      { status: 200 },
    );
  }

  try {
    const data = await fetchGa4Snapshot(range);
    await writeGa4Cache(data);
    return NextResponse.json({
      source: "live",
      configured: true,
      auth: status,
      data,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "GA4 fetch failed";
    const cached = await readGa4Cache(range);
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
