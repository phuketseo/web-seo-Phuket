import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "thipak-no-customers");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "thipak-no-customers-hero-branded.png", out: "blog-thumb-thipak-mai-mee-luk-kha-clean.webp" },
  { src: "thipak-no-customers-causes-branded.png", out: "blog-inline-thipak-no-customers-causes-clean.webp" },
  { src: "thipak-no-customers-steps-branded.png", out: "blog-inline-thipak-no-customers-steps-clean.webp" },
  { src: "thipak-no-customers-compare-branded.png", out: "blog-inline-thipak-no-customers-compare-clean.webp" },
  { src: "thipak-no-customers-mistakes-branded.png", out: "blog-inline-thipak-no-customers-mistakes-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  console.log(`✓ ${published.split(/[/\\]/).pop()} (${TARGET_W}×${TARGET_H})`);
}
