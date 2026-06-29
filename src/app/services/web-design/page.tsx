import type { Metadata } from "next";
import Link from "next/link";
import { Code, Layout, ShoppingCart, Briefcase, PenTool, type LucideIcon } from "lucide-react";
import { siteConfig, defaultOgImage } from "@/lib/utils";
import { faqSchema, buildBreadcrumb, localServiceProvider } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { webDesignContent } from "@/lib/service-content";
import { webSetupPricing } from "@/lib/pricing-packages";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "รับทำเว็บไซต์ภูเก็ต — เว็บเร็ว ติด Google | PhuketSEO",
  description:
    "เว็บเร็ว ติด Google พร้อม SEO และ AI Search structure สำหรับธุรกิจในภูเก็ต Setup จาก ฿29,900 + ดูแลรายเดือนในแพ็ก Pro",
  keywords: ["รับทำเว็บไซต์ภูเก็ต", "ออกแบบเว็บไซต์", "สร้างเว็บไซต์", "เว็บดีไซน์ภูเก็ต", "PhuketSEO"],
  alternates: { canonical: `${siteConfig.url}/services/web-design` },
  openGraph: {
    title: "รับทำเว็บไซต์ภูเก็ต — Next.js เร็ว ติด Google | PhuketSEO",
    description: "เว็บ Next.js mobile-first พร้อม SEO และ AEO structure Setup จาก ฿29,900",
    url: `${siteConfig.url}/services/web-design`,
    type: "website",
    images: [defaultOgImage],
  },
};

const whyChoose = [
  {
    icon: Layout,
    title: "ออกแบบสวยงามและทันสมัย",
    desc: "เว็บที่ดึงดูดสายตา ใช้งานง่าย และสะท้อนเอกลักษณ์ของแบรนด์คุณ",
  },
  {
    icon: Code,
    title: "พัฒนาด้วยเทคโนโลยีล่าสุด",
    desc: "ใช้ Next.js, React และ Tailwind CSS เพื่อประสิทธิภาพสูงสุด ความปลอดภัย และความยืดหยุ่น",
  },
  {
    icon: Briefcase,
    title: "รองรับ SEO เต็มรูปแบบ",
    desc: "เว็บถูกสร้างขึ้นโดยคำนึงถึง SEO เพื่อให้ติดอันดับการค้นหาและเข้าถึงลูกค้าได้มากขึ้น",
  },
];

const siteTypes: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShoppingCart, title: "เว็บไซต์ E-commerce", desc: "ร้านค้าออนไลน์ที่ใช้งานง่าย ปลอดภัย และเพิ่มยอดขาย" },
  { icon: Briefcase, title: "เว็บไซต์องค์กร/ธุรกิจ", desc: "นำเสนอข้อมูลบริษัท บริการ และสร้างความน่าเชื่อถือให้แบรนด์" },
  { icon: PenTool, title: "เว็บไซต์ Portfolio", desc: "แสดงผลงาน ความสามารถ และสร้างแบรนด์ส่วนบุคคลที่น่าประทับใจ" },
  { icon: Layout, title: "เว็บไซต์ Blog/ข่าวสาร", desc: "แพลตฟอร์มสำหรับแบ่งปันความรู้ ข่าวสาร และสร้างชุมชนออนไลน์" },
  { icon: Code, title: "เว็บไซต์ Landing Page", desc: "ออกแบบ Landing Page ที่เน้นการแปลง visitor เป็น lead" },
  { icon: Briefcase, title: "เว็บไซต์อสังหาริมทรัพย์", desc: "นำเสนอโครงการอสังหาฯ ด้วยฟังก์ชันค้นหาและแกลเลอรี" },
];

export default function WebDesignServicePage() {
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "รับทำเว็บไซต์ภูเก็ต", url: `${siteConfig.url}/services/web-design` },
  ]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: breadcrumb.itemListElement },
      {
        "@type": "Service",
        serviceType: "Web Design Service",
        provider: localServiceProvider,
        name: "รับทำเว็บไซต์ภูเก็ต",
        description: webDesignContent.answerBlock,
        url: `${siteConfig.url}/services/web-design`,
        areaServed: { "@type": "Place", name: "ภูเก็ต, ประเทศไทย" },
        offers: {
          "@type": "Offer",
          priceCurrency: "THB",
          priceSpecification: { "@type": "PriceSpecification", minPrice: "29900" },
        },
      },
      faqSchema(webDesignContent.faqs),
    ],
  };

  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceBreadcrumb serviceName="เว็บไซต์ภูเก็ต" />

      <ServiceMarketingHero
        eyebrow="Web Design"
        title="รับทำเว็บไซต์ภูเก็ต"
        titleAccent="เร็ว ติด Google"
        description="เว็บ Next.js mobile-first พร้อม SEO และ AEO structure สำหรับธุรกิจในภูเก็ต"
        answerBlock={webDesignContent.answerBlock}
        image={siteImages.services.webDesign}
        stats={[
          { value: "฿29,900", label: "Setup เริ่มต้น" },
          { value: "Next.js", label: "เทคโนโลยี" },
          { value: "CWV", label: "Core Web Vitals" },
          { value: "Pro", label: "ดูแลรายเดือน" },
        ]}
        trustBadges={["Mobile-first", "SEO + AEO ready", "Schema markup", "Support หลัง launch"]}
        secondaryHref="#site-types"
        secondaryLabel="ดูประเภทเว็บ"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {webDesignContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="text-slate-600">
            อ่านเพิ่ม:{" "}
            <Link href="/blog/web-design-phuket-real-estate" className="text-violet-600 font-medium hover:underline underline-offset-2">
              Web Design อสังหาฯ ภูเก็ต
            </Link>
            {" · "}
            <Link href="/services/seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
              บริการ SEO ภูเก็ต
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="ทำไมต้องเลือก"
          titleAccent="PhuketSEO"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {whyChoose.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm text-center">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection id="site-types" variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="ประเภทเว็บไซต์"
          titleAccent="ที่เราเชี่ยวชาญ"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {siteTypes.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="w-9 h-9 bg-violet-50 text-violet-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader
          eyebrow="Setup"
          title="ค่าเว็บไซต์"
          titleAccent="ครั้งเดียว"
          description="ดูแลรายเดือนรวมในแพ็ก SEO Pro ฿8,900 — หรือขอใบเสนอราคาตาม scope"
          centered
          className="mx-auto"
        />
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {webSetupPricing.map((w) => (
            <div key={w.name} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="font-semibold text-slate-900 text-sm">{w.name}</p>
              <p className="text-2xl font-bold text-slate-900 tabular-nums mt-2">฿{w.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <GradientButton href="/contact" className="px-7">
            ขอใบเสนอราคาฟรี
          </GradientButton>
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={webDesignContent.faqs} />

      <ServicePageCta
        title="พร้อมสร้างเว็บไซต์"
        titleAccent="ในฝัน?"
        description="ให้ PhuketSEO ช่วยออกแบบเว็บที่เร็ว ติด Google และพร้อม AI Search"
        secondaryHref="/pricing"
      />
    </div>
  );
}
