import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { caseStudies, getCaseStudy, caseStudyJsonLd } from "@/lib/case-studies-data";
import { siteImages } from "@/lib/images";
import type { SiteImage } from "@/lib/images";
import { buildBreadcrumb } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePageCta } from "@/components/services/ServicePageCta";

const caseStudyHeroImages: Record<string, SiteImage> = {
  "phuketseo-website-rebuild": siteImages.services.seo,
};

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "ไม่พบ case study" };
  return {
    title: `${study.title} | PhuketSEO`,
    description: study.challenge,
    alternates: { canonical: `${siteConfig.url}/case-studies/${slug}` },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const heroImage = caseStudyHeroImages[slug] ?? siteImages.services.seo;
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "ผลงาน", url: `${siteConfig.url}/case-studies` },
    { name: study.title, url: `${siteConfig.url}/case-studies/${slug}` },
  ]);

  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(study)) }} />

      <div className="border-b border-slate-100/80 bg-white pt-24">
        <div className="container-custom py-3">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "ผลงาน", href: "/case-studies" },
              { label: study.title },
            ]}
          />
        </div>
      </div>

      <ServiceMarketingHero
        eyebrow="Case Study"
        title={study.client}
        titleAccent={study.isOwnProject ? "เว็บ agency ของเรา" : study.industry}
        description={study.challenge}
        image={heroImage}
        stats={study.outcomes.map((o) => ({ value: o.metric, label: o.label }))}
        trustBadges={[study.industry, study.duration, ...study.services.slice(0, 2)]}
        secondaryHref="#approach"
        secondaryLabel="ดูแนวทางที่ใช้"
      />

      <HomeSection id="approach" variant="muted" className="border-t-0">
        <HomeSectionHeader
          title="แนวทาง"
          titleAccent="ที่ใช้"
          description="ลำดับงานและกลยุทธ์หลักที่ทำให้โปรเจกต์นี้สำเร็จ"
        />
        <ul className="space-y-3">
          {study.approach.map((item) => (
            <li key={item} className="flex gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <CheckCircle size={18} className="text-indigo-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="สิ่งที่ส่งมอบ"
          titleAccent="และผลลัพธ์"
          description="Deliverables ที่ทำจริง และสัญญาณที่วัดได้หลัง launch"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-4">
              สิ่งที่ส่งมอบ
            </p>
            <div className="grid grid-cols-2 gap-3">
              {study.deliverables.map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight tabular-nums">
                    {r.metric}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-4">
              สัญญาณที่วัดได้
            </p>
            <div className="grid grid-cols-2 gap-3">
              {study.outcomes.map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight tabular-nums">
                    {r.metric}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HomeSection>

      {study.quote && (
        <HomeSection variant="muted">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed italic">
              &ldquo;{study.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-slate-500">— {study.client}</footer>
          </blockquote>
        </HomeSection>
      )}

      <HomeSection variant="white" containerClass="max-w-3xl">
        <HomeSectionHeader title="บริการ" titleAccent="ที่เกี่ยวข้อง" centered className="mx-auto" />
        <div className="flex flex-wrap justify-center gap-2">
          {study.services.map((s) => (
            <span
              key={s}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-3.5 py-1.5 rounded-full text-xs sm:text-sm"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="text-center text-slate-600 text-sm mt-6">
          อ่านกรอบงาน:{" "}
          <Link
            href="/methodology/phuket-visibility-stack"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            Phuket Visibility Stack
          </Link>
        </p>
      </HomeSection>

      <ServicePageCta
        title="อยากได้แผนแบบเดียวกัน"
        titleAccent="สำหรับธุรกิจคุณ?"
        description="เริ่มจาก SEO Audit ฟรี — เราวิเคราะห์แล้วบอกลำดับที่เหมาะกับธุรกิจคุณ"
        secondaryHref="/case-studies"
        secondaryLabel="ดูผลงานทั้งหมด"
      />
    </div>
  );
}
