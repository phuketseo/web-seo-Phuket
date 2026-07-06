/**
 * Smooth Purple prompts — /blog/promote-ran-nuad-thai-phuket
 * 1. node scripts/promote-ran-nuad-smooth-purple-briefs.mjs
 * 2. GEMINI_API_KEY=... node scripts/generate-gemini-smooth-purple.mjs assets/promote-ran-nuad-thai
 * 3. node scripts/compose-phuketseo-brand-bar.mjs assets/promote-ran-nuad-thai
 * 4. node scripts/upscale-promote-ran-nuad-images.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const promptsPath = join(root, "assets", "promote-ran-nuad-thai", "prompts.json");

const mockupHints = {
  "seo-dashboard":
    "floating laptop and phone with SEO analytics UI: keyword rankings, traffic chart, green metrics",
  "aeo-serp":
    "Google SERP mockup with AI Overview answer block, FAQ snippet, purple accent highlights",
  "website-ui":
    "clean browser mockup with hero section, CTA button, three feature cards, modern landing page",
  "google-maps":
    "floating phone showing Google Maps local pack with pin markers in Phuket Patong area, search bar Thai massage near me",
  "pricing-table":
    "three pricing cards with Thai price labels, soft glass panels",
};

const NEGATIVE = [
  "photorealistic human face",
  "watermark",
  "wrong Thai spelling",
  "illegible Thai text",
  "cluttered layout",
  "numbered circle list full-screen",
  "vertical card-stack-only layout",
  "Tahoma card-stack template",
  "other brand logos",
].join(", ");

function buildPrompt(input, type = "blog-inline") {
  const hasSidebar = Boolean(input.sidebarItems?.length);
  const leftWidth = hasSidebar ? "25%" : "42%";
  const rightWidth = hasSidebar ? "75%" : "58%";
  const aspect = "3:2 aspect ratio, 2304x1536 pixels";

  const sidebar = hasSidebar
    ? `LEFT SIDEBAR (~25%): vertical stack of ${input.sidebarItems.length} white frosted glass cards with soft shadow, 3D isometric pastel icon circles, Thai titles and 2-line descriptions:\n${input.sidebarItems
        .map((item, i) => `${i + 1}. "${item.title}" — "${item.description}"`)
        .join("\n")}`
    : "";

  const secondary = input.headlineSecondary
    ? `Second headline Thai navy #1e3a8a: "${input.headlineSecondary}".`
    : "";
  const badge = input.badge ? `Pill badge Thai: "${input.badge}", blue-purple gradient with sparkle icon.` : "";
  const mockup = mockupHints[input.mockupFocus ?? "seo-dashboard"];
  const mockupTitle = input.mockupTitle ? `Mockup EN title: "${input.mockupTitle}".` : "";

  return `Thai B2B digital marketing infographic, PhuketSEO Smooth Purple brand, ${aspect}.

STYLE: off-white #f8fafc mesh gradient blobs teal→indigo→violet 12-20% opacity. White frosted glass cards 24px radius soft ambient shadow. Modern Thai sans-serif. Professional EdTech SaaS marketing graphic.

HEADLINE gradient purple-indigo: "${input.headlinePrimary}". ${secondary} ${badge}

LAYOUT: ${sidebar}
LEFT TEXT (~${leftWidth}) + RIGHT VISUAL (~${rightWidth}): ${mockup}. ${mockupTitle}
Layer depth: wireframe sitemap background, main mockups mid, small UI chips front.
3D isometric icons on sidebar cards. Laptop/tablet mockups with realistic dashboard UI.

NO human faces, NO watermark, NO full-width numbered list boxes, NO Tahoma card-stack template.
Crisp vector-flat illustration with smooth gradients, export quality.

AVOID: ${NEGATIVE}`.trim();
}

const raw = JSON.parse(readFileSync(promptsPath, "utf8"));
const out = {};

for (const [key, spec] of Object.entries(raw)) {
  const type = key.endsWith("-hero") ? "blog-hero" : "blog-inline";
  out[key] = {
    file: `${key}-ai.png`,
    src: `${key}-src.png`,
    branded: `${key}-branded.png`,
    prompt: buildPrompt(spec, type),
  };
}

const outPath = join(root, "assets", "promote-ran-nuad-thai", "briefs.json");
writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`Wrote ${Object.keys(out).length} prompts → assets/promote-ran-nuad-thai/briefs.json`);
