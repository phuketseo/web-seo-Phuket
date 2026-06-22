"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Home, Search } from "lucide-react";
import { blogCategories, blogPostsMeta } from "@/lib/blog-posts-meta";

const POSTS_PER_PAGE = 3;

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages = new Set<number>([1, total, current, current - 1, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(sorted[i]);
  }
  return result;
}

export function BlogListing() {
  const [category, setCategory] = useState<string>("ทั้งหมด");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPostsMeta.filter((post) => {
      const matchCategory = category === "ทั้งหมด" || post.category === category;
      const matchQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (safePage - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, safePage]);

  const pageNumbers = getPageNumbers(safePage, totalPages);

  useEffect(() => {
    setPage(1);
  }, [category, query]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  function goToPage(next: number) {
    setPage(Math.max(1, Math.min(totalPages, next)));
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900">
      <header className="pt-24 pb-14 px-4 border-b border-neutral-200/80 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-neutral-500 mb-8">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors">
              <Home size={14} />
              หน้าแรก
            </Link>
            <ChevronRight size={14} className="text-neutral-300" />
            <span className="text-neutral-900">บล็อก</span>
          </nav>
          <h1 className="text-3xl sm:text-[2.75rem] font-semibold tracking-tight leading-[1.12]">
            บทความ Digital Marketing ภูเก็ต
          </h1>
          <p className="mt-4 text-neutral-500 text-lg leading-relaxed max-w-xl mx-auto">
            SEO, Local SEO, Social Media และ Web Design — จากประสบการณ์จริงของทีม PhuketSEO
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-sm transition-colors ${
                  category === cat
                    ? "bg-neutral-900 text-white"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาบทความ..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-neutral-500 py-16">ไม่พบบทความที่ตรงกับตัวกรอง</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group flex flex-col bg-white border border-neutral-200/80 rounded-lg overflow-hidden hover:border-neutral-300 transition-colors"
              >
                <div className="relative w-full aspect-[3/2] bg-neutral-100">
                  <Image
                    src={post.thumbnail.src}
                    alt={post.thumbnail.alt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 mb-2">
                    {post.category}
                  </p>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 mb-2 group-hover:underline decoration-neutral-300 underline-offset-4">
                    {post.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <span className="mt-4 text-sm text-neutral-900 font-medium">อ่านบทความ →</span>
                </div>
              </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft size={16} />
                  ก่อนหน้า
                </button>

                <div className="flex items-center gap-1 overflow-x-auto max-w-full px-1">
                  {pageNumbers.map((item, index) =>
                    item === "ellipsis" ? (
                      <span key={`ellipsis-${index}`} className="px-2 text-neutral-400 text-sm">
                        …
                      </span>
                    ) : (
                      <button
                        key={item}
                        type="button"
                        onClick={() => goToPage(item)}
                        aria-current={safePage === item ? "page" : undefined}
                        className={`min-w-[2.25rem] h-9 px-2 rounded-lg text-sm font-medium transition-colors ${
                          safePage === item
                            ? "bg-neutral-900 text-white"
                            : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ถัดไป
                  <ChevronRight size={16} />
                </button>
              </nav>
            )}

            <p className="mt-4 text-center text-sm text-neutral-500">
              แสดง {(safePage - 1) * POSTS_PER_PAGE + 1}–
              {Math.min(safePage * POSTS_PER_PAGE, filtered.length)} จาก {filtered.length} บทความ
            </p>
          </>
        )}
      </main>
    </div>
  );
}
