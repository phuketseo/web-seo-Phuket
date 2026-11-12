import { promises as fs } from "fs";
import path from "path";
import type { Ga4RangeKey, Ga4Snapshot } from "@/lib/ga4";

const CACHE_DIR = path.join(process.cwd(), ".data");

function cacheFile(range: Ga4RangeKey) {
  return path.join(CACHE_DIR, `ga4-cache-${range}.json`);
}

export async function readGa4Cache(range: Ga4RangeKey): Promise<Ga4Snapshot | null> {
  try {
    const raw = await fs.readFile(cacheFile(range), "utf8");
    return JSON.parse(raw) as Ga4Snapshot;
  } catch {
    return null;
  }
}

export async function writeGa4Cache(snapshot: Ga4Snapshot): Promise<void> {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await fs.writeFile(
    cacheFile(snapshot.range),
    JSON.stringify(snapshot, null, 2),
    "utf8",
  );
}
