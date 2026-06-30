import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, MapPin, Megaphone } from "lucide-react";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/utils";
import { buildBreadcrumb } from "@/lib/schema";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "Phuket Visibility Stack™ — กรอบงาน SEO ภูเก็ต | PhuketSEO",
  description:
    "Phuket Visibility Stack คือกรอบงาน 3 ชั้นสำหรับธุรกิจในภูเก็ต — Local Visibility → Owned Asset → Acceleration วางลำดับ SEO ก่อนขยาย Ads",
  alternates: { canonical: `${siteConfig.url}/methodology/phuket-visibility-stack` },
};

const layers = [
  {
    icon: MapPin,
    layer: "ชั้นที่ 1",
    name: "Local Visibility",
    subtitle: "ให้ลูกค้าเจอบน Google Maps ก่อน",
    problem:
      "ธุรกิจบริการในภูเก็ต — ร้านอาหาร สปา คลินิก — ลูกค้ามักค้นหาในโซนใกล้ก่อนตัดสินใจ",
    focus: [
      "Google Business Profile ครบและ verify",
      "NAP ตรงกันทุกช่องทาง",
      "ระบบรีวิวและ trust signal",
      "โซน/ย่านที่แข่งจริง (ป่าตอง กะตะ ตัวเมือง)",
    ],
    outcome: "Impression และการติดต่อจาก Maps — ลูกค้าเห็นและโทร/ขอเส้นทางได้",
    package: "SEO Lite",
    href: "/blog/google-my-business-phuket",
    linkLabel: "อ่าน Quick Win: Google Business Profile",
  },
  {
    icon: Globe,
    layer: "ชั้นที่ 2",
    name: "Owned Asset",
    subtitle: "เว็บ + Organic Search + AI Search",
    problem:
      "Maps ช่วยให้ถูกเห็นในโซนใกล้ แต่เมื่อลูกค้าอยากดูรายละเอียด หรือค้นหาคำกว้าง — ต้องมีเว็บที่ Google ไว้ใจ",
    focus: [
      "เว็บเร็ว mobile-first (Core Web Vitals)",
      "On-page SEO + content โซนภูเก็ต",
      "Schema, FAQ, llms.txt (AEO/GEO)",
      "Google Search Console + sitemap",
    ],
    outcome: "Organic traffic, query ที่ compound และพร้อม AI Overview",
    package: "SEO Pro",
    href: "/services/ai-search-visibility",
    linkLabel: "ดูบริการ AI Search Visibility",
  },
  {
    icon: Megaphone,
    layer: "ชั้นที่ 3",
    name: "Acceleration",
    subtitle: "Ads เป็นเทคนิคเสริม ไม่ใช่ทดแทน SEO",
    problem:
      "Organic ใช้เวลา compound — เมื่อ foundation พร้อมแล้ว Ads ช่วยดึง lead เร็วในช่วง peak หรือ keyword ที่แข่งสูง",
    focus: [
      "Google Ads / Meta Ads 1 แคมเปญ",
      "Landing page ที่ convert ได้จริง",
      "ROAS วัดคู่ organic trend",
      "ไม่พึ่ง paid 100% — margin ยั่งยืน",
    ],
    outcome: "Lead เร็วขึ้น โดยไม่ทิ้ง asset ที่สะสม (Maps + เว็บ + content)",
    package: "SEO Pro Max",
    href: "/services/google-ads",
    linkLabel: "ดูบริการ Google Ads (เสริม)",
  },
];

const whyOrder = [
  {
    title: "Maps ก่อน เพราะ intent ภูเก็ตเป็น local",
    desc: "ลูกค้าค้นหา near me, ร้านอาหาร ป่าตอง, spa kata — ส่วนใหญ่เริ่มจาก Maps ไม่ใช่เว็บ",
  },
  {
    title: "เว็บเมื่อพร้อม convert",
    desc: "Listing ดีแต่ไม่มีเว็บ = ลูกค้าคลิกแล้วไม่ convert หรือ Google ไม่มีสัญญาณคุณภาพเพียงพอ",
  },
  {
    title: "Ads หลัง foundation",
    desc: "ยิง Ads โดยไม่มี GBP/เว็บที่น่าเชื่อถือ = จ่ายแล้ว lead หลุด — foundation ก่อน scale",
  },
];

const startGuide = [
  { profile: "ร้าน walk-in / SME ยังไม่มี listing", start: "ชั้นที่ 1 — Local Visibility" },
  { profile: "มี Maps แล้ว แต่ไม่มี traffic จาก Search", start: "ชั้นที่ 2 — Owned Asset" },
  { profile: "Organic โตแล้ว ต้องการ lead เร็วในฤดูกาล", start: "ชั้นที่ 3 — Acceleration" },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Phuket Visibility Stack — กรอบงาน SEO ภูเก็ต 3 ชั้น",
  description:
    "วางลำดับการมองเห็นบน Google สำหรับธุรกิจในภูเก็ต: Local Visibility → Owned Asset → Acceleration",
  step: layers.map((l, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: `${l.layer}: ${l.name}`,
    text: `${l.subtitle}. ${l.outcome}`,
  })),
};

export default function MethodologyPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumb([
              { name: "หน้าแรก", url: siteConfig.url },
              { name: "Phuket Visibility Stack", url: `${siteConfig.url}/methodology/phuket-visibility-stack` },
            ])
          ),
        }}
      />

      <div className="border-b border-slate-100/80 bg-white pt-24">
        <div className="container-custom py-3">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "Phuket Visibility Stack" },
            ]}
          />
        </div>
      </div>

      <ServiceMarketingHero
        eyebrow="Methodology"
        title="Phuket Visibility"
        titleAccent="Stack™"
        description="กรอบงาน 3 ชั้น ที่ PhuketSEO ใช้วางลำดับ SEO สำหรับธุรกิจในภูเก็ต — ไม่ใช่รายการราคา แต่คือลำดับที่ควรทำ จาก Maps ไปจนถึง AI Search"
        answerBlock="Local Visibility → Owned Asset → Acceleration — แต่ละชั้นสร้าง asset ที่ compound ไม่ใช่ทำ Ads ก่อนมี listing หรือทำเว็บโดยไม่มี trust บน Maps"
        image={siteImages.hero.home}
        stats={[
          { value: "3", label: "ชั้นของ Stack" },
          { value: "Lite", label: "→ Pro → Pro Max" },
          { value: "Maps", label: "เริ่มจาก Local" },
          { value: "AEO", label: "พร้อม AI Search" },
        ]}
        trustBadges={["ลำดับชัดเจน", "map กับแพ็กจริง", "ไม่มีสัญญาผูกมัด", "ขอ Audit ฟรี"]}
        secondaryHref="#layers"
        secondaryLabel="ดู 3 ชั้นของ Stack"
      />

      <HomeSection variant="muted" className="border-t-0">
        <HomeSectionHeader
          title="Stack นี้แก้ปัญหา"
          titleAccent="อะไร"
          description={
            <>
              ธุรกิจในภูเก็ตมักเจอปัญหาเดียวกัน: <strong className="text-slate-800">ลูกค้าไม่รู้จักบน Google</strong>{" "}
              แต่ไม่รู้ว่าควรเริ่มจาก Maps, เว็บ หรือ Ads
            </>
          }
        />
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
          Phuket Visibility Stack ตอบคำถามว่า <strong className="text-slate-800">ทำอะไรก่อน-หลัง</strong> — แต่ละชั้นสร้าง
          asset ที่ compound ไม่ใช่ทำ Ads ก่อนมี listing หรือทำเว็บโดยไม่มี trust บน Maps
        </p>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="ทำไมต้องเรียง"
          titleAccent="ลำดับแบบนี้"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {whyOrder.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 mb-2 text-sm leading-snug">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection id="layers" variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          title="3 ชั้นของ"
          titleAccent="Stack"
          description={
            <>
              แต่ละชั้น map กับแพ็ก Lite / Pro / Pro Max —{" "}
              <Link
                href="/pricing"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                ดูราคาและรายการ deliver ที่หน้า Pricing
              </Link>
            </>
          }
          centered
          className="mx-auto"
        />

        <div className="space-y-6 sm:space-y-8">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <article
                key={l.layer}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-violet-50 rounded-xl flex items-center justify-center shrink-0 border border-violet-100">
                    <Icon size={22} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600">
                      {l.layer}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{l.name}</h3>
                    <p className="text-violet-700 font-medium text-sm mt-1">{l.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{l.problem}</p>

                <ul className="space-y-2 mb-4">
                  {l.focus.map((item) => (
                    <li key={item} className="flex gap-2.5 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle size={15} className="text-indigo-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-600 bg-slate-50 rounded-xl border border-slate-100 px-4 py-3 mb-4">
                  <span className="font-semibold text-slate-900">ผลลัพธ์ที่คาดหวัง:</span> {l.outcome}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                  <span className="text-slate-500">แพ็กที่สอดคล้อง:</span>
                  <span className="font-semibold text-violet-700">{l.package}</span>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-1 text-violet-600 font-medium hover:gap-2 transition-all"
                  >
                    {l.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-3xl">
        <HomeSectionHeader
          title="ควรเริ่มจาก"
          titleAccent="ชั้นไหน"
          centered
          className="mx-auto"
        />
        <div className="space-y-3">
          {startGuide.map((g) => (
            <div
              key={g.profile}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-4"
            >
              <p className="text-slate-600 text-sm flex-1">{g.profile}</p>
              <p className="font-semibold text-violet-700 text-sm shrink-0">{g.start}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-600 text-sm mt-6">
          ไม่แน่ใจ?{" "}
          <Link href="/seo-audit" className="text-violet-600 font-medium hover:underline underline-offset-2">
            ขอ Audit ฟรี
          </Link>{" "}
          — เราวิเคราะห์แล้วบอกลำดับที่เหมาะกับธุรกิจคุณ
        </p>
      </HomeSection>

      <ServicePageCta
        title="Stack คือกรอบงาน"
        titleAccent="ราคาอยู่ที่ Pricing"
        description="ดูราคา Lite / Pro / Pro Max และรายการ deliver ครบ — หรือขอคำปรึกษาฟรีเพื่อวางลำดับที่เหมาะกับธุรกิจคุณ"
        secondaryHref="/pricing"
        secondaryLabel="ดูแพ็กเกจราคา"
      />
    </div>
  );
}
