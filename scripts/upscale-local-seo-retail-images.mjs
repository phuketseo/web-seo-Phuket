import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "local-seo-retail");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  // tam-local-seo-rang-kha
  { src: "tam-local-seo-rang-kha-hero-src.png", out: join(outDir, "blog-thumb-tam-local-seo-rang-kha-clean.png") },
  { src: "tam-local-seo-rang-kha-why-src.png", out: join(outDir, "blog-inline-tam-local-seo-rang-kha-why-clean.png") },
  { src: "tam-local-seo-rang-kha-maps-src.png", out: join(outDir, "blog-inline-tam-local-seo-rang-kha-maps-clean.png") },
  { src: "tam-local-seo-rang-kha-steps-src.png", out: join(outDir, "blog-inline-tam-local-seo-rang-kha-steps-clean.png") },
  // raaka-local-seo-rang-kha
  { src: "raaka-local-seo-rang-kha-hero-src.png", out: join(outDir, "blog-thumb-raaka-local-seo-rang-kha-clean.png") },
  { src: "raaka-local-seo-rang-kha-pricing-src.png", out: join(outDir, "blog-inline-raaka-local-seo-rang-kha-pricing-clean.png") },
  { src: "raaka-local-seo-rang-kha-packs-src.png", out: join(outDir, "blog-inline-raaka-local-seo-rang-kha-packs-clean.png") },
  { src: "raaka-local-seo-rang-kha-mistakes-src.png", out: join(outDir, "blog-inline-raaka-local-seo-rang-kha-mistakes-clean.png") },
  // gbp-rang-kha-local-seo
  { src: "gbp-rang-kha-hero-src.png", out: join(outDir, "blog-thumb-gbp-rang-kha-clean.png") },
  { src: "gbp-rang-kha-anatomy-src.png", out: join(outDir, "blog-inline-gbp-rang-kha-anatomy-clean.png") },
  { src: "gbp-rang-kha-categories-src.png", out: join(outDir, "blog-inline-gbp-rang-kha-categories-clean.png") },
  { src: "gbp-rang-kha-setup-src.png", out: join(outDir, "blog-inline-gbp-rang-kha-setup-clean.png") },
  // kham-kha-local-seo-rang-kha
  { src: "kham-kha-rang-kha-hero-src.png", out: join(outDir, "blog-thumb-kham-kha-rang-kha-clean.png") },
  { src: "kham-kha-rang-kha-nearme-src.png", out: join(outDir, "blog-inline-kham-kha-rang-kha-nearme-clean.png") },
  { src: "kham-kha-rang-kha-types-src.png", out: join(outDir, "blog-inline-kham-kha-rang-kha-types-clean.png") },
  { src: "kham-kha-rang-kha-zones-src.png", out: join(outDir, "blog-inline-kham-kha-rang-kha-zones-clean.png") },
  // local-seo-rang-kha-mistakes
  { src: "rang-kha-mistakes-hero-src.png", out: join(outDir, "blog-thumb-rang-kha-mistakes-clean.png") },
  { src: "rang-kha-mistakes-nap-src.png", out: join(outDir, "blog-inline-rang-kha-mistakes-nap-clean.png") },
  { src: "rang-kha-mistakes-compare-src.png", out: join(outDir, "blog-inline-rang-kha-mistakes-compare-clean.png") },
  { src: "rang-kha-mistakes-fix-src.png", out: join(outDir, "blog-inline-rang-kha-mistakes-fix-clean.png") },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
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
    .toFile(out);

  const kb = Math.round(readFileSync(out).length / 1024);
  console.log(`  ✓ ${out.replace(root, "")} (${kb} KB)`);
}

console.log(`Done — ${jobs.length} Local SEO retail images upscaled to 3840×2560.`);
