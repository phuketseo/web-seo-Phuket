import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import { resolveImageSrc } from "@/lib/images";
import { getBlogImageLayout } from "@/lib/blog-image-layout";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

type Props = {
  image: SiteImage;
  priority?: boolean;
  theme?: BlogTheme;
};

const ANGA_IMAGE_SIZES =
  "(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 3rem), 748px";

export function BlogFeaturedImage({ image, priority = true, theme }: Props) {
  const anga = isAngaTheme(theme);
  const layout = getBlogImageLayout(image);
  const sizes = anga ? ANGA_IMAGE_SIZES : "(max-width: 768px) 100vw, 768px";

  if (layout === "portrait") {
    return (
      <figure className="blog-anga-portrait w-full min-w-0 max-w-full">
        <div
          className="blog-anga-portrait__frame relative w-full max-w-full"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        >
          <Image
            src={resolveImageSrc(image)}
            alt={image.alt}
            fill
            className="blog-anga-portrait__img object-contain"
            priority={priority}
            quality={95}
            sizes={sizes}
          />
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={
        anga
          ? "blog-anga-figure overflow-hidden w-full"
          : "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      }
    >
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={resolveImageSrc(image)}
          alt={image.alt}
          fill
          className="object-cover"
          priority={priority}
          quality={95}
          sizes={sizes}
        />
      </div>
    </figure>
  );
}
