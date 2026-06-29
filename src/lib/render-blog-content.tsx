import Link from "next/link";
import { BlogPullQuote } from "@/components/blog/vercel/BlogPullQuote";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogInlineImage } from "@/components/blog/BlogInlineImage";
import { BlogMidCta } from "@/components/blog/BlogMidCta";
import { BlogStatRow, parseStatLine } from "@/components/blog/BlogStatRow";
import { slugifyHeading } from "@/lib/blog-content-utils";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";
import { resolveBlogInlineImage } from "@/lib/images";

/** Inline markdown: **bold** and [label](/path) links */
export function renderBlogInline(
  text: string,
  keyPrefix: string,
  theme: BlogTheme = "default"
): React.ReactNode {
  const linkClass =
    isAngaTheme(theme)
      ? "text-violet-600 font-medium hover:underline underline-offset-2"
      : "text-indigo-700 font-semibold hover:underline";

  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.+?\*\*|\[.+?\]\(.+?\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={`${keyPrefix}-b-${i++}`}>{token.slice(2, -2)}</strong>);
    } else {
      const linkMatch = token.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        if (href.startsWith("/")) {
          parts.push(
            <Link key={`${keyPrefix}-l-${i++}`} href={href} className={linkClass}>
              {label}
            </Link>
          );
        } else {
          parts.push(
            <a
              key={`${keyPrefix}-l-${i++}`}
              href={href}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }
      }
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : parts;
}

type RenderOptions = {
  midCtaAfterSection?: number;
  theme?: BlogTheme;
};

export function renderBlogContent(content: string, options: RenderOptions = {}) {
  const theme = options.theme ?? "default";
  const isAnga = isAngaTheme(theme);

  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let inTable = false;
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let key = 0;
  let h2Count = 0;
  let headingIndex = 0;
  let listBuffer: { type: "ul" | "ol"; items: React.ReactNode[] } | null = null;

  const flushList = () => {
    if (!listBuffer?.items.length) {
      listBuffer = null;
      return;
    }
    const ListTag = listBuffer.type;
    elements.push(
      <ListTag key={key++} className={isAnga ? "blog-list" : "my-2 ml-5 list-outside"}>
        {listBuffer.items}
      </ListTag>
    );
    listBuffer = null;
  };

  const flush = () => {
    flushList();
    if (tableRows.length > 0) {
      elements.push(
        <div key={key++} className="overflow-x-auto my-8">
          <table
            className={
              isAnga
                ? "w-full border-collapse text-sm border border-slate-200 rounded-xl overflow-hidden"
                : "w-full border-collapse text-sm"
            }
          >
            <thead>
              <tr className={isAnga ? "bg-slate-50 border-b border-slate-200" : "bg-blue-950 text-white"}>
                {tableHeaders.map((h, i) => (
                  <th
                    key={i}
                    className={
                      isAnga
                        ? "px-4 py-3 text-left font-semibold text-slate-900"
                        : "px-4 py-3 text-left font-semibold"
                    }
                  >
                    {renderBlogInline(h.trim(), `th-${key}-${i}`, theme)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={i}
                  className={
                    isAnga
                      ? "border-b border-slate-200 last:border-b-0"
                      : i % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                  }
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={
                        isAnga
                          ? "px-4 py-3 text-slate-700"
                          : "px-4 py-3 border-b border-slate-200"
                      }
                    >
                      {renderBlogInline(cell.trim(), `td-${key}-${i}-${j}`, theme)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      tableHeaders = [];
      inTable = false;
    }
  };

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={key++}
            className={
              isAnga
                ? "bg-slate-900 text-slate-100 p-5 rounded-xl overflow-x-auto my-8 text-[13px] font-mono leading-relaxed border border-slate-800"
                : "bg-slate-900 text-green-400 p-5 rounded-xl overflow-x-auto my-6 text-sm font-mono leading-relaxed"
            }
          >
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        flush();
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith(":::")) {
      flush();
      const directive = line.slice(3).trim();
      if (directive === "stat") {
        const statLines: string[] = [];
        lineIdx++;
        while (lineIdx < lines.length && !lines[lineIdx].startsWith(":::")) {
          if (lines[lineIdx].trim()) statLines.push(lines[lineIdx]);
          lineIdx++;
        }
        const items = statLines.map(parseStatLine).filter(Boolean) as NonNullable<
          ReturnType<typeof parseStatLine>
        >[];
        if (items.length) elements.push(<BlogStatRow key={key++} items={items} theme={theme} />);
        continue;
      }

      const calloutMatch = directive.match(/^callout(?:\s+(tip|warning|info))?$/);
      if (calloutMatch) {
        const calloutType = (calloutMatch[1] ?? "info") as "tip" | "warning" | "info";
        const calloutLines: string[] = [];
        lineIdx++;
        while (lineIdx < lines.length && !lines[lineIdx].startsWith(":::")) {
          calloutLines.push(lines[lineIdx]);
          lineIdx++;
        }
        const calloutText = calloutLines.join("\n").trim();
        if (calloutText) {
          elements.push(
            <BlogCallout key={key++} type={calloutType} theme={theme}>
              {renderBlogInline(calloutText, `callout-${key}`, theme)}
            </BlogCallout>
          );
        }
        continue;
      }

      const imageMatch = directive.match(/^image(?:\s+(\w+))?$/);
      if (imageMatch) {
        const imageKey = imageMatch[1];
        const captionLines: string[] = [];
        lineIdx++;
        while (lineIdx < lines.length && !lines[lineIdx].startsWith(":::")) {
          if (lines[lineIdx].trim()) captionLines.push(lines[lineIdx].trim());
          lineIdx++;
        }
        const caption = captionLines.join(" ");
        if (imageKey) {
          const image = resolveBlogInlineImage(imageKey);
          if (image) {
            elements.push(
              <BlogInlineImage
                key={key++}
                image={image}
                caption={caption || undefined}
                theme={theme}
              />
            );
          }
        }
        continue;
      }

      if (directive === "quote") {
        const quoteLines: string[] = [];
        lineIdx++;
        while (lineIdx < lines.length && !lines[lineIdx].startsWith(":::")) {
          quoteLines.push(lines[lineIdx]);
          lineIdx++;
        }
        const trimmed = quoteLines.map((l) => l.trim()).filter(Boolean);
        let attribution: string | undefined;
        const bodyLines: string[] = [];
        for (const qLine of trimmed) {
          if (qLine.startsWith("—") || qLine.startsWith("-")) {
            attribution = qLine.replace(/^[—-]\s*/, "");
          } else {
            bodyLines.push(qLine);
          }
        }
        const quoteText = bodyLines.join(" ");
        if (quoteText) {
          elements.push(
            <BlogPullQuote key={key++} attribution={attribution}>
              {renderBlogInline(quoteText, `quote-${key}`, theme)}
            </BlogPullQuote>
          );
        }
        continue;
      }
    }

    if (line.startsWith("|")) {
      const cells = line.split("|").filter((_, i, a) => i > 0 && i < a.length - 1);
      if (cells.every((c) => /^[-:\s]+$/.test(c))) continue;
      if (!inTable) {
        tableHeaders = cells;
        inTable = true;
      } else tableRows.push(cells);
      continue;
    }
    if (inTable) flush();

    if (line.startsWith("## ")) {
      flush();
      h2Count++;
      const headingText = line.slice(3);
      const id = slugifyHeading(headingText.replace(/\*\*/g, ""), headingIndex++);
      elements.push(
        <h2
          key={key++}
          id={id}
          className={
            isAnga
              ? "scroll-mt-28 first:mt-0"
              : "text-2xl font-bold text-blue-950 mt-12 mb-5 font-serif scroll-mt-28 first:mt-0"
          }
        >
          {renderBlogInline(headingText, `h2-${key}`, theme)}
        </h2>
      );
      if (options.midCtaAfterSection && h2Count === options.midCtaAfterSection) {
        elements.push(<BlogMidCta key={key++} theme={theme} />);
      }
    } else if (line.startsWith("### ")) {
      flush();
      elements.push(
        <h3
          key={key++}
          className={
            isAnga
              ? "blog-anga-subhead scroll-mt-28"
              : "text-xl font-semibold text-slate-900 mt-8 mb-3"
          }
        >
          {renderBlogInline(line.slice(4), `h3-${key}`, theme)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      if (listBuffer?.type !== "ul") flushList();
      if (!listBuffer) listBuffer = { type: "ul", items: [] };
      const itemKey = key++;
      listBuffer.items.push(
        <li key={itemKey} className={isAnga ? undefined : "text-slate-700 mb-2 leading-relaxed"}>
          {renderBlogInline(line.slice(2), `li-${itemKey}`, theme)}
        </li>
      );
    } else if (/^\d+\. /.test(line)) {
      if (listBuffer?.type !== "ol") flushList();
      if (!listBuffer) listBuffer = { type: "ol", items: [] };
      const itemKey = key++;
      listBuffer.items.push(
        <li key={itemKey} className={isAnga ? undefined : "text-slate-700 mb-2 leading-relaxed"}>
          {renderBlogInline(line.replace(/^\d+\. /, ""), `oli-${itemKey}`, theme)}
        </li>
      );
    } else if (line.startsWith("---")) {
      flush();
      elements.push(
        <hr key={key++} className={isAnga ? undefined : "border-slate-200 my-4"} />
      );
    } else if (line.trim() === "") {
      if (listBuffer) continue;
      if (!isAnga) elements.push(<div key={key++} className="h-2" />);
    } else {
      flush();
      elements.push(
        <p
          key={key++}
          className={
            isAnga
              ? undefined
              : "text-slate-700 leading-[1.7] mb-4 text-[17px]"
          }
        >
          {renderBlogInline(line, `p-${key}`, theme)}
        </p>
      );
    }
  }
  flush();
  return elements;
}
