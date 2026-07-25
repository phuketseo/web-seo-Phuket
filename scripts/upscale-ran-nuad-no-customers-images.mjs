import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "ran-nuad-no-customers");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "ran-nuad-no-customers-hero-branded.png", out: "blog-thumb-ran-nuad-mai-mee-luk-kha-clean.webp" },
  { src: "ran-nuad-no-customers-causes-branded.png", out: "blog-inline-ran-nuad-no-customers-causes-clean.webp" },
  { src: "ran-nuad-no-customers-steps-branded.png", out: "blog-inline-ran-nuad-no-customers-steps-clean.webp" },
  { src: "ran-nuad-no-customers-compare-branded.png", out: "blog-inline-ran-nuad-no-customers-compare-clean.webp" },
  { src: "ran-nuad-no-customers-mistakes-branded.png", out: "blog-inline-ran-nuad-no-customers-mistakes-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  console.log(`✓ ${published.split(/[/\\]/).pop()} (${TARGET_W}×${TARGET_H})`);
}
