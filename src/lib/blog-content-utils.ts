export type BlogHeading = {
  id: string;
  text: string;
};

export function slugifyHeading(text: string, index: number): string {
  const cleaned = text.replace(/\*\*/g, "").trim();
  const slug = cleaned
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "")
    .slice(0, 80);
  return slug || `section-${index + 1}`;
}

export function extractHeadings(content: string, skipTitles: string[] = []): BlogHeading[] {
  const skip = new Set(skipTitles.map((t) => t.trim()));
  const headings: BlogHeading[] = [];

  for (const line of content.trim().split("\n")) {
    if (!line.startsWith("## ") || line.startsWith("### ")) continue;
    const text = line.slice(3).replace(/\*\*/g, "").trim();
    if (skip.has(text)) continue;
    headings.push({ id: slugifyHeading(text, headings.length), text });
  }

  return headings;
}

export function stripMarkdownSections(content: string, sectionTitles: string[]): string {
  const skip = new Set(sectionTitles.map((t) => t.trim()));
  const lines = content.trim().split("\n");
  const result: string[] = [];
  let skipping = false;

  for (const line of lines) {
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      const title = line.slice(3).replace(/\*\*/g, "").trim();
      skipping = skip.has(title);
      if (skipping) continue;
    }
    if (!skipping) result.push(line);
  }

  return result.join("\n");
}
