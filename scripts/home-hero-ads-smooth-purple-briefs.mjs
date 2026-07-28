/**
 * Homepage hero — ads + web focus (Smooth Purple)
 *
 * 1. node scripts/home-hero-ads-smooth-purple-briefs.mjs
 * 2. GEMINI_API_KEY=... node scripts/generate-gemini-smooth-purple.mjs assets/home-hero-ads hero
 * 3. node scripts/compose-phuketseo-brand-bar.mjs assets/home-hero-ads
 * 4. node scripts/upscale-home-hero-ads.mjs assets/home-hero-ads/hero-home-ads-web-branded.png
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "assets", "home-hero-ads");
mkdirSync(assetsDir, { recursive: true });

const prompt = `Thai B2B digital marketing infographic, PhuketSEO brand style, 3:2 aspect ratio, 2304x1536 pixels.

STYLE — Smooth Purple: off-white #f8fafc mesh gradient blobs teal→indigo→violet. White frosted glass cards, soft ambient shadow.

HEADLINE gradient purple-indigo: "รับยิงแอด Google & Facebook". Second line navy: "ทำเว็บไซต์ภูเก็ต เริ่ม ฿6,500/เดือน". Badge: "Ads Starter · Web Starter".

LEFT: 4 circular icons — Google Ads, Facebook, เว็บไซต์, บวก SEO.

RIGHT: laptop Google Ads dashboard with CPC conversions chart, phone Facebook ad preview and Maps pin. Floating stat cards: Ad Leads +24%, ROAS 3.2x, Website CTA +18%.

NO human faces, NO watermark, crisp vector-flat illustration.`;

const briefs = {
  "hero-home-ads-web": {
    file: "hero-home-ads-web-smooth-ai.png",
    src: "hero-home-ads-web-smooth-src.png",
    prompt,
  },
};

writeFileSync(join(assetsDir, "briefs.json"), JSON.stringify(briefs, null, 2));
console.log(`Wrote ${assetsDir}/briefs.json`);
