/**
 * One-time migration: upscale-*-images.mjs → publishWebpImage + .webp outputs.
 * Safe to re-run (idempotent).
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = join(dirname(fileURLToPath(import.meta.url)));

const files = readdirSync(scriptsDir).filter(
  (f) => f.startsWith("upscale-") && f.endsWith("-images.mjs"),
);

for (const file of files) {
  const path = join(scriptsDir, file);
  let src = readFileSync(path, "utf8");
  const original = src;

  if (!src.includes("publishWebpImage")) {
    src = src.replace(
      /import sharp from "sharp";\nimport \{ readFileSync, existsSync \} from "node:fs";/,
      'import { existsSync } from "node:fs";',
    );
    src = src.replace(
      /import sharp from "sharp";\nimport \{ existsSync \} from "node:fs";/,
      'import { existsSync } from "node:fs";',
    );
    src = src.replace(
      /import \{ existsSync \} from "node:fs";\nimport \{ dirname, join \} from "node:path";/,
      'import { existsSync } from "node:fs";\nimport { dirname, join } from "node:path";\nimport { publishWebpImage } from "./lib/publish-image.mjs";',
    );
  }

  src = src.replace(
    /await sharp\(input\)\s*\n\s*\.resize\(TARGET_W, TARGET_H, \{ fit: "cover", position: "centre", kernel: sharp\.kernel\.lanczos3 \}\)\s*\n\s*\.sharpen\(\{ sigma: 0\.6, m1: 0\.5, m2: 0\.25, x1: 2, y2: 10 \}\)\s*\n\s*\.png\(\{ compressionLevel: 6, effort: 10 \}\)\s*\n\s*\.toFile\(outPath\);\s*\n\s*const kb = Math\.round\(readFileSync\(outPath\)\.length \/ 1024\);\s*\n\s*console\.log\(`✓ \$\{out\} \(\$\{kb\} KB\)`\);/g,
    'const { kb } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });\n  const outFile = out.replace(/\\.png$/i, ".webp");\n  console.log(`✓ ${outFile} (${kb} KB)`);',
  );

  // Alternate pattern without readFileSync log
  src = src.replace(
    /await sharp\(input\)\s*\n\s*\.resize\(TARGET_W, TARGET_H, \{ fit: "cover", position: "centre", kernel: sharp\.kernel\.lanczos3 \}\)\s*\n\s*\.sharpen\(\{ sigma: 0\.6, m1: 0\.5, m2: 0\.25, x1: 2, y2: 10 \}\)\s*\n\s*\.png\(\{ compressionLevel: 6, effort: 10 \}\)\s*\n\s*\.toFile\(outPath\);\s*\n\s*console\.log\(`✓ \$\{out\} \(\$\{TARGET_W\}×\$\{TARGET_H\}\)`\);/g,
    'const { path: published } = await publishWebpImage(input, outPath, { width: TARGET_W, height: TARGET_H });\n  console.log(`✓ ${published.split(/[/\\\\]/).pop()} (${TARGET_W}×${TARGET_H})`);',
  );

  // Job output names: -clean.png → -clean.webp
  src = src.replace(/out: "([^"]+)-clean\.png"/g, 'out: "$1-clean.webp"');
  src = src.replace(/out: "([^"]+)\.png"/g, (match, name) => {
    if (match.includes(".webp")) return match;
    return `out: "${name}.webp"`;
  });

  if (src !== original) {
    writeFileSync(path, src, "utf8");
    console.log(`Updated ${file}`);
  } else {
    console.log(`Skipped ${file} (no changes)`);
  }
}

console.log(`\nMigrated ${files.length} upscale scripts.`);
