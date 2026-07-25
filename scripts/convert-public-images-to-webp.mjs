/**
 * Batch-convert public/images PNG files to WebP and update src/lib/images.ts paths.
 *
 * Usage:
 *   node scripts/convert-public-images-to-webp.mjs
 *   node scripts/convert-public-images-to-webp.mjs --remove-png   # delete PNG after convert
 */
import { existsSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { convertToWebp } from "./lib/publish-image.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "public", "images");
const imagesTsPath = join(root, "src", "lib", "images.ts");
const removePng = process.argv.includes("--remove-png");

function walkPng(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkPng(full));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      files.push(full);
    }
  }
  return files;
}

const pngFiles = walkPng(imagesDir);
console.log(`Converting ${pngFiles.length} PNG files under public/images/ …\n`);

let totalPngKb = 0;
let totalWebpKb = 0;

for (const input of pngFiles) {
  const rel = relative(imagesDir, input);
  const pngKb = Math.round(readFileSync(input).length / 1024);
  totalPngKb += pngKb;

  const { path: webpPath, kb: webpKb } = await convertToWebp(input, { removeSource: removePng });
  totalWebpKb += webpKb;

  const saved = Math.round((1 - webpKb / pngKb) * 100);
  console.log(`✓ ${rel}  ${pngKb} KB → ${webpKb} KB WebP (${saved}% smaller)`);
}

// Update images.ts: .png → .webp for /images/ paths
let imagesTs = readFileSync(imagesTsPath, "utf8");
const before = imagesTs;
imagesTs = imagesTs.replace(/(src: "\/images\/[^"]+)\.png"/g, '$1.webp"');

if (imagesTs !== before) {
  writeFileSync(imagesTsPath, imagesTs, "utf8");
  const count = (before.match(/src: "\/images\/[^"]+\.png"/g) ?? []).length;
  console.log(`\nUpdated ${count} paths in src/lib/images.ts (.png → .webp)`);
} else {
  console.log("\nNo .png paths to update in images.ts (already WebP?)");
}

console.log(
  `\nDone — ${pngFiles.length} files converted.`,
  `Total: ${Math.round(totalPngKb / 1024)} MB PNG → ${Math.round(totalWebpKb / 1024)} MB WebP`,
);
if (!removePng) {
  console.log("PNG originals kept. Re-run with --remove-png to delete them after verifying.");
}
