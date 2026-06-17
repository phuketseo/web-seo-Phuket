import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { BlogArticleMeta } from "@/components/blog/vercel/BlogArticleMeta";
import { BlogAuthorBox } from "@/components/blog/vercel/BlogAuthorBox";
import { BlogGridBackground } from "@/components/blog/vercel/BlogGridBackground";
import { BlogReadingProgress } from "@/components/blog/vercel/BlogReadingProgress";
import { BlogTldr } from "@/components/blog/vercel/BlogTldr";
import { BlogFeaturedImage } from "@/components/blog/BlogFeaturedImage";
import { BlogFaqSection } from "@/components/blog/BlogFaqSection";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import type { BlogHeading } from "@/lib/blog-content-utils";
import { renderBlogContent } from "@/lib/render-blog-content";
import type { SiteImage } from "@/lib/images";
import type { RelatedBlogPost } from "@/lib/blog-related-posts";

export type VercelBlogPost = {
  title: string;
  description: string;
  category: string;
  readingTime: string;
  relatedServices: { name: string; href: string }[];
  faqs?: { q: string; a: string }[];
  tldr?: string[];
  tldrTitle?: string;
  author?: { name: string; role: string };
};

type Props = {
  post: VercelBlogPost;
  thumbnail: SiteImage;
  headings: BlogHeading[];
  contentForRender: string;
  relatedPosts?: RelatedBlogPost[];
};

export function BlogVercelLayout({ post, thumbnail, headings, contentForRender, relatedPosts = [] }: Props) {
  const author = post.author ?? { name: "ทีม PhuketSEO", role: "SEO Consultant · ภูเก็ต" };
  const serviceLinks = post.relatedServices.filter((link) => !link.href.startsWith("/blog/"));

  return (
    <BlogGridBackground>
      <BlogReadingProgress />

      <header className="pt-24 pb-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-neutral-500 mb-10">
            <Link href="/blog" className="hover:text-neutral-900 transition-colors">
              บล็อก
            </Link>
            <ChevronRight size={14} className="text-neutral-300" />
            <span className="text-neutral-900">{post.category}</span>
          </nav>

          <h1 className="text-3xl sm:text-[2.75rem] font-semibold tracking-tight leading-[1.12] text-neutral-900 max-w-2xl mx-auto">
            {post.title}
          </h1>

          <BlogAuthorBox name={author.name} role={author.role} />

          <BlogArticleMeta readingTime={post.readingTime} />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16 xl:gap-20">
          <aside className="hidden lg:block">
            <BlogTableOfContents headings={headings} theme="vercel" />
          </aside>

          <article className="min-w-0">
            <BlogTableOfContents headings={headings} variant="mobile" theme="vercel" />

            <div className="mb-8">
              <BlogFeaturedImage image={thumbnail} theme="vercel" />
            </div>

            {post.tldr && post.tldr.length > 0 && (
              <BlogTldr title={post.tldrTitle} items={post.tldr} />
            )}

            <div className="blog-prose blog-prose-vercel">
              {renderBlogContent(contentForRender, {
                midCtaAfterSection: 5,
                theme: "vercel",
              })}
            </div>

            {post.faqs && <BlogFaqSection faqs={post.faqs} theme="vercel" />}

            {relatedPosts.length > 0 && (
              <section className="mt-14 pt-10 border-t border-neutral-200/80">
                <h3 className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-500 mb-4">
                  บทความที่เกี่ยวข้อง
                </h3>
                <ul className="space-y-4">
                  {relatedPosts.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={related.href}
                        className="group block rounded-lg border border-neutral-200/80 bg-white px-4 py-3 hover:border-neutral-300 transition-colors"
                      >
                        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400">
                          {related.category}
                        </span>
                        <span className="mt-1 block text-[15px] text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">
                          {related.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {serviceLinks.length > 0 && (
            <section className="mt-14 pt-10 border-t border-neutral-200/80">
              <h3 className="text-sm font-medium uppercase tracking-[0.1em] text-neutral-500 mb-4">
                บริการที่เกี่ยวข้อง
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-[15px] text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 transition-colors"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            )}

            <div className="mt-10 pt-6 border-t border-neutral-200/80">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft size={15} />
                กลับไปหน้ารวมบทความ
              </Link>
            </div>
          </article>
        </div>
      </div>

      <section className="border-t border-neutral-200/80 bg-neutral-50/50 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-neutral-600 mb-6 leading-relaxed text-[15px]">
            อยากให้ช่วยวางแผน SEO ตามบริบทธุรกิจของคุณ? ปรึกษาฟรี 30 นาที — ไม่มีข้อผูกมัด
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-md transition-colors"
          >
            ติดต่อปรึกษา
          </Link>
        </div>
      </section>
    </BlogGridBackground>
  );
}
