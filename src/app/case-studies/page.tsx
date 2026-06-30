import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies-data";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "ผลงานของเรา - PhuketSEO | กรณีศึกษา SEO + AI Search",
  description:
    "กรณีศึกษา SEO, เว็บ Next.js และ AEO/GEO จาก PhuketSEO — เริ่มจากเว็บ agency ของเราเอง",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "ผลงานของเรา", item: `${siteConfig.url}/case-studies` },
        ],
      },
    ],
  };

  return (
    <div className="pt-24">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12">
          <MarketingBreadcrumb items={[{ label: "หน้าแรก", href: "/" }, { label: "ผลงานของเรา" }]} />
          <HomeSectionHeader
            eyebrow="Case studies"
            title="ผลงาน"
            titleAccent="ของเรา"
            description="กรณีศึกษา SEO + เว็บ + AI Search จาก PhuketSEO — เริ่มจากเว็บ agency ของเราเอง"
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0" containerClass="max-w-4xl">
        <HomeSectionHeader
          title="Case study"
          titleAccent="ที่มีอยู่"
          description="ตอนนี้มี case study จากเว็บของเราเอง — กำลังเพิ่มเรื่องจากลูกค้าธุรกิจในภูเก็ตเมื่อพร้อมเผยแพร่"
          centered
          className="mx-auto"
        />
        <div className="space-y-5">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-violet-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  {study.isOwnProject && (
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-2">
                      Case study · เว็บ agency
                    </span>
                  )}
                  <p className="text-slate-500 text-sm mb-1">
                    {study.client} · {study.industry}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-violet-700 transition-colors">
                    {study.title}
                  </h3>
                </div>
                <span className="bg-slate-50 text-slate-600 text-xs px-3 py-1 rounded-full border border-slate-200 shrink-0">
                  {study.duration}
                </span>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">{study.challenge}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-3">
                    สิ่งที่ส่งมอบ
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {study.deliverables.map((r) => (
                      <div
                        key={r.label}
                        className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-center"
                      >
                        <div className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">{r.metric}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-3">
                    สัญญาณที่วัดได้
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {study.outcomes.map((r) => (
                      <div key={r.label} className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                        <div className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">{r.metric}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 text-violet-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                อ่าน case study เต็ม
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </HomeSection>

      <ServicePageCta
        title="อยากได้แผนแบบเดียวกัน"
        titleAccent="สำหรับธุรกิจคุณ?"
        description={
          <>
            เริ่มจาก SEO Audit ฟรี หรือดู{" "}
            <Link
              href="/methodology/phuket-visibility-stack"
              className="text-violet-600 font-medium hover:underline underline-offset-2"
            >
              Phuket Visibility Stack
            </Link>{" "}
            ว่าเหมาะกับธุรกิจคุณแบบไหน
          </>
        }
        secondaryHref="/seo-audit"
        secondaryLabel="ขอ SEO Audit ฟรี"
      />
    </div>
  );
}
