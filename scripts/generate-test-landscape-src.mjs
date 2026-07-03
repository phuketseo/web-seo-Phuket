/**
 * สร้าง landscape *-src.png จำลอง (1920×1280) สำหรับทดสอบ / placeholder
 * Usage: node scripts/generate-test-landscape-src.mjs assets/google-maps-cluster
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const W = 1920;
const H = 1280;

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSvg({ title, subtitle, rows, accent = "#6d28d9" }) {
  const rowSvg = rows
    .map((row, i) => {
      const x = 80 + (i % 2) * 920;
      const y = 320 + Math.floor(i / 2) * 280;
      return `
      <rect x="${x}" y="${y}" width="880" height="220" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="${x}" y="${y}" width="10" height="220" rx="4" fill="${accent}"/>
      <text x="${x + 36}" y="${y + 72}" font-family="Arial,sans-serif" font-size="36" fill="#0f172a" font-weight="bold">${esc(row)}</text>
    `;
    })
    .join("");

  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hdr" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#f8fafc"/>
  <rect x="0" y="0" width="${W}" height="240" fill="url(#hdr)"/>
  <text x="80" y="110" font-family="Arial,sans-serif" font-size="56" fill="#ffffff" font-weight="bold">${esc(title)}</text>
  <text x="80" y="175" font-family="Arial,sans-serif" font-size="30" fill="#e9d5ff">${esc(subtitle)}</text>
  ${rowSvg}
</svg>`);
}

const specs = [
  {
    file: "dan-andap-google-maps-phuket-hero-src.png",
    title: "ดันอันดับ Google Maps",
    subtitle: "ภูเก็ต — ให้ธุรกิจโผล่ต้นๆ",
    rows: ["GBP ครบ", "รีวิวจริง", "รูปอัปเดต", "คำค้นโซน"],
    accent: "#7c3aed",
  },
  {
    file: "dan-andap-google-maps-phuket-factors-src.png",
    title: "Google ดูอะไรบน Maps",
    subtitle: "ตรงคำค้น · ใกล้ · น่าเชื่อถือ",
    rows: ["ตรงกับคำค้น", "ระยะทาง", "รีวิวและรูป", "โพสต์สดใหม่"],
    accent: "#059669",
  },
  {
    file: "dan-andap-google-maps-phuket-steps-src.png",
    title: "5 วิธีดันอันดับ",
    subtitle: "Google Maps ภูเก็ต",
    rows: ["ยืนยันตัวตน", "หมวดถูก", "ขอรีวิว", "อัปเดตรูป"],
    accent: "#6366f1",
  },
  {
    file: "dan-andap-google-maps-phuket-zones-src.png",
    title: "โซนภูเก็ต",
    subtitle: "ป่าตอง กะตะ ตัวเมือง ถลาง",
    rows: ["ป่าตอง", "กะตะ", "ตัวเมือง", "ถลาง กมลา"],
    accent: "#7c3aed",
  },
  {
    file: "google-maps-mai-tid-phuket-hero-src.png",
    title: "Google Maps ไม่ติด",
    subtitle: "วิธีแก้ให้ธุรกิจโผล่",
    rows: ["ไม่โผล่ใน 3-Pack", "อันดับต่ำ", "ไม่มีรีวิว", "ปักหมุดผิด"],
    accent: "#dc2626",
  },
  {
    file: "google-maps-mai-tid-phuket-symptoms-src.png",
    title: "อาการที่พบบ่อย",
    subtitle: "Maps ไม่ติด",
    rows: ["ค้นชื่อร้านไม่เจอ", "คู่แข่งโผล่ก่อน", "โทรจาก Maps น้อย", "รีวิวหยุดนิ่ง"],
    accent: "#f59e0b",
  },
  {
    file: "google-maps-mai-tid-phuket-causes-src.png",
    title: "สาเหตุหลัก",
    subtitle: "ทำไมไม่ติด Maps",
    rows: ["GBP ไม่ยืนยัน", "NAP ไม่ตรง", "หมวดผิด", "listing ซ้ำ"],
    accent: "#dc2626",
  },
  {
    file: "google-maps-mai-tid-phuket-fix-src.png",
    title: "เช็กลิสต์แก้ไข",
    subtitle: "ก่อนจ้างดันอันดับ",
    rows: ["แก้ปักหมุด", "รวม listing", "รูป 10+", "ตอบรีวิว"],
    accent: "#059669",
  },
  {
    file: "rap-pak-mut-thurakij-phuket-hero-src.png",
    title: "รับปักหมุดธุรกิจ",
    subtitle: "Google Maps ภูเก็ต",
    rows: ["ยืนยันตำแหน่ง", "แก้หมุดผิด", "โพสต์การ์ด", "โซนบริการ"],
    accent: "#6366f1",
  },
  {
    file: "rap-pak-mut-thurakij-phuket-wrong-src.png",
    title: "ปักหมุดผิด",
    subtitle: "ผลกระทบต่อ Maps",
    rows: ["ลูกค้าหลง", "รีวิวลบ", "ไม่ติดอันดับ", "Google ระงับ"],
    accent: "#dc2626",
  },
  {
    file: "rap-pak-mut-thurakij-phuket-verify-src.png",
    title: "ขั้นตอนยืนยัน",
    subtitle: "Google Business Profile",
    rows: ["ขอรหัสทางไปรษณีย์", "ยืนยันทางโทร", "อีเมล", "วิดีโอ (บางเคส)"],
    accent: "#059669",
  },
  {
    file: "rap-pak-mut-thurakij-phuket-zones-src.png",
    title: "โซนบริการภูเก็ต",
    subtitle: "ปักหมุดตรงทำเลจริง",
    rows: ["ป่าตอง", "ตัวเมือง", "ถลาง", "กะทู้ กมลา"],
    accent: "#7c3aed",
  },
];

const outDir = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "google-maps-cluster");

mkdirSync(outDir, { recursive: true });

for (const spec of specs) {
  const out = join(outDir, spec.file);
  await sharp(buildSvg(spec)).png().toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`✓ ${spec.file} ${meta.width}×${meta.height}`);
}

console.log("\nNext: node scripts/upscale-google-maps-cluster-images.mjs");
