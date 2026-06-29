import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { BlogAngaArticleMeta } from "@/components/blog/anga/BlogAngaArticleMeta";
import { BlogAngaAuthorFooter } from "@/components/blog/anga/BlogAngaAuthorFooter";
import { BlogAngaFrame } from "@/components/blog/anga/BlogAngaFrame";
import { BlogAngaRelatedPosts } from "@/components/blog/anga/BlogAngaRelatedPosts";
import { BlogAngaToc } from "@/components/blog/anga/BlogAngaToc";
import { BlogReadingProgress } from "@/components/blog/vercel/BlogReadingProgress";
import { BlogAngaContactCta } from "@/components/blog/anga/BlogAngaContactCta";
import { BlogAngaTldr } from "@/components/blog/anga/BlogAngaTldr";
import { BlogFeaturedImage } from "@/components/blog/BlogFeaturedImage";
import { BlogFaqSection } from "@/components/blog/BlogFaqSection";
import type { BlogHeading } from "@/lib/blog-content-utils";
import { renderBlogContent } from "@/lib/render-blog-content";
import type { SiteImage } from "@/lib/images";
import type { RelatedBlogPost } from "@/lib/blog-related-posts";

export type AngaBlogPost = {
  title: string;
  description: string;
  category: string;
  date: string;
  dateModified?: string;
  readingTime: string;
  relatedServices: { name: string; href: string }[];
  faqs?: { q: string; a: string }[];
  tldr?: string[];
  tldrTitle?: string;
  author?: { name: string; role: string };
};

type Props = {
  post: AngaBlogPost;
  thumbnail: SiteImage;
  headings: BlogHeading[];
  contentForRender: string;
  relatedPosts?: RelatedBlogPost[];
  pageUrl: string;
};

export function BlogAngaLayout({
  post,
  thumbnail,
  headings,
  contentForRender,
  relatedPosts = [],
  pageUrl,
}: Props) {
  const author = post.author ?? { name: "ทีม PhuketSEO", role: "SEO Consultant · ภูเก็ต" };
  const serviceLinks = post.relatedServices.filter((link) => !link.href.startsWith("/blog/"));

  return (
    <div className="blog-anga-page min-h-screen bg-white home-section-bg-white">
      <BrandGradientDefs />
      <BlogReadingProgress />

      <div className="border-b border-slate-100 bg-white pt-24">
        <BlogAngaFrame className="py-3">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "บล็อก", href: "/blog" },
              { label: post.title },
            ]}
          />
        </BlogAngaFrame>
      </div>

      <article className="pb-16 sm:pb-20">
        <BlogAngaFrame>
          <header className="pt-8 sm:pt-10">
            <h1 className="text-[1.75rem] sm:text-[2.125rem] lg:text-[2.375rem] font-bold text-slate-900 tracking-tight leading-[1.2]">
              {post.title}
            </h1>

            <BlogAngaArticleMeta
              category={post.category}
              datePublished={post.date}
              dateModified={post.dateModified}
              readingTime={post.readingTime}
              shareUrl={pageUrl}
              shareTitle={post.title}
            />
          </header>

          <div className="blog-anga-media mb-8 sm:mb-10">
            <BlogFeaturedImage image={thumbnail} theme="anga" />
          </div>

          <BlogAngaToc headings={headings} />

          <div className="blog-prose-anga blog-anga-media">
            {post.tldr && post.tldr.length > 0 && (
              <BlogAngaTldr title={post.tldrTitle} items={post.tldr} />
            )}

            {renderBlogContent(contentForRender, {
              midCtaAfterSection: 5,
              theme: "anga",
            })}
          </div>

          {post.faqs && <BlogFaqSection faqs={post.faqs} theme="anga" />}

          <BlogAngaContactCta />

          <BlogAngaAuthorFooter name={author.name} role={author.role} />

          <BlogAngaRelatedPosts posts={relatedPosts} />

          {serviceLinks.length > 0 && (
            <section className="mt-14 pt-10 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                บริการ<span className="text-gradient-brand">ที่เกี่ยวข้อง</span>
              </h2>
              <ul className="flex flex-wrap gap-2">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50/50 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-colors"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-10 pt-6 border-t border-slate-200">
            <Link href="/blog" className="btn-pill-ghost !px-5 !py-2.5 !text-sm gap-2">
              <ArrowLeft size={15} />
              กลับไปหน้ารวมบทความ
            </Link>
          </div>
        </BlogAngaFrame>
      </article>

      <ServicePageCta
        title="อยากให้ช่วยวางแผน"
        titleAccent="SEO ตามบทความนี้?"
        description="ขอคำปรึกษาฟรี — ช่วยดูช่องว่างหน้าร้านบน Maps คำค้นในโซน และลำดับงานที่ควรทำก่อน ไม่มีข้อผูกมัด"
        secondaryHref="/seo-audit"
        secondaryLabel="ขอ SEO Audit ฟรี"
      />
    </div>
  );
}
