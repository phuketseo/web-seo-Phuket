import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Star, FileCheck, BarChart3, ImageIcon, MessageCircle, type LucideIcon } from "lucide-react";
import {
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
  title: "บริการ Local SEO | ติด Google Maps ได้จริง - PhuketSEO",
  description:
    "บริการ Local SEO ทำให้ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน — Google Business Profile รีวิว NAP แพ็กเริ่ม ฿5,900/เดือน ขอคำปรึกษาฟรี",
  alternates: { canonical: `${siteConfig.url}/services/local-seo` },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "บริการ Local SEO", url: `${siteConfig.url}/services/local-seo` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "บริการ Local SEO",
  provider: localServiceProvider,
  description: localSeoServiceContent.answerBlock,
  areaServed: areaServedThailand,
  serviceType: "Local SEO",
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
  localSeoServiceContent.faqs.map((f) => ({ question: f.question, answer: f.answer }))
);

const localSeoProcess: { step: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Audit Maps & คู่แข่ง",
    desc: "ตรวจ Google Business Profile listing ซ้ำ หมวดหมู่ รีวิว และเปรียบเทียบรายการบนแผนที่ในโซน",
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
    title: "รีวิว & ความน่าเชื่อถือ",
    desc: "กลยุทธ์ขอรีวิวจากลูกค้าจริง ตอบทุกรายการ และสร้างสัญญาณ trust บน Maps",
    icon: Star,
  },
  {
    step: "04",
    title: "รูป โพสต์ & คำค้นโซน",
    desc: "อัปเดตรูปและโพสต์ GBP เป็นประจำ ใช้คำค้นที่ลูกค้าในโซนพิมพ์จริง",
    icon: ImageIcon,
  },
  {
    step: "05",
    title: "รายงานผลรายเดือน",
    desc: "Maps impressions การโทร ขอเส้นทาง และคำค้นที่โผล่ — KPI ที่วัดได้จริง",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "ดูแลต่อเนื่อง",
    desc: "Local SEO ไม่ใช่งานครั้งเดียว — ดูแล listing และคู่แข่งในโซนอย่างสม่ำเสมอ",
    icon: MessageCircle,
  },
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

      <ServiceBreadcrumb serviceName="บริการ Local SEO" />

      <ServiceMarketingHero
        eyebrow="บริการ Local SEO"
        title="บริการ Local SEO"
        titleAccent="ติด Google Maps ได้จริง"
        description="ทำให้ธุรกิจโผล่ Google Maps เมื่อลูกค้าค้นหาในโซน — ดูแล Google Business Profile รีวิว และข้อมูล NAP ทั่วประเทศไทย"
        answerBlock={localSeoServiceContent.answerBlock}
        image={siteImages.services.localSeo}
        stats={heroStats}
        trustBadges={["ให้บริการทั่วประเทศ", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด", "เริ่มจาก Maps"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {localSeoServiceContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านเพิ่ม:{" "}
            <Link href="/blog/local-seo-kue-arai" className="text-violet-600 font-medium hover:underline underline-offset-2">
              Local SEO คืออะไร
            </Link>
            {" · "}
            <Link href="/blog/raaka-local-seo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              จ้างทำ Local SEO ราคาเท่าไหร่
            </Link>
            {" · "}
            <Link href="/blog/google-business-profile-local-seo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              Google Business Profile
            </Link>
            {" · "}
            <Link href="/blog/leuk-aecensi-local-seo" className="text-violet-600 font-medium hover:underline underline-offset-2">
              เลือกเอเจนซี่ Local SEO
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection id="process" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          eyebrow="ขั้นตอน"
          title="กระบวนการ"
          titleAccent="Local SEO"
          description="เริ่มจาก Google Maps — ชั้นที่ลูกค้าเห็นก่อนตัดสินใจโทรหรือมาหน้าร้าน"
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

      <HomeSection variant="muted" containerClass="max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <HomeSectionHeader
              eyebrow="สิ่งที่ได้"
              title="บริการ Local SEO"
              titleAccent="ครอบคลุมอะไร"
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
            proNote="อ่านเปรียบเทียบแพ็กที่ /blog/raaka-local-seo"
          />
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={localSeoServiceContent.faqs} />

      <HomeSection variant="gradient" containerClass="max-w-2xl">
        <div className="text-center">
          <HomeSectionHeader
            title="พร้อมให้ธุรกิจโผล่"
            titleAccent="Google Maps?"
            description="ขอคำปรึกษาฟรี — วิเคราะห์ Google Business Profile และบอกลำดับงานที่ควรทำก่อน"
            centered
            className="mb-7"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GradientButton href="/contact" className="px-7">
              ขอคำปรึกษาฟรี
            </GradientButton>
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
