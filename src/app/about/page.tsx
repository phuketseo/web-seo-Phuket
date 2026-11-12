import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Target } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | ทีม PhuketSEO ในภูเก็ต",
  description:
    "รู้จักทีม PhuketSEO ในภูเก็ต — แนวทางทำงานกับธุรกิจไทยท้องถิ่น ส่ง SEO Audit ใน 7 วัน รายละเอียดบริการแต่ละอย่างอยู่ที่หน้าบริการแยกชัด",
  alternates: { canonical: `${siteConfig.url}/about` },
  robots: { index: true, follow: true },
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
                "@type": "AboutPage",
                "@id": `${siteConfig.url}/about#webpage`,
                url: `${siteConfig.url}/about`,
                name: "เกี่ยวกับทีม PhuketSEO",
                description:
                  "หน้าเกี่ยวกับทีม PhuketSEO ในภูเก็ต แนวทางทำงานและวิธีส่งมอบ รายละเอียดบริการอยู่ที่หน้าบริการแยกชัด",
                inLanguage: "th-TH",
                isPartOf: { "@id": `${siteConfig.url}/#website` },
                about: { "@id": `${siteConfig.url}/#organization` },
                mainEntity: { "@id": `${siteConfig.url}/#organization` },
              },
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
            titleAccent="ทีมเรา"
            description="ทีมในภูเก็ตที่ทำงานกับธุรกิจไทยท้องถิ่น เล่าแนวทางและวิธีส่งมอบ — รายละเอียดแพ็กและราคาอยู่ที่หน้าบริการ ไม่ใช่หน้านี้"
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0">
        <HomeSectionHeader eyebrow="บทบาท" title="หน้านี้เล่าทีม" titleAccent="ไม่ใช่หน้าขายบริการ" />
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            PhuketSEO เป็นทีมในจังหวัดภูเก็ตที่โฟกัสงาน SEO เว็บไซต์ และโครงสร้าง AI Search สำหรับธุรกิจไทยท้องถิ่นในโซนป่าตอง กะตะ
            ตัวเมือง ถลาง กมลา กะทู้ เราทำงานใกล้พื้นที่จริง ไม่ใช่เอเจนซี่ระยะไกลที่ส่งรายงาน keyword อย่างเดียว
          </p>
          <p>
            เราใช้ framework <strong className="text-slate-900">Phuket Visibility Stack™</strong> — Lite (Maps + รีวิว) → Pro
            (เว็บ + SEO + AI) → Pro Max (+ Ads) สำหรับร้านอาหาร สปา อสังหาริมทรัพย์ และ SME
          </p>
          <p>
            ถ้าต้องการดูขอบเขตงาน ราคา และขั้นตอนจ้างงาน ให้ไปที่หน้าบริการหลัก{" "}
            <Link href="/services/seo-phuket" className="text-violet-700 hover:underline font-medium">
              รับทำ SEO ภูเก็ต
            </Link>
            {" · "}
            <Link href="/services/local-seo" className="text-violet-700 hover:underline font-medium">
              รับทำ Local SEO
            </Link>
            {" · "}
            <Link href="/phuketseo" className="text-violet-700 hover:underline font-medium">
              ข้อมูล Entity PhuketSEO
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="Timeline" title="ทีมเราส่งมอบ" titleAccent="ตามช่วงเวลาแบบนี้" centered className="mx-auto" />
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
            เร็ว แต่จุดแข็งหลักของทีมคือ SEO และเว็บไซต์ที่ลูกค้าเห็นผลยั่งยืน
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <Link href="/services/seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ดูหน้าบริการ SEO
          </Link>
          <Link href="/services/google-ads" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ดูบริการ Google Ads
          </Link>
          <Link href="/services/social-media" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ดูบริการ Social Media
          </Link>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader eyebrow="Values" title="ค่า" titleAccent="นิยมของทีม" />
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
            title="อยากรู้จักงานของทีม"
            titleAccent="ต่อ?"
            description="ไปหน้าบริการหลักเพื่อดูขอบเขตและราคา หรือคุยกับทีมผ่านฟอร์มติดต่อ / SEO Audit ฟรี"
            centered
            className="mb-7"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/services/seo-phuket" className="px-7">
              ดูหน้าบริการ SEO
            </GradientButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ติดต่อเรา
            </Link>
            <Link
              href="/seo-audit"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ขอ SEO Audit ฟรี
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
