import type { ReactNode } from "react";
import { FigurePortrait } from "@/components/blog/FigurePortrait";
import type { BlogTheme } from "@/lib/blog-theme";
import type { SiteImage } from "@/lib/images";

type Props = {
  image: SiteImage;
  caption?: string;
  theme?: BlogTheme;
  children: ReactNode;
  /** H2 immediately above :::split */
  heading?: ReactNode;
  headingId?: string;
};

/**
 * Single-column section inside ANGA center column (748px).
 * Same stack on all breakpoints: H2 → image → text (mobile-style).
 */
export function BlogTextImageSplit({
  image,
  caption,
  theme = "default",
  children,
  heading,
  headingId,
}: Props) {
  return (
    <section
      className="blog-section-split my-10 sm:my-12 w-full min-w-0"
      aria-label="อินโฟกราฟิคและคำอธิบาย"
    >
      {heading && (
        <h2 id={headingId} className="blog-section-split__heading scroll-mt-28">
          {heading}
        </h2>
      )}
      <FigurePortrait image={image} caption={caption} theme={theme} display="split" />
      <div className="blog-split-prose">{children}</div>
    </section>
  );
}
