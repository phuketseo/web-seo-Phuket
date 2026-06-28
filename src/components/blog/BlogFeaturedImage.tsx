import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import type { BlogTheme } from "@/lib/blog-theme";

type Props = {
  image: SiteImage;
  priority?: boolean;
  theme?: BlogTheme;
};

export function BlogFeaturedImage({ image, priority = true, theme = "default" }: Props) {
  const isVercel = theme === "vercel";

  return (
    <figure
      className={
        isVercel
          ? "overflow-hidden rounded-lg border border-neutral-200 bg-white"
          : "overflow-hidden rounded-2xl shadow-xl border border-slate-200/80 bg-white"
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
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    </figure>
  );
}
