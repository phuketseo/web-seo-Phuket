/**
 * Admin auth แบบ lean:
 * - ADMIN_PASSWORD ใช้ตอน login
 * - ADMIN_SESSION_SECRET เป็นค่าใน cookie (Edge-safe — ไม่ต้อง hash ใน middleware)
 */
export const ADMIN_COOKIE = "phuketseo_admin";

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() ?? "";
}

export function getAdminSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET?.trim() ?? "";
}

export function isAdminConfigured(): boolean {
  return Boolean(getAdminPassword() && getAdminSessionSecret());
}

export function verifyAdminPassword(input: string): boolean {
  const password = getAdminPassword();
  if (!password || !input) return false;
  return input === password;
}

export function verifyAdminSessionToken(token: string | undefined | null): boolean {
  const expected = getAdminSessionSecret();
  if (!expected || !token) return false;
  return token === expected;
}
