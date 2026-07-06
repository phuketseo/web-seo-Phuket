/** One-off brand bar: node scripts/brand-bar-single.mjs assets/promote-ran-nuad-thai promote-ran-nuad-thai-phuket-hero-src.png */
import sharp from "sharp";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, process.argv[2] ?? "assets/promote-ran-nuad-thai");
const file = process.argv[3];
if (!file) throw new Error("Usage: brand-bar-single.mjs <assets-dir> <filename-src.png>");

const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");
const BAR_H = 72;
const PADDING = 28;
const input = join(dir, file);
const output = join(dir, file.replace("-src.png", "-branded.png"));

const image = sharp(input);
const meta = await image.metadata();
const w = meta.width ?? 2304;
const h = meta.height ?? 1536;
const logo = await sharp(logoPath).resize({ height: 36 }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();
const logoW = logoMeta.width ?? 140;
const barSvg = Buffer.from(`
<svg width="${w}" height="${BAR_H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${BAR_H}" fill="#f1f5f9"/>
  <line x1="0" y1="0" x2="${w}" y2="0" stroke="#e2e8f0" stroke-width="2"/>
  <text x="${PADDING + logoW + 16}" y="44" font-family="Arial,sans-serif" font-size="22" fill="#475569" font-weight="600">PhuketSEO</text>
  <text x="${PADDING + logoW + 16 + 130}" y="44" font-family="Arial,sans-serif" font-size="20" fill="#94a3b8">phuketseo.com</text>
</svg>`);

await image
  .extend({ bottom: BAR_H, background: { r: 241, g: 245, b: 249 } })
  .composite([
    { input: barSvg, top: h, left: 0 },
    { input: logo, top: h + Math.round((BAR_H - 36) / 2), left: PADDING },
  ])
  .png()
  .toFile(output);

console.log(`✓ ${output}`);
