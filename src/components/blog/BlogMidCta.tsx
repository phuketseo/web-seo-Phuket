import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogTheme } from "@/lib/blog-theme";

type Props = {
  theme?: BlogTheme;
};

export function BlogMidCta({ theme = "default" }: Props) {
  if (theme === "vercel") {
    return (
      <div className="my-12 rounded-lg border border-neutral-200 p-6 sm:p-7">
        <h3 className="text-base font-semibold text-neutral-900 mb-2 tracking-tight">
          ต้องการให้ช่วยวางแผน SEO?
        </h3>
        <p className="text-neutral-500 text-[15px] leading-relaxed mb-5">
          ทีม PhuketSEO ช่วยทำ SEO Audit และ Competitive Review ฟรี 30 นาที — ไม่มีข้อผูกมัด
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-5 py-2.5 rounded-md transition-colors text-sm"
        >
          ขอรับคำปรึกษาฟรี <ArrowRight size={15} />
        </Link>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
      <h3 className="text-lg font-bold text-blue-950 font-serif mb-2">ต้องการให้ช่วยวางแผน SEO?</h3>
      <p className="text-slate-600 text-base leading-relaxed mb-4">
        ทีม PhuketSEO ช่วยทำ SEO Audit และ Competitive Review ฟรี 30 นาที — ไม่มีข้อผูกมัด
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
      >
        ขอรับคำปรึกษาฟรี <ArrowRight size={15} />
      </Link>
    </div>
  );
}
