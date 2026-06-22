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
        <h3 className="font-semibold text-neutral-900 mb-2 tracking-tight">
          อยากให้ช่วยวางแผน SEO?
        </h3>
        <p className="text-neutral-500 leading-relaxed mb-5">
          ขอคำปรึกษาฟรี — ช่วยดูช่องว่าง GBP, keyword ในโซน และลำดับงานที่ควรทำก่อน ไม่มีข้อผูกมัด
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-neutral-900 hover:text-neutral-600 font-medium text-sm underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-600 transition-colors"
        >
          ติดต่อปรึกษา <ArrowRight size={15} />
        </Link>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 sm:p-8">
      <h3 className="text-lg font-bold text-blue-950 font-serif mb-2">อยากให้ช่วยวางแผน SEO?</h3>
      <p className="text-slate-600 text-base leading-relaxed mb-4">
        ขอคำปรึกษาฟรี — ช่วยดูช่องว่าง GBP, keyword ในโซน และลำดับงานที่ควรทำก่อน ไม่มีข้อผูกมัด
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-semibold text-sm underline underline-offset-4"
      >
        ติดต่อปรึกษา <ArrowRight size={15} />
      </Link>
    </div>
  );
}
