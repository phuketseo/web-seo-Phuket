/**
 * รูป 4:5 สำหรับโพสต์ Meta — ออกแบบใหม่ทั้งใบ (ไม่ตัดแปะจากกราฟิกในบทความ)
 * Output: public/images/blog/blog-fb-rap-pak-mut-thurakij-phuket-4x5.png (1440×1800)
 */
import sharp from "sharp";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");
const fontBold = "C:/Windows/Fonts/tahomabd.ttf";
const fontReg = "C:/Windows/Fonts/tahoma.ttf";
const outDir = join(root, "public", "images", "blog");
const outPath = join(outDir, "blog-fb-rap-pak-mut-thurakij-phuket-4x5.png");
const assetsDir = join(root, "assets", "fb-4x5-rap-pak-mut");

const W = 1080;
const H = 1350;
const RETINA_W = 1440;
const RETINA_H = 1800;

async function textBuf({ text, fontfile, width, height, align = "center" }) {
  return sharp({
    text: {
      text,
      font: "Tahoma",
      fontfile,
      rgba: true,
      width,
      height,
      align,
    },
  })
    .png()
    .toBuffer();
}

async function main() {
  if (!existsSync(logoPath)) throw new Error(`Missing logo: ${logoPath}`);
  if (!existsSync(fontBold)) throw new Error(`Missing font: ${fontBold}`);

  mkdirSync(assetsDir, { recursive: true });
  mkdirSync(outDir, { recursive: true });

  const bgSvg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="40%" stop-color="#eef2ff"/>
      <stop offset="100%" stop-color="#f5f3ff"/>
    </linearGradient>
    <radialGradient id="blob1" cx="90%" cy="6%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob2" cx="6%" cy="50%" r="44%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blob3" cx="80%" cy="92%" r="40%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#4f46e5"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#312e81" flood-opacity="0.14"/>
    </filter>
    <filter id="cardShadow" x="-8%" y="-8%" width="116%" height="124%">
      <feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#312e81" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#blob1)"/>
  <rect width="${W}" height="${H}" fill="url(#blob2)"/>
  <rect width="${W}" height="${H}" fill="url(#blob3)"/>

  <!-- Pin above the card -->
  <g transform="translate(540, 168)" filter="url(#shadow)">
    <ellipse cx="0" cy="96" rx="58" ry="14" fill="#312e81" opacity="0.10"/>
    <path d="M0,-82 C-46,-82 -84,-48 -84,0 C-84,56 0,102 0,102 C0,102 84,56 84,0 C84,-48 46,-82 0,-82 Z" fill="url(#pin)"/>
    <circle cx="0" cy="-4" r="30" fill="#ffffff"/>
    <circle cx="0" cy="-4" r="17" fill="#4f46e5"/>
  </g>

  <!-- Content panel -->
  <rect x="44" y="300" width="992" height="950" rx="32" fill="#ffffff" fill-opacity="0.92" stroke="#e0e7ff" stroke-width="2" filter="url(#shadow)"/>

  <!-- Step cards -->
  <rect x="76" y="560" width="928" height="180" rx="22" fill="#fafbff" stroke="#e0e7ff" stroke-width="2" filter="url(#cardShadow)"/>
  <circle cx="148" cy="650" r="40" fill="#eef2ff"/>
  <text x="148" y="662" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#4f46e5">1</text>

  <rect x="76" y="760" width="928" height="180" rx="22" fill="#fafbff" stroke="#e0e7ff" stroke-width="2" filter="url(#cardShadow)"/>
  <circle cx="148" cy="850" r="40" fill="#eef2ff"/>
  <text x="148" y="862" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#4f46e5">2</text>

  <rect x="76" y="960" width="928" height="180" rx="22" fill="#fafbff" stroke="#e0e7ff" stroke-width="2" filter="url(#cardShadow)"/>
  <circle cx="148" cy="1050" r="40" fill="#eef2ff"/>
  <text x="148" y="1062" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" font-weight="700" fill="#4f46e5">3</text>

  <!-- Footer -->
  <rect x="0" y="1270" width="${W}" height="80" fill="#ffffff"/>
  <line x1="44" y1="1270" x2="1036" y2="1270" stroke="#e0e7ff" stroke-width="2"/>
</svg>`);

  const badge = await textBuf({
    text: `<span foreground="#4f46e5"><b>GOOGLE MAPS · ภูเก็ต</b></span>`,
    fontfile: fontBold,
    width: 900,
    height: 34,
  });

  const title = await textBuf({
    text: `<span foreground="#1e1b4b"><b>รับปักหมุดธุรกิจ</b></span>`,
    fontfile: fontBold,
    width: 980,
    height: 68,
  });

  const hook = await textBuf({
    text: `<span foreground="#475569">ให้หมุดบนแผนที่ตรงหน้าร้านจริง\nลูกค้าขอเส้นทางถูก — พร้อมดันอันดับต่อ</span>`,
    fontfile: fontReg,
    width: 900,
    height: 68,
  });

  const cards = [
    {
      title: "ยืนยันตำแหน่งร้าน",
      desc: "ยืนยันตัวตน GBP ให้ Google รู้ว่าร้านอยู่ที่ไหนจริง",
    },
    {
      title: "แก้หมุดที่ชี้ผิดซอย",
      desc: "ย้ายหมุดให้ตรงป้ายหน้าร้าน — ลดรีวิวหาไม่เจอ",
    },
    {
      title: "ตั้งฐานก่อนดันอันดับ",
      desc: "หมุดถูกแล้วค่อยแข่ง near me ในโซนภูเก็ต",
    },
  ];

  const cardLayers = [];
  const cardYs = [560, 760, 960];
  for (let i = 0; i < cards.length; i++) {
    const titleBuf = await textBuf({
      text: `<span foreground="#1e1b4b"><b>${cards[i].title}</b></span>`,
      fontfile: fontBold,
      width: 740,
      height: 42,
      align: "left",
    });
    const descBuf = await textBuf({
      text: `<span foreground="#64748b">${cards[i].desc}</span>`,
      fontfile: fontReg,
      width: 740,
      height: 58,
      align: "left",
    });
    cardLayers.push({ input: titleBuf, left: 214, top: cardYs[i] + 48 });
    cardLayers.push({ input: descBuf, left: 214, top: cardYs[i] + 98 });
  }

  const logo = await sharp(logoPath).resize({ height: 38 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width ?? 150;

  const centerX = (w) => Math.round((W - w) / 2);
  const badgeM = await sharp(badge).metadata();
  const titleM = await sharp(title).metadata();
  const hookM = await sharp(hook).metadata();

  const composed = await sharp({
    create: { width: W, height: H, channels: 3, background: { r: 248, g: 250, b: 252 } },
  })
    .composite([
      { input: bgSvg, left: 0, top: 0 },
      { input: badge, left: centerX(badgeM.width ?? 400), top: 328 },
      { input: title, left: centerX(titleM.width ?? 600), top: 372 },
      { input: hook, left: centerX(hookM.width ?? 700), top: 452 },
      ...cardLayers,
      {
        input: logo,
        left: Math.round((W - logoW) / 2),
        top: 1270 + Math.round((80 - 38) / 2),
      },
    ])
    .png()
    .toBuffer();

  await sharp(composed).toFile(join(assetsDir, "rap-pak-mut-fb-4x5-branded.png"));
  await sharp(composed)
    .resize(RETINA_W, RETINA_H, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(outPath);

  console.log(`✓ ${outPath}`);
  console.log(`  ${RETINA_W}×${RETINA_H} — original Meta creative`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
