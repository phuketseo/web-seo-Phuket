import Link from "next/link";
import { Check, X } from "lucide-react";
import { businessEntityId, pricingServicesJsonLd } from "@/lib/schema";
import {
  primaryPricingPackages,
  seoAddonPackage,
  seoAddonFeatures,
  primaryPricingComparison,
  planContactHref,
} from "@/lib/pricing-packages";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { PricingPlanGrid } from "@/components/pricing/PricingPlanGrid";
import { GradientButton } from "@/components/GradientButton";
import { siteConfig } from "@/lib/utils";

const pricingPageUrl = `${siteConfig.url}/pricing`;

export const metadata = {
  title: "ราคารับยิงแอด & เว็บไซต์ภูเก็ต | เริ่ม ฿6,500",
  description:
    "แพ็ก Ads Starter ฿6,500/เดือน (Google หรือ Meta 1 แคมเปญ) เว็บ Starter ฿6,500 ครั้งเดียว ดูแลรายปี ฿4,500 รวมโดเมน — แยกเว็บกับแอดชัดเจน",
  alternates: {
    canonical: pricingPageUrl,
  },
  openGraph: {
    title: "ราคารับยิงแอด & เว็บไซต์ภูเก็ต | PhuketSEO",
    description: "Ads ฿6,500/เดือน · เว็บ ฿6,500 · ดูแลรายปี ฿4,500",
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
    <div className="pt-[var(--site-header-height)]">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12 md:py-14">
          <HomeSectionHeader
            eyebrow="ราคาโปร่งใส"
            title="รับยิงแอด &"
            titleAccent="เว็บไซต์ภูเก็ต"
            description={
              <>
                แยกแพ็กแอดกับเว็บชัดเจน — เริ่มยิงแอด{" "}
                <Link href="#ads-starter" className="text-violet-600 font-medium hover:underline underline-offset-2">
                  ฿6,500/เดือน
                </Link>{" "}
                ทำเว็บ{" "}
                <Link href="#web-starter" className="text-violet-600 font-medium hover:underline underline-offset-2">
                  ฿6,500 ครั้งเดียว
                </Link>{" "}
                ดูแลโดเมน{" "}
                <Link href="#annual-care" className="text-violet-600 font-medium hover:underline underline-offset-2">
                  ฿4,500/ปี
                </Link>
              </>
            }
            className="mb-0 max-w-2xl"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0">
        <PricingPlanGrid packages={primaryPricingPackages} />
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="แพ็กหลัก"
          titleAccent="3 แบบ"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-3.5 px-4 sm:px-6 text-left font-semibold text-slate-900">ฟีเจอร์</th>
                <th className="py-3.5 px-3 sm:px-4 text-center font-semibold text-violet-700 bg-violet-50/80">
                  Ads Starter
                </th>
                <th className="py-3.5 px-3 sm:px-4 text-center font-semibold text-slate-700">เว็บ Starter</th>
                <th className="py-3.5 px-3 sm:px-4 text-center font-semibold text-slate-700">ดูแลรายปี</th>
              </tr>
            </thead>
            <tbody>
              {primaryPricingComparison.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">{row.name}</td>
                  {(["ads", "web", "annual"] as const).map((tier) => {
                    const val = row[tier];
                    return (
                      <td
                        key={tier}
                        className={`py-3 px-3 sm:px-4 text-center ${tier === "ads" ? "bg-violet-50/40" : ""}`}
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
                {primaryPricingPackages.map((pkg) => (
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
          Ads Starter: ค่า ad spend แยก — Google แนะนำขั้นต่ำ ~฿5,000/เดือน Meta ~฿3,000/เดือน ·{" "}
          <Link href="/services/google-ads" className="text-violet-600 font-medium hover:underline underline-offset-2">
            รับทำ Google Ads ภูเก็ต
          </Link>
          {" · "}
          <Link href="/services/social-media" className="text-violet-600 font-medium hover:underline underline-offset-2">
            รับยิงแอด Facebook ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="seo-addon" variant="muted">
        <HomeSectionHeader
          eyebrow="บวกกับเว็บ"
          title="SEO Add-on"
          titleAccent="+฿6,500/เดือน"
          description="ขายพร้อมแพ็กเว็บเท่านั้น — สัญญาขั้นต่ำ 12 เดือน ไม่ขาย SEO แยก"
        />
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <PricingPlanGrid packages={[seoAddonPackage]} />
          <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">สรุปแพ็กเว็บ + SEO</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex justify-between gap-4">
                <span>เว็บ Starter (ครั้งเดียว)</span>
                <span className="font-semibold tabular-nums">฿6,500</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>SEO Add-on × 12 เดือน</span>
                <span className="font-semibold tabular-nums">฿78,000</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>ดูแลรายปี (โดเมน+โฮสต์)</span>
                <span className="font-semibold tabular-nums">฿4,500/ปี</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              แพ็กยิงแอด Ads Starter ฿6,500/เดือน แยก — ยกเลิกได้ทุกเดือน ไม่รวม ad spend
            </p>
            <Link
              href="/packages/seo-addon"
              className="mt-4 inline-block text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              ดูรายละเอียด SEO Add-on →
            </Link>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-3.5 px-4 sm:px-6 text-left font-semibold text-slate-900">SEO Add-on รวม</th>
                <th className="py-3.5 px-4 text-center font-semibold text-slate-700 w-24">มี</th>
              </tr>
            </thead>
            <tbody>
              {seoAddonFeatures.map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="py-3 px-4 sm:px-6 font-medium text-slate-800">{row.name}</td>
                  <td className="py-3 px-4 text-center">
                    {row.included ? (
                      <Check className="w-4 h-4 mx-auto text-indigo-600" strokeWidth={2.5} />
                    ) : (
                      <X className="w-4 h-4 mx-auto text-slate-300" strokeWidth={2} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </HomeSection>

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title="ไม่แน่ใจว่าแพ็กไหน"
            titleAccent="เหมาะ?"
            description="ขอคำปรึกษาฟรี — เราแนะนำแพ็กแอด เว็บ หรือ SEO ตามงบและเป้าหมายธุรกิจในภูเก็ต"
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
