import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Target } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา - PhuketSEO | SEO + เว็บไซต์ภูเก็ต",
  description:
    "PhuketSEO ทีม SEO + Web ในภูเก็ต โฟกัสธุรกิจไทยท้องถิ่น ส่ง SEO Audit ใน 7 วัน แพ็กเกจ Lite ฿5,900 / Pro ฿8,900 / Pro Max ฿15,000",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const deliveryTimeline = [
  { period: "7 วัน", title: "SEO Audit + แผนงาน", desc: "วิเคราะห์เว็บ, GBP, คู่แข่ง และ keyword โซนภูเก็ต" },
  { period: "14 วัน", title: "Quick Wins", desc: "แก้ GBP, on-page หลัก, schema และระบบขอรีวิว" },
  { period: "30-60 วัน", title: "GBP + Impression", desc: "เริ่มเห็น views/calls จาก Google Maps" },
  { period: "3-6 เดือน", title: "Organic Traffic", desc: "traffic และ leads จาก Google Search ชัดขึ้น" },
];

const values = [
  { icon: Target, title: "โฟกัสชัด", desc: "ทำเฉพาะ SEO + เว็บ + AI Search — ไม่กระจายไปทุกอย่าง" },
  { icon: CheckCircle, title: "ส่งมอบได้จริง", desc: "ทุกแพ็กมี deliverables ชัด ไม่ over-promise" },
  { icon: Clock, title: "เห็นผลเร็ว", desc: "Audit 7 วัน, GBP impression 30–60 วัน, traffic 3–6 เดือน" },
];

export default function AboutPage() {
  return (
    <div className="pt-[var(--site-header-height)]">
      <BrandGradientDefs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "หน้าแรก", item: siteConfig.url },
                  { "@type": "ListItem", position: 2, name: "เกี่ยวกับเรา", item: `${siteConfig.url}/about` },
                ],
              },
            ],
          }),
        }}
      />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12">
          <MarketingBreadcrumb items={[{ label: "หน้าแรก", href: "/" }, { label: "เกี่ยวกับเรา" }]} />
          <HomeSectionHeader
            eyebrow="PhuketSEO"
            title="เกี่ยวกับ"
            titleAccent="เรา"
            description="รับทำ SEO + เว็บไซต์ภูเก็ต สำหรับธุรกิจไทยท้องถิ่น — ติด Google, เว็บเร็ว, พร้อม AI Search"
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0">
        <HomeSectionHeader eyebrow="บริการ" title="เราทำ" titleAccent="อะไร" />
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            PhuketSEO โฟกัสบริการที่ส่งมอบได้จริงและเห็นผลเร็ว: <strong className="text-slate-900">SEO ภูเก็ต</strong>,{" "}
            <strong className="text-slate-900">เว็บไซต์ที่ Google ชอบ</strong>, และ{" "}
            <strong className="text-slate-900">โครงสร้าง AEO/GEO</strong> ให้โผล่ AI Overview
          </p>
          <p>
            เราใช้ framework <strong className="text-slate-900">Phuket Visibility Stack™</strong> — Lite (Maps + รีวิว) → Pro
            (เว็บ + SEO + AI) → Pro Max (+ Ads) ออกแบบมาสำหรับร้านอาหาร สปา อสังหาริมทรัพย์ และ SME ในภูเก็ต
          </p>
          <p>
            ข้อมูลจุดเด่น บริการ พิกัด และราคาแบบ entity สำหรับ AI Search:{" "}
            <Link href="/phuketseo" className="text-violet-700 hover:underline font-medium">
              PhuketSEO Entity
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="Timeline" title="ส่งมอบอะไร" titleAccent="เมื่อไหร่" centered className="mx-auto" />
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {deliveryTimeline.map((item) => (
            <div key={item.period} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-2">
                <Clock size={16} />
                {item.period}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          title="ทำไมไม่รับจัดการ Ads/Social"
          titleAccent="แบบเต็มรูปแบบ?"
        />
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Google Ads และ Social Media เป็นเทคนิคการตลาดที่สำคัญ — เราแนะนำและสอนลูกค้าในแพ็กเกจ SEO (เช่น ขอรีวิว,
            GBP posts) แต่การจัดการแคมเปญ Ads และโพสต์ Social รายวันต้องการทีม specialist
          </p>
          <p>
            แพ็กเกจ <strong className="text-slate-900">SEO Pro Max</strong> รวม Google + Meta Ads management สำหรับลูกค้าที่ต้องการ lead
            เร็ว แต่บริการหลักที่เราเชี่ยวชาญคือ <strong className="text-slate-900">SEO + เว็บไซต์</strong> ที่ลูกค้าเห็นผลยั่งยืน
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <Link href="/services/google-ads" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ดูบริการ Google Ads (เสริม)
          </Link>
          <Link href="/services/social-media" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ดูบริการ Social Media (เสริม)
          </Link>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader eyebrow="Values" title="ค่า" titleAccent="นิยม" />
        <div className="space-y-4">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 items-start rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                <v.icon size={18} className="text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title="พร้อมเริ่มต้น"
            titleAccent="แล้ว?"
            description="ขอคำปรึกษาฟรี หรือขอ SEO Audit ไม่มีค่าใช้จ่าย"
            centered
            className="mb-7"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ติดต่อเรา
            </GradientButton>
            <Link
              href="/seo-audit"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ขอ SEO Audit ฟรี
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ดูราคา
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
