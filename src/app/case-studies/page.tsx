import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
  title: "ผลงานของเรา - PhuketSEO | กรณีศึกษา SEO + AI Search",
  description:
    "กรณีศึกษา SEO, เว็บ Next.js และ AEO/GEO จาก PhuketSEO — เริ่มจากเว็บ agency ของเราเอง",
  alternates: { canonical: "https://phuketseo.com/case-studies" },
};

const CaseStudiesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "หน้าแรก",
            item: "https://phuketseo.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ผลงานของเรา",
            item: "https://phuketseo.com/case-studies",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#1e3a8a] to-[#2548b0] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">ผลงานของเรา</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            กรณีศึกษา SEO + เว็บ + AI Search จาก PhuketSEO — เริ่มจากเว็บ agency ของเราเอง
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg"
          >
            ปรึกษาผู้เชี่ยวชาญฟรี
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-[#1e3a8a]">
            Case study ที่มีอยู่
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            ตอนนี้มี case study จากเว็บของเราเอง — กำลังเพิ่มเรื่องจากลูกค้าธุรกิจในภูเก็ตเมื่อพร้อมเผยแพร่
          </p>
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-8 text-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    {study.isOwnProject && (
                      <span className="inline-block bg-white/15 text-indigo-100 text-xs px-3 py-1 rounded-full border border-white/20 mb-2">
                        Case study · เว็บ agency
                      </span>
                    )}
                    <p className="text-indigo-200 text-sm mb-1">
                      {study.client} · {study.industry}
                    </p>
                    <h3 className="text-2xl font-serif font-bold group-hover:text-indigo-100 transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full border border-white/20 shrink-0">
                    {study.duration}
                  </span>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">{study.challenge}</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2">สิ่งที่ส่งมอบ</div>
                    <div className="grid grid-cols-2 gap-3">
                      {study.deliverables.map((r) => (
                        <div key={r.label} className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-white">{r.metric}</div>
                          <div className="text-xs text-indigo-200">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2">สัญญาณที่วัดได้</div>
                    <div className="grid grid-cols-2 gap-3">
                      {study.outcomes.map((r) => (
                        <div key={r.label} className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-white">{r.metric}</div>
                          <div className="text-xs text-indigo-200">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                  อ่าน case study เต็ม <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#1e3a8a]">
            อยากได้แผนแบบเดียวกันสำหรับธุรกิจคุณ?
          </h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            เริ่มจาก SEO Audit ฟรี หรือดู{" "}
            <Link href="/methodology/phuket-visibility-stack" className="text-blue-700 underline">
              Phuket Visibility Stack
            </Link>{" "}
            ว่าเหมาะกับธุรกิจคุณแบบไหน
          </p>
          <Link
            href="/seo-audit"
            className="inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out shadow-lg text-lg"
          >
            ขอ SEO Audit ฟรี
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
