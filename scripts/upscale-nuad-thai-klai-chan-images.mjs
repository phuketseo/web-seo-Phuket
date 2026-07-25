import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "nuad-thai-klai-chan");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "nuad-thai-klai-chan-hero-branded.png", out: "blog-thumb-nuad-thai-klai-chan-clean.webp" },
  { src: "nuad-thai-klai-chan-search-branded.png", out: "blog-inline-nuad-thai-klai-chan-search-clean.webp" },
  { src: "nuad-thai-klai-chan-causes-branded.png", out: "blog-inline-nuad-thai-klai-chan-causes-clean.webp" },
  { src: "nuad-thai-klai-chan-steps-branded.png", out: "blog-inline-nuad-thai-klai-chan-steps-clean.webp" },
  { src: "nuad-thai-klai-chan-compare-branded.png", out: "blog-inline-nuad-thai-klai-chan-compare-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  console.log(`✓ ${published.split(/[/\\]/).pop()} (${TARGET_W}×${TARGET_H})`);
}
