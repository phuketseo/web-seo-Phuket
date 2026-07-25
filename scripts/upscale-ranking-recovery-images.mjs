import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "ranking-recovery");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "andap-google-tok-kuen-nai-30-wan-hero-branded.png", out: "blog-thumb-andap-google-tok-kuen-nai-30-wan-clean.webp" },
  { src: "andap-google-tok-kuen-nai-30-wan-causes-branded.png", out: "blog-inline-andap-google-tok-kuen-nai-30-wan-causes-clean.webp" },
  { src: "andap-google-tok-kuen-nai-30-wan-plan-branded.png", out: "blog-inline-andap-google-tok-kuen-nai-30-wan-plan-clean.webp" },
  { src: "andap-google-tok-kuen-nai-30-wan-mistakes-branded.png", out: "blog-inline-andap-google-tok-kuen-nai-30-wan-mistakes-clean.webp" },
  { src: "witi-kae-web-don-core-update-hero-branded.png", out: "blog-thumb-witi-kae-web-don-core-update-clean.webp" },
  { src: "witi-kae-web-don-core-update-confirm-branded.png", out: "blog-inline-witi-kae-web-don-core-update-confirm-clean.webp" },
  { src: "witi-kae-web-don-core-update-playbook-branded.png", out: "blog-inline-witi-kae-web-don-core-update-playbook-clean.webp" },
  { src: "witi-kae-web-don-core-update-donts-branded.png", out: "blog-inline-witi-kae-web-don-core-update-donts-clean.webp" },
  { src: "andap-web-tok-ai-search-hero-branded.png", out: "blog-thumb-andap-web-tok-ai-search-clean.webp" },
  { src: "andap-web-tok-ai-search-causes-branded.png", out: "blog-inline-andap-web-tok-ai-search-causes-clean.webp" },
  { src: "andap-web-tok-ai-search-ai-prep-branded.png", out: "blog-inline-andap-web-tok-ai-search-ai-prep-clean.webp" },
  { src: "andap-web-tok-ai-search-hub-branded.png", out: "blog-inline-andap-web-tok-ai-search-hub-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const meta = await sharp(input).metadata();
  await sharp(input)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(outPath);
  const kb = Math.round(readFileSync(outPath).length / 1024);
  console.log(`✓ ${out} (${meta.width}x${meta.height} → ${TARGET_W}x${TARGET_H}, ${kb} KB)`);
}

console.log(`Done — ${jobs.length} images at ${TARGET_W}×${TARGET_H}.`);
