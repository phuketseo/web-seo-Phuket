import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingPackage } from "@/lib/pricing-packages";
import { planContactHref } from "@/lib/pricing-packages";

const packageDetailHref: Record<PricingPackage["id"], string> = {
  lite: "/packages/seo-lite",
  pro: "/packages/seo-pro",
  max: "/packages/seo-pro-max",
};

export function PricingPlanGrid({
  packages,
  featureLimit,
}: {
  packages: PricingPackage[];
  /** จำกัดจำนวน bullet — หน้าแรกใช้ 5, หน้าราคาแสดงครบ */
  featureLimit?: number;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-3 md:gap-4">
      {packages.map((p) => {
        const features = featureLimit ? p.features.slice(0, featureLimit) : p.features;
        return (
          <div
            id={p.id}
            key={p.id}
            className={`scroll-mt-28 flex flex-col rounded-xl border bg-white p-6 shadow-sm md:rounded-lg md:shadow-none ${
              p.popular
                ? "border-violet-400 ring-1 ring-violet-400 md:border-violet-500 md:ring-violet-500"
                : "border-slate-300 md:border-slate-200"
            }`}
          >
            {(p.badge || p.popular) && (
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gradient-brand mb-3">
                {p.popular ? "แนะนำ" : p.badge}
              </p>
            )}
            <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
            <p className="text-xs text-slate-600 md:text-slate-500 mt-1">{p.tagline}</p>
            <div className="mb-1 mt-4">
              <span
                className={`text-3xl font-bold tabular-nums tracking-tight ${
                  p.popular ? "text-gradient-brand" : "text-slate-900"
                }`}
              >
                ฿{p.priceLabel}
              </span>
              <span className="text-sm text-slate-500 md:text-slate-400 ml-1">/เดือน</span>
            </div>
            {p.id === "lite" && (
              <p className="text-[11px] text-slate-500 md:text-slate-400 mb-2 leading-relaxed">
                ค่ายิงแอด GBP/Maps แยกจากค่าจัดการ
              </p>
            )}
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{p.desc}</p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-700 md:text-slate-600">
                  <Check
                    size={14}
                    className="shrink-0 mt-0.5 stroke-[url(#brand-gradient)]"
                    strokeWidth={2.5}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={planContactHref(p.id)}
              className={
                p.popular
                  ? "btn-gradient-brand relative z-10 block w-full text-center text-sm py-2.5"
                  : "relative z-10 block w-full text-center text-sm font-medium py-2.5 rounded-lg border border-slate-200 text-slate-700 touch-manipulation active:bg-violet-50 active:border-violet-300 active:text-violet-700 sm:hover:border-violet-200 sm:hover:bg-violet-50/50 transition-colors duration-150"
              }
            >
              {p.cta}
            </Link>
            <Link
              href={packageDetailHref[p.id]}
              className="mt-3 block text-center text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              ดูรายละเอียดแพ็ก →
            </Link>
          </div>
        );
      })}
    </div>
  );
}
