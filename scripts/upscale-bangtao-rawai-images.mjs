import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "bangtao-hero-src.png", out: "blog-thumb-local-seo-bang-tao-clean.webp" },
  { src: "bangtao-maps-src.png", out: "blog-inline-bang-tao-maps-clean.webp" },
  { src: "bangtao-zones-src.png", out: "blog-inline-bang-tao-zones-clean.webp" },
  { src: "bangtao-keywords-src.png", out: "blog-inline-bang-tao-keywords-clean.webp" },
  { src: "rawai-hero-src.png", out: "blog-thumb-local-seo-rawai-clean.webp" },
  { src: "rawai-maps-src.png", out: "blog-inline-rawai-maps-clean.webp" },
  { src: "rawai-zones-src.png", out: "blog-inline-rawai-zones-clean.webp" },
  { src: "rawai-keywords-src.png", out: "blog-inline-rawai-keywords-clean.webp" },
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

console.log("Done — 8 Bang Tao + Rawai images upscaled to 3840×2560.");
