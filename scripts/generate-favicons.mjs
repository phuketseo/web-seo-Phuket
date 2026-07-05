import sharp from "sharp";
import { mkdirSync } from "fs";
import { dirname } from "path";

const SRC = "assets/brand/phuketseo-favicon-source.png";

const OUTPUTS = [
  ["src/app/icon.png", 192],
  ["public/icon.png", 48],
  ["src/app/apple-icon.png", 180],
  ["public/apple-icon.png", 180],
  ["public/favicon-192.png", 192],
  ["public/images/brand/favicon-icon.png", 192],
  ["public/images/brand/logo-icon.png", 192],
];

async function prepareMaster() {
  const trimmed = await sharp(SRC).trim({ threshold: 15 }).png().toBuffer();
  const { width = 0, height = 0 } = await sharp(trimmed).metadata();
  const side = Math.max(width, height) + 24;

  return sharp(trimmed)
    .extend({
      top: Math.floor((side - height) / 2),
      bottom: Math.ceil((side - height) / 2),
      left: Math.floor((side - width) / 2),
      right: Math.ceil((side - width) / 2),
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
}

async function writeIcon(master, out, size) {
  mkdirSync(dirname(out), { recursive: true });

  let pipeline = sharp(master).resize(size, size, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
    kernel: sharp.kernel.lanczos3,
  });

  if (size <= 48) {
    pipeline = pipeline.sharpen({ sigma: 0.9, m1: 1.2, m2: 0.6 });
  }

  await pipeline.png({ compressionLevel: 9, effort: 10 }).toFile(out);
  console.log(`wrote ${out} (${size}px)`);
}

const master = await prepareMaster();
for (const [out, size] of OUTPUTS) {
  await writeIcon(master, out, size);
}
