import { FigurePortrait } from "@/components/blog/FigurePortrait";
import type { BlogTheme } from "@/lib/blog-theme";
import type { SiteImage } from "@/lib/images";

export type InfographicGridItem = {
  image: SiteImage;
  caption?: string;
};

type Props = {
  items: InfographicGridItem[];
  theme?: BlogTheme;
};

/**
 * Legacy: two portrait images side-by-side on desktop.
 * Prefer BlogTextImageSplit (:::split) for text + image like homepage.
 */
export function BlogInfographicGrid({ items, theme = "default" }: Props) {
  if (!items.length) return null;

  const isOdd = items.length % 2 === 1;

  return (
    <div
      className="figure-portrait-grid"
      role="group"
      aria-label="อินโฟกราฟิค"
    >
      {items.map((item, index) => {
        const isLastOdd = isOdd && index === items.length - 1;
        return (
          <div
            key={`${item.image.src}-${index}`}
            className={
              isLastOdd
                ? "lg:col-span-2 lg:max-w-md lg:mx-auto w-full min-w-0"
                : "w-full min-w-0"
            }
          >
            <FigurePortrait
              image={item.image}
              caption={item.caption}
              theme={theme}
              display="grid"
            />
          </div>
        );
      })}
    </div>
  );
}
