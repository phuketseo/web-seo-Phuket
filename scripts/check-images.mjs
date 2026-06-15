import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesTs = fs.readFileSync(path.join(root, "src/lib/images.ts"), "utf8");
const refs = [...imagesTs.matchAll(/src: "(\/images\/[^"]+)"/g)].map((m) => m[1]);
const missing = refs.filter((r) => {
  const filePath = path.join(root, "public", ...r.slice(1).split("/"));
  return !fs.existsSync(filePath);
});

console.log(`Total image refs: ${refs.length}`);
console.log(`Missing files: ${missing.length}`);
missing.forEach((m) => console.log(`  MISSING: ${m}`));
