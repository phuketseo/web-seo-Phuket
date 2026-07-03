import sharp from "sharp";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultDir = join(root, "assets", "thai-massage-marketing");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");

const BAR_H = 72;
const PADDING = 28;

async function addBrandBar(inputPath, outputPath) {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const w = meta.width ?? 2304;
  const h = meta.height ?? 1536;

  const logo = await sharp(logoPath)
    .resize({ height: 36 })
    .png()
    .toBuffer();

  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width ?? 140;

  const barSvg = Buffer.from(`
<svg width="${w}" height="${BAR_H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${BAR_H}" fill="#f1f5f9"/>
  <line x1="0" y1="0" x2="${w}" y2="0" stroke="#e2e8f0" stroke-width="2"/>
  <text x="${PADDING + logoW + 16}" y="44" font-family="Arial, sans-serif" font-size="22" fill="#475569" font-weight="600">PhuketSEO</text>
  <text x="${PADDING + logoW + 16 + 130}" y="44" font-family="Arial, sans-serif" font-size="20" fill="#94a3b8">phuketseo.com</text>
</svg>`);

  const extended = await image
    .extend({
      bottom: BAR_H,
      background: { r: 241, g: 245, b: 249 },
    })
    .composite([
      { input: barSvg, top: h, left: 0 },
      { input: logo, top: h + Math.round((BAR_H - 36) / 2), left: PADDING },
    ])
    .png()
    .toBuffer();

  await sharp(extended).toFile(outputPath);
  console.log(`  ✓ brand bar → ${basename(outputPath)}`);
}

const targetDir = process.argv[2] ? join(process.cwd(), process.argv[2]) : defaultDir;

if (!existsSync(logoPath)) {
  throw new Error(`Logo not found: ${logoPath}`);
}

const files = readdirSync(targetDir).filter((f) => f.endsWith("-src.png"));
if (!files.length) {
  throw new Error(`No *-src.png files in ${targetDir}`);
}

console.log(`Adding PhuketSEO brand bar to ${files.length} images in ${targetDir}`);

for (const file of files) {
  const input = join(targetDir, file);
  const branded = join(targetDir, file.replace("-src.png", "-branded.png"));
  await addBrandBar(input, branded);
}

console.log("Done — use *-branded.png for upscale step.");
