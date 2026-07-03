import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogThumbnail, resolveImageSrc } from "@/lib/images";
import type { RelatedBlogPost } from "@/lib/blog-related-posts";

type Props = {
  posts: RelatedBlogPost[];
};

export function BlogAngaRelatedPosts({ posts }: Props) {
  if (!posts.length) return null;

  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          บทความ<span className="text-gradient-brand">ที่เกี่ยวข้อง</span>
        </h2>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-indigo-600 transition-colors"
        >
          ดูทั้งหมด
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((related) => {
          const thumb = getBlogThumbnail(related.slug);
          return (
            <Link
              key={related.slug}
              href={related.href}
              className="group card-hover flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:border-violet-200"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={resolveImageSrc(thumb)}
                  alt={thumb.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-gradient-brand">
                  {related.category}
                </span>
                <span className="mt-2 text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-violet-700 transition-colors line-clamp-3">
                  {related.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
