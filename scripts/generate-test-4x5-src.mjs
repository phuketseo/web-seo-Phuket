/**
 * สร้าง *-src.png จำลอง AI full-bleed (ชิดขอบ canvas) สำหรับทดสอบ pipeline 4:5
 * Usage: node scripts/generate-test-4x5-src.mjs assets/blog-4x5-bakery
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const W = 1080;
const H = 1350;

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** infographic ชิดขอบซ้าย-ขวา-บน (จำลองปัญหา AI full bleed) */
function buildSvg({ title, subtitle, rows, accent = "#6d28d9" }) {
  const rowSvg = rows
    .map((row, i) => {
      const y = 190 + i * 240;
      const bg = i % 2 === 0 ? "#ffffff" : "#f8fafc";
      return `
      <rect x="0" y="${y}" width="${W}" height="220" fill="${bg}" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="0" y="${y}" width="12" height="220" fill="${accent}"/>
      <text x="48" y="${y + 72}" font-family="Arial,sans-serif" font-size="40" fill="#0f172a" font-weight="bold">${esc(row)}</text>
      <text x="48" y="${y + 120}" font-family="Arial,sans-serif" font-size="24" fill="#64748b">${esc(subtitle)}</text>
    `;
    })
    .join("");

  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#faf5ff"/>
  <rect x="0" y="0" width="${W}" height="170" fill="${accent}"/>
  <text x="24" y="78" font-family="Arial,sans-serif" font-size="52" fill="#ffffff" font-weight="bold">${esc(title)}</text>
  <text x="24" y="130" font-family="Arial,sans-serif" font-size="28" fill="#ede9fe">${esc(subtitle)}</text>
  ${rowSvg}
  <rect x="0" y="${H - 80}" width="${W}" height="80" fill="#333333"/>
</svg>`);
}

const bakerySpecs = [
  {
    file: "bakery-fb-4x5-src.png",
    title: "ร้านเบเกอรี่ภูเก็ต",
    subtitle: "หาลูกค้าจาก Google Maps",
    rows: ["ค้นหา near me", "รูปเค้กจริง", "รีวิวมีข้อความ"],
    accent: "#7c3aed",
  },
  {
    file: "bakery-4x5-why-src.png",
    title: "ทำไมต้องทำ Maps",
    subtitle: "ร้านเบเกอรี่ภูเก็ต",
    rows: ["ลูกค้าค้นก่อนซื้อ", "รูปสินค้าจริง", "โซนป่าตอง ตัวเมือง", "เวลาเปิดตรง"],
    accent: "#6d28d9",
  },
  {
    file: "bakery-4x5-gbp-src.png",
    title: "ตั้งค่า GBP 5 ขั้น",
    subtitle: "ร้านเบเกอรี่ / Bakery",
    rows: ["หมวดร้านถูกต้อง", "ที่อยู่และแผนที่", "เวลาเปิด-ปิด", "รูปเค้กและหน้าร้าน", "ลิงก์โทรหรือจอง"],
    accent: "#059669",
  },
  {
    file: "bakery-4x5-reviews-src.png",
    title: "รีวิวบน Maps",
    subtitle: "ลูกค้าเบเกอรี่ดูบนมือถือ",
    rows: ["รีวิวมีรูปเค้ก", "ตอบภายใน 48 ชม.", "ขอรีวิวหลังซื้อ", "ดาวพร้อมข้อความ"],
    accent: "#7c3aed",
  },
  {
    file: "bakery-4x5-mistakes-src.png",
    title: "ข้อผิดพลาดที่พบบ่อย",
    subtitle: "Quick Wins เบเกอรี่",
    rows: ["ราคาไม่ตรงหน้าร้าน", "รูปสต็อกเก่า", "ไม่ตอบ LINE", "ยิงแอดก่อน listing"],
    accent: "#dc2626",
  },
];

const outDir = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "blog-4x5-bakery");

mkdirSync(outDir, { recursive: true });

for (const spec of bakerySpecs) {
  const svg = buildSvg(spec);
  const out = join(outDir, spec.file);
  await sharp(svg).png().toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`✓ ${spec.file} ${meta.width}×${meta.height} (full-bleed test)`);
}

console.log(`\nNext:`);
console.log(`  node scripts/prepare-blog-4x5-src.mjs ${process.argv[2] ?? "assets/blog-4x5-bakery"}`);
