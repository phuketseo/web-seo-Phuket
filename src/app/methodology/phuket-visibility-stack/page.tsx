import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { buildBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Phuket Visibility Stack™ — Methodology | PhuketSEO",
  description:
    "Phuket Visibility Stack: SEO Lite (Maps) → SEO Pro (Web + SEO + AEO/GEO) → Pro Max (+ Ads) กรอบงาน SEO ภูเก็ต จาก PhuketSEO",
  alternates: { canonical: "https://phuketseo.com/methodology/phuket-visibility-stack" },
};

const steps = [
  {
    step: "1",
    name: "SEO Lite — ฿5,900/เดือน",
    focus: "Google Maps + Social Proof",
    items: ["GBP setup & posts", "Review system (QR/LINE)", "5 keywords", "GBP report"],
    href: "/pricing",
  },
  {
    step: "2",
    name: "SEO Pro — ฿8,900/เดือน",
    focus: "Web + SEO + AI Search",
    items: ["Everything in Lite", "Website care + on-page SEO", "AEO/GEO structure", "1 blog/month", "llms.txt + schema"],
    href: "/services/ai-search-visibility",
  },
  {
    step: "3",
    name: "SEO Pro Max — ฿15,000/เดือน",
    focus: "Organic + Paid",
    items: ["Everything in Pro", "Google Ads 1 campaign", "Meta Ads 1 campaign", "2 blogs/month", "ROAS report"],
    href: "/pricing",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Phuket Visibility Stack — วิธีทำ SEO ภูเก็ต 3 ขั้น",
  description: "กรอบงาน SEO ภูเก็ต จาก PhuketSEO: Lite → Pro → Pro Max",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: `${s.focus}: ${s.items.join(", ")}`,
  })),
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumb([
              { name: "หน้าแรก", url: siteConfig.url },
              { name: "Phuket Visibility Stack", url: `${siteConfig.url}/methodology/phuket-visibility-stack` },
            ])
          ),
        }}
      />

      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3">Methodology</p>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Phuket Visibility Stack™</h1>
          <p className="text-blue-200 text-lg">
            กรอบงาน 3 ชั้น สำหรับธุรกิจไทยในภูเก็ต — จากติด Google Maps ไปจนถึง AI Search และ Ads
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.step} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-sm font-bold text-indigo-600 mb-1">STEP {s.step}</div>
              <h2 className="text-2xl font-serif font-bold text-blue-950 mb-1">{s.name}</h2>
              <p className="text-green-600 font-medium mb-4">{s.focus}</p>
              <ul className="space-y-2 mb-6">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-green-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={s.href} className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:gap-2 transition-all">
                ดูรายละเอียด <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Upsell path: Lite → Pro (+฿3,000) → Pro Max (+฿6,100) แนะนำขั้นต่ำ 3 เดือนต่อแพ็ก
        </p>
        <Link href="/contact" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl">
          ขอ Audit ฟรี
        </Link>
      </section>
    </div>
  );
}
