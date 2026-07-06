/**
 * @deprecated Fallback only — ใช้ Gemini Image pipeline แทน:
 *   node scripts/promote-ran-nuad-smooth-purple-briefs.mjs
 *   GEMINI_API_KEY=... node scripts/generate-gemini-smooth-purple.mjs assets/promote-ran-nuad-thai
 * Smooth Purple ranking-recovery layout — /blog/promote-ran-nuad-thai-phuket
import sharp from "sharp";
import { readFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const W = 2304;
const H = 1536;
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "promote-ran-nuad-thai");
const promptsPath = join(outDir, "prompts.json");

const ICON_COLORS = ["#7c3aed", "#f97316", "#22c55e", "#3b82f6"];
const ICON_GLYPHS = ["📍", "⭐", "💰", "💬"];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

function defs() {
  return `
  <defs>
    <linearGradient id="headGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#7c3aed"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
    <filter id="cardShadow" x="-8%" y="-8%" width="116%" height="116%">
      <feDropShadow dx="0" dy="12" stdDeviation="24" flood-color="#6366f1" flood-opacity="0.12"/>
    </filter>
    <filter id="mockShadow" x="-6%" y="-6%" width="112%" height="112%">
      <feDropShadow dx="0" dy="20" stdDeviation="32" flood-color="#1e3a8a" flood-opacity="0.15"/>
    </filter>
  </defs>`;
}

function meshBackground() {
  return `
  <rect width="${W}" height="${H}" fill="#f8fafc"/>
  <ellipse cx="400" cy="200" rx="520" ry="380" fill="#06b6d4" opacity="0.14"/>
  <ellipse cx="1800" cy="300" rx="600" ry="420" fill="#6366f1" opacity="0.16"/>
  <ellipse cx="1200" cy="1100" rx="700" ry="480" fill="#8b5cf6" opacity="0.12"/>
  <ellipse cx="2000" cy="900" rx="400" ry="300" fill="#3b82f6" opacity="0.10"/>`;
}

function headerBlock(spec) {
  const badgeW = (spec.badge?.length ?? 8) * 22 + 56;
  const primaryLines = wrapText(spec.headlinePrimary, 18);
  const primaryY = primaryLines.length > 1 ? 108 : 118;
  const primarySvg = primaryLines
    .map((l, i) => `<text x="72" y="${primaryY + i * 62}" font-family="Arial,sans-serif" font-size="54" fill="url(#headGrad)" font-weight="bold">${esc(l)}</text>`)
    .join("");
  const secondary = spec.headlineSecondary
    ? `<text x="72" y="${primaryY + primaryLines.length * 62 + 24}" font-family="Arial,sans-serif" font-size="30" fill="#1e3a8a" font-weight="600">${esc(spec.headlineSecondary)}</text>`
    : "";
  const badge = spec.badge
    ? `<rect x="72" y="48" width="${badgeW}" height="40" rx="20" fill="url(#badgeGrad)" opacity="0.92"/>
       <text x="96" y="76" font-family="Arial,sans-serif" font-size="20" fill="#ffffff" font-weight="600">✦ ${esc(spec.badge)}</text>`
    : "";
  return `${badge}${primarySvg}${secondary}`;
}

function sidebarCards(items) {
  const cardW = 540;
  const cardH = 248;
  const gap = 22;
  const startY = 340;
  return items
    .slice(0, 4)
    .map((item, i) => {
      const y = startY + i * (cardH + gap);
      const color = ICON_COLORS[i % ICON_COLORS.length];
      const glyph = ICON_GLYPHS[i % ICON_GLYPHS.length];
      const descLines = wrapText(item.description, 28);
      const descSvg = descLines
        .map((l, j) => `<text x="196" y="${y + 118 + j * 30}" font-family="Arial,sans-serif" font-size="22" fill="#64748b">${esc(l)}</text>`)
        .join("");
      return `
      <rect x="72" y="${y}" width="${cardW}" height="${cardH}" rx="24" fill="rgba(255,255,255,0.92)" stroke="rgba(255,255,255,0.8)" stroke-width="2" filter="url(#cardShadow)"/>
      <circle cx="148" cy="${y + cardH / 2}" r="44" fill="${color}" opacity="0.15"/>
      <circle cx="148" cy="${y + cardH / 2}" r="36" fill="#ffffff" stroke="${color}" stroke-width="3"/>
      <text x="132" y="${y + cardH / 2 + 14}" font-family="Arial,sans-serif" font-size="32">${glyph}</text>
      <text x="196" y="${y + 72}" font-family="Arial,sans-serif" font-size="26" fill="#0f172a" font-weight="bold">${esc(item.title)}</text>
      ${descSvg}`;
    })
    .join("");
}

function footerPills() {
  const pills = [
    ["📍", "Google Maps"],
    ["⭐", "รีวิวจริง"],
    ["💬", "LINE จอง"],
    ["🛡", "Trust First"],
  ];
  return pills
    .map(([icon, label], i) => {
      const x = 72 + i * 280;
      const w = 248;
      return `
      <rect x="${x}" y="1420" width="${w}" height="52" rx="26" fill="rgba(255,255,255,0.85)" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="${x + 20}" y="1454" font-family="Arial,sans-serif" font-size="22">${icon}</text>
      <text x="${x + 56}" y="1454" font-family="Arial,sans-serif" font-size="20" fill="#475569" font-weight="600">${esc(label)}</text>`;
    })
    .join("");
}

function mockupGoogleMaps(x, y, w, h, title) {
  const phoneW = Math.round(w * 0.42);
  const phoneH = Math.round(h * 0.88);
  const px = x + Math.round((w - phoneW) / 2);
  const py = y + Math.round((h - phoneH) / 2);
  return `
  <g filter="url(#mockShadow)">
    <rect x="${px}" y="${py}" width="${phoneW}" height="${phoneH}" rx="36" fill="#1e293b"/>
    <rect x="${px + 12}" y="${py + 48}" width="${phoneW - 24}" height="${phoneH - 60}" rx="24" fill="#e2e8f0"/>
    <rect x="${px + 12}" y="${py + 48}" width="${phoneW - 24}" height="120" rx="24" fill="#86efac" opacity="0.5"/>
    <rect x="${px + 12}" y="${py + 168}" width="${phoneW - 24}" height="80" fill="#bbf7d0" opacity="0.4"/>
    <circle cx="${px + phoneW / 2}" cy="${py + 200}" r="28" fill="#dc2626"/>
    <circle cx="${px + phoneW / 2}" cy="${py + 200}" r="12" fill="#ffffff"/>
    <rect x="${px + 28}" y="${py + 280}" width="${phoneW - 56}" height="200" rx="16" fill="#ffffff" stroke="#c7d2fe" stroke-width="2"/>
    <text x="${px + 44}" y="${py + 318}" font-family="Arial,sans-serif" font-size="22" fill="#0f172a" font-weight="bold">${esc(title ?? "Thai Massage")}</text>
    <text x="${px + 44}" y="${py + 352}" font-family="Arial,sans-serif" font-size="18" fill="#f59e0b">★★★★★ 4.8</text>
    <text x="${px + 44}" y="${py + 390}" font-family="Arial,sans-serif" font-size="16" fill="#64748b">Patong · Open now</text>
    <rect x="${px + 44}" y="${py + 410}" width="120" height="36" rx="8" fill="#6366f1"/>
    <text x="${px + 62}" y="${py + 434}" font-family="Arial,sans-serif" font-size="16" fill="#ffffff">Directions</text>
  </g>`;
}

function mockupSeoDashboard(x, y, w, h, title) {
  const lapW = Math.round(w * 0.78);
  const lapH = Math.round(h * 0.62);
  const lx = x + Math.round((w - lapW) / 2);
  const ly = y + 40;
  const bars = [65, 48, 72, 55, 80, 62].map((pct, i) => {
    const bx = lx + 80 + i * 90;
    const bh = Math.round((pct / 100) * 180);
    return `<rect x="${bx}" y="${ly + 280 - bh}" width="56" height="${bh}" rx="8" fill="#6366f1" opacity="${0.5 + i * 0.08}"/>`;
  }).join("");
  return `
  <g filter="url(#mockShadow)">
    <rect x="${lx}" y="${ly}" width="${lapW}" height="${lapH}" rx="16" fill="#334155"/>
    <rect x="${lx + 16}" y="${ly + 16}" width="${lapW - 32}" height="${lapH - 32}" rx="10" fill="#ffffff"/>
    <text x="${lx + 40}" y="${ly + 56}" font-family="Arial,sans-serif" font-size="26" fill="#0f172a" font-weight="bold">${esc(title ?? "Channel Mix")}</text>
    ${bars}
    <rect x="${lx + 40}" y="${ly + 300}" width="200" height="80" rx="12" fill="#ecfdf5" stroke="#86efac"/>
    <text x="${lx + 60}" y="${ly + 340}" font-family="Arial,sans-serif" font-size="20" fill="#059669" font-weight="bold">Maps 48%</text>
    <rect x="${lx + 260}" y="${ly + 300}" width="200" height="80" rx="12" fill="#ede9fe" stroke="#c4b5fd"/>
    <text x="${lx + 280}" y="${ly + 340}" font-family="Arial,sans-serif" font-size="20" fill="#7c3aed" font-weight="bold">Walk-in 28%</text>
    <polyline points="${lx + 600},${ly + 260} ${lx + 680},${ly + 200} ${lx + 760},${ly + 220} ${lx + 840},${ly + 140}" fill="none" stroke="#22c55e" stroke-width="4"/>
  </g>`;
}

function mockupAeoSerp(x, y, w, h, title) {
  const cardW = Math.round(w * 0.88);
  const cardH = Math.round(h * 0.85);
  const cx = x + Math.round((w - cardW) / 2);
  const cy = y + 20;
  return `
  <g filter="url(#mockShadow)">
    <rect x="${cx}" y="${cy}" width="${cardW}" height="${cardH}" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    <rect x="${cx + 24}" y="${cy + 24}" width="${cardW - 48}" height="48" rx="24" fill="#f1f5f9"/>
    <text x="${cx + 48}" y="${cy + 56}" font-family="Arial,sans-serif" font-size="20" fill="#94a3b8">${esc(title ?? "thai massage patong")}</text>
    <rect x="${cx + 24}" y="${cy + 96}" width="${cardW - 48}" height="200" rx="16" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="2"/>
    <text x="${cx + 48}" y="${cy + 136}" font-family="Arial,sans-serif" font-size="22" fill="#7c3aed" font-weight="bold">AI Overview</text>
    <text x="${cx + 48}" y="${cy + 176}" font-family="Arial,sans-serif" font-size="18" fill="#334155">ร้านนวดไทยในโซนป่าตอง กะตะ กมลา</text>
    <text x="${cx + 48}" y="${cy + 208}" font-family="Arial,sans-serif" font-size="18" fill="#334155">ควรมีราคาชัด รีวิวจริง และ LINE จอง</text>
    <rect x="${cx + 24}" y="${cy + 320}" width="${cardW - 48}" height="56" rx="8" fill="#f8fafc"/>
    <text x="${cx + 48}" y="${cy + 356}" font-family="Arial,sans-serif" font-size="18" fill="#1e3a8a" font-weight="600">phuketseo.com › promote massage</text>
    <rect x="${cx + 680}" y="${cy - 30}" width="320" height="180" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" opacity="0.95"/>
    <text x="${cx + 700}" y="${cy + 10}" font-family="Arial,sans-serif" font-size="16" fill="#7c3aed" font-weight="bold">Featured snippet</text>
    <text x="${cx + 700}" y="${cy + 44}" font-family="Arial,sans-serif" font-size="15" fill="#475569">5 ขั้นโปรโมทร้านนวด...</text>
  </g>`;
}

function mockupWebsiteUi(x, y, w, h, title) {
  const bw = Math.round(w * 0.9);
  const bh = Math.round(h * 0.82);
  const bx = x + Math.round((w - bw) / 2);
  const by = y + 30;
  const colW = Math.round((bw - 48) / 2);
  return `
  <g filter="url(#mockShadow)">
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="48" rx="16" fill="#f1f5f9"/>
    <circle cx="${bx + 28}" cy="${by + 24}" r="8" fill="#ef4444"/>
    <circle cx="${bx + 52}" cy="${by + 24}" r="8" fill="#f59e0b"/>
    <circle cx="${bx + 76}" cy="${by + 24}" r="8" fill="#22c55e"/>
    <text x="${bx + 120}" y="${by + 32}" font-family="Arial,sans-serif" font-size="20" fill="#64748b">${esc(title ?? "Right vs Wrong")}</text>
    <rect x="${bx + 24}" y="${by + 72}" width="${colW}" height="${bh - 96}" rx="14" fill="#ecfdf5" stroke="#86efac"/>
    <text x="${bx + 48}" y="${by + 112}" font-family="Arial,sans-serif" font-size="24" fill="#059669" font-weight="bold">✓ ถูกลำดับ</text>
    <text x="${bx + 48}" y="${by + 156}" font-family="Arial,sans-serif" font-size="18" fill="#14532d">Maps + รีวิวก่อน</text>
    <text x="${bx + 48}" y="${by + 196}" font-family="Arial,sans-serif" font-size="18" fill="#14532d">4–8 สัปดาห์เห็นสัญญาณ</text>
    <rect x="${bx + 24 + colW + 24}" y="${by + 72}" width="${colW}" height="${bh - 96}" rx="14" fill="#fef2f2" stroke="#fecaca"/>
    <text x="${bx + 48 + colW + 24}" y="${by + 112}" font-family="Arial,sans-serif" font-size="24" fill="#dc2626" font-weight="bold">✕ มักพลาด</text>
    <text x="${bx + 48 + colW + 24}" y="${by + 156}" font-family="Arial,sans-serif" font-size="18" fill="#7f1d1d">ลดราคาก่อนรีวิว</text>
    <text x="${bx + 48 + colW + 24}" y="${by + 196}" font-family="Arial,sans-serif" font-size="18" fill="#7f1d1d">ยิงแอดก่อน listing</text>
  </g>`;
}

function mockupBlock(focus, title) {
  const x = 660;
  const y = 100;
  const w = 1572;
  const h = 1320;
  switch (focus) {
    case "google-maps":
      return mockupGoogleMaps(x, y, w, h, title);
    case "aeo-serp":
      return mockupAeoSerp(x, y, w, h, title);
    case "website-ui":
      return mockupWebsiteUi(x, y, w, h, title);
  }
  return mockupSeoDashboard(x, y, w, h, title);
}

function buildSvg(spec) {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    ${defs()}
    ${meshBackground()}
    ${headerBlock(spec)}
    ${sidebarCards(spec.sidebarItems ?? [])}
    ${mockupBlock(spec.mockupFocus, spec.mockupTitle)}
    ${footerPills()}
  </svg>`;
}

mkdirSync(outDir, { recursive: true });
const prompts = JSON.parse(readFileSync(promptsPath, "utf8"));

for (const [key, spec] of Object.entries(prompts)) {
  const svg = buildSvg(spec);
  const srcPath = join(outDir, `${key}-src.png`);
  await sharp(Buffer.from(svg)).png().toFile(srcPath);
  console.log(`✓ ${key}-src.png`);
}

console.log("\nNext:");
console.log("  node scripts/compose-phuketseo-brand-bar.mjs assets/promote-ran-nuad-thai");
console.log("  node scripts/upscale-promote-ran-nuad-images.mjs");
