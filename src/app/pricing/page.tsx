import Link from "next/link";
import { CheckCircle, XCircle, Star, Briefcase, TrendingUp } from "lucide-react";
import { businessEntityId, pricingServicesJsonLd } from "@/lib/schema";
import { pricingPackages, pricingComparison, webSetupPricing, planContactHref } from "@/lib/pricing-packages";

export const metadata = {
  title: "ราคา SEO ภูเก็ต | Phuket Visibility Stack — Lite / Pro / Pro Max",
  description:
    "แพ็กเกจ SEO ภูเก็ต เริ่ม ฿5,900/เดือน (Lite) Pro ฿8,900 (เว็บ+SEO+AEO/GEO) Pro Max ฿15,000 (รวม Ads) ไม่มีสัญญาผูกมัด",
  alternates: {
    canonical: "https://phuketseo.com/pricing",
  },
  openGraph: {
    title: "ราคา SEO ภูเก็ต | Phuket Visibility Stack",
    description: "แพ็กเกจ SEO Lite ฿5,900 / Pro ฿8,900 / Pro Max ฿15,000 ต่อเดือน",
    url: "https://phuketseo.com/pricing",
    siteName: "PhuketSEO",
    locale: "th_TH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: "https://phuketseo.com" },
        { "@type": "ListItem", position: 2, name: "ราคาบริการ", item: "https://phuketseo.com/pricing" },
      ],
    },
    {
      "@id": businessEntityId,
    },
    ...pricingServicesJsonLd,
  ],
};

const icons = { lite: Star, pro: Briefcase, max: TrendingUp };

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">Phuket Visibility Stack™</p>
          <h1 className="text-5xl font-serif font-bold text-blue-900 mb-6">ราคา SEO ภูเก็ต</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3 แพ็กเกจชัดเจน สำหรับธุรกิจไทยในภูเก็ต — เริ่มจาก{" "}
            <Link href="#lite" className="text-green-600 font-semibold hover:underline">
              SEO Lite ฿5,900
            </Link>{" "}
            ไปจนถึง SEO + เว็บ + AI Search + Ads ไม่มีสัญญาผูกมัด
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPackages.map((pkg) => {
            const Icon = icons[pkg.id];
            return (
              <div
                id={pkg.id}
                key={pkg.id}
                className={`scroll-mt-28 p-8 rounded-2xl shadow-lg flex flex-col border-t-4 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-green-400 scale-105"
                    : pkg.id === "lite"
                      ? "bg-gradient-to-br from-green-50 to-emerald-100 border-green-500 ring-2 ring-green-400/40"
                      : "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-700"
                }`}
              >
                {(pkg.badge || pkg.popular) && (
                  <span
                    className={`self-center -mt-11 mb-4 text-white text-xs font-bold px-4 py-1.5 rounded-full ${
                      pkg.popular ? "bg-green-500" : "bg-emerald-600"
                    }`}
                  >
                    {pkg.popular ? "แนะนำ" : pkg.badge}
                  </span>
                )}
                <Icon className={`w-10 h-10 mb-4 ${pkg.popular ? "text-green-300" : "text-blue-700"}`} />
                <h2 className={`text-2xl font-serif font-bold mb-1 ${pkg.popular ? "text-white" : "text-blue-900"}`}>
                  {pkg.name}
                </h2>
                <p className={`text-sm mb-4 ${pkg.popular ? "text-indigo-200" : "text-indigo-600"}`}>{pkg.tagline}</p>
                <p className={`text-4xl font-bold mb-1 ${pkg.popular ? "text-white" : "text-blue-800"}`}>
                  ฿{pkg.priceLabel}
                  <span className="text-lg font-normal">/เดือน</span>
                </p>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-indigo-100" : "text-gray-600"}`}>{pkg.desc}</p>
                <ul className="text-left space-y-2 mb-8 flex-grow">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className={`w-5 h-5 shrink-0 ${pkg.popular ? "text-green-300" : "text-green-500"}`} />
                      <span className={pkg.popular ? "text-indigo-50" : "text-gray-700"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={planContactHref(pkg.id)}
                  className="font-bold py-3 px-8 rounded-full text-center transition bg-green-500 hover:bg-green-600 text-white"
                >
                  {pkg.cta}
                </Link>
                <Link
                  href={
                    pkg.id === "lite"
                      ? "/packages/seo-lite"
                      : pkg.id === "pro"
                        ? "/packages/seo-pro"
                        : "/packages/seo-pro-max"
                  }
                  className={`mt-3 block text-center text-sm font-semibold underline-offset-2 hover:underline ${
                    pkg.popular ? "text-green-200" : "text-blue-700"
                  }`}
                >
                  ดูรายละเอียดแพ็ก →
                </Link>
              </div>
            );
          })}
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-blue-900 mb-4 text-center">ค่า Setup เว็บไซต์ (ครั้งเดียว)</h2>
          <p className="text-gray-600 text-center mb-6 text-sm">
            สำหรับลูกค้า Pro ที่ยังไม่มีเว็บ — ดูแลรายเดือนรวมใน SEO Pro ฿8,900
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {webSetupPricing.map((w) => (
              <div key={w.name} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                <p className="font-semibold text-blue-950">{w.name}</p>
                <p className="text-2xl font-bold text-green-600 mt-1">฿{w.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 text-center mb-10">เปรียบเทียบแพ็กเกจ</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="py-4 px-6 text-left">ฟีเจอร์</th>
                  <th className="py-4 px-4 text-center">Lite</th>
                  <th className="py-4 px-4 text-center bg-green-600">Pro</th>
                  <th className="py-4 px-4 text-center">Pro Max</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-6 font-medium text-gray-700">{row.name}</td>
                    {(["lite", "pro", "max"] as const).map((tier) => {
                      const val = row[tier];
                      return (
                        <td key={tier} className="py-3 px-4 text-center">
                          {val === true ? (
                            <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                          ) : val === false ? (
                            <XCircle className="text-red-400 w-5 h-5 mx-auto" />
                          ) : (
                            <span className="text-sm font-medium">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="bg-blue-50 border-t-2 border-blue-100">
                  <td className="py-4 px-6 font-semibold text-blue-900">สมัครแพ็ก</td>
                  {pricingPackages.map((pkg) => (
                    <td key={pkg.id} className="py-4 px-4 text-center">
                      <Link
                        href={planContactHref(pkg.id)}
                        className="inline-block text-sm font-bold bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
                      >
                        {pkg.cta}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Pro Max: ค่า ad spend Google (min ฿10,000) + Meta (min ฿5,000) แยกต่างหาก — ไม่รวมในราคา management
          </p>
        </section>

        <section className="text-center bg-blue-800 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4">ไม่แน่ใจว่าแพ็กไหนเหมาะ?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            ขอคำปรึกษาฟรี เราจะแนะนำแพ็กเกจที่เหมาะกับธุรกิจและงบประมาณของคุณ
          </p>
          <Link
            href="/seo-audit"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition"
          >
            ขอ SEO Audit ฟรี
          </Link>
        </section>
      </main>
    </div>
  );
}
