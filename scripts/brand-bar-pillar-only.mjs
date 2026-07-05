/** Brand bar เฉพาะ pillar 4 รูป — ไม่แตะ *-src.png เก่าของ C1 */
import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "assets", "ranking-recovery");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");
const BAR_H = 72;
const PADDING = 28;

const files = [
  "andap-web-tok-ai-search-hero-src.png",
  "andap-web-tok-ai-search-causes-src.png",
  "andap-web-tok-ai-search-ai-prep-src.png",
  "andap-web-tok-ai-search-hub-src.png",
];

async function addBrandBar(inputPath, outputPath) {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const w = meta.width ?? 2304;
  const h = meta.height ?? 1536;
  const logo = await sharp(logoPath).resize({ height: 36 }).png().toBuffer();
  const barSvg = Buffer.from(
    `<svg width="${w}" height="${BAR_H}" xmlns="http://www.w3.org/2000/svg"><rect width="${w}" height="${BAR_H}" fill="#f1f5f9"/><line x1="0" y1="0" x2="${w}" y2="0" stroke="#e2e8f0" stroke-width="2"/></svg>`
  );
  await image
    .extend({ bottom: BAR_H, background: { r: 241, g: 245, b: 249 } })
    .composite([
      { input: barSvg, top: h, left: 0 },
      { input: logo, top: h + Math.round((BAR_H - 36) / 2), left: PADDING },
    ])
    .png()
    .toFile(outputPath);
  console.log(`✓ ${basename(outputPath)}`);
}

for (const file of files) {
  const input = join(dir, file);
  if (!existsSync(input)) throw new Error(`Missing: ${input}`);
  await addBrandBar(input, join(dir, file.replace("-src.png", "-branded.png")));
}
