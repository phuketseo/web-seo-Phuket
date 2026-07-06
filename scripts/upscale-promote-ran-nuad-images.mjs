import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "promote-ran-nuad-thai");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "promote-ran-nuad-thai-phuket-hero-branded.png", out: "blog-thumb-promote-ran-nuad-thai-phuket-clean.png" },
  { src: "promote-ran-nuad-thai-steps-branded.png", out: "blog-inline-promote-ran-nuad-thai-steps-clean.png" },
  { src: "promote-ran-nuad-thai-channels-branded.png", out: "blog-inline-promote-ran-nuad-thai-channels-clean.png" },
  { src: "promote-ran-nuad-thai-keywords-branded.png", out: "blog-inline-promote-ran-nuad-thai-keywords-clean.png" },
  { src: "promote-ran-nuad-thai-compare-branded.png", out: "blog-inline-promote-ran-nuad-thai-compare-clean.png" },
  { src: "promote-ran-nuad-thai-mistakes-branded.png", out: "blog-inline-promote-ran-nuad-thai-mistakes-clean.png" },
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
  const kb = Math.round(readFileSync(outPath).length / 1024);
  console.log(`✓ ${out} (${kb} KB)`);
}

console.log(`Done — ${jobs.length} promote-ran-nuad images at ${TARGET_W}×${TARGET_H}.`);
