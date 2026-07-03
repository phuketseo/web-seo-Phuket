import Image from "next/image";
import { FigurePortrait } from "@/components/blog/FigurePortrait";
import type { SiteImage } from "@/lib/images";
import { resolveImageSrc } from "@/lib/images";
import {
  getBlogImageAspectClass,
  getBlogImageLayout,
} from "@/lib/blog-image-layout";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

type Props = {
  image: SiteImage;
  caption?: string;
  theme?: BlogTheme;
  /** standalone = full width · split = column in text+image layout · grid = legacy 2-up grid */
  display?: "standalone" | "grid" | "split";
};

const ANGA_IMAGE_SIZES = "(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 3rem), 748px";

export function BlogInlineImage({
  image,
  caption,
  theme = "default",
  display = "standalone",
}: Props) {
  const layout = getBlogImageLayout(image);
  const anga = isAngaTheme(theme);

  if (layout === "portrait") {
    if (anga) {
      return (
        <figure className="blog-anga-portrait w-full min-w-0 max-w-full my-8">
          <div
            className="blog-anga-portrait__frame relative w-full max-w-full"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image
              src={resolveImageSrc(image)}
              alt={caption?.trim() || image.alt}
              fill
              className="blog-anga-portrait__img object-contain"
              loading="lazy"
              quality={95}
              sizes={ANGA_IMAGE_SIZES}
            />
          </div>
          {caption && (
            <figcaption className="mt-3 text-sm text-slate-500 leading-relaxed italic">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }
    return (
      <FigurePortrait
        image={image}
        caption={caption}
        theme={theme}
        display={display}
      />
    );
  }

  const aspectClass = getBlogImageAspectClass(image);

  const figureClass = [
    anga ? "blog-anga-figure overflow-hidden" : "",
    display === "grid" || display === "split" ? "my-0 w-full max-w-full" : anga ? "my-8 w-full max-w-full" : "my-3 sm:mx-0",
    "w-full",
  ]
    .filter(Boolean)
    .join(" ");

  const frameClass = anga
    ? `relative ${aspectClass} w-full max-w-full`
    : `overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm relative ${aspectClass} w-full max-w-full`;

  const sizes = anga ? ANGA_IMAGE_SIZES : "(max-width: 768px) 100vw, 65ch";

  return (
    <figure className={figureClass}>
      <div className={frameClass}>
        <Image
          src={resolveImageSrc(image)}
          alt={caption?.trim() || image.alt}
          fill
          className="object-cover"
          loading="lazy"
          quality={95}
          sizes={sizes}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-slate-500 leading-relaxed italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
