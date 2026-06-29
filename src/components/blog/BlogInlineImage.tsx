import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

type Props = {
  image: SiteImage;
  caption?: string;
  theme?: BlogTheme;
};

const ANGA_IMAGE_SIZES = "(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 3rem), 748px";

export function BlogInlineImage({ image, caption, theme = "default" }: Props) {
  const anga = isAngaTheme(theme);

  return (
    <figure className={anga ? "blog-anga-figure my-8 w-full overflow-hidden" : "my-3 -mx-2 sm:mx-0"}>
      <div
        className={
          anga
            ? "relative aspect-[3/2] w-full"
            : "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm w-full"
        }
      >
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={image.src}
            alt={caption?.trim() || image.alt}
            fill
            className="object-cover"
            loading="lazy"
            quality={95}
            sizes={anga ? ANGA_IMAGE_SIZES : "(max-width: 768px) 100vw, 65ch"}
          />
        </div>
      </div>
      {caption && (
        <figcaption
          className={
            anga
              ? "mt-3 text-sm text-slate-500 leading-relaxed"
              : "mt-3 text-sm text-slate-500 leading-relaxed px-2"
          }
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
