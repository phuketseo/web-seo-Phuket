import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "promote-ran-nuad-thai");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "promote-ran-nuad-thai-phuket-hero-branded.png", out: "blog-thumb-promote-ran-nuad-thai-phuket-clean.webp" },
  { src: "promote-ran-nuad-thai-steps-branded.png", out: "blog-inline-promote-ran-nuad-thai-steps-clean.webp" },
  { src: "promote-ran-nuad-thai-channels-branded.png", out: "blog-inline-promote-ran-nuad-thai-channels-clean.webp" },
  { src: "promote-ran-nuad-thai-keywords-branded.png", out: "blog-inline-promote-ran-nuad-thai-keywords-clean.webp" },
  { src: "promote-ran-nuad-thai-compare-branded.png", out: "blog-inline-promote-ran-nuad-thai-compare-clean.webp" },
  { src: "promote-ran-nuad-thai-mistakes-branded.png", out: "blog-inline-promote-ran-nuad-thai-mistakes-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { kb } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  const outFile = out.replace(/\.png$/i, ".webp");
  console.log(`✓ ${outFile} (${kb} KB)`);
}

console.log(`Done — ${jobs.length} promote-ran-nuad images at ${TARGET_W}×${TARGET_H}.`);
