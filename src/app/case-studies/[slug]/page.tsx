import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { caseStudies, getCaseStudy, caseStudyJsonLd } from "@/lib/case-studies-data";
import { buildBreadcrumb } from "@/lib/schema";
import { siteConfig } from "@/lib/utils";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "ไม่พบ case study" };
  return {
    title: `${study.title} | PhuketSEO`,
    description: study.challenge,
    alternates: { canonical: `${siteConfig.url}/case-studies/${slug}` },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const breadcrumb = buildBreadcrumb([
    { name: "หน้าแรก", url: siteConfig.url },
    { name: "ผลงาน", url: `${siteConfig.url}/case-studies` },
    { name: study.title, url: `${siteConfig.url}/case-studies/${slug}` },
  ]);

  return (
    <div className="min-h-screen bg-white pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(study)) }} />

      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-2">Case Study</p>
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-2">{study.title}</h1>
          <p className="text-blue-200">{study.client} · {study.industry} · {study.duration}</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-xl font-bold text-blue-950 mb-3">ปัญหา</h2>
          <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-950 mb-3">แนวทาง</h2>
          <ul className="space-y-2">
            {study.approach.map((a) => (
              <li key={a} className="flex gap-2 text-gray-700">
                <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                {a}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-950 mb-4">สิ่งที่ส่งมอบ</h2>
          <div className="grid grid-cols-2 gap-4">
            {study.deliverables.map((r) => (
              <div key={r.label} className="bg-gray-50 rounded-xl p-4 text-center border">
                <div className="text-2xl font-bold text-indigo-700 font-serif">{r.metric}</div>
                <div className="text-sm text-gray-600">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-950 mb-4">สัญญาณที่วัดได้</h2>
          <div className="grid grid-cols-2 gap-4">
            {study.outcomes.map((r) => (
              <div key={r.label} className="bg-gray-50 rounded-xl p-4 text-center border">
                <div className="text-2xl font-bold text-indigo-700 font-serif">{r.metric}</div>
                <div className="text-sm text-gray-600">{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {study.quote && (
          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">{study.quote}</blockquote>
        )}

        <div className="flex flex-wrap gap-2">
          {study.services.map((s) => (
            <span key={s} className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl">
          ปรึกษาวิเคราะห์ธุรกิจคุณ <ArrowRight size={16} />
        </Link>
      </main>
    </div>
  );
}
