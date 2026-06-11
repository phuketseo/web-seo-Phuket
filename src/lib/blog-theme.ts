export type BlogTheme = "default" | "vercel";

export function blogThemeClass(theme: BlogTheme | undefined, defaultCls: string, vercelCls: string): string {
  return theme === "vercel" ? vercelCls : defaultCls;
}
