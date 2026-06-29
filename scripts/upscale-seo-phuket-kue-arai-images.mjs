import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seoPhuketKueAraiImages } from "./seo-phuket-kue-arai-image-briefs.mjs";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets");
const outDir = join(root, "public", "images", "blog");

for (const { src, out } of seoPhuketKueAraiImages) {
  const input = join(assetsDir, src);
  const output = join(outDir, out);

  if (!existsSync(input)) {
    throw new Error(`Missing source: ${input}\nRun image briefs first — node scripts/seo-phuket-kue-arai-image-briefs.mjs`);
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

  console.log(`  → ${output}`);
}

console.log("\nDone. Run: npm run check:images");
