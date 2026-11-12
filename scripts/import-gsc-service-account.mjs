/**
 * Import Google Service Account JSON into .env.local for GSC admin dashboard.
 *
 * Usage:
 *   node scripts/import-gsc-service-account.mjs "C:\Users\USER\Downloads\your-key.json"
 */
import fs from "fs";
import path from "path";

const keyPath = process.argv[2];
if (!keyPath) {
  console.error(
    'Usage: node scripts/import-gsc-service-account.mjs "path\\to\\service-account.json"',
  );
  process.exit(1);
}

const abs = path.resolve(keyPath);
if (!fs.existsSync(abs)) {
  console.error(`File not found: ${abs}`);
  process.exit(1);
}

let json;
try {
  json = JSON.parse(fs.readFileSync(abs, "utf8"));
} catch (err) {
  console.error("Invalid JSON:", err.message);
  process.exit(1);
}

if (json.type !== "service_account" || !json.client_email || !json.private_key) {
  console.error("This does not look like a Google service account key JSON.");
  process.exit(1);
}

const envPath = path.join(process.cwd(), ".env.local");
let env = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";

const privateKeyEscaped = json.private_key.replace(/\n/g, "\\n");
const pairs = {
  GOOGLE_CLIENT_EMAIL: json.client_email,
  GOOGLE_PRIVATE_KEY: `"${privateKeyEscaped}"`,
  GSC_SITE_URL: "https://phuketseo.com/",
};

for (const [key, value] of Object.entries(pairs)) {
  const line = `${key}=${value}`;
  const re = new RegExp(`^${key}=.*$`, "m");
  if (re.test(env)) {
    env = env.replace(re, line);
  } else {
    env = `${env.trimEnd()}\n\n${line}\n`;
  }
}

fs.writeFileSync(envPath, env.endsWith("\n") ? env : `${env}\n`, "utf8");

console.log("Updated .env.local");
console.log(`  GOOGLE_CLIENT_EMAIL=${json.client_email}`);
console.log("  GOOGLE_PRIVATE_KEY=(set)");
console.log("  GSC_SITE_URL=https://phuketseo.com/");
console.log("");
console.log("Next: add this email as a user in Google Search Console:");
console.log(`  ${json.client_email}`);
console.log("  https://search.google.com/search-console/users");
console.log("");
console.log("Then restart npm run dev and open /admin → Refresh GSC");
