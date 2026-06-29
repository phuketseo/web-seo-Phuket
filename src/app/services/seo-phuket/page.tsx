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
  title: "รับทำ SEO ภูเก็ต | ติดอันดับ Google ได้จริง - PhuketSEO",
  description:
    "บริการ SEO ภูเก็ต ติดอันดับ Google หน้า 1 สำหรับธุรกิจในภูเก็ต โรงแรม อสังหาฯ ร้านอาหาร ผลลัพธ์วัดได้จริง ขอคำปรึกษาฟรี!",
  alternates: { canonical: `${siteConfig.url}/services/seo-phuket` },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "SEO ภูเก็ต", url: `${siteConfig.url}/services/seo-phuket` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "บริการ SEO ภูเก็ต",
  provider: localServiceProvider,
  description: "บริการ SEO สำหรับธุรกิจในภูเก็ต ติดอันดับ Google หน้า 1",
  areaServed: areaServedPhuket,
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
    title: "วิเคราะห์เว็บไซต์ & คู่แข่ง",
    desc: "ตรวจสอบสภาพเว็บไซต์ปัจจุบัน วิเคราะห์คู่แข่ง และหา Keyword Opportunities ที่ดีที่สุด",
    icon: Search,
  },
  {
    step: "02",
    title: "วางกลยุทธ์ Keyword",
    desc: "เลือก Keywords ที่มี Search Volume สูง Competition ต่ำ และตรงกับกลุ่มเป้าหมายของธุรกิจคุณ",
    icon: BarChart3,
  },
  {
    step: "03",
    title: "On-Page SEO Optimization",
    desc: "ปรับแต่ง Title Tags, Meta Descriptions, Content, Internal Links, Page Speed และ Technical SEO",
    icon: FileText,
  },
  {
    step: "04",
    title: "Content Marketing",
    desc: "สร้าง Content คุณภาพสูงที่ตอบคำถามลูกค้า เพิ่ม Authority และดึง Organic Traffic",
    icon: TrendingUp,
  },
  {
    step: "05",
    title: "Link Building",
    desc: "สร้าง Backlinks คุณภาพสูงจากเว็บไซต์ที่น่าเชื่อถือ เพิ่ม Domain Authority",
    icon: Link2,
  },
  {
    step: "06",
    title: "Local SEO & Google Business",
    desc: "Optimize Google Business Profile ให้ติดอันดับใน Google Maps และ Local Pack",
    icon: MapPin,
  },
];

const heroStats = [
  { value: "+250%", label: "Organic Traffic เฉลี่ย" },
  { value: "Top 3", label: "Keywords ติดอันดับ" },
  { value: "+180%", label: "Leads จาก Organic" },
  { value: "10x", label: "ROI เฉลี่ย" },
];

const includedItems = [
  "Keyword Research & Strategy",
  "On-Page SEO Optimization",
  "Technical SEO Audit & Fix",
  "Content Creation & Optimization",
  "Link Building (White Hat)",
  "Local SEO & Google Business Profile",
  "Competitor Analysis",
  "Monthly Reporting & Analytics",
  "Core Web Vitals Optimization",
  "Schema Markup Implementation",
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
        eyebrow="บริการ SEO ภูเก็ต"
        title="รับทำ SEO ภูเก็ต"
        titleAccent="ติดอันดับ Google ได้จริง"
        description="บริการ SEO สำหรับธุรกิจไทยในภูเก็ต ติด Google Maps และ Organic Search พร้อมโครงสร้าง AEO/GEO"
        answerBlock={seoPhuketContent.answerBlock}
        image={siteImages.services.seo}
        stats={heroStats}
        trustBadges={["ผลลัพธ์วัดได้จริง", "รายงานรายเดือน", "ไม่มีสัญญาผูกมัด", "Support 7 วัน"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {seoPhuketContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านเพิ่ม:{" "}
            <Link href="/blog/seo-phuket-kue-arai" className="text-violet-600 font-medium hover:underline underline-offset-2">
              SEO ภูเก็ต คืออะไร
            </Link>
            {" · "}
            <Link href="/blog/local-seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
              Local SEO Phuket คืออะไร
            </Link>
            {" · "}
            <Link href="/blog/local-seo-phuket-kue-arai" className="text-violet-600 font-medium hover:underline underline-offset-2">
              Local SEO ภูเก็ต
            </Link>
            {" · "}
            <Link href="/blog/raaka-seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
              ราคา SEO ภูเก็ต
            </Link>
          </p>
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
