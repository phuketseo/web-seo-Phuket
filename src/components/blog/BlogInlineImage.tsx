import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import type { BlogTheme } from "@/lib/blog-theme";

type Props = {
  image: SiteImage;
  caption?: string;
  theme?: BlogTheme;
};

export function BlogInlineImage({ image, caption, theme = "default" }: Props) {
  const isVercel = theme === "vercel";

  return (
    <figure className="my-3 -mx-2 sm:mx-0">
      <div
        className={
        isVercel
            ? "overflow-hidden rounded-lg border border-neutral-200 bg-white"
            : "overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 shadow-sm"
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
            sizes="(max-width: 768px) 100vw, 65ch"
          />
        </div>
      </div>
      {caption && (
        <figcaption
          className={
            isVercel
              ? "mt-3 text-sm text-neutral-500 leading-relaxed"
              : "mt-3 text-center text-sm text-slate-500 leading-relaxed px-2"
          }
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
