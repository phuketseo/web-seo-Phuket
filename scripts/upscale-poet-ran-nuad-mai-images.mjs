import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "poet-ran-nuad-mai");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "poet-ran-nuad-mai-hero-branded.png", out: "blog-thumb-poet-ran-nuad-mai-mai-mee-luk-kha-clean.png" },
  { src: "poet-ran-nuad-mai-causes-branded.png", out: "blog-inline-poet-ran-nuad-mai-causes-clean.png" },
  { src: "poet-ran-nuad-mai-steps-branded.png", out: "blog-inline-poet-ran-nuad-mai-steps-clean.png" },
  { src: "poet-ran-nuad-mai-compare-branded.png", out: "blog-inline-poet-ran-nuad-mai-compare-clean.png" },
  { src: "poet-ran-nuad-mai-mistakes-branded.png", out: "blog-inline-poet-ran-nuad-mai-mistakes-clean.png" },
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
