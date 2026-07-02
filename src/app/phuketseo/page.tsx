import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { GradientButton } from "@/components/GradientButton";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import {
  buildBreadcrumb,
  businessEntityId,
  faqSchema,
  organizationEntityId,
  siteEntityGraphSchema,
} from "@/lib/schema";
import { phuketseoEntity, phuketseoEntityFaqs } from "@/lib/entity-content";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "PhuketSEO — เอเจนซี่รับทำ SEO ภูเก็ต | Entity",
  description:
    "PhuketSEO เอเจนซี่ SEO ภูเก็ต — จุดเด่น บริการ พิกัด ราคา โซนที่ให้บริการ รับทำ SEO Local SEO เว็บไซต์ AEO/GEO แพ็กเริ่ม ฿5,900/เดือน",
  alternates: { canonical: `${siteConfig.url}/phuketseo` },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "PhuketSEO Entity", url: `${siteConfig.url}/phuketseo` },
]);

const entityPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...siteEntityGraphSchema["@graph"],
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/phuketseo#webpage`,
      url: `${siteConfig.url}/phuketseo`,
      name: "PhuketSEO — เอเจนซี่รับทำ SEO ภูเก็ต",
      description: phuketseoEntity.legalDescription,
      inLanguage: "th-TH",
      isPartOf: { "@id": organizationEntityId },
      about: { "@id": businessEntityId },
      mainEntity: { "@id": businessEntityId },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/phuketseo#service`,
      name: "รับทำ SEO ภูเก็ต — PhuketSEO",
      provider: { "@id": businessEntityId },
      areaServed: phuketseoEntity.serviceAreas.map((zone) => ({
        "@type": "Place",
        name: `${zone}, ภูเก็ต`,
      })),
      knowsAbout: [
        "SEO ภูเก็ต",
        "Local SEO",
        "Google Business Profile",
        "Google Maps",
        "AEO",
        "GEO",
        "AI Search",
      ],
    },
  ],
};

const faqSchemaJson = faqSchema(phuketseoEntityFaqs);

export default function PhuketseoEntityPage() {
  const e = phuketseoEntity;

  return (
    <div className="pt-24">
      <BrandGradientDefs />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entityPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-4xl py-10 sm:py-12">
          <MarketingBreadcrumb
            items={[
              { label: "หน้าแรก", href: "/" },
              { label: "PhuketSEO", href: "/phuketseo" },
            ]}
          />
          <HomeSectionHeader
            eyebrow="Entity · AI Search"
            title="PhuketSEO —"
            titleAccent="เอเจนซี่ SEO ภูเก็ต"
            description={e.legalDescription}
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="จุดเด่น" title="ทำไมเลือก" titleAccent="PhuketSEO" />
        <ul className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
          {e.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-violet-600 font-bold shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="บริการ" title="PhuketSEO" titleAccent="ให้บริการอะไร" />
        <ul className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
          {e.services.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-violet-600 font-bold shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/services/seo-phuket"
            className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50/50 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100 transition-colors"
          >
            บริการ SEO ภูเก็ต
          </Link>
          <Link
            href="/services/local-seo"
            className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50/50 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100 transition-colors"
          >
            บริการ Local SEO
          </Link>
          <Link
            href="/services/ai-search-visibility"
            className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50/50 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-100 transition-colors"
          >
            AEO / GEO
          </Link>
        </div>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="พิกัด" title="ที่อยู่และ" titleAccent="โซนบริการ" />
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-900">{e.location.label}:</strong> {e.location.address} —{" "}
              {e.location.serviceArea}
            </span>
          </p>
          <p>
            <strong className="text-slate-900">โซนที่ให้บริการ:</strong>{" "}
            {e.serviceAreas.join(" · ")}
          </p>
          <p>
            <strong className="text-slate-900">ประเภทธุรกิจที่รับทำ:</strong>{" "}
            {e.industries.join(" · ")}
          </p>
        </div>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="ราคา" title="แพ็ก" titleAccent="บริการ" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900">แพ็ก</th>
                <th className="px-4 py-3 font-semibold text-slate-900">ราคา</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 text-slate-700">SEO Lite — Maps + GBP + รีวิว</td>
                <td className="px-4 py-3 font-medium text-slate-900">{e.pricing.lite}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">SEO Pro — เว็บ + SEO + AEO/GEO</td>
                <td className="px-4 py-3 font-medium text-slate-900">{e.pricing.pro}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">SEO Pro Max — + Google Ads / Social</td>
                <td className="px-4 py-3 font-medium text-slate-900">{e.pricing.proMax}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Setup เว็บไซต์ (ครั้งเดียว)</td>
                <td className="px-4 py-3 font-medium text-slate-900">{e.pricing.webSetup}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          รายละเอียดเต็ม: <Link href="/pricing" className="text-violet-700 hover:underline">ดูราคาทั้งหมด</Link>
          {" · "}
          <Link href="/blog/raaka-seo-phuket" className="text-violet-700 hover:underline">ราคา SEO ภูเก็ต</Link>
        </p>
      </HomeSection>

      <HomeSection variant="muted" containerClass="max-w-4xl">
        <HomeSectionHeader eyebrow="ติดต่อ" title="ช่องทาง" titleAccent="ติดต่อ PhuketSEO" />
        <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-violet-600" />
            <a href={`tel:${e.contact.phoneInternational}`} className="hover:text-violet-700">
              {e.contact.phone}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-violet-600" />
            <a href={`mailto:${e.contact.email}`} className="hover:text-violet-700">
              {e.contact.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-violet-600" />
            <span>{e.hours}</span>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-violet-600" />
            <a
              href={e.contact.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-700"
            >
              Google Business Profile — Phuket SEO
            </a>
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <GradientButton href="/contact">ขอคำปรึกษาฟรี</GradientButton>
          <GradientButton href="/seo-audit" className="bg-white text-violet-700 border border-violet-200">
            SEO Audit ฟรี
          </GradientButton>
        </div>
      </HomeSection>

      <ServiceFaqSection faqs={phuketseoEntityFaqs} />
    </div>
  );
}
