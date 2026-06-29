import { Clock } from "lucide-react";
import Link from "next/link";
import { BlogAngaShareButton } from "@/components/blog/anga/BlogAngaShareButton";

type Props = {
  category: string;
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  shareUrl: string;
  shareTitle: string;
};

export function BlogAngaArticleMeta({
  category,
  datePublished,
  dateModified,
  readingTime,
  shareUrl,
  shareTitle,
}: Props) {
  const modified = dateModified ?? datePublished;

  return (
    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between border-b border-slate-200/80 pb-6">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
        <Link
          href="/blog"
          className="inline-flex rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm hover:brightness-105 transition-all"
        >
          {category}
        </Link>
        <span>
          เผยแพร่: <time className="font-medium text-slate-800">{datePublished}</time>
        </span>
        {modified !== datePublished && (
          <span>
            แก้ไขล่าสุด: <time className="font-medium text-slate-800">{modified}</time>
          </span>
        )}
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} className="text-violet-500" aria-hidden />
          <span className="font-medium text-slate-700">{readingTime}</span>
        </span>
      </div>
      <BlogAngaShareButton url={shareUrl} title={shareTitle} />
    </div>
  );
}
