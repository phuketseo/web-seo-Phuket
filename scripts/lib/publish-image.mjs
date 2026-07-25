import sharp from "sharp";
import { readFileSync } from "node:fs";

/** WebP quality for publish — balance size vs. visual fidelity on retina displays. */
export const WEBP_QUALITY = 82;

const SHARPEN = { sigma: 0.6, m1: 0.5, m2: 0.25, x1: 2, y2: 10 };

/**
 * Resize + sharpen + export WebP for public/images.
 * Output path may end in .png (legacy job names) — always writes .webp.
 */
export async function publishWebpImage(input, outputPath, { width, height, fit = "cover" } = {}) {
  const webpPath = outputPath.replace(/\.png$/i, ".webp");

  let pipeline = sharp(input);
  if (width && height) {
    pipeline = pipeline.resize(width, height, {
      fit,
      position: "centre",
      kernel: sharp.kernel.lanczos3,
    });
  }

  await pipeline.sharpen(SHARPEN).webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(webpPath);

  const kb = Math.round(readFileSync(webpPath).length / 1024);
  return { path: webpPath, kb };
}

/**
 * Convert an existing PNG/JPEG in public/images to WebP (same directory).
 */
export async function convertToWebp(inputPath, { removeSource = false } = {}) {
  const webpPath = inputPath.replace(/\.(png|jpe?g)$/i, ".webp");

  await sharp(inputPath).webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(webpPath);

  if (removeSource) {
    const { unlinkSync } = await import("node:fs");
    unlinkSync(inputPath);
  }

  const kb = Math.round(readFileSync(webpPath).length / 1024);
  return { path: webpPath, kb };
}
