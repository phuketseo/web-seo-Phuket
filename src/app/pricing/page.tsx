import Link from "next/link";
import { Check, X } from "lucide-react";
import { businessEntityId, pricingServicesJsonLd } from "@/lib/schema";
import {
  pricingPackages,
  pricingComparison,
  webSetupPricing,
  planContactHref,
} from "@/lib/pricing-packages";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { PricingPlanGrid } from "@/components/pricing/PricingPlanGrid";
import { GradientButton } from "@/components/GradientButton";
import { siteConfig } from "@/lib/utils";

const pricingPageUrl = `${siteConfig.url}/pricing`;

export const metadata = {
  title: "ราคา SEO ภูเก็ต | Phuket Visibility Stack — Lite / Pro / Pro Max",
  description:
    "แพ็กเกจ SEO ภูเก็ต เริ่ม ฿5,900/เดือน (Lite) Pro ฿8,900 (เว็บ+SEO+AEO/GEO) Pro Max ฿15,000 (รวม Ads) ไม่มีสัญญาผูกมัด",
  alternates: {
    canonical: pricingPageUrl,
  },
  openGraph: {
    title: "ราคา SEO ภูเก็ต | Phuket Visibility Stack",
    description: "แพ็กเกจ SEO Lite ฿5,900 / Pro ฿8,900 / Pro Max ฿15,000 ต่อเดือน",
    url: pricingPageUrl,
    siteName: "PhuketSEO",
    locale: "th_TH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "ราคาบริการ", item: pricingPageUrl },
      ],
    },
    { "@id": businessEntityId },
    ...pricingServicesJsonLd,
  ],
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12 md:py-14">
          <HomeSectionHeader
            eyebrow="Phuket Visibility Stack™"
            title="ราคา SEO"
            titleAccent="ภูเก็ต"
            description={
              <>
                3 แพ็กเกจชัดเจน สำหรับธุรกิจไทยในภูเก็ต — เริ่มจาก{" "}
                <Link href="#lite" className="text-violet-600 font-medium hover:underline underline-offset-2">
                  SEO Lite ฿5,900
                </Link>{" "}
                ไปจนถึง SEO + เว็บ + AI Search + Ads ไม่มีสัญญาผูกมัด
              </>
            }
            className="mb-0 max-w-2xl"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0">
        <PricingPlanGrid packages={pricingPackages} />
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="Setup"
          title="ค่าเว็บไซต์"
          titleAccent="ครั้งเดียว"
          description="สำหรับลูกค้า Pro ที่ยังไม่มีเว็บ — ดูแลรายเดือนรวมใน SEO Pro ฿8,900"
        />
        <div className="grid sm:grid-cols-3 gap-3">
          {webSetupPricing.map((w) => (
            <div
              key={w.name}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <p className="font-semibold text-slate-900 text-sm">{w.name}</p>
              <p className="text-2xl font-bold text-slate-900 tabular-nums mt-2">฿{w.price}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="ฟีเจอร์"
          titleAccent="แต่ละแพ็ก"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-3.5 px-4 sm:px-6 text-left font-semibold text-slate-900">ฟีเจอร์</th>
                <th className="py-3.5 px-3 sm:px-4 text-center font-semibold text-slate-700">Lite</th>
                <th className="py-3.5 px-3 sm:px-4 text-center font-semibold text-violet-700 bg-violet-50/80">
                  Pro
                </th>
                <th className="py-3.5 px-3 sm:px-4 text-center font-semibold text-slate-700">Pro Max</th>
              </tr>
            </thead>
            <tbody>
              {pricingComparison.map((row, i) => (
                <tr
                  key={row.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">{row.name}</td>
                  {(["lite", "pro", "max"] as const).map((tier) => {
                    const val = row[tier];
                    return (
                      <td
                        key={tier}
                        className={`py-3 px-3 sm:px-4 text-center ${tier === "pro" ? "bg-violet-50/40" : ""}`}
                      >
                        {val === true ? (
                          <Check className="w-4 h-4 mx-auto text-indigo-600" strokeWidth={2.5} />
                        ) : val === false ? (
                          <X className="w-4 h-4 mx-auto text-slate-300" strokeWidth={2} />
                        ) : (
                          <span className="text-slate-700 font-medium tabular-nums">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr className="border-t border-slate-200 bg-slate-50">
                <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900">สมัครแพ็ก</td>
                {pricingPackages.map((pkg) => (
                  <td key={pkg.id} className="py-4 px-3 sm:px-4 text-center">
                    <Link
                      href={planContactHref(pkg.id)}
                      className={
                        pkg.popular
                          ? "btn-gradient-brand inline-block text-xs sm:text-sm px-4 py-2"
                          : "inline-block text-xs sm:text-sm font-medium px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
                      }
                    >
                      {pkg.cta}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          Pro Max: ค่า ad spend Google (min ฿10,000) + Meta (min ฿5,000) แยกต่างหาก — ไม่รวมในราคา management
        </p>
      </HomeSection>

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title="ไม่แน่ใจว่าแพ็กไหน"
            titleAccent="เหมาะ?"
            description="ขอคำปรึกษาฟรี เราจะแนะนำแพ็กเกจที่เหมาะกับธุรกิจและงบประมาณของคุณ"
            centered
            className="mb-7"
          />
          <GradientButton href="/contact" className="px-7">
            ขอคำปรึกษาฟรี
          </GradientButton>
        </div>
      </HomeSection>
    </div>
  );
}
