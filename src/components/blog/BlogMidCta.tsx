import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import type { BlogTheme } from "@/lib/blog-theme";
import { isAngaTheme } from "@/lib/blog-theme";

type Props = {
  theme?: BlogTheme;
};

export function BlogMidCta({ theme = "default" }: Props) {
  if (isAngaTheme(theme)) {
    return (
      <div className="blog-anga-block-cta my-12 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/40 p-6 sm:p-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
          อยากให้ช่วยวางแผน <span className="text-gradient-brand">SEO</span>?
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
          ขอคำปรึกษาฟรี — ช่วยดูช่องว่างหน้าร้านบน Maps คำค้นในโซน และลำดับงานที่ควรทำก่อน
        </p>
        <GradientButton href="/contact" className="gap-2 px-5 py-2.5">
          ปรึกษาฟรี
          <ArrowRight size={15} aria-hidden className="text-white" />
        </GradientButton>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-white p-6 sm:p-8">
      <h3 className="text-lg font-bold text-slate-900 mb-2">อยากให้ช่วยวางแผน SEO?</h3>
      <p className="text-slate-600 text-base leading-relaxed mb-4">
        ขอคำปรึกษาฟรี — ช่วยดูช่องว่าง GBP, keyword ในโซน และลำดับงานที่ควรทำก่อน ไม่มีข้อผูกมัด
      </p>
      <GradientButton href="/contact" className="gap-2 px-5 py-2.5">
        ปรึกษาฟรี
        <ArrowRight size={15} aria-hidden className="text-white" />
      </GradientButton>
    </div>
  );
}
