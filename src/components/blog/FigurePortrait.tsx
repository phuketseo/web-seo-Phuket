import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import { resolveImageSrc } from "@/lib/images";
import { getPortraitRatioFromSiteImage } from "@/lib/article-image";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

export type FigurePortraitDisplay = "standalone" | "split" | "grid" | "float";

type Props = {
  image: SiteImage;
  caption?: string;
  theme?: BlogTheme;
  display?: FigurePortraitDisplay;
};

const SIZES: Record<FigurePortraitDisplay, string> = {
  standalone: "(max-width: 767px) calc(100vw - 2.5rem), 420px",
  split: "(max-width: 1023px) calc(100vw - 2.5rem), 748px",
  grid: "(max-width: 1023px) calc(100vw - 2.5rem), 360px",
  float: "(max-width: 767px) calc(100vw - 2.5rem), 420px",
};

export function FigurePortrait({
  image,
  caption,
  theme = "default",
  display = "standalone",
}: Props) {
  const anga = isAngaTheme(theme);
  const ratio = getPortraitRatioFromSiteImage(image);
  const alt = caption?.trim() || image.alt;

  const figureClass = [
    "figure-portrait",
    display === "split" ? "figure-portrait--split" : "",
    display === "grid" ? "figure-portrait--grid-item" : "",
    display === "float" ? "figure-portrait--float" : "",
    anga && display !== "split" ? "blog-anga-figure" : "",
    display === "standalone" ? "my-8" : "my-0",
  ]
    .filter(Boolean)
    .join(" ");

  const frameClass = [
    "figure-portrait__frame relative w-full max-w-full min-w-0",
    display === "split"
      ? "figure-portrait__frame--flush overflow-hidden"
      : anga
        ? "overflow-hidden rounded-2xl ring-1 ring-violet-100/80 shadow-sm bg-slate-50"
        : "overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm",
  ].join(" ");

  if (display === "split") {
    return (
      <figure className={figureClass} data-ratio={ratio}>
        <div
          className="figure-portrait__frame figure-portrait__frame--flush relative w-full overflow-hidden"
          style={{ aspectRatio: "4 / 5" }}
        >
          <Image
            src={resolveImageSrc(image)}
            alt={alt}
            fill
            className="figure-portrait__img figure-portrait__img--flush object-cover"
            loading="lazy"
            quality={95}
            sizes={SIZES[display]}
          />
        </div>
        {caption && (
          <figcaption className="figure-portrait__caption mt-3 text-sm text-slate-500 leading-relaxed italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={figureClass} data-ratio={ratio}>
      <div
        className={frameClass}
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        <Image
          src={resolveImageSrc(image)}
          alt={alt}
          fill
          className="figure-portrait__img object-contain"
          loading="lazy"
          quality={95}
          sizes={SIZES[display]}
        />
      </div>
      {caption && (
        <figcaption className="figure-portrait__caption mt-3 text-sm text-slate-500 leading-relaxed italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
