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
import { FocusKeywordRankingsTable } from "@/components/services/FocusKeywordRankingsTable";

export const metadata: Metadata = {
  title: "รับทำ SEO ภูเก็ต | Organic + Maps สำหรับธุรกิจท้องถิ่น - PhuketSEO",
  description:
    "รับทำ SEO ภูเก็ต โดยเอเยนซี่ SEO ภูเก็ต ดูแล organic บนเว็บคู่กับ Maps ในโซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ แพ็กเริ่ม ฿5,900/เดือน ไม่ผูกมัด งาน Maps เต็มรูปแบบดูที่รับทำ Local SEO",
  alternates: { canonical: `${siteConfig.url}/services/seo-phuket` },
  keywords: [
    "รับทำ SEO ภูเก็ต",
    "เอเยนซี่ SEO ภูเก็ต",
    "จ้างทำ SEO ภูเก็ต",
    "SEO agency Phuket",
    "SEO service Phuket",
    "Local SEO ภูเก็ต",
    "SEO ภูเก็ต",
  ],
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับทำ SEO ภูเก็ต", url: `${siteConfig.url}/services/seo-phuket` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับทำ SEO ภูเก็ต",
  alternateName: [
    "เอเยนซี่ SEO ภูเก็ต",
    "จ้างทำ SEO ภูเก็ต",
    "SEO agency Phuket",
    "SEO service Phuket",
  ],
  provider: localServiceProvider,
  description: seoPhuketContent.answerBlock,
  areaServed: areaServedPhuket,
  serviceType: "SEO",
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
    url: `${siteConfig.url}/packages/seo-lite`,
  },
};

const faqSchemaJson = faqSchema(
  seoPhuketContent.faqs.map((f) => ({ question: f.question, answer: f.answer })),
);

const seoProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit listing และคู่แข่งในโซน",
    desc: "ตรวจ Google Business Profile, NAP, listing ซ้ำ และคู่แข่งในโซนจริง เช่น ป่าตอง กะตะ ตัวเมือง",
    icon: Search,
  },
  {
    step: "02",
    title: "Google Maps และ GBP",
    desc: "ตั้งค่า GBP รีวิว หมวดหมู่ และ trust ในโซน — งาน Maps เต็มรูปแบบอยู่ที่รับทำ Local SEO",
    icon: MapPin,
  },
  {
    step: "03",
    title: "On-Page และ Technical SEO",
    desc: "ปรับ title, meta, โครงสร้างหน้า ความเร็ว และ technical ที่ขวางการ index",
    icon: FileText,
  },
  {
    step: "04",
    title: "Keyword และ Content ตาม intent",
    desc: "เลือกคำค้นที่ธุรกิจในภูเก็ตถูกค้นหาจริง ไม่ไล่คำที่ไม่มีคนพิมพ์",
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

const commonMistakes = [
  "โฟกัสอันดับคีย์เวิร์ดอย่างเดียว โดยไม่ดูยอดโทรจาก Maps และการจองจริง",
  "rebuild เว็บยาวๆ ก่อนแก้ Google Business Profile และ listing ซ้ำในโซน",
  "ยัดคีย์เวิร์ดทุกโซนในหน้าเดียว โดยไม่แยก intent ตามป่าตอง กะตะ หรือตัวเมือง",
  "จ้างทำ SEO โดยไม่มีรายงาน KPI จาก Search Console และ GBP",
  "หยุดดูแลหลังเห็นผลช่วงแรก ทั้งที่คู่แข่งในโซนยังทำต่อ",
];

const seoVsAdsRows: { dimension: string; seo: string; ads: string }[] = [
  {
    dimension: "เห็นผล",
    seo: "Maps 30–60 วัน organic มัก 3–6 เดือน",
    ads: "เริ่มแสดงได้ภายใน 24–48 ชม. หลังเปิดแคมเปญ",
  },
  {
    dimension: "ค่าใช้จ่าย",
    seo: "แพ็กรายเดือน ไม่จ่ายต่อคลิก",
    ads: "ค่าจัดการบวกงบยิงแอดต่อคลิก",
  },
  {
    dimension: "เหมาะเมื่อ",
    seo: "สร้างฐานระยะยาวลดต้นทุน lead",
    ads: "ต้องการ lead เร็ว high season หรือโปรใหม่",
  },
  {
    dimension: "หยุดแล้ว",
    seo: "การมองเห็นลดลงช้ากว่า แต่ไม่หายวันเดียว",
    ads: "traffic จากแอดหายทันทีเมื่อหยุดงบ",
  },
  {
    dimension: "ลำดับที่มักถูก",
    seo: "Maps และ trust ในโซนก่อน แล้วค่อยเสริมเว็บ",
    ads: "หลัง listing และหน้าปลายทางพร้อมแปลงผล",
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
  { href: "/blog/google-ads-vs-seo-phuket", label: "Google Ads vs SEO ภูเก็ต" },
  { href: "/services/local-seo", label: "รับทำ Local SEO" },
  { href: "/services/google-ads", label: "รับทำ Google Ads ภูเก็ต" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
  { href: "/phuketseo", label: "ข้อมูล PhuketSEO (Entity)" },
];

export default function SeoPhuketPage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="รับทำ SEO ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับทำ SEO ภูเก็ต"
        title="รับทำ SEO ภูเก็ต"
        titleAccent="Organic + Maps ในโซนจริง"
        description="เอเยนซี่ SEO ภูเก็ตสำหรับธุรกิจไทยท้องถิ่น เริ่มจาก trust ในโซนและเว็บ แล้วเสริม Maps ตามลำดับงาน — ถ้าโฟกัส Maps อย่างเดียวดูรับทำ Local SEO"
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
            หน้านี้คือหน้าเงินหลักของคีย์รับทำ SEO ภูเก็ต — ไม่ใช่หน้าเกี่ยวกับทีม (
            <Link href="/about" className="text-violet-600 font-medium hover:underline underline-offset-2">
              เกี่ยวกับทีม PhuketSEO
            </Link>
            ) หรือหน้า Entity (
            <Link href="/phuketseo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              PhuketSEO Entity
            </Link>
            ) ต้องการโฟกัส Google Maps และ GBP เป็นหลักโดยยังไม่รวม organic เต็มแพ็ก ดูหน้า{" "}
            <Link href="/services/local-seo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              รับทำ Local SEO
            </Link>
          </p>
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
          <p className="text-slate-600">
            <Link href="/seo-audit" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ขอ SEO Audit ฟรี
            </Link>
            {" · "}
            <Link href="/contact" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ปรึกษาฟรี
            </Link>
            {" · "}
            <Link href="/packages/seo-lite" className="text-violet-600 font-medium hover:underline underline-offset-2">
              แพ็ก SEO Lite
            </Link>
            {" · "}
            <Link href="/packages/seo-pro" className="text-violet-600 font-medium hover:underline underline-offset-2">
              แพ็ก SEO Pro
            </Link>
            {" · "}
            <Link href="/about" className="text-violet-600 font-medium hover:underline underline-offset-2">
              เกี่ยวกับทีม PhuketSEO
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ผลงานจริง"
          title="อันดับคีย์เวิร์ด"
          titleAccent="ที่เราติดตาม"
          description="เว็บ PhuketSEO ทำ SEO ให้ตัวเองก่อน ตารางนี้คือคีย์โฟกัสที่เช็คอันดับบน Google เป็นระยะ"
        />
        <FocusKeywordRankingsTable />
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับทำ SEO ภูเก็ต"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันอันดับ 1 เราวัดจากสิ่งที่ธุรกิจใช้ตัดสินใจจริง เช่น call จาก Maps และ organic จาก Search Console"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ทำงานกับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ โรงแรม ร้านอาหาร สปา อสังหาฯ ทัวร์ คลินิก และ SME
              ที่พึ่งลูกค้าค้นหา Google ก่อนติดต่อ
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่เราวัด (ไม่ใช่แค่ screenshot keyword)</h3>
            <p>
              impression และ click จาก Google Business Profile, organic จาก Google Search Console, ฟอร์มหรือการจองจากเว็บ
              ตามที่ตกลงตอนเริ่มงาน ดูเกณฑ์ก่อนจ้างใน{" "}
              <Link href="/blog/rab-tam-seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
                บทความรับทำ SEO ภูเก็ต
              </Link>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">ลำดับงานที่มักถูก</h3>
            <p>
              Maps และ trust ในโซนก่อน rebuild เว็บยาวๆ ตาม{" "}
              <Link
                href="/methodology/phuket-visibility-stack"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                Phuket Visibility Stack
              </Link>
              {" "}งาน Maps เต็มรูปแบบส่งต่อที่{" "}
              <Link href="/services/local-seo" className="text-violet-600 font-medium hover:underline underline-offset-2">
                รับทำ Local SEO
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
              จุดเด่น บริการ พิกัด และราคาแบบอ้างอิงได้ ดูที่{" "}
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
          eyebrow="ปัญหาที่พบบ่อย"
          title="ทำ SEO ภูเก็ตแล้ว"
          titleAccent="ทำไมยังไม่เห็น lead?"
          description="สาเหตุที่พบบ่อยคือวัดผิดตัว หรือเริ่มจากงานที่ไม่ตรงลำดับ ไม่ใช่แค่ยังไม่ได้ยิงแอด"
        />
        <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
          {commonMistakes.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="SEO กับ Google Ads"
          titleAccent="ต่างกันอย่างไร?"
          description="SEO สร้างฐานจาก Maps และ organic โดยไม่จ่ายต่อคลิก Google Ads เร่ง lead เมื่อมีงบ ธุรกิจในภูเก็ตมักใช้ทั้งคู่ตามลำดับงาน"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">รับทำ SEO ภูเก็ต</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Google Ads</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {seoVsAdsRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.seo}</td>
                  <td className="px-4 py-3">{row.ads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          อ่านเพิ่ม:{" "}
          <Link
            href="/blog/google-ads-vs-seo-phuket"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            Google Ads vs SEO ภูเก็ต
          </Link>
          {" · "}
          <Link
            href="/services/google-ads"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับทำ Google Ads ภูเก็ต
          </Link>
        </p>
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
          title="กระบวนการรับทำ"
          titleAccent="SEO ภูเก็ตของเรา"
          description="กระบวนการรับทำ SEO ภูเก็ตของ PhuketSEO เริ่มจาก audit listing ในโซนจริง ไม่ใช่รายงาน keyword อย่างเดียว"
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
            proNote="อัปเกรด Pro ได้ทุกเมื่อ ไม่มีสัญญาผูกมัด"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={seoPhuketContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            พร้อมรับทำ SEO ภูเก็ต?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี เราวิเคราะห์ listing ในโซนและบอกลำดับงานที่ควรทำก่อน
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
            <Link
              href="/pricing"
              className="text-sm font-medium text-violet-600 hover:underline underline-offset-2"
            >
              ดูราคาแพ็กเกจทั้งหมด
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
