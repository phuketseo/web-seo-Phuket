import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "promote-spa-phuket");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "promote-spa-hero-branded.png", out: "blog-thumb-promote-spa-phuket-clean.webp" },
  { src: "promote-spa-channels-branded.png", out: "blog-inline-promote-spa-channels-clean.webp" },
  { src: "promote-spa-steps-branded.png", out: "blog-inline-promote-spa-steps-clean.webp" },
  { src: "promote-spa-compare-branded.png", out: "blog-inline-promote-spa-compare-clean.webp" },
  { src: "promote-spa-mistakes-branded.png", out: "blog-inline-promote-spa-mistakes-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  console.log(`✓ ${published.split(/[/\\]/).pop()} (${TARGET_W}×${TARGET_H})`);
}
