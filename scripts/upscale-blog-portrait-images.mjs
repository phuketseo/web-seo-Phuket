import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/** Upscale blog portrait infographics (9:16) after brand bar compose */
const TARGET_W = 2160;
const TARGET_H = 3840;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = process.argv[2] ? join(root, process.argv[2]) : join(root, "assets", "blog-portrait");
const outDir = join(root, "public", "images", "blog");

const jobs = process.argv.slice(3).length
  ? process.argv.slice(3).map((arg) => JSON.parse(arg))
  : [];

if (!jobs.length) {
  console.log(`Usage: node scripts/upscale-blog-portrait-images.mjs <assets-dir> '<{"src":"...","out":"..."}>' ...`);
  console.log("Expects *-branded.png in assets dir (run compose-phuketseo-brand-bar.mjs first).");
  process.exit(0);
}

for (const { src, out } of jobs) {
  let input = join(assetsDir, src.replace("-src.png", "-branded.png"));
  if (!existsSync(input)) {
    input = join(assetsDir, src);
  }
  if (!existsSync(input)) {
    throw new Error(`Missing source: ${input}`);
  }

  const outPath = join(outDir, out);
  const meta = await sharp(input).metadata();
  console.log(`${src}: ${meta.width}x${meta.height} → ${TARGET_W}x${TARGET_H}`);

  await sharp(input)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(outPath);

  const kb = Math.round(readFileSync(outPath).length / 1024);
  console.log(`  ✓ ${outPath.replace(root, "")} (${kb} KB)`);
}

console.log(`Done — ${jobs.length} portrait images upscaled to ${TARGET_W}×${TARGET_H}.`);
