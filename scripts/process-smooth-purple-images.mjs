/**
 * Post-process Smooth Purple images: enforce 3:2 → brand bar → optional upscale map
 *
 * Usage:
 *   node scripts/process-smooth-purple-images.mjs assets/promote-ran-nuad-thai
 *   node scripts/process-smooth-purple-images.mjs assets/promote-ran-nuad-thai --upscale-config scripts/upscale-promote-ran-nuad-images.mjs
 */
import sharp from "sharp";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const SRC_W = 2304;
const SRC_H = 1536;
const TARGET_W = 3840;
const TARGET_H = 2560;
const BAR_H = 72;
const PADDING = 28;
const RATIO = SRC_W / SRC_H; // 1.5 = 3:2

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, process.argv[2] ?? "assets/promote-ran-nuad-thai");
const logoPath = join(root, "public", "images", "brand", "phuketseo-logo-horizontal.png");

if (!existsSync(logoPath)) throw new Error(`Logo missing: ${logoPath}`);

async function normalizeAspect(inputPath, outputPath) {
  const meta = await sharp(inputPath).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  const ratio = w / h;
  const tol = 0.04;
  let pipeline = sharp(inputPath);

  if (Math.abs(ratio - RATIO) > tol) {
    console.log(`  ⚠ aspect ${w}×${h} (${ratio.toFixed(2)}) → crop 3:2 ${SRC_W}×${SRC_H}`);
  }

  await pipeline
    .resize(SRC_W, SRC_H, { fit: "cover", position: "centre", kernel: sharp.kernel.lanczos3 })
    .png()
    .toFile(outputPath);

  const out = await sharp(outputPath).metadata();
  console.log(`  ✓ normalized ${basename(outputPath)} ${out.width}×${out.height}`);
}

async function addBrandBar(inputPath, outputPath) {
  const image = sharp(inputPath);
  const meta = await image.metadata();
  const w = meta.width ?? SRC_W;
  const h = meta.height ?? SRC_H;

  const logo = await sharp(logoPath).resize({ height: 36 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const logoW = logoMeta.width ?? 140;

  const barSvg = Buffer.from(`
<svg width="${w}" height="${BAR_H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${w}" height="${BAR_H}" fill="#f1f5f9"/>
  <line x1="0" y1="0" x2="${w}" y2="0" stroke="#e2e8f0" stroke-width="2"/>
  <text x="${PADDING + logoW + 16}" y="44" font-family="Arial,sans-serif" font-size="22" fill="#475569" font-weight="600">PhuketSEO</text>
  <text x="${PADDING + logoW + 16 + 130}" y="44" font-family="Arial,sans-serif" font-size="20" fill="#94a3b8">phuketseo.com</text>
</svg>`);

  await image
    .extend({ bottom: BAR_H, background: { r: 241, g: 245, b: 249 } })
    .composite([
      { input: barSvg, top: h, left: 0 },
      { input: logo, top: h + Math.round((BAR_H - 36) / 2), left: PADDING },
    ])
    .png()
    .toFile(outputPath);

  console.log(`  ✓ branded ${basename(outputPath)}`);
}

const srcFiles = readdirSync(assetsDir).filter((f) => f.endsWith("-src.png"));
if (!srcFiles.length) throw new Error(`No *-src.png in ${assetsDir}`);

console.log(`Processing ${srcFiles.length} Smooth Purple images in ${assetsDir}\n`);

for (const file of srcFiles) {
  const input = join(assetsDir, file);
  const normalized = join(assetsDir, file.replace("-src.png", "-normalized-tmp.png"));
  const branded = join(assetsDir, file.replace("-src.png", "-branded.png"));

  console.log(`→ ${file}`);
  await normalizeAspect(input, normalized);
  await sharp(normalized).toFile(input);
  await addBrandBar(input, branded);
  try {
    const { unlinkSync } = await import("node:fs");
    unlinkSync(normalized);
  } catch {
    /* ignore */
  }
}

// Run upscale if sibling script exists
const upscaleScript = join(root, "scripts", "upscale-promote-ran-nuad-images.mjs");
if (existsSync(upscaleScript) && assetsDir.includes("promote-ran-nuad-thai")) {
  console.log("\nUpscaling via upscale-promote-ran-nuad-images.mjs...");
  const { spawnSync } = await import("node:child_process");
  const r = spawnSync(process.execPath, [upscaleScript], { cwd: root, stdio: "inherit" });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

console.log("\nDone — verify 3:2 publish files at 3840×2560.");
