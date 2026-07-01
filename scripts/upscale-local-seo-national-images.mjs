import sharp from "sharp";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "local-seo-national");
const outDir = join(root, "public", "images", "blog");
const servicesDir = join(root, "public", "images", "services");

const jobs = [
  // Service hero
  { src: "service-local-seo-src.png", out: join(servicesDir, "hero-service-local-seo-clean.png") },
  // Pillar local-seo-kue-arai
  { src: "local-seo-kue-arai-hero-src.png", out: join(outDir, "blog-thumb-local-seo-kue-arai-clean.png") },
  { src: "local-seo-kue-arai-deliverables-src.png", out: join(outDir, "blog-inline-local-seo-kue-arai-deliverables-clean.png") },
  { src: "local-seo-kue-arai-maps-src.png", out: join(outDir, "blog-inline-local-seo-kue-arai-maps-clean.png") },
  { src: "local-seo-kue-arai-steps-src.png", out: join(outDir, "blog-inline-local-seo-kue-arai-steps-clean.png") },
  // raaka-local-seo
  { src: "raaka-local-seo-hero-src.png", out: join(outDir, "blog-thumb-raaka-local-seo-clean.png") },
  { src: "raaka-local-seo-pricing-src.png", out: join(outDir, "blog-inline-raaka-local-seo-pricing-clean.png") },
  { src: "raaka-local-seo-packs-src.png", out: join(outDir, "blog-inline-raaka-local-seo-packs-clean.png") },
  { src: "raaka-local-seo-mistakes-src.png", out: join(outDir, "blog-inline-raaka-local-seo-mistakes-clean.png") },
  // leuk-aecensi-local-seo
  { src: "leuk-aecensi-hero-src.png", out: join(outDir, "blog-thumb-leuk-aecensi-local-seo-clean.png") },
  { src: "leuk-aecensi-criteria-src.png", out: join(outDir, "blog-inline-leuk-aecensi-criteria-clean.png") },
  { src: "leuk-aecensi-redflags-src.png", out: join(outDir, "blog-inline-leuk-aecensi-redflags-clean.png") },
  { src: "leuk-aecensi-providers-src.png", out: join(outDir, "blog-inline-leuk-aecensi-providers-clean.png") },
  // local-seo-vs-seo
  { src: "local-seo-vs-seo-hero-src.png", out: join(outDir, "blog-thumb-local-seo-vs-seo-clean.png") },
  { src: "local-seo-vs-seo-compare-src.png", out: join(outDir, "blog-inline-local-seo-vs-seo-compare-clean.png") },
  { src: "local-seo-vs-seo-start-src.png", out: join(outDir, "blog-inline-local-seo-vs-seo-start-clean.png") },
  { src: "local-seo-vs-seo-funnel-src.png", out: join(outDir, "blog-inline-local-seo-vs-seo-funnel-clean.png") },
  // google-business-profile-local-seo
  { src: "gbp-local-seo-hero-src.png", out: join(outDir, "blog-thumb-gbp-local-seo-clean.png") },
  { src: "gbp-local-seo-anatomy-src.png", out: join(outDir, "blog-inline-gbp-local-seo-anatomy-clean.png") },
  { src: "gbp-local-seo-phuket-src.png", out: join(outDir, "blog-inline-gbp-local-seo-phuket-clean.png") },
  { src: "gbp-local-seo-setup-src.png", out: join(outDir, "blog-inline-gbp-local-seo-setup-clean.png") },
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

console.log(`Done — ${jobs.length} Local SEO national images upscaled to 3840×2560.`);
