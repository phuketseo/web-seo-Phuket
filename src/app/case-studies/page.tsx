import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies-data";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";

export const metadata: Metadata = {
  title: "ผลงานของเรา - PhuketSEO | กรณีศึกษา SEO + AI Search",
  description:
    "กรณีศึกษา SEO, เว็บ Next.js และ AEO/GEO จาก PhuketSEO — เริ่มจากเว็บ agency ของเราเอง",
  alternates: { canonical: "https://phuketseo.com/case-studies" },
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
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="block bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 sm:p-8 text-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  {study.isOwnProject && (
                    <span className="inline-block bg-white/15 text-indigo-100 text-xs px-3 py-1 rounded-full border border-white/20 mb-2">
                      Case study · เว็บ agency
                    </span>
                  )}
                  <p className="text-indigo-200 text-sm mb-1">
                    {study.client} · {study.industry}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-indigo-100 transition-colors">
                    {study.title}
                  </h3>
                </div>
                <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 shrink-0">
                  {study.duration}
                </span>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed text-sm sm:text-base">{study.challenge}</p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2">สิ่งที่ส่งมอบ</div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.deliverables.map((r) => (
                      <div key={r.label} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-lg sm:text-xl font-bold text-white">{r.metric}</div>
                        <div className="text-xs text-indigo-200">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2">สัญญาณที่วัดได้</div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.outcomes.map((r) => (
                      <div key={r.label} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-lg sm:text-xl font-bold text-white">{r.metric}</div>
                        <div className="text-xs text-indigo-200">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                อ่าน case study เต็ม{" "}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
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
            centered
            className="mb-7"
          />
          <GradientButton href="/seo-audit" className="px-7">
            ขอ SEO Audit ฟรี
          </GradientButton>
        </div>
      </HomeSection>
    </div>
  );
}
