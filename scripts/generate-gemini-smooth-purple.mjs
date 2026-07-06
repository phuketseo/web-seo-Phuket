/**
 * Generate *-ai.png + *-src.png via Gemini Image (Nano Banana)
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/generate-gemini-smooth-purple.mjs assets/promote-ran-nuad-thai
 *   GEMINI_API_KEY=... node scripts/generate-gemini-smooth-purple.mjs assets/promote-ran-nuad-thai hero
 *
 * Env:
 *   GEMINI_API_KEY — required (https://aistudio.google.com/apikey)
 *   GEMINI_IMAGE_MODEL — optional, default gemini-2.5-flash-image
 */
import { GoogleGenAI, Modality } from "@google/genai";
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const assetsDir = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(process.cwd(), "assets", "promote-ran-nuad-thai");
const onlyKey = process.argv[3] ?? null;
const briefsPath = join(assetsDir, "briefs.json");
const model = process.env.GEMINI_IMAGE_MODEL ?? "gemini-2.5-flash-image";
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("Missing GEMINI_API_KEY — get one at https://aistudio.google.com/apikey");
  console.error("  PowerShell: $env:GEMINI_API_KEY=\"your-key\"; node scripts/generate-gemini-smooth-purple.mjs assets/promote-ran-nuad-thai");
  process.exit(1);
}

if (!existsSync(briefsPath)) {
  console.error(`Missing ${briefsPath} — run the *-smooth-purple-briefs.mjs script first`);
  process.exit(1);
}

const briefs = JSON.parse(readFileSync(briefsPath, "utf8"));
const entries = Object.entries(briefs).filter(([key]) => !onlyKey || key.includes(onlyKey));

if (!entries.length) {
  console.error(`No briefs matched${onlyKey ? ` filter "${onlyKey}"` : ""}`);
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function generateImage(prompt) {
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
    },
  });

  const parts = response.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));

  if (!imagePart?.inlineData?.data) {
    const text = parts.map((p) => p.text).filter(Boolean).join("\n");
    throw new Error(`No image in response${text ? `: ${text.slice(0, 200)}` : ""}`);
  }

  return Buffer.from(imagePart.inlineData.data, "base64");
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

console.log(`Gemini Image: ${model}`);
console.log(`Assets: ${assetsDir}`);
console.log(`Generating ${entries.length} image(s)...\n`);

for (const [key, spec] of entries) {
  const aiPath = join(assetsDir, spec.file);
  const srcPath = join(assetsDir, spec.src);

  if (existsSync(aiPath) && process.env.FORCE !== "1") {
    console.log(`⏭ skip ${spec.file} (exists, set FORCE=1 to regenerate)`);
    if (!existsSync(srcPath)) copyFileSync(aiPath, srcPath);
    continue;
  }

  process.stdout.write(`→ ${key}... `);
  try {
    const buffer = await generateImage(spec.prompt);
    writeFileSync(aiPath, buffer);
    writeFileSync(srcPath, buffer);
    const kb = Math.round(buffer.length / 1024);
    console.log(`✓ ${spec.file} (${kb} KB)`);
  } catch (err) {
    console.log(`✗ ${err.message}`);
    throw err;
  }

  await sleep(4000);
}

console.log("\nDone — next:");
console.log(`  node scripts/compose-phuketseo-brand-bar.mjs ${basename(assetsDir) === assetsDir ? assetsDir : process.argv[2]}`);
console.log("  node scripts/upscale-promote-ran-nuad-images.mjs");
