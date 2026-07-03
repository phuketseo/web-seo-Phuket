import type { SiteImage } from "@/lib/images";
import { blogFbPostBySlug } from "@/lib/images";

export type PortraitRatio = "4:5" | "9:16";

export type ArticleImage =
  | { variant: "featured"; width: number; height: number; src: string; alt: string }
  | { variant: "fbNative"; width: 1080; height: 1350; src: string; alt: string }
  | {
      variant: "landscape";
      width: number;
      height: number;
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      variant: "portrait";
      ratio: PortraitRatio;
      src: string;
      alt: string;
      caption?: string;
    };

/** ไฟล์ 4:5 สำหรับโพสต์ native บนเพจ Facebook — ไม่ใช่ og:image */
export function getBlogFbPostImage(slug: string): Extract<ArticleImage, { variant: "fbNative" }> {
  const image = blogFbPostBySlug[slug];
  if (!image) {
    throw new Error(`No Facebook post image configured for slug: ${slug}`);
  }
  return {
    variant: "fbNative",
    width: 1080,
    height: 1350,
    src: image.src,
    alt: image.alt,
  };
}

export function siteImageToPortraitArticle(image: SiteImage, caption?: string): Extract<ArticleImage, { variant: "portrait" }> {
  return {
    variant: "portrait",
    ratio: getPortraitRatioFromSiteImage(image),
    src: image.src,
    alt: image.alt,
    caption,
  };
}

export function getPortraitRatioFromSiteImage(image: SiteImage): PortraitRatio {
  if (image.ratio === "4:5" || image.ratio === "9:16") {
    return image.ratio;
  }
  const aspect = image.width / image.height;
  return aspect > 0.72 ? "4:5" : "9:16";
}
