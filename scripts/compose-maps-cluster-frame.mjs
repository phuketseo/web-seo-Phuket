/**
 * ใส่กรอบน้ำเงิน-ม่วง + พื้นขาว + โลโก้ PhuketSEO ล่าง
 * Input: *-ai.png → Output: *-src.png (1920×1280)
 * Usage: node scripts/compose-maps-cluster-frame.mjs assets/google-maps-cluster
 */
import sharp from "sharp";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");

const OUT_W = 1920;
const OUT_H = 1280;
const BORDER = 14;
const FOOTER_H = 72;
const INNER_PAD = 24;
const CONTENT_H = OUT_H - FOOTER_H - BORDER * 2 - INNER_PAD * 2;

async function frameImage(inputPath, outputPath) {
  const logo = await sharp(logoPath).resize({ height: 40 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width ?? 160;

  const borderSvg = Buffer.from(`
<svg width="${OUT_W}" height="${OUT_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bd" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="${OUT_W}" height="${OUT_H}" fill="#ffffff"/>
  <rect x="0" y="0" width="${OUT_W}" height="${OUT_H}" fill="none" stroke="url(#bd)" stroke-width="${BORDER * 2}"/>
  <rect x="${BORDER}" y="${OUT_H - FOOTER_H - BORDER}" width="${OUT_W - BORDER * 2}" height="${FOOTER_H}" fill="#ffffff"/>
  <line x1="${BORDER}" y1="${OUT_H - FOOTER_H - BORDER}" x2="${OUT_W - BORDER}" y2="${OUT_H - FOOTER_H - BORDER}" stroke="#e0e7ff" stroke-width="2"/>
</svg>`);

  const contentAreaW = OUT_W - BORDER * 2 - INNER_PAD * 2;
  const scaled = await sharp(inputPath)
    .resize({
      width: contentAreaW,
      height: CONTENT_H,
      fit: "inside",
      background: { r: 255, g: 255, b: 255 },
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer();

  const sm = await sharp(scaled).metadata();
  const rw = sm.width ?? contentAreaW;
  const rh = sm.height ?? CONTENT_H;
  const left = BORDER + INNER_PAD + Math.round((contentAreaW - rw) / 2);
  const top = BORDER + INNER_PAD + Math.round((CONTENT_H - rh) / 2);
  const logoLeft = Math.round((OUT_W - logoW) / 2);
  const logoTop = OUT_H - FOOTER_H - BORDER + Math.round((FOOTER_H - 40) / 2);

  await sharp(borderSvg)
    .composite([
      { input: scaled, left, top },
      { input: logo, left: logoLeft, top: logoTop },
    ])
    .png()
    .toFile(outputPath);

  console.log(`  ✓ ${basename(outputPath)}`);
}

const targetDir = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(root, "assets", "google-maps-cluster");

if (!existsSync(logoPath)) throw new Error(`Logo not found: ${logoPath}`);

const files = readdirSync(targetDir).filter((f) => f.endsWith("-ai.png"));
if (!files.length) throw new Error(`No *-ai.png in ${targetDir}`);

console.log(`Framing ${files.length} images → white bg, purple border, PhuketSEO logo`);

for (const file of files) {
  const input = join(targetDir, file);
  const out = join(targetDir, file.replace("-ai.png", "-src.png"));
  await frameImage(input, out);
}

console.log("Done — run: node scripts/upscale-google-maps-cluster-images.mjs");
