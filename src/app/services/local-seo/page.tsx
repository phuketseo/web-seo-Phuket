import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Star, FileCheck, BarChart3, ImageIcon, MessageCircle, type LucideIcon } from "lucide-react";
import {
  areaServedPhuket,
  areaServedThailand,
  buildBreadcrumb,
  faqSchema,
  localServiceProvider,
} from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { localSeoServiceContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";

export const metadata: Metadata = {
  title: "รับทำ Local SEO | ติด Google Maps ได้จริง - PhuketSEO",
  description:
    "รับทำ Local SEO ให้ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน ป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ ดูแล GBP รีวิว NAP แพ็กเริ่ม ฿5,900/เดือน ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/local-seo` },
  keywords: [
    "รับทำ local seo",
    "บริการ local seo",
    "บริษัทรับทำ local seo",
    "บริการรับทำ local seo",
    "รับทำ seo google maps",
    "google maps seo thailand",
    "local seo",
    "local seo thailand",
  ],
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "รับทำ Local SEO", url: `${siteConfig.url}/services/local-seo` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "รับทำ Local SEO",
  alternateName: [
    "บริการ Local SEO",
    "บริษัทรับทำ Local SEO",
    "รับทำ SEO Google Maps",
    "Google Maps SEO Thailand",
  ],
  provider: localServiceProvider,
  description: localSeoServiceContent.answerBlock,
  areaServed: [areaServedThailand, ...areaServedPhuket],
  serviceType: "Local SEO",
  url: `${siteConfig.url}/services/local-seo`,
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
  localSeoServiceContent.faqs.map((f) => ({ question: f.question, answer: f.answer })),
);

const localSeoProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit Maps และคู่แข่ง",
    desc: "ตรวจ Google Business Profile ข้อมูลหมุดซ้ำ หมวดหมู่ รีวิว และเปรียบเทียบรายการบนแผนที่ในโซน",
    icon: MapPin,
  },
  {
    step: "02",
    title: "ตั้งค่า GBP ให้ครบ",
    desc: "ยืนยันตัวตน แก้ข้อมูล NAP โซนบริการ รูป และหมวดธุรกิจให้ตรงกับบริการจริง",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "รีวิวและความน่าเชื่อถือ",
    desc: "กลยุทธ์ขอรีวิวจากลูกค้าจริง ตอบทุกรายการ และสร้างสัญญาณความน่าเชื่อถือบน Maps",
    icon: Star,
  },
  {
    step: "04",
    title: "รูป โพสต์ และคำค้นโซน",
    desc: "อัปเดตรูปและโพสต์ GBP เป็นประจำ ใช้คำค้นที่ลูกค้าในโซนพิมพ์จริง",
    icon: ImageIcon,
  },
  {
    step: "05",
    title: "รายงานผลรายเดือน",
    desc: "ยอดการแสดงผลบน Maps การโทร ขอเส้นทาง และคำค้นที่โผล่ เป็น KPI ที่วัดได้จริง",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "ดูแลต่อเนื่อง",
    desc: "Local SEO ไม่ใช่งานครั้งเดียว ต้องดูแล listing และคู่แข่งในโซนอย่างสม่ำเสมอ",
    icon: MessageCircle,
  },
];

const commonMistakes = [
  "หมวดหมู่ Google Business Profile ผิด ทำให้โผล่คนละกลุ่มกับลูกค้าที่ค้นหา",
  "ชื่อ ที่อยู่ เบอร์โทรไม่ตรงกันระหว่างเว็บ เพจ และ Maps",
  "มี listing ซ้ำหลายหมุดในโซนเดียวกัน แล้วคะแนนกระจาย",
  "โฟกัสแต่คีย์เวิร์ดบนเว็บ โดยไม่ดูแลรีวิวและโพสต์บน Maps",
  "ยิงแอด Maps ก่อนที่ข้อมูลหมุดและรีวิวยังไม่พร้อมแปลงผล",
];

const localVsAdsRows: { dimension: string; local: string; ads: string }[] = [
  {
    dimension: "เห็นผล",
    local: "Maps มักเริ่มเห็นภายใน 30–60 วัน",
    ads: "เริ่มแสดงได้ภายใน 24–48 ชม. หลังเปิดแคมเปญ",
  },
  {
    dimension: "ค่าใช้จ่าย",
    local: "แพ็กรายเดือน ไม่จ่ายต่อคลิก",
    ads: "ค่าจัดการบวกงบยิงแอดต่อคลิก",
  },
  {
    dimension: "เหมาะเมื่อ",
    local: "ต้องการลูกค้าจาก Maps และคำค้นในโซนระยะยาว",
    ads: "ต้องการ lead เร็ว ช่วงโปรโมชันหรือ high season",
  },
  {
    dimension: "หยุดแล้ว",
    local: "การมองเห็นลดลงช้ากว่า แต่ไม่หายวันเดียว",
    ads: "traffic จากแอดหายทันทีเมื่อหยุดงบ",
  },
  {
    dimension: "ลำดับที่มักถูก",
    local: "ตั้ง GBP และรีวิวก่อน แล้วค่อยเสริมเว็บหรือแอด",
    ads: "หลัง listing และหน้าปลายทางพร้อมแปลงผล",
  },
];

const guideLinks = [
  { href: "/blog/local-seo-kue-arai", label: "Local SEO คืออะไร" },
  { href: "/blog/raaka-local-seo", label: "จ้างทำ Local SEO ราคาเท่าไหร่" },
  { href: "/blog/google-business-profile-local-seo", label: "Google Business Profile" },
  { href: "/blog/leuk-aecensi-local-seo", label: "เลือกเอเยนซี่ Local SEO" },
  { href: "/blog/google-maps-mai-tid-phuket", label: "Google Maps ไม่ติดภูเก็ต" },
  { href: "/services/google-maps-pin", label: "รับปักหมุดธุรกิจ Google Maps ภูเก็ต" },
  { href: "/services/seo-phuket", label: "รับทำ SEO ภูเก็ต" },
  { href: "/services/google-ads", label: "รับทำ Google Ads ภูเก็ต" },
  { href: "/pricing", label: "ดูราคาแพ็กเกจ" },
];

const heroStats = [
  { value: "30–60", label: "วันเห็น Maps impression" },
  { value: "GBP", label: "หัวใจของงาน" },
  { value: "฿5,900", label: "แพ็กเริ่มต้น/เดือน" },
  { value: "0", label: "สัญญาผูกมัด" },
];

export default function LocalSeoServicePage() {
  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <ServiceBreadcrumb serviceName="รับทำ Local SEO" />

      <ServiceMarketingHero
        eyebrow="หน้าบริการหลัก · รับทำ Local SEO"
        title="รับทำ Local SEO"
        titleAccent="ติด Google Maps ได้จริง"
        description="เอเยนซี่ Local SEO สำหรับธุรกิจไทยท้องถิ่น ดูแล Google Business Profile รีวิว และข้อมูล NAP ให้โผล่เมื่อลูกค้าค้นหาในโซนป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ และทั่วไทย"
        answerBlock={localSeoServiceContent.answerBlock}
        image={siteImages.services.localSeo}
        stats={heroStats}
        trustBadges={["เริ่มจาก Maps", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด", "มาตรฐานจากโซนแข่งสูงในภูเก็ต"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {localSeoServiceContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            ยังไม่ยืนยันตัวตนหรือหมุดชี้ผิดซอย เริ่มที่{" "}
            <Link
              href="/services/google-maps-pin"
              className="text-violet-600 font-medium hover:underline underline-offset-2"
            >
              รับปักหมุดธุรกิจ Google Maps ภูเก็ต
            </Link>{" "}
            ก่อนดูแล Local SEO รายเดือน
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
            <Link href="/phuketseo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ข้อมูล PhuketSEO (Entity)
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white">
        <HomeSectionHeader
          eyebrow="ขอบเขตงาน"
          title="รับทำ Local SEO"
          titleAccent="ครอบคลุมอะไรบ้าง"
          description="ไม่รับประกันอันดับ 1 เราวัดจากยอดการแสดงผลบน Maps การโทร ขอเส้นทาง และคำค้นในโซนจริง"
        />
        <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">โซนและประเภทธุรกิจ</h3>
            <p>
              ทำงานกับธุรกิจในป่าตอง กะตะ ตัวเมือง ถลาง กมลา กะทู้ และโซนอื่นในไทย เช่น ร้านอาหาร คาเฟ่ สปา
              คลินิก อสังหาฯ และ SME ที่พึ่งลูกค้าค้นหา Google ก่อนติดต่อ
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5">
            <h3 className="font-semibold text-slate-900 mb-2">สิ่งที่เราวัด</h3>
            <p>
              ยอดการแสดงผลบน Maps การโทร ขอเส้นทาง และคำค้นที่โผล่ ไม่ใช่แค่ screenshot อันดับคีย์เวิร์ด
              ดูเกณฑ์ก่อนจ้างที่{" "}
              <Link
                href="/blog/leuk-aecensi-local-seo"
                className="text-violet-600 font-medium hover:underline underline-offset-2"
              >
                เลือกเอเยนซี่ Local SEO
              </Link>
            </p>
          </div>
        </div>
      </HomeSection>

      <HomeSection variant="muted">
        <HomeSectionHeader
          eyebrow="ปัญหาที่พบบ่อย"
          title="ทำไมธุรกิจมีหน้าร้าน"
          titleAccent="แต่ไม่โผล่บน Maps?"
          description="สาเหตุที่พบบ่อยคือข้อมูลหมุดไม่พร้อม รีวิวน้อย หรือหมวดหมู่ไม่ตรง ไม่ใช่แค่ยังไม่ได้ยิงแอด"
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

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="เปรียบเทียบ"
          title="Local SEO กับ Google Ads"
          titleAccent="ต่างกันอย่างไร?"
          description="Local SEO สร้างฐานจาก Maps โดยไม่จ่ายต่อคลิก Google Ads เร่ง lead เมื่อมีงบ ธุรกิจในภูเก็ตมักใช้ทั้งคู่ตามลำดับงาน"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm sm:text-base text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-4 py-3 font-semibold text-slate-900">มิติ</th>
                <th className="px-4 py-3 font-semibold text-slate-900">รับทำ Local SEO</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Google Ads</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {localVsAdsRows.map((row) => (
                <tr key={row.dimension} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-slate-900">{row.dimension}</td>
                  <td className="px-4 py-3">{row.local}</td>
                  <td className="px-4 py-3">{row.ads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600 text-center">
          อ่านเพิ่ม:{" "}
          <Link
            href="/services/google-ads"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            รับทำ Google Ads ภูเก็ต
          </Link>
          {" · "}
          <Link
            href="/blog/google-ads-vs-seo-phuket"
            className="text-violet-600 font-medium hover:underline underline-offset-2"
          >
            Google Ads vs SEO ภูเก็ต
          </Link>
        </p>
      </HomeSection>

      <HomeSection id="process" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการรับทำ"
          titleAccent="Local SEO ของเรา"
          description="กระบวนการรับทำ Local SEO ของ PhuketSEO เริ่มจาก audit Maps ในโซนจริง ไม่ใช่โพสต์รีวิวอย่างเดียว"
          centered
          className="mx-auto max-w-2xl"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {localSeoProcess.map((p) => (
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
              eyebrow="สิ่งที่ได้"
              title="สิ่งที่รวมอยู่"
              titleAccent="ในบริการ"
              className="mb-6"
            />
            <ul className="space-y-2.5">
              {localSeoServiceContent.deliverables.map((item) => (
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
            features={["GBP + Maps + รีวิว", "รายงาน GBP รายเดือน", "ไม่มีสัญญาผูกมัด", "Pro ฿8,900 (+เว็บ)"]}
            proNote="อ่านเปรียบเทียบแพ็กที่บทความราคา Local SEO หรือหน้า Pricing"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={localSeoServiceContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            พร้อมรับทำ Local SEO?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            ขอคำปรึกษาฟรี เราวิเคราะห์ Google Business Profile และบอกลำดับงานที่ควรทำก่อนในโซนของคุณ
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
