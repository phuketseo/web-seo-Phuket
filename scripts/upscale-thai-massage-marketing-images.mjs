import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { thaiMassageMarketingImages } from "./thai-massage-marketing-image-briefs.mjs";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "thai-massage-marketing");
const outDir = join(root, "public", "images", "blog");

const jobs = thaiMassageMarketingImages.map((img) => ({
  src: img.src.replace("-src.png", "-branded.png"),
  fallback: img.src,
  out: join(outDir, img.out),
}));

for (const { src, fallback, out } of jobs) {
  let input = join(assetsDir, src);
  if (!existsSync(input)) {
    input = join(assetsDir, fallback);
  }
  if (!existsSync(input)) {
    throw new Error(`Missing source: ${input}`);
  }

  const meta = await sharp(input).metadata();
  console.log(`${input.replace(root, "")}: ${meta.width}x${meta.height} → ${TARGET_W}x${TARGET_H}`);

  await sharp(input)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(out);

  const kb = Math.round(readFileSync(out).length / 1024);
  console.log(`  ✓ ${out.replace(root, "")} (${kb} KB)`);
}

console.log(`Done — ${jobs.length} Thai massage marketing images upscaled to 3840×2560.`);
