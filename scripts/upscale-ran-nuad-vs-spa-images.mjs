import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "ran-nuad-vs-spa");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "ran-nuad-vs-spa-hero-branded.png", out: "blog-thumb-ran-nuad-kap-spa-promote-clean.png" },
  { src: "ran-nuad-vs-spa-channels-branded.png", out: "blog-inline-ran-nuad-vs-spa-channels-clean.png" },
  { src: "ran-nuad-vs-spa-compare-branded.png", out: "blog-inline-ran-nuad-vs-spa-compare-clean.png" },
  { src: "ran-nuad-vs-spa-mistakes-branded.png", out: "blog-inline-ran-nuad-vs-spa-mistakes-clean.png" },
  { src: "ran-nuad-vs-spa-decision-branded.png", out: "blog-inline-ran-nuad-vs-spa-decision-clean.png" },
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
