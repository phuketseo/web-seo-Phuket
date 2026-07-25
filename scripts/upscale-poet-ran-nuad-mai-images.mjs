import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "poet-ran-nuad-mai");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "poet-ran-nuad-mai-hero-branded.png", out: "blog-thumb-poet-ran-nuad-mai-mai-mee-luk-kha-clean.webp" },
  { src: "poet-ran-nuad-mai-causes-branded.png", out: "blog-inline-poet-ran-nuad-mai-causes-clean.webp" },
  { src: "poet-ran-nuad-mai-steps-branded.png", out: "blog-inline-poet-ran-nuad-mai-steps-clean.webp" },
  { src: "poet-ran-nuad-mai-compare-branded.png", out: "blog-inline-poet-ran-nuad-mai-compare-clean.webp" },
  { src: "poet-ran-nuad-mai-mistakes-branded.png", out: "blog-inline-poet-ran-nuad-mai-mistakes-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  console.log(`✓ ${published.split(/[/\\]/).pop()} (${TARGET_W}×${TARGET_H})`);
}
