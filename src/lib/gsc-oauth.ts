import { promises as fs } from "fs";
import path from "path";
import { google } from "googleapis";

const TOKEN_FILE = path.join(process.cwd(), ".data", "gsc-oauth.json");
const GSC_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const ANALYTICS_SCOPE = "https://www.googleapis.com/auth/analytics.readonly";

export const GOOGLE_ADMIN_SCOPES = [GSC_SCOPE, ANALYTICS_SCOPE] as const;

export type GscOAuthTokens = {
  refresh_token?: string;
  access_token?: string;
  expiry_date?: number | null;
  token_type?: string;
  scope?: string;
};

function getOAuthClientId() {
  return process.env.GOOGLE_OAUTH_CLIENT_ID?.trim() ?? "";
}

function getOAuthClientSecret() {
  return process.env.GOOGLE_OAUTH_CLIENT_SECRET?.trim() ?? "";
}

export function getOAuthRedirectUri() {
  const fromEnv = process.env.GOOGLE_OAUTH_REDIRECT_URI?.trim();
  if (fromEnv) return fromEnv;
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
  // local prefer localhost for OAuth testing
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000/api/admin/gsc/oauth/callback";
  }
  return `${base}/api/admin/gsc/oauth/callback`;
}

export function isOAuthClientConfigured() {
  return Boolean(getOAuthClientId() && getOAuthClientSecret());
}

export function createOAuth2Client() {
  if (!isOAuthClientConfigured()) {
    throw new Error("Missing GOOGLE_OAUTH_CLIENT_ID or GOOGLE_OAUTH_CLIENT_SECRET");
  }
  return new google.auth.OAuth2(
    getOAuthClientId(),
    getOAuthClientSecret(),
    getOAuthRedirectUri(),
  );
}

export function getOAuthAuthUrl(state: string) {
  const client = createOAuth2Client();
  return client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [...GOOGLE_ADMIN_SCOPES],
    state,
  });
}

export function tokenHasAnalyticsScope(scope?: string | null) {
  if (!scope) return false;
  return scope.split(/\s+/).includes(ANALYTICS_SCOPE);
}

export async function hasAnalyticsOAuthScope() {
  const tokens = await readOAuthTokens();
  return tokenHasAnalyticsScope(tokens?.scope);
}

export async function readOAuthTokens(): Promise<GscOAuthTokens | null> {
  const fromEnv = process.env.GSC_OAUTH_REFRESH_TOKEN?.trim();
  if (fromEnv) {
    return { refresh_token: fromEnv };
  }
  try {
    const raw = await fs.readFile(TOKEN_FILE, "utf8");
    return JSON.parse(raw) as GscOAuthTokens;
  } catch {
    return null;
  }
}

export async function writeOAuthTokens(tokens: GscOAuthTokens) {
  await fs.mkdir(path.dirname(TOKEN_FILE), { recursive: true });
  const existing = (await readOAuthTokens()) ?? {};
  const merged: GscOAuthTokens = {
    ...existing,
    ...tokens,
    refresh_token: tokens.refresh_token || existing.refresh_token,
  };
  await fs.writeFile(TOKEN_FILE, JSON.stringify(merged, null, 2), "utf8");
  return merged;
}

export async function hasOAuthRefreshToken() {
  const tokens = await readOAuthTokens();
  return Boolean(tokens?.refresh_token);
}

export async function getOAuthAuthenticatedClient() {
  const tokens = await readOAuthTokens();
  if (!tokens?.refresh_token) {
    throw new Error("ยังไม่ได้เชื่อม OAuth — กดปุ่ม Connect GSC ในหน้า Admin");
  }
  const client = createOAuth2Client();
  client.setCredentials({
    refresh_token: tokens.refresh_token,
    access_token: tokens.access_token,
    expiry_date: tokens.expiry_date ?? undefined,
  });
  client.on("tokens", (fresh) => {
    void writeOAuthTokens({
      refresh_token: fresh.refresh_token || tokens.refresh_token,
      access_token: fresh.access_token ?? undefined,
      expiry_date: fresh.expiry_date,
      token_type: fresh.token_type ?? undefined,
      scope: fresh.scope ?? undefined,
    });
  });
  return client;
}

export async function exchangeCodeForTokens(code: string) {
  const client = createOAuth2Client();
  const { tokens } = await client.getToken(code);
  if (!tokens.refresh_token && !(await readOAuthTokens())?.refresh_token) {
    throw new Error(
      "ไม่ได้รับ refresh_token — ลบสิทธิ์แอปใน Google Account แล้วลอง Connect ใหม่ด้วย prompt=consent",
    );
  }
  await writeOAuthTokens({
    refresh_token: tokens.refresh_token ?? undefined,
    access_token: tokens.access_token ?? undefined,
    expiry_date: tokens.expiry_date,
    token_type: tokens.token_type ?? undefined,
    scope: tokens.scope ?? undefined,
  });
  return tokens;
}
