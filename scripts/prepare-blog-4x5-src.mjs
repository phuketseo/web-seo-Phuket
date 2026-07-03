/**
 * เตรียม *-src.png บน canvas 4:5 (1080×1278 ก่อน brand bar)
 * 1. trim ขอบว่าง (พื้นหลังขาว/ฟ้าอ่อน)
 * 2. resize ให้พอดีใน safe zone ~93% ของ canvas (ไม่ crop)
 * 3. วางกลางแนวนอน+แนวตั้ง — พื้นหลังสุ่มจากขอบรูป
 */
import sharp from "sharp";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const CANVAS_W = 1080;
const CANVAS_H = 1350;
/** ต้องตรงกับ BAR_H ใน compose-phuketseo-brand-bar.mjs — ไม่เว้น 90px ซ้ำ */
const BRAND_BAR_H = 72;
/** safe zone 92–94% — ให้ margin รอบเนื้อหาสม่ำเสมอทุกรูป */
const CONTENT_SCALE = 0.93;
const TRIM_COLORS = ["#f8fafc", "#ffffff", "#fafafa", "#f1f5f9", "#f5f3ff", "#fffef8"];

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(root, "assets", "blog-portrait");

async function trimMargins(input) {
  let current = Buffer.isBuffer(input) ? input : readFileSync(input);
  for (const bg of TRIM_COLORS) {
    try {
      const next = await sharp(current).trim({ background: bg, threshold: 35 }).toBuffer();
      const before = await sharp(current).metadata();
      const after = await sharp(next).metadata();
      if ((after.width ?? 0) < (before.width ?? 0) || (after.height ?? 0) < (before.height ?? 0)) {
        current = next;
      }
    } catch {
      /* skip */
    }
  }
  try {
    current = await sharp(current).trim({ threshold: 45 }).toBuffer();
  } catch {
    /* keep */
  }
  return current;
}

/** สีพื้นหลังจากขอบรูป — เลือกจุดขอบที่สว่างที่สุด (หลีกเลี่ยงเงา/แถบมืดด้านล่าง) */
async function sampleBg(buf) {
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;
  const ch = info.channels ?? 3;
  const edgePoints = [
    [0, Math.floor(h / 2)],
    [w - 1, Math.floor(h / 2)],
    [Math.floor(w / 2), 0],
    [Math.floor(w / 2), h - 1],
  ];
  const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;
  let best = { r: 255, g: 255, b: 255 };
  let bestLum = -1;
  for (const [x, y] of edgePoints) {
    const i = (y * w + x) * ch;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const l = lum(r, g, b);
    if (l > bestLum) {
      bestLum = l;
      best = { r, g, b };
    }
  }
  return { ...best, alpha: 255 };
}

/** พื้นที่เนื้อหา = 1350 − 72 (brand bar ต่อท้ายใน compose) */
const contentH = CANVAS_H - BRAND_BAR_H;
const maxContentW = Math.round(CANVAS_W * CONTENT_SCALE);
const maxContentH = Math.round(contentH * CONTENT_SCALE);
const files = readdirSync(assetsDir).filter((f) => f.endsWith("-src.png"));

for (const file of files) {
  const input = join(assetsDir, file);
  if (!existsSync(input)) continue;

  const trimmed = await trimMargins(readFileSync(input));

  const scaled = await sharp(trimmed)
    .resize({
      width: maxContentW,
      height: maxContentH,
      fit: "inside",
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer();

  const sm = await sharp(scaled).metadata();
  const rw = sm.width ?? maxContentW;
  const rh = sm.height ?? maxContentH;
  const bg = await sampleBg(scaled);
  const left = Math.round((CANVAS_W - rw) / 2);
  const top = Math.round((contentH - rh) / 2);

  const out = join(assetsDir, file);
  await sharp({
    create: {
      width: CANVAS_W,
      height: contentH,
      channels: 3,
      background: bg,
    },
  })
    .composite([{ input: scaled, left, top }])
    .png()
    .toFile(out);

  console.log(
    `✓ ${file} ${rw}×${rh} @ ${left},${top} in ${CANVAS_W}×${contentH} (${Math.round(CONTENT_SCALE * 100)}% safe zone)`
  );
}

console.log("\nNext: node scripts/compose-phuketseo-brand-bar.mjs", process.argv[2] ?? "assets/blog-portrait");
