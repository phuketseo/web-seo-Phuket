import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "small-stay-ads");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "small-stay-ads-hero-branded.png", out: "blog-thumb-ying-aep-thi-phak-lek-ngoen-noi-clean.webp" },
  { src: "small-stay-ads-channels-branded.png", out: "blog-inline-small-stay-ads-channels-clean.webp" },
  { src: "small-stay-ads-compare-branded.png", out: "blog-inline-small-stay-ads-compare-clean.webp" },
  { src: "small-stay-ads-mistakes-branded.png", out: "blog-inline-small-stay-ads-mistakes-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  console.log(`✓ ${published.split(/[/\\]/).pop()} (${TARGET_W}×${TARGET_H})`);
}
