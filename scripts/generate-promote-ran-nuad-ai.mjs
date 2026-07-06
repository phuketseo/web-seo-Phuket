/**
 * Generate *-ai.png สำหรับ promote-ran-nuad — maps-cluster style (พื้นขาวล้วน)
 * รันก่อน compose-maps-cluster-frame.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const W = 1920;
const H = 1280;
const FOOTER_RESERVE = 154; // ~12% ว่างล่างให้ frame ใส่โลโก้
const CONTENT_H = H - FOOTER_RESERVE;

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
    <linearGradient id="ttl" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <filter id="card" x="-2%" y="-2%" width="104%" height="104%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.08"/>
    </filter>
  </defs>`;

function base(title, subtitle, body) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    ${GRAD}
    <rect width="${W}" height="${H}" fill="#ffffff"/>
    <text x="72" y="72" font-family="Arial,sans-serif" font-size="46" fill="url(#ttl)" font-weight="bold">${esc(title)}</text>
    <text x="72" y="118" font-family="Arial,sans-serif" font-size="26" fill="#475569">${esc(subtitle)}</text>
    ${body}
  </svg>`;
}

function frostedCard(x, y, w, h, title, lines, accent = "#7c3aed") {
  const body = lines
    .map((l, i) => `<text x="${x + 24}" y="${y + 72 + i * 32}" font-family="Arial,sans-serif" font-size="20" fill="#64748b">${esc(l)}</text>`)
    .join("");
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#ffffff" stroke="#e0e7ff" stroke-width="2" filter="url(#card)"/>
    <rect x="${x}" y="${y}" width="6" height="${h}" rx="3" fill="${accent}"/>
    <text x="${x + 24}" y="${y + 40}" font-family="Arial,sans-serif" font-size="22" fill="#0f172a" font-weight="bold">${esc(title)}</text>
    ${body}`;
}

const specs = [
  {
    file: "promote-ran-nuad-thai-phuket-hero-ai.png",
    svg: base(
      "โปรโมทร้านนวดไทยอย่างไรดี",
      "ลำดับช่องทางที่ทำได้จริง · ภูเก็ต",
      `
      ${frostedCard(72, 150, 420, 150, "1. Google Maps", ["โผล่ near me ก่อน"], "#6366f1")}
      ${frostedCard(520, 150, 420, 150, "2. รีวิวจริง", ["ขอหลังนวดทุกครั้ง"], "#7c3aed")}
      ${frostedCard(968, 150, 420, 150, "3. ราคาชัด", ["เมนู TH + EN"], "#8b5cf6")}
      ${frostedCard(1416, 150, 432, 150, "4. LINE จอง", ["ตอบคิวเร็ว"], "#4f46e5")}
      <rect x="72" y="340" width="1776" height="200" rx="20" fill="#ffffff" stroke="#c7d2fe" stroke-width="2" filter="url(#card)"/>
      <text x="108" y="400" font-family="Arial,sans-serif" font-size="28" fill="#0f172a" font-weight="bold">ทำไม Maps ก่อนโซเชียล?</text>
      <text x="108" y="445" font-family="Arial,sans-serif" font-size="22" fill="#64748b">โซนท่องเที่ยว ป่าตอง · กะตะ · กมลา</text>
      <text x="108" y="500" font-family="Arial,sans-serif" font-size="52" fill="#059669" font-weight="bold">35–50%</text>
      <text x="280" y="500" font-family="Arial,sans-serif" font-size="24" fill="#475569">ของ walk-in มาจาก Google Maps</text>
      `
    ),
  },
  {
    file: "promote-ran-nuad-thai-steps-ai.png",
    svg: base(
      "ลำดับโปรโมท 5 ขั้น",
      "ทำตามลำดับ — อย่าเริ่มจากแอดหรือลดราคา",
      [
        ["ยืนยัน Google Business Profile", "ชื่อ · หมวด · รูปจริง"],
        ["ราคาและเมนูอ่านง่าย", "60 / 90 / 120 นาที · EN"],
        ["ขอรีวิวหลังบริการ", "QR หน้าเคาน์เตอร์"],
        ["LINE และปุ่มโทร", "บน Maps และป้ายหน้าร้าน"],
        ["โปรโมชันและโซเชียล", "เมื่อ listing พร้อมแล้ว"],
      ]
        .map(([t, d], i) => {
          const y = 150 + i * 195;
          return `
          <circle cx="108" cy="${y + 36}" r="28" fill="url(#ttl)"/>
          <text x="${i < 9 ? 100 : 96}" y="${y + 46}" font-family="Arial,sans-serif" font-size="24" fill="#ffffff" font-weight="bold">${i + 1}</text>
          <rect x="155" y="${y}" width="1693" height="130" rx="16" fill="#ffffff" stroke="#e0e7ff" stroke-width="2" filter="url(#card)"/>
          <text x="185" y="${y + 44}" font-family="Arial,sans-serif" font-size="24" fill="#0f172a" font-weight="bold">${esc(t)}</text>
          <text x="185" y="${y + 82}" font-family="Arial,sans-serif" font-size="20" fill="#64748b">${esc(d)}</text>`;
        })
        .join("")
    ),
  },
  {
    file: "promote-ran-nuad-thai-channels-ai.png",
    svg: base(
      "ช่องทางที่ได้ลูกค้าจริง",
      "ร้านนวดในโซนท่องเที่ยวภูเก็ต",
      [
        ["Google Maps / near me", 48, "#7c3aed"],
        ["เดินผ่าน / ป้ายหน้าร้าน", 28, "#6366f1"],
        ["โรงแรม / ทัวร์", 18, "#8b5cf6"],
        ["ลูกค้าซ้ำ / LINE", 22, "#4f46e5"],
      ]
        .map(([label, pct, color], i) => {
          const y = 160 + i * 200;
          const barW = Math.round((pct / 50) * 1300);
          return `
          <text x="72" y="${y}" font-family="Arial,sans-serif" font-size="26" fill="#0f172a" font-weight="bold">${esc(label)}</text>
          <rect x="72" y="${y + 20}" width="1500" height="32" rx="16" fill="#f1f5f9"/>
          <rect x="72" y="${y + 20}" width="${barW}" height="32" rx="16" fill="${color}"/>
          <text x="${72 + barW + 16}" y="${y + 44}" font-family="Arial,sans-serif" font-size="26" fill="${color}" font-weight="bold">${pct}%</text>`;
        })
        .join("") +
        `<rect x="72" y="920" width="1776" height="90" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
         <text x="108" y="975" font-family="Arial,sans-serif" font-size="22" fill="#166534">Maps มักนำหน้า Facebook ~3:1 ในร้าน 2–4 เตียงโซนท่องเที่ยว</text>`
    ),
  },
  {
    file: "promote-ran-nuad-thai-keywords-ai.png",
    svg: base(
      "ลูกค้าค้นหาคำว่าอะไร",
      "แยก intent นักท่องเที่ยว vs คนท้องถิ่น",
      `
      ${frostedCard(72, 150, 860, 380, "นักท่องเที่ยว", [
        "thai massage patong / kata",
        "spa near me",
        "massage 1 hour price",
        "traditional thai massage",
      ], "#06b6d4")}
      ${frostedCard(988, 150, 860, 380, "คนท้องถิ่น / expat", [
        "นวดไทย ภูเก็ต · ป่าตอง",
        "massage กะตะ · ตัวเมือง",
        "ร้านนวด ใกล้ฉัน",
        "นวดแผนไทย ราคา",
      ], "#7c3aed")}
      <rect x="72" y="560" width="1776" height="100" rx="16" fill="#fff7ed" stroke="#fed7aa" stroke-width="2"/>
      <text x="108" y="620" font-family="Arial,sans-serif" font-size="22" fill="#9a3412">ใส่คำค้นโซนจริงใน GBP — ป่าตอง กะตะ กมลา ไม่แข่งแค่คำว่า ภูเก็ต</text>
      `
    ),
  },
  {
    file: "promote-ran-nuad-thai-compare-ai.png",
    svg: base(
      "เปรียบเทียบแนวทางโปรโมท",
      "ทำถูกลำดับ vs สิ่งที่มักพลาด",
      `
      <rect x="72" y="150" width="1776" height="50" rx="12" fill="#f8fafc" stroke="#e0e7ff" stroke-width="2"/>
      <text x="100" y="184" font-family="Arial,sans-serif" font-size="20" fill="#6366f1" font-weight="bold">ปัจจัยการโปรโมท</text>
      <text x="620" y="184" font-family="Arial,sans-serif" font-size="20" fill="#6366f1" font-weight="bold">แนวทางที่ถูกต้อง</text>
      <text x="1180" y="184" font-family="Arial,sans-serif" font-size="20" fill="#6366f1" font-weight="bold">ข้อผิดพลาดที่มักเจอ</text>
      ${[
        ["จุดเริ่ม", "Maps + รีวิวก่อน", "ลดราคา / แอดก่อน"],
        ["สิ่งที่ขาย", "ความไว้วางใจ", "แค่ราคาถูก"],
        ["ช่องทางหลัก", "Maps 35–50%", "เฟสบุ๊กอย่างเดียว"],
        ["เห็นสัญญาณ", "4–8 สัปดาห์", "คาดหวังวันเดียว"],
        ["งบเริ่มต้น", "ทำ listing เองได้", "จ่ายแอดไม่มีรีวิว"],
      ]
        .map(([f, g, b], i) => {
          const y = 220 + i * 130;
          return `
          <rect x="72" y="${y}" width="1776" height="110" rx="14" fill="${i % 2 ? "#ffffff" : "#fafafa"}" stroke="#f1f5f9" stroke-width="1"/>
          <text x="100" y="${y + 48}" font-family="Arial,sans-serif" font-size="22" fill="#0f172a" font-weight="bold">${esc(f)}</text>
          <text x="620" y="${y + 48}" font-family="Arial,sans-serif" font-size="20" fill="#059669" font-weight="600">${esc(g)}</text>
          <text x="1180" y="${y + 48}" font-family="Arial,sans-serif" font-size="20" fill="#dc2626">${esc(b)}</text>`;
        })
        .join("")}
      `
    ),
  },
  {
    file: "promote-ran-nuad-thai-mistakes-ai.png",
    svg: base(
      "ข้อผิดพลาดที่พบบ่อย",
      "และสิ่งที่ควรทำก่อนโปรโมชัน",
      `
      <rect x="72" y="150" width="860" height="480" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
      <text x="108" y="200" font-family="Arial,sans-serif" font-size="28" fill="#dc2626" font-weight="bold">ห้าม / มักพลาด</text>
      ${["ลดราคาก่อนมีรีวิว", "หมวด GBP ผิด", "รูปสต็อกไม่ตรง", "NAP ไม่ตรง", "ยิงแอดก่อน listing"]
        .map((t, i) => `<text x="108" y="${260 + i * 48}" font-family="Arial,sans-serif" font-size="22" fill="#7f1d1d">✕ ${esc(t)}</text>`)
        .join("")}
      <rect x="988" y="150" width="860" height="480" rx="20" fill="#ecfdf5" stroke="#86efac" stroke-width="2"/>
      <text x="1024" y="200" font-family="Arial,sans-serif" font-size="28" fill="#059669" font-weight="bold">ทำก่อนโปรโมชัน</text>
      ${["GBP ครบ + ยืนยัน", "ราคาชัด TH/EN", "ขอรีวิว QR", "ตอบ LINE 1 ชม.", "อัปเดตรูป 2–3 เดือน"]
        .map((t, i) => `<text x="1024" y="${260 + i * 48}" font-family="Arial,sans-serif" font-size="22" fill="#14532d">✓ ${esc(t)}</text>`)
        .join("")}
      `
    ),
  },
];

mkdirSync(outDir, { recursive: true });

for (const spec of specs) {
  const out = join(outDir, spec.file);
  await sharp(Buffer.from(spec.svg)).png().toFile(out);
  console.log(`✓ ${spec.file}`);
}

console.log("\nNext:");
console.log("  node scripts/compose-maps-cluster-frame.mjs assets/promote-ran-nuad-thai");
console.log("  node scripts/upscale-promote-ran-nuad-images.mjs");
