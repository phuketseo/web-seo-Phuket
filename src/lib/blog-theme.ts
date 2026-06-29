export type BlogTheme = "default" | "anga" | "vercel";

/** Article layout theme (anga replaces legacy vercel alias) */
export function isAngaTheme(theme: BlogTheme | undefined): boolean {
  return theme === "anga" || theme === "vercel";
}

export function blogThemeClass(
  theme: BlogTheme | undefined,
  defaultCls: string,
  angaCls: string
): string {
  return isAngaTheme(theme) ? angaCls : defaultCls;
}
