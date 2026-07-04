/**
 * สร้างรูป 4:5 สำหรับโพสต์ Meta (Facebook) — บทความรับปักหมุดธุรกิจ
 * Output: public/images/blog/blog-fb-rap-pak-mut-thurakij-phuket-4x5.png (1440×1800)
 */
import sharp from "sharp";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");
const heroPath = join(root, "assets", "google-maps-cluster", "rap-pak-mut-thurakij-phuket-hero-ai.png");
const fontPath = "C:/Windows/Fonts/tahomabd.ttf";
const fontPathReg = "C:/Windows/Fonts/tahoma.ttf";
const outDir = join(root, "public", "images", "blog");
const outPath = join(outDir, "blog-fb-rap-pak-mut-thurakij-phuket-4x5.png");
const assetsDir = join(root, "assets", "fb-4x5-rap-pak-mut");

const W = 1080;
const H = 1350;
const RETINA_W = 1440;
const RETINA_H = 1800;
const BORDER = 16;
const FOOTER_H = 80;
const PAD = 36;

async function textPng({ text, fontfile, width, height, rgba = true }) {
  return sharp({
    text: {
      text,
      font: "Tahoma",
      fontfile,
      rgba,
      width,
      height,
      align: "center",
    },
  })
    .png()
    .toBuffer();
}

async function main() {
  if (!existsSync(logoPath)) throw new Error(`Missing logo: ${logoPath}`);
  if (!existsSync(heroPath)) throw new Error(`Missing hero: ${heroPath}`);
  if (!existsSync(fontPath)) throw new Error(`Missing font: ${fontPath}`);

  mkdirSync(assetsDir, { recursive: true });
  mkdirSync(outDir, { recursive: true });

  const contentW = W - BORDER * 2;
  const contentH = H - BORDER * 2 - FOOTER_H;

  // Background frame
  const frameSvg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bd" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="hd" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eef2ff"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="url(#bd)" stroke-width="${BORDER * 2}"/>
  <rect x="${BORDER}" y="${BORDER}" width="${contentW}" height="${contentH}" fill="url(#hd)"/>
  <rect x="${BORDER}" y="${H - FOOTER_H - BORDER}" width="${contentW}" height="${FOOTER_H}" fill="#ffffff"/>
  <line x1="${BORDER}" y1="${H - FOOTER_H - BORDER}" x2="${W - BORDER}" y2="${H - FOOTER_H - BORDER}" stroke="#e0e7ff" stroke-width="2"/>
</svg>`);

  const badge = await textPng({
    text: `<span foreground="#4f46e5"><b>LOCAL SEO · GOOGLE MAPS</b></span>`,
    fontfile: fontPath,
    width: contentW - PAD * 2,
    height: 36,
  });

  const title = await textPng({
    text: `<span foreground="#312e81"><b>รับปักหมุดธุรกิจ</b></span>`,
    fontfile: fontPath,
    width: contentW - PAD * 2,
    height: 72,
  });

  const subtitle = await textPng({
    text: `<span foreground="#4338ca"><b>Google Maps ภูเก็ต</b></span>`,
    fontfile: fontPath,
    width: contentW - PAD * 2,
    height: 52,
  });

  const hook = await textPng({
    text: `<span foreground="#475569">ยืนยันตำแหน่งร้านให้หมุดตรงหน้าร้านจริง\nก่อนดันอันดับบนแผนที่</span>`,
    fontfile: fontPathReg,
    width: contentW - PAD * 2,
    height: 70,
  });

  // Hero art — fill most of the 4:5 body
  const heroMaxW = contentW - PAD * 2;
  const heroMaxH = 640;
  const hero = await sharp(heroPath)
    .resize({
      width: heroMaxW,
      height: heroMaxH,
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toBuffer();

  // Rounded mask for hero
  const heroMeta = await sharp(hero).metadata();
  const hw = heroMeta.width ?? heroMaxW;
  const hh = heroMeta.height ?? heroMaxH;
  const radius = 20;
  const roundedHero = await sharp(hero)
    .composite([
      {
        input: Buffer.from(
          `<svg width="${hw}" height="${hh}"><rect x="0" y="0" width="${hw}" height="${hh}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  // Bullet chips — full width, stacked (อ่านง่ายในฟีดมือถือ)
  const bullets = ["1. ยืนยันตัวตน GBP", "2. หมุดตรงหน้าร้าน", "3. ก่อนดันอันดับ Maps"];
  const chipW = contentW - PAD * 2;
  const chipBuffers = [];
  for (const label of bullets) {
    const chipText = await textPng({
      text: `<span foreground="#312e81"><b>${label}</b></span>`,
      fontfile: fontPath,
      width: chipW - 40,
      height: 36,
    });
    const chipTextMeta = await sharp(chipText).metadata();
    const chipBg = await sharp({
      create: {
        width: chipW,
        height: 52,
        channels: 4,
        background: { r: 238, g: 242, b: 255, alpha: 1 },
      },
    })
      .composite([
        {
          input: Buffer.from(
            `<svg width="${chipW}" height="52"><rect width="${chipW}" height="52" rx="14" ry="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="2"/></svg>`
          ),
          left: 0,
          top: 0,
        },
        {
          input: chipText,
          left: Math.round((chipW - (chipTextMeta.width ?? chipW)) / 2),
          top: 8,
        },
      ])
      .png()
      .toBuffer();
    chipBuffers.push(chipBg);
  }

  const logo = await sharp(logoPath).resize({ height: 40 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width ?? 160;

  const badgeMeta = await sharp(badge).metadata();
  const titleMeta = await sharp(title).metadata();
  const subtitleMeta = await sharp(subtitle).metadata();
  const hookMeta = await sharp(hook).metadata();

  let y = BORDER + 22;
  const centerX = (bufW) => BORDER + Math.round((contentW - bufW) / 2);

  const layers = [
    { input: frameSvg, left: 0, top: 0 },
    { input: badge, left: centerX(badgeMeta.width ?? 400), top: y },
  ];
  y += (badgeMeta.height ?? 36) + 8;
  layers.push({ input: title, left: centerX(titleMeta.width ?? 600), top: y });
  y += (titleMeta.height ?? 72) + 2;
  layers.push({ input: subtitle, left: centerX(subtitleMeta.width ?? 500), top: y });
  y += (subtitleMeta.height ?? 52) + 8;
  layers.push({ input: hook, left: centerX(hookMeta.width ?? 700), top: y });
  y += (hookMeta.height ?? 70) + 14;
  layers.push({ input: roundedHero, left: centerX(hw), top: y });
  y += hh + 18;

  // Chips stacked vertically — อ่านง่ายบนมือถือในฟีด 4:5
  const chipLeft = BORDER + PAD;
  for (const chip of chipBuffers) {
    layers.push({ input: chip, left: chipLeft, top: y });
    y += 52 + 10;
  }

  const logoLeft = Math.round((W - logoW) / 2);
  const logoTop = H - FOOTER_H - BORDER + Math.round((FOOTER_H - 40) / 2);
  layers.push({ input: logo, left: logoLeft, top: logoTop });

  const composed = await sharp({
    create: { width: W, height: H, channels: 3, background: { r: 255, g: 255, b: 255 } },
  })
    .composite(layers)
    .png()
    .toBuffer();

  // Save working copy
  const workPath = join(assetsDir, "rap-pak-mut-fb-4x5-branded.png");
  await sharp(composed).toFile(workPath);

  // Retina upscale for publish
  await sharp(composed)
    .resize(RETINA_W, RETINA_H, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(outPath);

  console.log(`✓ ${outPath}`);
  console.log(`  ${RETINA_W}×${RETINA_H} (4:5) — upload as Facebook Photo post`);
  console.log(`  Caption link: https://phuketseo.com/blog/rap-pak-mut-thurakij-phuket`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
