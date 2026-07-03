import type { SiteImage } from "@/lib/images";

export type BlogImageLayout = "landscape" | "portrait";

/** 3:2 blog inline (default) vs portrait infographic */
export function getBlogImageLayout(image: SiteImage): BlogImageLayout {
  if (image.layout === "portrait" || image.layout === "landscape") {
    return image.layout;
  }
  return image.height > image.width ? "portrait" : "landscape";
}

export function getBlogImageAspectClass(image: SiteImage): string {
  if (getBlogImageLayout(image) !== "portrait") {
    return "aspect-[3/2]";
  }
  if (image.ratio === "4:5") return "aspect-[4/5]";
  return "aspect-[9/16]";
}

export const BLOG_PORTRAIT_SIZE = { width: 1440, height: 1800 } as const;
export const BLOG_LANDSCAPE_SIZE = { width: 3840, height: 2560 } as const;
