import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

type Props = {
  image: SiteImage;
  priority?: boolean;
  theme?: BlogTheme;
};

export function BlogFeaturedImage({ image, priority = true, theme }: Props) {
  const anga = isAngaTheme(theme);

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
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority={priority}
          quality={95}
          sizes={
            anga
              ? "(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 3rem), 748px"
              : "(max-width: 768px) 100vw, 768px"
          }
        />
      </div>
    </figure>
  );
}
