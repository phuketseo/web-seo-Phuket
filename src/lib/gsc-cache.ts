import { promises as fs } from "fs";
import path from "path";
import type { GscRangeKey, GscSnapshot } from "@/lib/gsc";

const CACHE_DIR = path.join(process.cwd(), ".data");

function cacheFile(range: GscRangeKey) {
  return path.join(CACHE_DIR, `gsc-cache-${range}.json`);
}

export async function readGscCache(range: GscRangeKey): Promise<GscSnapshot | null> {
  try {
    const raw = await fs.readFile(cacheFile(range), "utf8");
    return JSON.parse(raw) as GscSnapshot;
  } catch {
    return null;
  }
}

export async function writeGscCache(snapshot: GscSnapshot): Promise<void> {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(
    cacheFile(snapshot.range),
    JSON.stringify(snapshot, null, 2),
    "utf8",
  );
}
