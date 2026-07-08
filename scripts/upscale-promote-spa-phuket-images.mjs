import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "promote-spa-phuket");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "promote-spa-hero-branded.png", out: "blog-thumb-promote-spa-phuket-clean.png" },
  { src: "promote-spa-channels-branded.png", out: "blog-inline-promote-spa-channels-clean.png" },
  { src: "promote-spa-steps-branded.png", out: "blog-inline-promote-spa-steps-clean.png" },
  { src: "promote-spa-compare-branded.png", out: "blog-inline-promote-spa-compare-clean.png" },
  { src: "promote-spa-mistakes-branded.png", out: "blog-inline-promote-spa-mistakes-clean.png" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  await sharp(input)
    .resize(TARGET_W, TARGET_H, { fit: "cover", position: "centre", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(outPath);
  console.log(`✓ ${out} (${TARGET_W}×${TARGET_H})`);
}
