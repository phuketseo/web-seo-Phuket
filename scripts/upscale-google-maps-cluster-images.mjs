import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { publishWebpImage } from "./lib/publish-image.mjs";
import { fileURLToPath } from "node:url";

const TARGET_W = 3840;
const TARGET_H = 2560;

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "google-maps-cluster");
const outDir = join(root, "public", "images", "blog");

const jobs = [
  { src: "dan-andap-google-maps-phuket-hero-src.png", out: "blog-thumb-dan-andap-google-maps-phuket-clean.webp" },
  { src: "dan-andap-google-maps-phuket-factors-src.png", out: "blog-inline-dan-andap-google-maps-phuket-factors-clean.webp" },
  { src: "dan-andap-google-maps-phuket-steps-src.png", out: "blog-inline-dan-andap-google-maps-phuket-steps-clean.webp" },
  { src: "dan-andap-google-maps-phuket-zones-src.png", out: "blog-inline-dan-andap-google-maps-phuket-zones-clean.webp" },
  { src: "google-maps-mai-tid-phuket-hero-src.png", out: "blog-thumb-google-maps-mai-tid-phuket-clean.webp" },
  { src: "google-maps-mai-tid-phuket-symptoms-src.png", out: "blog-inline-google-maps-mai-tid-phuket-symptoms-clean.webp" },
  { src: "google-maps-mai-tid-phuket-causes-src.png", out: "blog-inline-google-maps-mai-tid-phuket-causes-clean.webp" },
  { src: "google-maps-mai-tid-phuket-fix-src.png", out: "blog-inline-google-maps-mai-tid-phuket-fix-clean.webp" },
  { src: "rap-pak-mut-thurakij-phuket-hero-src.png", out: "blog-thumb-rap-pak-mut-thurakij-phuket-clean.webp" },
  { src: "rap-pak-mut-thurakij-phuket-wrong-src.png", out: "blog-inline-rap-pak-mut-thurakij-phuket-wrong-clean.webp" },
  { src: "rap-pak-mut-thurakij-phuket-verify-src.png", out: "blog-inline-rap-pak-mut-thurakij-phuket-verify-clean.webp" },
  { src: "rap-pak-mut-thurakij-phuket-zones-src.png", out: "blog-inline-rap-pak-mut-thurakij-phuket-zones-clean.webp" },
];

for (const { src, out } of jobs) {
  const input = join(assetsDir, src);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  const outPath = join(outDir, out);
  const { kb } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });
  const outFile = out.replace(/\.png$/i, ".webp");
  console.log(`✓ ${outFile} (${kb} KB)`);
}

console.log(`Done — ${jobs.length} images at ${TARGET_W}×${TARGET_H}.`);
