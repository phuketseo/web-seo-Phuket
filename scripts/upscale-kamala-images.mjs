import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "kamala-hero-src.png", out: "blog-thumb-local-seo-kamala-clean.png" },
  { src: "kamala-zones-src.png", out: "blog-inline-kamala-zones-clean.png" },
  { src: "kamala-maps-src.png", out: "blog-inline-kamala-maps-clean.png" },
  { src: "kamala-buyer-src.png", out: "blog-inline-kamala-buyer-clean.png" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  const output = join(outDir, out);

  if (!existsSync(input)) {
    throw new Error(`Missing source: ${input}`);
  }

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
    .toFile(output);

  const outMeta = await sharp(output).metadata();
  const kb = Math.round(readFileSync(output).length / 1024);
  console.log(`  ✓ ${out}: ${outMeta.width}x${outMeta.height} (${kb} KB)`);
}

console.log("Done — 4 Kamala images upscaled to 3840×2560.");
