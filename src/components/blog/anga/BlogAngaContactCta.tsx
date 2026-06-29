import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/GradientButton";

export function BlogAngaContactCta() {
  return (
    <section className="mt-12 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/70 via-white to-indigo-50/50 p-6 sm:p-8 text-center shadow-sm">
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
        พร้อมวิเคราะห์<span className="text-gradient-brand"> Local SEO</span> ตามบทความนี้?
      </h2>
      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
        ขอคำปรึกษาฟรี — ช่วยดูหน้าร้านบน Maps คำค้นในโซน และลำดับงานที่ควรทำก่อน
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <GradientButton href="/contact" className="gap-2 w-full sm:w-auto">
          ขอคำปรึกษาฟรี
          <ArrowRight size={16} aria-hidden className="text-white" />
        </GradientButton>
        <Link href="/seo-audit" className="btn-pill-ghost w-full sm:w-auto justify-center">
          ขอ SEO Audit ฟรี
        </Link>
      </div>
    </section>
  );
}
