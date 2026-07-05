/**
 * Smooth Purple prompts — ranking recovery cluster (C1.1 + C1.2 + pillar)
 * 1. Generate *-ai.png จาก prompt ด้านล่าง (Ideogram / Gemini Image)
 * 2. node scripts/compose-phuketseo-brand-bar.mjs assets/ranking-recovery  (เฉพาะ *-src.png ใหม่)
 * 3. node scripts/upscale-ranking-recovery-images.mjs
 *
 * ห้ามใช้ compose-ranking-recovery-images.mjs (Sharp card-stack — ลบแล้ว)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const promptsPath = join(root, "assets", "ranking-recovery", "prompts.json");

const mockupHints = {
  "seo-dashboard":
    "floating laptop and phone with SEO analytics UI: keyword rankings, traffic chart, green metrics",
  "aeo-serp":
    "Google SERP mockup with AI Overview answer block, FAQ snippet, purple accent highlights",
  "website-ui":
    "clean browser mockup with hero section, CTA button, three feature cards, modern landing page",
};

function buildPrompt(input, type = "blog-inline") {
  const hasSidebar = Boolean(input.sidebarItems?.length);
  const leftWidth = hasSidebar ? "25%" : "42%";
  const rightWidth = hasSidebar ? "75%" : "58%";
  const aspect = type === "blog-hero" ? "3:2 aspect ratio, 2304x1536 pixels" : "3:2 aspect ratio, 2304x1536 pixels";

  const sidebar = hasSidebar
    ? `LEFT SIDEBAR (~25%): vertical stack of ${input.sidebarItems.length} white frosted glass cards with soft shadow, pastel icon circles, Thai titles and 2-line descriptions:\n${input.sidebarItems
        .map((item, i) => `${i + 1}. "${item.title}" — "${item.description}"`)
        .join("\n")}`
    : "";

  const secondary = input.headlineSecondary
    ? `Second headline Thai navy #1e3a8a: "${input.headlineSecondary}".`
    : "";
  const badge = input.badge ? `Pill badge Thai: "${input.badge}", blue-purple gradient.` : "";
  const mockup = mockupHints[input.mockupFocus ?? "seo-dashboard"];
  const mockupTitle = input.mockupTitle ? `Mockup EN title: "${input.mockupTitle}".` : "";

  return `Thai B2B digital marketing infographic, PhuketSEO Smooth Purple brand, ${aspect}.

STYLE: off-white #f8fafc mesh gradient blobs teal→indigo→violet 12-20% opacity. White frosted glass cards 24px radius soft ambient shadow. Modern Thai sans-serif. NO numbered circle list full-screen. NO vertical card-stack-only layout.

HEADLINE gradient purple-indigo: "${input.headlinePrimary}". ${secondary} ${badge}

LAYOUT: ${sidebar}
LEFT TEXT (~${leftWidth}) + RIGHT VISUAL (~${rightWidth}): ${mockup}. ${mockupTitle}
Layer depth: wireframe sitemap background, main mockups mid, small UI chips front.
3D isometric icons OK on sidebar cards. Laptop/tablet mockups with real dashboard UI.

NO human faces, NO watermark, NO full-width numbered list boxes, NO Tahoma card-stack template.
Crisp vector-flat illustration, export quality.`.trim();
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

const outPath = join(root, "assets", "ranking-recovery", "briefs.json");
writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`Wrote ${Object.keys(out).length} prompts → assets/ranking-recovery/briefs.json`);
