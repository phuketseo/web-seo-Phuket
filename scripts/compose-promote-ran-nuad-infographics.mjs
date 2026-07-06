/**
 * @deprecated ใช้ maps-cluster AI briefs แทน — ดู scripts/maps-cluster-image-briefs.mjs
 * Premium Smooth Purple infographics — /blog/promote-ran-nuad-thai-phuket
 * รูปเฉพาะบทความนี้ ห้าม reuse key จากบทความอื่น
 *
 * 1. node scripts/compose-promote-ran-nuad-infographics.mjs
 * 2. node scripts/compose-maps-cluster-frame.mjs assets/promote-ran-nuad-thai
 * 3. node scripts/upscale-promote-ran-nuad-images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const W = 1920;
const H = 1280;
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "promote-ran-nuad-thai");

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const GRAD = `
  <defs>
    <linearGradient id="hdr" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="ttl" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <filter id="sh" x="-4%" y="-4%" width="108%" height="108%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#6366f1" flood-opacity="0.12"/>
    </filter>
  </defs>`;

function header(title, subtitle, badge) {
  const badgeSvg = badge
    ? `<rect x="80" y="188" width="${badge.length * 18 + 40}" height="36" rx="18" fill="rgba(255,255,255,0.2)"/>
       <text x="100" y="212" font-family="Arial,sans-serif" font-size="20" fill="#ffffff" font-weight="600">${esc(badge)}</text>`
    : "";
  return `
  <rect width="${W}" height="260" fill="url(#hdr)"/>
  <text x="80" y="95" font-family="Arial,sans-serif" font-size="52" fill="#ffffff" font-weight="bold">${esc(title)}</text>
  <text x="80" y="155" font-family="Arial,sans-serif" font-size="28" fill="#e0e7ff">${esc(subtitle)}</text>
  ${badgeSvg}`;
}

function card(x, y, w, h, accent, title, lines) {
  const body = lines
    .map((line, i) => `<text x="${x + 28}" y="${y + 68 + i * 34}" font-family="Arial,sans-serif" font-size="22" fill="#475569">${esc(line)}</text>`)
    .join("");
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#sh)"/>
  <rect x="${x}" y="${y}" width="8" height="${h}" rx="4" fill="${accent}"/>
  <text x="${x + 28}" y="${y + 38}" font-family="Arial,sans-serif" font-size="24" fill="#0f172a" font-weight="bold">${esc(title)}</text>
  ${body}`;
}

const specs = [
  {
    file: "promote-ran-nuad-thai-phuket-hero-ai.png",
    svg: () => `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      ${GRAD}
      <rect width="${W}" height="${H}" fill="#f8fafc"/>
      ${header("โปรโมทร้านนวดไทยอย่างไรดี", "ลำดับช่องทางที่ทำได้จริง · ภูเก็ต", "Industry Guide")}
      ${card(80, 300, 400, 200, "#7c3aed", "1. Google Maps", ["ยืนยัน GBP ครบ", "โผล่ near me ก่อน"])}
      ${card(520, 300, 400, 200, "#6366f1", "2. รีวิวจริง", ["ขอหลังนวดทุกครั้ง", "ตอบภายใน 48 ชม."])}
      ${card(960, 300, 400, 200, "#8b5cf6", "3. ราคาชัด", ["เมนู TH + EN", "ไม่ให้ลูกค้าถามซ้ำ"])}
      ${card(1400, 300, 440, 200, "#4f46e5", "4. LINE จอง", ["ปุ่มโทรบน Maps", "ตอบคิวเร็ว"])}
      <rect x="80" y="560" width="1760" height="280" rx="24" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" filter="url(#sh)"/>
      <text x="120" y="620" font-family="Arial,sans-serif" font-size="32" fill="url(#ttl)" font-weight="bold">ทำไม Maps ก่อนโซเชียล?</text>
      <text x="120" y="670" font-family="Arial,sans-serif" font-size="24" fill="#334155">โซนท่องเที่ยว ป่าตอง · กะตะ · กมลา — ลูกค้าใหม่จาก Google Maps</text>
      <text x="120" y="720" font-family="Arial,sans-serif" font-size="56" fill="#059669" font-weight="bold">35–50%</text>
      <text x="340" y="720" font-family="Arial,sans-serif" font-size="26" fill="#475569">ของ walk-in มาจากการค้นบนแผนที่ก่อนเข้าร้าน</text>
      <circle cx="1680" cy="700" r="80" fill="#ede9fe"/>
      <text x="1640" y="710" font-family="Arial,sans-serif" font-size="48" fill="#7c3aed">📍</text>
    </svg>`,
  },
  {
    file: "promote-ran-nuad-thai-steps-ai.png",
    svg: () => {
      const steps = [
        ["ยืนยัน Google Business Profile", "ชื่อ · ที่อยู่ · เบอร์ · หมวดนวด/สปา · รูปจริง"],
        ["ราคาและเมนูอ่านง่าย", "แสดง 60 / 90 / 120 นาที · ภาษาอังกฤษสำหรับนักท่องเที่ยว"],
        ["ขอรีวิวหลังบริการ", "QR หน้าเคาน์เตอร์ · ตอบทุกรีวิวภายใน 2 วัน"],
        ["LINE และปุ่มโทร", "ลิงก์บน Maps · ป้ายหน้าร้าน · ตอบภายใน 1 ชม."],
        ["โปรโมชันและโซเชียล", "ทำเมื่อ listing น่าเชื่อถือแล้ว · ไม่ลดราคาก่อนมีรีวิว"],
      ];
      const stepSvg = steps
        .map(([t, d], i) => {
          const y = 290 + i * 185;
          return `
          <circle cx="130" cy="${y + 40}" r="32" fill="url(#hdr)"/>
          <text x="${130 - (i > 8 ? 12 : 8)}" y="${y + 50}" font-family="Arial,sans-serif" font-size="28" fill="#ffffff" font-weight="bold">${i + 1}</text>
          <rect x="190" y="${y}" width="1650" height="150" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#sh)"/>
          <text x="220" y="${y + 48}" font-family="Arial,sans-serif" font-size="26" fill="#0f172a" font-weight="bold">${esc(t)}</text>
          <text x="220" y="${y + 88}" font-family="Arial,sans-serif" font-size="22" fill="#64748b">${esc(d)}</text>`;
        })
        .join("");
      return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        ${GRAD}
        <rect width="${W}" height="${H}" fill="#f8fafc"/>
        ${header("ลำดับโปรโมท 5 ขั้น", "ทำตามลำดับ — อย่าเริ่มจากแอดหรือลดราคา", "")}
        ${stepSvg}
      </svg>`;
    },
  },
  {
    file: "promote-ran-nuad-thai-channels-ai.png",
    svg: () => `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      ${GRAD}
      <rect width="${W}" height="${H}" fill="#f8fafc"/>
      ${header("ช่องทางที่ได้ลูกค้าจริง", "ร้านนวดในโซนท่องเที่ยวภูเก็ต", "")}
      ${[
        ["Google Maps / near me", 48, "#7c3aed", "35–50%"],
        ["เดินผ่าน / ป้ายหน้าร้าน", 28, "#6366f1", "20–35%"],
        ["โรงแรม / ทัวร์ / ไกด์", 18, "#8b5cf6", "10–25%"],
        ["ลูกค้าซ้ำ / LINE", 22, "#4f46e5", "15–30%"],
      ]
        .map(([label, pct, color, range], i) => {
          const y = 310 + i * 210;
          const barW = Math.round((pct / 50) * 1200);
          return `
          <text x="80" y="${y}" font-family="Arial,sans-serif" font-size="26" fill="#0f172a" font-weight="bold">${esc(label)}</text>
          <text x="80" y="${y + 36}" font-family="Arial,sans-serif" font-size="22" fill="#64748b">ช่วงสัดส่วนโดยประมาณ ${esc(range)}</text>
          <rect x="80" y="${y + 55}" width="1400" height="36" rx="18" fill="#e2e8f0"/>
          <rect x="80" y="${y + 55}" width="${barW}" height="36" rx="18" fill="${color}"/>
          <text x="${80 + barW + 20}" y="${y + 82}" font-family="Arial,sans-serif" font-size="28" fill="${color}" font-weight="bold">${pct}%</text>`;
        })
        .join("")}
      <rect x="80" y="1120" width="1760" height="100" rx="16" fill="#ecfdf5" stroke="#86efac" stroke-width="2"/>
      <text x="120" y="1180" font-family="Arial,sans-serif" font-size="24" fill="#166534">Insight: Maps มักนำหน้า Facebook ประมาณ 3:1 ในร้าน 2–4 เตียงที่เราดูแลในโซนท่องเที่ยว</text>
    </svg>`,
  },
  {
    file: "promote-ran-nuad-thai-keywords-ai.png",
    svg: () => `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      ${GRAD}
      <rect width="${W}" height="${H}" fill="#f8fafc"/>
      ${header("ลูกค้าค้นหาคำว่าอะไร", "แยก intent นักท่องเที่ยว vs คนท้องถิ่น", "")}
      ${card(80, 300, 860, 420, "#06b6d4", "นักท่องเที่ยว", [
        "thai massage patong / kata",
        "spa near me · traditional massage",
        "massage 1 hour price phuket",
        "best thai massage beach road",
      ])}
      ${card(980, 300, 860, 420, "#7c3aed", "คนท้องถิ่น / expat", [
        "นวดไทย ภูเก็ต · นวดไทย ป่าตอง",
        "massage กะตะ · massage ตัวเมือง",
        "ร้านนวด ใกล้ฉัน",
        "นวดแผนไทย ราคา · จองคิว LINE",
      ])}
      <rect x="80" y="760" width="1760" height="120" rx="20" fill="#fff7ed" stroke="#fdba74" stroke-width="2"/>
      <text x="120" y="820" font-family="Arial,sans-serif" font-size="24" fill="#9a3412">ใส่คำค้นโซนจริงใน GBP — ป่าตอง กะตะ กมลา ตัวเมือง ถลาง ไม่แข่งแค่คำว่า "ภูเก็ต" ทั้งจังหวัด</text>
    </svg>`,
  },
  {
    file: "promote-ran-nuad-thai-compare-ai.png",
    svg: () => {
      const rows = [
        ["จุดเริ่ม", "Maps + รีวิวก่อน", "ลดราคา / แอดก่อน"],
        ["สิ่งที่ขาย", "ความไว้วางใจ", "แค่ราคาถูก"],
        ["ช่องทางหลัก", "Maps 35–50%", "เฟสบุ๊กอย่างเดียว"],
        ["เห็นสัญญาณ", "4–8 สัปดาห์", "คาดหวังวันเดียว"],
        ["งบเริ่มต้น", "ทำ listing เองได้", "จ่ายแอดไม่มีรีวิว"],
      ];
      const colX = [80, 520, 1080];
      const headerRow = `
        <rect x="80" y="300" width="1760" height="56" rx="12" fill="url(#hdr)"/>
        <text x="110" y="338" font-family="Arial,sans-serif" font-size="22" fill="#ffffff" font-weight="bold">ปัจจัยการโปรโมท</text>
        <text x="550" y="338" font-family="Arial,sans-serif" font-size="22" fill="#ffffff" font-weight="bold">แนวทางที่ถูกต้อง</text>
        <text x="1110" y="338" font-family="Arial,sans-serif" font-size="22" fill="#ffffff" font-weight="bold">ข้อผิดพลาดที่มักเจอ</text>`;
      const dataRows = rows
        .map(([f, good, bad], i) => {
          const y = 380 + i * 150;
          return `
          <rect x="80" y="${y}" width="1760" height="130" rx="14" fill="${i % 2 ? "#ffffff" : "#f8fafc"}" stroke="#e2e8f0" stroke-width="1"/>
          <text x="110" y="${y + 52}" font-family="Arial,sans-serif" font-size="24" fill="#0f172a" font-weight="bold">${esc(f)}</text>
          <text x="550" y="${y + 52}" font-family="Arial,sans-serif" font-size="22" fill="#059669" font-weight="600">${esc(good)}</text>
          <text x="1110" y="${y + 52}" font-family="Arial,sans-serif" font-size="22" fill="#dc2626">${esc(bad)}</text>`;
        })
        .join("");
      return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
        ${GRAD}
        <rect width="${W}" height="${H}" fill="#f8fafc"/>
        ${header("เปรียบเทียบแนวทางโปรโมท", "ทำถูกลำดับ vs สิ่งที่มักพลาด", "")}
        ${headerRow}
        ${dataRows}
      </svg>`;
    },
  },
  {
    file: "promote-ran-nuad-thai-mistakes-ai.png",
    svg: () => `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      ${GRAD}
      <rect width="${W}" height="${H}" fill="#f8fafc"/>
      ${header("ข้อผิดพลาดที่พบบ่อย", "และสิ่งที่ควรทำก่อนโปรโมชัน", "")}
      <rect x="80" y="300" width="860" height="520" rx="24" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
      <text x="120" y="360" font-family="Arial,sans-serif" font-size="30" fill="#dc2626" font-weight="bold">ห้าม / มักพลาด</text>
      ${[
        "ลดราคาก่อนมีรีวิว",
        "หมวด GBP ผิดกลุ่ม",
        "รูปสต็อกไม่ตรงจริง",
        "NAP ไม่ตรงทุกช่องทาง",
        "ยิงแอดก่อน listing พร้อม",
      ]
        .map((t, i) => `<text x="120" y="${420 + i * 52}" font-family="Arial,sans-serif" font-size="24" fill="#7f1d1d">✕ ${esc(t)}</text>`)
        .join("")}
      <rect x="980" y="300" width="860" height="520" rx="24" fill="#ecfdf5" stroke="#86efac" stroke-width="2"/>
      <text x="1020" y="360" font-family="Arial,sans-serif" font-size="30" fill="#059669" font-weight="bold">ทำก่อนโปรโมชัน</text>
      ${[
        "GBP ครบ + ยืนยันแล้ว",
        "ราคาชัด TH/EN",
        "ขอรีวิว QR หน้าร้าน",
        "ตอบ LINE ภายใน 1 ชม.",
        "อัปเดตรูปทุก 2–3 เดือน",
      ]
        .map((t, i) => `<text x="1020" y="${420 + i * 52}" font-family="Arial,sans-serif" font-size="24" fill="#14532d">✓ ${esc(t)}</text>`)
        .join("")}
    </svg>`,
  },
];

mkdirSync(outDir, { recursive: true });

for (const spec of specs) {
  const out = join(outDir, spec.file);
  await sharp(Buffer.from(spec.svg())).png().toFile(out);
  console.log(`✓ ${spec.file}`);
}

console.log("\nNext:");
console.log("  node scripts/compose-maps-cluster-frame.mjs assets/promote-ran-nuad-thai");
console.log("  node scripts/upscale-promote-ran-nuad-images.mjs");
