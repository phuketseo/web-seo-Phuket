import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  MapPin,
  Calendar,
  RefreshCw,
  Users,
  ExternalLink,
} from "lucide-react";
import { buildBreadcrumb, faqSchema, localServiceProvider, areaServedPhuket } from "@/lib/schema";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";
import {
  type PackagePageContent,
  getPackagePricing,
  packageContactHref,
} from "@/lib/package-pages-content";

type Props = {
  content: PackagePageContent;
};

export function PackageDetailPage({ content }: Props) {
  const pricing = getPackagePricing(content.id);
  const pageUrl = `${siteConfig.url}${content.path}`;

  const breadcrumbSchema = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "ราคาบริการ", url: `${siteConfig.url}/pricing` },
    { name: pricing.name, url: pageUrl },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pricing.name,
    description: content.metaDescription,
    provider: localServiceProvider,
    areaServed: areaServedPhuket,
    offers: {
      "@type": "Offer",
      price: pricing.price,
      priceCurrency: "THB",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: pricing.price,
        priceCurrency: "THB",
        unitText: "MONTH",
      },
      url: pageUrl,
    },
  };

  const faqSchemaJson = faqSchema(content.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      <div className="bg-gray-50 border-b border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-700">
              หน้าแรก
            </Link>
            <span>/</span>
            <Link href="/pricing" className="hover:text-blue-700">
              ราคา
            </Link>
            <span>/</span>
            <span className="text-blue-700 font-medium">{pricing.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 to-indigo-900 py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {content.heroBadge}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-2">
              {content.heroTitle}
              <br />
              <span className="text-green-400">{content.heroHighlight}</span>
            </h1>
            <p className="text-3xl font-bold text-white mt-4 mb-2">
              ฿{pricing.priceLabel}
              <span className="text-lg font-normal text-blue-200">/เดือน</span>
            </p>
            <p className="text-blue-200 text-lg leading-relaxed mb-6">{content.heroSubtitle}</p>
            <p className="text-white/95 text-base leading-relaxed mb-8 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
              {content.answerBlock}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={packageContactHref(content.id)}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                {pricing.cta} <ArrowRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl"
              >
                เปรียบเทียบแพ็ก
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Monthly deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-blue-950 mb-3 text-center">{content.monthlyTitle}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">{content.monthlyIntro}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl border border-green-100 bg-green-50/50 p-6">
              <div className="flex items-center gap-2 text-green-800 font-bold mb-4">
                <Calendar size={20} />
                เดือนที่ 1 (Setup)
              </div>
              <ul className="space-y-3">
                {content.monthOneItems.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                    <CheckCircle size={18} className="text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
              <div className="flex items-center gap-2 text-blue-900 font-bold mb-4">
                <RefreshCw size={20} />
                ทุกเดือนที่ต่ออายุ
              </div>
              <ul className="space-y-3">
                {content.everyMonthItems.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-700 leading-relaxed">
                    <CheckCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative aspect-[3/2] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-3">
            <Image
              src={content.showcaseImage.src}
              alt={content.showcaseImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto">{content.showcaseCaption}</p>
        </div>
      </section>

      {/* Not included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-blue-950 mb-6 text-center">
            แพ็กนี้ <span className="text-red-600">ไม่รวม</span> อะไร
          </h2>
          <ul className="space-y-3">
            {content.notIncluded.map((item) => (
              <li
                key={item}
                className="flex gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 text-gray-700 text-sm leading-relaxed"
              >
                <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Worth it */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-blue-950 mb-6 text-center">{content.worthItTitle}</h2>
          <ul className="space-y-4">
            {content.worthItPoints.map((point) => (
              <li key={point} className="flex gap-3 text-gray-700 leading-relaxed">
                <MapPin size={18} className="text-indigo-500 shrink-0 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ideal for */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Users size={24} className="text-green-400" />
            เหมาะกับธุรกิจแบบไหน
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.idealFor.map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <h3 className="font-bold text-green-300 mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare other packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-blue-950 mb-2 text-center">เปรียบเทียบแพ็กอื่น</h2>
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">{content.compareIntro}</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {content.compareCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group block rounded-2xl border-2 border-gray-100 hover:border-green-400 p-6 transition-all hover:shadow-lg"
              >
                <p className="text-sm text-indigo-600 font-semibold mb-1">{card.name}</p>
                <p className="text-2xl font-bold text-blue-950 mb-2">
                  ฿{card.priceLabel}
                  <span className="text-sm font-normal text-gray-500">/เดือน</span>
                </p>
                <p className="text-gray-600 text-sm mb-4">{card.hook}</p>
                <span className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  {card.cta} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/pricing" className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-1">
              ดูตารางเปรียบเทียบครบ <ExternalLink size={14} />
            </Link>
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-lg font-bold text-blue-950 mb-4">อ่านเพิ่มเติม</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {content.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm bg-white border border-gray-200 rounded-full px-4 py-2 text-blue-700 hover:border-green-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFaqSection title={`คำถามเกี่ยวกับ ${pricing.name}`} faqs={content.faqs} />

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-4">พร้อมเริ่ม {pricing.name}?</h2>
          <p className="text-blue-200 mb-8">
            ฿{pricing.priceLabel}/เดือน · ไม่มีสัญญาผูกมัด · ขอคำปรึกษาฟรีก่อนตัดสินใจ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={packageContactHref(content.id)}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition"
            >
              {pricing.cta} <ArrowRight size={18} />
            </Link>
            <Link
              href="/seo-audit"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full"
            >
              ขอ SEO Audit ฟรี
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
