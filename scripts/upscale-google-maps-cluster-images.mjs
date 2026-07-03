import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "google-maps-cluster");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "dan-andap-google-maps-phuket-hero-src.png", out: "blog-thumb-dan-andap-google-maps-phuket-clean.png" },
  { src: "dan-andap-google-maps-phuket-factors-src.png", out: "blog-inline-dan-andap-google-maps-phuket-factors-clean.png" },
  { src: "dan-andap-google-maps-phuket-steps-src.png", out: "blog-inline-dan-andap-google-maps-phuket-steps-clean.png" },
  { src: "dan-andap-google-maps-phuket-zones-src.png", out: "blog-inline-dan-andap-google-maps-phuket-zones-clean.png" },
  { src: "google-maps-mai-tid-phuket-hero-src.png", out: "blog-thumb-google-maps-mai-tid-phuket-clean.png" },
  { src: "google-maps-mai-tid-phuket-symptoms-src.png", out: "blog-inline-google-maps-mai-tid-phuket-symptoms-clean.png" },
  { src: "google-maps-mai-tid-phuket-causes-src.png", out: "blog-inline-google-maps-mai-tid-phuket-causes-clean.png" },
  { src: "google-maps-mai-tid-phuket-fix-src.png", out: "blog-inline-google-maps-mai-tid-phuket-fix-clean.png" },
  { src: "rap-pak-mut-thurakij-phuket-hero-src.png", out: "blog-thumb-rap-pak-mut-thurakij-phuket-clean.png" },
  { src: "rap-pak-mut-thurakij-phuket-wrong-src.png", out: "blog-inline-rap-pak-mut-thurakij-phuket-wrong-clean.png" },
  { src: "rap-pak-mut-thurakij-phuket-verify-src.png", out: "blog-inline-rap-pak-mut-thurakij-phuket-verify-clean.png" },
  { src: "rap-pak-mut-thurakij-phuket-zones-src.png", out: "blog-inline-rap-pak-mut-thurakij-phuket-zones-clean.png" },
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

console.log(`Done — ${jobs.length} images at ${TARGET_W}×${TARGET_H}.`);
