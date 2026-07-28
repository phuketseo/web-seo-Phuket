/**
 * Publish homepage hero — ads + web focus
 * node scripts/upscale-home-hero-ads.mjs [input-path]
 */
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { publishWebpImage } from "./lib/publish-image.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultInput = join(root, "assets", "home-hero-ads", "hero-home-ads-web-smooth-src.png");
const input = process.argv[2] ? join(process.cwd(), process.argv[2]) : defaultInput;
const outPath = join(root, "public", "images", "hero", "hero-home-ads-web-smooth.webp");

if (!existsSync(input)) {
  console.error(`Missing input: ${input}`);
  process.exit(1);
}

const { kb } = await publishWebpImage(input, outPath, {
  width: 1536,
  height: 1024,
  fit: "cover",
});

console.log(`✓ hero-home-ads-web-smooth.webp (${kb} KB)`);
