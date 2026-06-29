import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Rocket,
  BarChart3,
  Share2,
  MessageCircle,
  Video,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, defaultOgImage } from "@/lib/utils";
import { buildBreadcrumb, localServiceProvider, faqSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { socialMediaContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ServiceMarketingHero } from "@/components/services/ServiceMarketingHero";
import { ServicePricingTeaser } from "@/components/services/ServicePricingTeaser";
import { ServicePageCta } from "@/components/services/ServicePageCta";

export const metadata: Metadata = {
  title: "Social Media Marketing ภูเก็ต — เพิ่มยอดขาย | PhuketSEO",
  description:
    "บริการ Social Media Marketing ภูเก็ต โดยผู้เชี่ยวชาญ เพิ่มการรับรู้แบรนด์ สร้างยอดขาย และเข้าถึงลูกค้าเป้าหมายของคุณ เริ่มต้นเพียง ฿7,900/เดือน",
  alternates: { canonical: `${siteConfig.url}/services/social-media` },
  openGraph: {
    title: "Social Media Marketing ภูเก็ต | PhuketSEO",
    description: "บริการ Social Media Marketing ภูเก็ต — เทคนิคเสริม SEO หลัก",
    url: `${siteConfig.url}/services/social-media`,
    type: "website",
    images: [defaultOgImage],
  },
};

const whySocial: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Lightbulb,
    title: "เข้าถึงกลุ่มเป้าหมายที่กว้างขึ้น",
    desc: "เชื่อมต่อกับลูกค้าทั้งในภูเก็ตและนักท่องเที่ยว สร้างการรับรู้แบรนด์ในวงกว้าง",
  },
  {
    icon: Rocket,
    title: "สร้างการมีส่วนร่วมและยอดขาย",
    desc: "เนื้อหาและแคมเปญที่ตรงจุด กระตุ้นให้ลูกค้ามีส่วนร่วมและตัดสินใจซื้อ",
  },
  {
    icon: BarChart3,
    title: "วิเคราะห์และปรับปรุงกลยุทธ์",
    desc: "ใช้ข้อมูลเชิงลึกวิเคราะห์ประสิทธิภาพ และปรับกลยุทธ์อย่างต่อเนื่อง",
  },
];

const platforms: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Share2,
    title: "Facebook Marketing",
    desc: "กลยุทธ์ Facebook และแคมเปญโฆษณาที่ตรงกลุ่มเป้าหมาย เพิ่ม engagement และยอดขาย",
  },
  {
    icon: MessageCircle,
    title: "Instagram Marketing",
    desc: "ภาพและวิดีโอที่สวยงามบน Instagram ดึงดูดกลุ่มลูกค้าที่ชื่นชอบไลฟ์สไตล์",
  },
  {
    icon: Video,
    title: "TikTok Marketing",
    desc: "วิดีโอสั้นที่สร้างสรรค์บน TikTok สร้างกระแสและเพิ่มการรับรู้แบรนด์อย่างรวดเร็ว",
  },
];

const processSteps = [
  { step: "01", title: "วิเคราะห์", desc: "ทำความเข้าใจธุรกิจ กลุ่มเป้าหมาย และคู่แข่งอย่างลึกซึ้ง" },
  { step: "02", title: "วางแผน", desc: "พัฒนากลยุทธ์ Social Media ที่ปรับให้เข้ากับเป้าหมายและงบประมาณ" },
  { step: "03", title: "ดำเนินการ", desc: "สร้างเนื้อหา จัดการแคมเปญโฆษณา และดูแลช่องทางโซเชียลมีเดีย" },
  { step: "04", title: "รายงานผล", desc: "ติดตาม วิเคราะห์ และรายงานผลลัพธ์ พร้อมปรับปรุงกลยุทธ์" },
];

export default function SocialMediaPage() {
  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "Social Media Marketing", url: `${siteConfig.url}/services/social-media` },
  ]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: breadcrumb.itemListElement },
      {
        "@type": "Service",
        serviceType: "Social Media Marketing",
        provider: localServiceProvider,
        areaServed: { "@type": "Place", name: "ภูเก็ต" },
        description: socialMediaContent.answerBlock,
        name: "Social Media Marketing ภูเก็ต",
        url: `${siteConfig.url}/services/social-media`,
        offers: {
          "@type": "Offer",
          priceCurrency: "THB",
          price: "7900",
          availability: "https://schema.org/InStock",
        },
      },
      faqSchema(socialMediaContent.faqs),
    ],
  };

  return (
    <div>
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceBreadcrumb serviceName="Social Media" />

      <ServiceMarketingHero
        eyebrow="บริการเสริม"
        title="Social Media Marketing"
        titleAccent="ภูเก็ต"
        description="เพิ่มยอดขาย สร้างแบรนด์ให้เป็นที่รู้จัก และเข้าถึงลูกค้าเป้าหมายอย่างมีประสิทธิภาพ"
        answerBlock={socialMediaContent.answerBlock}
        image={siteImages.services.socialMedia}
        stats={[
          { value: "฿7,900", label: "เริ่มต้น/เดือน" },
          { value: "3+", label: "แพลตฟอร์ม" },
          { value: "1-3 เดือน", label: "เห็น engagement" },
          { value: "SEO+", label: "สอดคล้อง GBP" },
        ]}
        trustBadges={["Facebook · Instagram · TikTok", "วางแผนกลยุทธ์", "รายงานรายเดือน", "บริการเสริม SEO หลัก"]}
        secondaryHref="#process"
        secondaryLabel="ดูขั้นตอนการทำงาน"
      />

      <HomeSection variant="muted" className="border-t-0">
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          {socialMediaContent.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p className="text-slate-600">
            บริการหลักของเรา:{" "}
            <Link href="/services/seo-phuket" className="text-violet-600 font-medium hover:underline underline-offset-2">
              SEO ภูเก็ต
            </Link>
            {" · "}
            <Link href="/about" className="text-violet-600 font-medium hover:underline underline-offset-2">
              เกี่ยวกับเรา
            </Link>
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader
          title="ทำไม Social Media"
          titleAccent="สำคัญในภูเก็ต?"
          centered
          className="mx-auto"
        />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {whySocial.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
              <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-6xl">
        <HomeSectionHeader title="แพลตฟอร์ม" titleAccent="ที่เราดูแล" centered className="mx-auto" />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {platforms.map((item) => (
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

      <HomeSection id="process" variant="white" containerClass="max-w-6xl">
        <HomeSectionHeader title="ขั้นตอน" titleAccent="การทำงาน" centered className="mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {processSteps.map((p) => (
            <div key={p.step} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-600 mb-1.5">
                Step {p.step}
              </p>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-lg mx-auto">
        <ServicePricingTeaser
          priceLabel="7,900"
          planName="Starter"
          features={[
            "วางแผนกลยุทธ์เบื้องต้น",
            "สร้างเนื้อหา 8 โพสต์/เดือน",
            "จัดการ 1 แพลตฟอร์ม",
            "รายงานผลรายเดือน",
          ]}
          proNote="มีแพ็ก Professional และ Enterprise — ติดต่อเพื่อรายละเอียด"
        />
      </HomeSection>

      <ServiceFaqSection faqs={socialMediaContent.faqs} />

      <ServicePageCta
        title="พร้อมเริ่ม Social Media"
        titleAccent="แล้ว?"
        description="ปรึกษาผู้เชี่ยวชาญวันนี้ เพื่อวางแผนกลยุทธ์ที่เหมาะกับธุรกิจในภูเก็ต"
        secondaryHref="/services/seo-phuket"
        secondaryLabel="ดูบริการ SEO หลัก"
      />
    </div>
  );
}
