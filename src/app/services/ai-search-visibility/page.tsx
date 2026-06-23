import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Sparkles, Brain, Search } from "lucide-react";
import { localServiceProvider, areaServedPhuket, faqSchema, buildBreadcrumb } from "@/lib/schema";
import { aiSearchContent } from "@/lib/service-content";
import { ServiceFaqSection } from "@/components/ServiceFaqSection";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AEO / GEO / AI Search Visibility ภูเก็ต | PhuketSEO",
  description:
    "บริการ AEO GEO และ AI Overview SEO สำหรับธุรกิจในภูเก็ต โครงสร้างคำตอบ FAQ schema llms.txt รวมในแพ็ก SEO Pro ฿8,900/เดือน",
  alternates: { canonical: "https://phuketseo.com/services/ai-search-visibility" },
};

const breadcrumbSchema = buildBreadcrumb([
  { name: "หน้าแรก", url: siteConfig.url },
  { name: "AI Search Visibility", url: `${siteConfig.url}/services/ai-search-visibility` },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Search Visibility (AEO / GEO)",
  provider: localServiceProvider,
  description: aiSearchContent.answerBlock,
  areaServed: areaServedPhuket,
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: "8900",
    priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "THB", price: "8900", unitText: "MONTH" },
  },
};

export default function AiSearchVisibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(aiSearchContent.faqs)) }} />

      <div className="bg-gray-50 border-b pt-24">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-700">หน้าแรก</Link>
          <span> / </span>
          <span className="text-blue-700 font-medium">AI Search Visibility</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-indigo-950 to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 text-violet-200 text-sm px-4 py-2 rounded-full mb-6">
              <Sparkles size={14} /> AEO · GEO · AI Overview
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-4">
              AI Search Visibility
              <br />
              <span className="text-green-400">สำหรับธุรกิจภูเก็ต</span>
            </h1>
            <p className="text-indigo-200 text-lg mb-4">{aiSearchContent.intro[0]}</p>
            <p className="text-white/90 bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-8">{aiSearchContent.answerBlock}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl">
              ขอคำปรึกษาฟรี <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Search, title: "AEO", desc: "Google AI Overview + Featured Snippets" },
              { icon: Brain, title: "GEO", desc: "ChatGPT · Perplexity citation" },
              { icon: Sparkles, title: "Entity", desc: "llms.txt · schema · NAP" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white/10 border border-white/10 rounded-xl p-5">
                <item.icon className="text-green-400 shrink-0" size={24} />
                <div>
                  <div className="text-white font-bold">{item.title}</div>
                  <div className="text-indigo-200 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {aiSearchContent.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-gray-700 text-lg leading-relaxed">{p}</p>
          ))}
          <p className="text-gray-600">
            <Link href="/methodology/phuket-visibility-stack" className="text-blue-700 hover:underline">Phuket Visibility Stack™</Link>
            {" · "}
            <Link href="/blog/aeo-kue-arai" className="text-blue-700 hover:underline">AEO คืออะไร</Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-950 font-serif mb-6">สิ่งที่ส่งมอบ (SEO Pro ขึ้นไป)</h2>
          <ul className="space-y-3">
            {aiSearchContent.deliverables.map((d) => (
              <li key={d} className="flex gap-2 text-gray-700">
                <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceFaqSection faqs={aiSearchContent.faqs} />

      <section className="py-16 bg-indigo-600 text-center text-white">
        <h2 className="text-3xl font-serif font-bold mb-4">รวมในแพ็ก SEO Pro ฿8,900/เดือน</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/pricing" className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl">ดูราคา</Link>
          <Link href="/contact" className="border-2 border-white font-bold px-8 py-3 rounded-xl hover:bg-white/10">ขอคำปรึกษาฟรี</Link>
        </div>
      </section>
    </>
  );
}
