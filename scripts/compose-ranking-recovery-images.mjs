/**
 * Smooth Purple landscape infographics — ranking recovery cluster (C1.1 + C1.2)
 * Output: assets/ranking-recovery/*-src.png → public/images/blog/*-clean.png (3840×2560)
 */
import sharp from "sharp";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "ranking-recovery");
const outDir = join(root, "public", "images", "blog");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");
const fontBold = "C:/Windows/Fonts/tahomabd.ttf";
const fontReg = "C:/Windows/Fonts/tahoma.ttf";

const W = 2304;
const H = 1536;
const TARGET_W = 3840;
const TARGET_H = 2560;
const BAR_H = 72;

async function textBuf({ text, fontfile, width, height, align = "left" }) {
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

function bgSvg() {
  return Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <radialGradient id="g1" cx="90%" cy="10%" r="42%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="8%" cy="85%" r="38%">
      <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="num" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <filter id="card" x="-8%" y="-12%" width="116%" height="130%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#4338ca" flood-opacity="0.12"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>
  <rect width="${W}" height="${H}" fill="url(#g3)"/>
</svg>`);
}

function cardsSvg(cards, { cols = 2, startY = 420, cardH = 220, gap = 28 } = {}) {
  const padX = 64;
  const usable = W - padX * 2;
  const cardW = cols === 1 ? usable : (usable - gap * (cols - 1)) / cols;
  let svg = "";
  cards.forEach((card, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = padX + col * (cardW + gap);
    const y = startY + row * (cardH + gap);
    svg += `
      <rect x="${x}" y="${y}" width="${cardW}" height="${cardH}" rx="28" fill="#ffffff" stroke="#eef2ff" stroke-width="2" filter="url(#card)"/>
      <circle cx="${x + 48}" cy="${y + 48}" r="28" fill="url(#num)"/>
      <text x="${x + 48}" y="${y + 56}" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#ffffff">${i + 1}</text>
    `;
  });
  return svg;
}

async function composeInfographic({
  outName,
  badge,
  titleLines,
  subtitle,
  cards,
  cols = 2,
  cardH = 220,
  startY = 400,
}) {
  const padX = 64;
  const usable = W - padX * 2;
  const gap = 28;
  const cardW = cols === 1 ? usable : (usable - gap * (cols - 1)) / cols;

  const layers = [];
  const baseCards = cardsSvg(cards, { cols, startY, cardH, gap });

  const frame = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="num" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <filter id="card" x="-8%" y="-12%" width="116%" height="130%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#4338ca" flood-opacity="0.12"/>
    </filter>
  </defs>
  <rect x="64" y="72" width="280" height="44" rx="22" fill="url(#pill)"/>
  ${baseCards}
</svg>`);

  const bg = await sharp(bgSvg()).png().toBuffer();
  layers.push({ input: bg, top: 0, left: 0 });
  layers.push({ input: frame, top: 0, left: 0 });

  const badgeText = await textBuf({
    text: `<span foreground="#ffffff"><b>${badge}</b></span>`,
    fontfile: fontBold,
    width: 260,
    height: 32,
    align: "center",
  });
  layers.push({ input: badgeText, top: 78, left: 74 });

  let titleY = 140;
  for (let i = 0; i < titleLines.length; i++) {
    const line = titleLines[i];
    const color = i === 0 ? "#7c3aed" : "#0f172a";
    const buf = await textBuf({
      text: `<span foreground="${color}"><b>${line}</b></span>`,
      fontfile: fontBold,
      width: 2100,
      height: 72,
    });
    layers.push({ input: buf, top: titleY, left: 64 });
    titleY += 70;
  }

  if (subtitle) {
    const sub = await textBuf({
      text: `<span foreground="#475569">${subtitle}</span>`,
      fontfile: fontReg,
      width: 2100,
      height: 48,
    });
    layers.push({ input: sub, top: titleY + 8, left: 64 });
  }

  for (let i = 0; i < cards.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = padX + col * (cardW + gap);
    const y = startY + row * (cardH + gap);

    const title = await textBuf({
      text: `<span foreground="#0f172a"><b>${cards[i].title}</b></span>`,
      fontfile: fontBold,
      width: Math.round(cardW - 120),
      height: 44,
    });
    layers.push({ input: title, top: y + 28, left: x + 92 });

    const desc = await textBuf({
      text: `<span foreground="#475569">${cards[i].description}</span>`,
      fontfile: fontReg,
      width: Math.round(cardW - 56),
      height: cardH - 90,
    });
    layers.push({ input: desc, top: y + 88, left: x + 28 });
  }

  // Brand bar
  const logo = await sharp(logoPath).resize({ height: 36 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width ?? 140;
  const barSvg = Buffer.from(`
<svg width="${W}" height="${BAR_H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${BAR_H}" fill="#f1f5f9"/>
  <line x1="0" y1="0" x2="${W}" y2="0" stroke="#e2e8f0" stroke-width="2"/>
  <text x="${28 + logoW + 16}" y="44" font-family="Arial, sans-serif" font-size="22" fill="#475569" font-weight="600">PhuketSEO</text>
  <text x="${28 + logoW + 16 + 130}" y="44" font-family="Arial, sans-serif" font-size="20" fill="#94a3b8">phuketseo.com</text>
</svg>`);

  const composed = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 248, g: 250, b: 252, alpha: 1 },
    },
  })
    .composite(layers)
    .png()
    .toBuffer();

  const withBar = await sharp(composed)
    .extend({ bottom: BAR_H, background: { r: 241, g: 245, b: 249 } })
    .composite([
      { input: barSvg, top: H, left: 0 },
      { input: logo, top: H + Math.round((BAR_H - 36) / 2), left: 28 },
    ])
    .png()
    .toBuffer();

  const srcPath = join(assetsDir, `${outName}-src.png`);
  await sharp(withBar).png().toFile(srcPath);

  const publicName =
    outName.includes("hero")
      ? `blog-thumb-${outName.replace("-hero", "")}-clean.png`
      : `blog-inline-${outName}-clean.png`;

  // Map naming explicitly
  const nameMap = {
    "andap-google-tok-kuen-nai-30-wan-hero": "blog-thumb-andap-google-tok-kuen-nai-30-wan-clean.png",
    "andap-google-tok-kuen-nai-30-wan-causes": "blog-inline-andap-google-tok-kuen-nai-30-wan-causes-clean.png",
    "andap-google-tok-kuen-nai-30-wan-plan": "blog-inline-andap-google-tok-kuen-nai-30-wan-plan-clean.png",
    "andap-google-tok-kuen-nai-30-wan-mistakes": "blog-inline-andap-google-tok-kuen-nai-30-wan-mistakes-clean.png",
    "witi-kae-web-don-core-update-hero": "blog-thumb-witi-kae-web-don-core-update-clean.png",
    "witi-kae-web-don-core-update-confirm": "blog-inline-witi-kae-web-don-core-update-confirm-clean.png",
    "witi-kae-web-don-core-update-playbook": "blog-inline-witi-kae-web-don-core-update-playbook-clean.png",
    "witi-kae-web-don-core-update-donts": "blog-inline-witi-kae-web-don-core-update-donts-clean.png",
  };

  const outFile = nameMap[outName] ?? publicName;
  const outPath = join(outDir, outFile);

  await sharp(withBar)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10 })
    .png({ compressionLevel: 6, effort: 10 })
    .toFile(outPath);

  console.log(`✓ ${outFile}`);
}

const specs = [
  {
    outName: "andap-google-tok-kuen-nai-30-wan-hero",
    badge: "กู้คืนอันดับ · 30 วัน",
    titleLines: ["อันดับ Google ตก", "เช็ควิธีกู้คืนใน 30 วัน"],
    subtitle: "แยกสาเหตุก่อนแก้ · ไม่รีไรต์ทั้งเว็บในสัปดาห์แรก",
    cols: 2,
    cardH: 200,
    startY: 420,
    cards: [
      { title: "ยืนยันว่าตกจริง", description: "ดู trend 7–14 วันใน Search Console\nไม่ใช่อันดับคำเดียวผันผวน" },
      { title: "แยก 5 กลุ่มสาเหตุ", description: "เทคนิค · เนื้อหา · UX · คู่แข่ง\nหรืออัลกอริทึมใหญ่" },
      { title: "72 ชั่วโมงแรก", description: "Stabilize และเก็บหลักฐาน\nก่อนลงมือแก้ใหญ่" },
      { title: "แผนรายสัปดาห์", description: "สัปดาห์ 1–4 มีเป้าหมายชัด\nวัด click ไม่ใช่แค่ screenshot" },
    ],
  },
  {
    outName: "andap-google-tok-kuen-nai-30-wan-causes",
    badge: "วินิจฉัยก่อนแก้",
    titleLines: ["อันดับตกเพราะอะไร?", "แยก 5 กลุ่มก่อนลงมือ"],
    subtitle: "แก้ผิดกลุ่มในสัปดาห์แรก = เสียเวลาทั้งเดือน",
    cols: 1,
    cardH: 118,
    startY: 400,
    cards: [
      { title: "เทคนิค / index", description: "หน้า 404 · noindex · เว็บช้ามาก · sitemap พัง — แก้ก่อนทุกอย่าง" },
      { title: "เนื้อหาหน้าเงิน", description: "ตอบ intent ไม่ครบ · ล้าสมัย · คู่แข่งตอบดีกว่า" },
      { title: "โครงสร้าง / UX", description: "เมนูพาไปหน้าตาย · ฟอร์มเสีย · มือถือใช้ไม่ได้" },
      { title: "คู่แข่งแซง", description: "impression คงที่ แต่ตำแหน่งเฉลี่ยแย่ลงทีละน้อย" },
      { title: "อัลกอริทึมใหญ่", description: "หลายคำตกพร้อมกันหลังวันที่ปล่อยอัปเดต — ไปบท Core Update" },
    ],
  },
  {
    outName: "andap-google-tok-kuen-nai-30-wan-plan",
    badge: "แผนกู้คืน 30 วัน",
    titleLines: ["กู้คืนอันดับ Google", "รายสัปดาห์ที่ 1–4"],
    subtitle: "Stabilize → แก้หน้าเงิน → เสริม trust → วัดผล",
    cols: 2,
    cardH: 210,
    startY: 400,
    cards: [
      { title: "สัปดาห์ 1 — Stabilize", description: "แก้ 404 / index / CTA พัง\nห้ามย้ายโครงสร้างใหญ่" },
      { title: "สัปดาห์ 2 — หน้าเงิน", description: "ตอบ intent ชัด · ใส่ FAQ\nตัดเนื้อหาซ้ำ" },
      { title: "สัปดาห์ 3 — Trust", description: "เสริมความน่าเชื่อถือ\nลด cannibalization" },
      { title: "สัปดาห์ 4 — วัดผล", description: "เทียบ baseline สัปดาห์ 1\nตัดสินใจต่อหรือเปลี่ยนเส้นทาง" },
    ],
  },
  {
    outName: "andap-google-tok-kuen-nai-30-wan-mistakes",
    badge: "ข้อผิดพลาดที่พบบ่อย",
    titleLines: ["อย่าทำตอนอันดับตก", "6 ข้อที่ทำให้แย่ลง"],
    subtitle: "ลงมือใหญ่โดยยังไม่รู้สาเหตุ = วัดผลไม่ได้",
    cols: 2,
    cardH: 200,
    startY: 400,
    cards: [
      { title: "รีไรต์ทั้งเว็บทันที", description: "เปลี่ยนหลายอย่างพร้อมกัน\nไม่รู้ว่าอะไรช่วยหรือทำร้าย" },
      { title: "ซื้อลิงก์จำนวนมาก", description: "เพิ่มความเสี่ยง\nโดยไม่แก้หน้าเงิน" },
      { title: "ลบหน้าที่มี impression", description: "บางหน้าเป็นทางเข้า long-tail\nที่ยังส่งสัญญาณอยู่" },
      { title: "ย้ายโดเมนระหว่างกู้", description: "สร้างปัญหาใหม่\nทับปัญหาเดิม" },
    ],
  },
  {
    outName: "witi-kae-web-don-core-update-hero",
    badge: "Core Update Playbook",
    titleLines: ["วิธีแก้ปัญหาเว็บ", "โดน Core Update"],
    subtitle: "คอนเฟิร์มวันที่ประกาศก่อน — แล้วค่อยปรับคุณภาพทั้งไซต์",
    cols: 2,
    cardH: 200,
    startY: 420,
    cards: [
      { title: "คอนเฟิร์ม 4 ข้อ", description: "ตรงวันที่ประกาศ · กระทบวงกว้าง\nตัดเทคนิค · คู่แข่งขยับ" },
      { title: "ห้ามรีไรต์มั่ว", description: "ช่วง rollout ยังผันผวน\nอย่าเปลี่ยนทั้งเว็บในสัปดาห์แรก" },
      { title: "คุณภาพทั้งไซต์", description: "เสริม / รวม / ตัดหน้า\nไม่ใช่แก้หน้าเดียว" },
      { title: "วัดรอบอัปเดต", description: "มักนานกว่า 30 วัน\nอาจชัดหลังรอบถัดไป" },
    ],
  },
  {
    outName: "witi-kae-web-don-core-update-confirm",
    badge: "ยืนยันก่อนแก้",
    titleLines: ["ใช่ Core Update จริง?", "เช็ก 4 ข้อให้ครบ"],
    subtitle: "ไม่ผ่านขั้นนี้ — กลับไปแผนกู้คืนอันดับทั่วไปก่อน",
    cols: 2,
    cardH: 210,
    startY: 400,
    cards: [
      { title: "ตรงวันที่ประกาศ", description: "เทียบกราฟ Performance\nกับวันที่ Google ปล่อยอัปเดต" },
      { title: "กระทบวงกว้าง", description: "หลายคำและหลายหน้า\nลดพร้อมกัน" },
      { title: "ตัดสาเหตุอื่น", description: "หน้าเงินยัง index · เว็บไม่พัง\nไม่มี manual action" },
      { title: "คู่แข่งขยับ", description: "บางรายได้ บางรายเสีย\nในช่วง rollout เดียวกัน" },
    ],
  },
  {
    outName: "witi-kae-web-don-core-update-playbook",
    badge: "Playbook 5 ชั้น",
    titleLines: ["แก้หลังโดน Core Update", "ทีละชั้น ไม่สุ่ม"],
    subtitle: "ระดับคุณภาพทั้งไซต์ — ไม่ใช่แผนกู้หน้า 404",
    cols: 1,
    cardH: 118,
    startY: 400,
    cards: [
      { title: "ชั้น 1 — รอ rollout ค่อนข้างนิ่ง", description: "เก็บหลักฐานวันเริ่ม–จบ อย่าตัดสินจากวันเดียวกลาง rollout" },
      { title: "ชั้น 2 — ประเมินทั้งไซต์", description: "จัดหน้าเป็นถัง: เสริม / รวม / ตัด" },
      { title: "ชั้น 3 — เสริมหน้าเงิน", description: "มีประโยชน์และน่าเชื่อถือกว่าคู่แข่งที่ยังอยู่" },
      { title: "ชั้น 4 — ลดหน้า thin", description: "ซ้ำ · สแปมคำค้น · ไม่มีประสบการณ์จริง" },
      { title: "ชั้น 5 — วัดรอบอัปเดต", description: "เทียบก่อน–หลัง และเตรียมก่อนรอบถัดไป" },
    ],
  },
  {
    outName: "witi-kae-web-don-core-update-donts",
    badge: "สิ่งที่ห้ามทำ",
    titleLines: ["หลังรู้ว่าโดน Core Update", "อย่าทำ 5 ข้อนี้"],
    subtitle: "เปลี่ยนหลายอย่างพร้อมกันโดยไม่มีสมมติฐาน = วัดไม่ได้",
    cols: 1,
    cardH: 118,
    startY: 400,
    cards: [
      { title: "รีไรต์ทั้งเว็บตอน rollout ยังไม่จบ", description: "กราฟยังผันผวน อ่านผลยาก" },
      { title: "ซื้อแบ็คลิงก์จำนวนมากเพื่อดันกลับ", description: "ไม่แก้คุณภาพ และเพิ่มความเสี่ยง" },
      { title: "ลบหน้าที่มี impression ทั้งก้อน", description: "แยกหน้า thin จริงออกจาก long-tail ที่มีประโยชน์" },
      { title: "ย้ายโดเมนหรือเปลี่ยน CMS ทันที", description: "สร้างปัญหาเทคนิคทับปัญหาคุณภาพ" },
      { title: "รออย่างเดียวโดยไม่ประเมินอะไร", description: "รอบถัดไปไม่ได้ล้างหน้า thin ให้กลายเป็นหน้าดีเอง" },
    ],
  },
];

async function main() {
  for (const p of [logoPath, fontBold, fontReg]) {
    if (!existsSync(p)) throw new Error(`Missing: ${p}`);
  }
  mkdirSync(assetsDir, { recursive: true });
  mkdirSync(outDir, { recursive: true });

  for (const spec of specs) {
    await composeInfographic(spec);
  }

  // manifest for editor
  writeFileSync(
    join(assetsDir, "manifest.json"),
    JSON.stringify(
      specs.map((s) => s.outName),
      null,
      2
    )
  );
  console.log(`\nDone — ${specs.length} images in ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
