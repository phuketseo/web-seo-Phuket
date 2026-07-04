import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  BarChart3,
  FileText,
  Link2,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { localServiceProvider, areaServedPhuket, faqSchema, buildBreadcrumb } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { seoPhuketContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";

export const metadata: Metadata = {
  title: "รับทำ SEO ภูเก็ต | Maps + Organic สำหรับธุรกิจท้องถิ่น - PhuketSEO",
  description:
    "รับทำ SEO ภูเก็ต — Google Maps, Local SEO, เว็บ และ AEO/GEO สำหรับโรงแรม ร้านอาหาร อสังหาฯ SME ในโซนจริง แพ็กเริ่ม ฿5,900/เดือน ไม่ผูกมัด ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/seo-phuket` },
  keywords: [
    "รับทำ SEO ภูเก็ต",
    "เอเยนซี่ SEO ภูเก็ต",
    "Local SEO ภูเก็ต",
    "SEO ภูเก็ต",
    "จ้างทำ SEO ภูเก็ต",
  ],
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "SEO ภูเก็ต", url: `${siteConfig.url}/services/seo-phuket` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับทำ SEO ภูเก็ต",
  provider: localServiceProvider,
  description:
    "รับทำ SEO ภูเก็ต — Google Maps, Local SEO, On-page, Technical และ AEO/GEO สำหรับธุรกิจท้องถิ่นในจังหวัดภูเก็ต",
  areaServed: areaServedPhuket,
  url: `${siteConfig.url}/services/seo-phuket`,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "5900",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "THB",
      price: "5900",
      unitText: "MONTH",
    },
  },
};

const faqSchemaJson = faqSchema(seoPhuketContent.faqs);

const seoProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit listing & คู่แข่งในโซน",
    desc: "ตรวจ Google Business Profile, NAP, listing ซ้ำ และคู่แข่งในโซนจริง เช่น ป่าตอง กะตะ ตัวเมือง",
    icon: Search,
  },
  {
    step: "02",
    title: "Local SEO & Google Maps",
    desc: "ตั้งค่า GBP รีวิว หมวดหมู่ และ trust ในโซน — ให้ลูกค้า near me เจอก่อน",
    icon: MapPin,
  },
  {
    step: "03",
    title: "On-Page & Technical SEO",
    desc: "ปรับ title, meta, โครงสร้างหน้า, ความเร็ว และ technical ที่ขวางการ index",
    icon: FileText,
  },
  {
    step: "04",
    title: "Keyword & Content ตาม intent",
    desc: "เลือกคำค้นที่ธุรกิจในภูเก็ตถูกค้นหาจริง — ไม่ไล่คำที่ไม่มีคนพิมพ์",
    icon: BarChart3,
  },
  {
    step: "05",
    title: "AEO / GEO structure",
    desc: "จัด FAQ, answer blocks และ entity ให้ AI Overview และ AI search อ้างอิงได้",
    icon: TrendingUp,
  },
  {
    step: "06",
    title: "รายงาน KPI ที่วัดได้",
    desc: "รายงานรายเดือน: impression/click จาก Maps, organic จาก GSC และ conversion ที่ตกลงกัน",
    icon: Link2,
  },
];

const heroStats = [
  { value: "฿5,900", label: "เริ่มต้น / เดือน (Lite)" },
  { value: "6 โซน", label: "ป่าตอง กะตะ ตัวเมือง ฯลฯ" },
  { value: "7 วัน", label: "Audit + แผนงานหลังเริ่ม" },
  { value: "ไม่ผูกมัด", label: "ยกเลิกได้ตามรอบบิล" },
];

const includedItems = [
  "Google Business Profile + Local SEO",
  "Audit listing และคู่แข่งในโซน",
  "On-Page SEO Optimization",
  "Technical SEO Audit & Fix",
  "Keyword ตาม intent ในภูเก็ต",
  "Content ที่ตอบคำถามลูกค้าในโซน",
  "AEO / GEO structure (แพ็ก Pro ขึ้นไป)",
  "รายงาน KPI รายเดือน (Maps + Search)",
  "Core Web Vitals / ความเร็วเว็บ",
  "Schema Markup ที่เกี่ยวข้อง",
];

const guideLinks = [
  { href: "/blog/rab-tam-seo-phuket", label: "เลือกเอเจนซี่รับทำ SEO อย่างไร" },
  { href: "/blog/checklist-seo-phuket", label: "Checklist SEO ภูเก็ต" },
  { href: "/blog/dan-andap-google-maps-phuket", label: "ดันอันดับ Google Maps" },
  { href: "/blog/raaka-seo-phuket", label: "ราคา SEO ภูเก็ต" },
  { href: "/blog/seo-phuket-kue-arai", label: "SEO ภูเก็ต คืออะไร" },
  { href: "/phuketseo", label: "ข้อมูล PhuketSEO (Entity)" },
];

export default function SeoPhuketPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="SEO ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับทำ SEO ภูเก็ต"
        title="รับทำ SEO ภูเก็ต"
        titleAccent="Maps + Organic ในโซนจริง"
        description="เอเยนซี่ SEO ภูเก็ตสำหรับธุรกิจไทยท้องถิ่น — เริ่มจาก Google Maps และ trust ในโซน แล้วเสริมเว็บกับ AEO/GEO ตามลำดับงาน"
        answerBlock={seoPhuketContent.answerBlock}
        image={siteImages.services.seo}
        stats={heroStats}
        trustBadges={["KPI จาก Maps + GSC", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด", "Audit ใน 7 วัน"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {seoPhuketContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านคู่มือที่เกี่ยวข้อง:{" "}
            {guideLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " · " : null}
                <Link href={link.href} className="text-violet-600 font-medium hover:underline underline-offset-2">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับทำ SEO ภูเก็ต"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันอันดับ 1 — เราวัดจากสิ่งที่ธุรกิจใช้ตัดสินใจจริง เช่น call จาก Maps และ organic จาก Search Console"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ทำงานกับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ — โรงแรม ร้านอาหาร สปา อสังหาฯ ทัวร์ คลินิก และ SME
              ที่พึ่งลูกค้าค้นหา Google ก่อนติดต่อ
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่เราวัด (ไม่ใช่แค่ screenshot keyword)</h3>
            <p>
              impression และ click จาก Google Business Profile, organic จาก Google Search Console, ฟอร์มหรือการจองจากเว็บ
              ตามที่ตกลงตอนเริ่มงาน — ดูเกณฑ์ก่อนจ้างใน{" "}
              <Link href="/blog/rab-tam-seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
                บทความรับทำ SEO ภูเก็ต
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ลำดับงานที่มักถูก</h3>
            <p>
              Maps + trust ในโซนก่อน rebuild เว็บยาวๆ — ตาม{" "}
              <Link
                href="/methodology/phuket-visibility-stack"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                Phuket Visibility Stack
              </Link>{" "}
              และเช็กเองได้จาก{" "}
              <Link href="/blog/checklist-seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
                Checklist SEO ภูเก็ต
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ข้อมูลเอเจนซี่แบบ entity</h3>
            <p>
              จุดเด่น บริการ พิกัด และราคาแบบอ้างอิงได้ — ดูที่{" "}
              <Link href="/phuketseo" className="text-violet-600 font-medium hover:underline underline-offset-2">
                หน้า PhuketSEO Entity
              </Link>{" "}
              · NAP ตรงกับ Google Business Profile
            </p>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="AI Search"
          title={seoPhuketContent.aeoSection.title}
          description={
            <>
              รวมในแพ็กเกจ{" "}
              <Link href="/pricing" className="text-violet-600 font-medium hover:underline underline-offset-2">
                SEO Pro ฿8,900/เดือน
              </Link>
            </>
          }
        />
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {seoPhuketContent.aeoSection.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </HomeSection>

      <HomeSection id="process" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการทำ"
          titleAccent="SEO ของเรา"
          description="ขั้นตอนที่พิสูจน์แล้วว่าได้ผล ออกแบบมาเพื่อให้ธุรกิจของคุณติดอันดับและเติบโตอย่างยั่งยืน"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {seoProcess.map((p) => (
            <div
              key={p.step}
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <p.icon size={18} />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-1.5">
                Step {p.step}
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <HomeSectionHeader
              eyebrow="สิ่งที่รวมอยู่"
              title="บริการ SEO"
              titleAccent="ครอบคลุมทุกด้าน"
              className="mb-6"
            />
            <ul className="space-y-2.5">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ServicePricingTeaser
            priceLabel="5,900"
            planName="SEO Lite"
            features={["GBP + Social Proof", "Keyword 5 คำ", "รายงาน GBP", "Pro ฿8,900 (+AEO/GEO)"]}
            proNote="อัปเกรด Pro ได้ทุกเมื่อ — ไม่มีสัญญาผูกมัด"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={seoPhuketContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title="พร้อมให้ธุรกิจของคุณ"
            titleAccent="ติดอันดับ Google?"
            description="ขอคำปรึกษาฟรี เราจะวิเคราะห์เว็บไซต์และแนะนำกลยุทธ์ SEO ที่เหมาะสม"
            centered
            className="mb-7"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:border-violet-200 hover:bg-violet-50/50 transition-colors"
            >
              ดูแพ็กเกจราคา
            </Link>
          </div>
        </div>
      </HomeSection>
    </div>
  );
}
