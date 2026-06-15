import Link from "next/link";
import { CheckCircle, ArrowRight, Briefcase, Phone } from "lucide-react";
import { BlogFaqSection } from "@/components/blog/BlogFaqSection";
import type { IndustryContent } from "@/lib/industry-seo-content";

export default function IndustrySeoPage({ data }: { data: IndustryContent }) {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-700">หน้าแรก</Link>
            <span>/</span>
            <span className="text-gray-400">Industry</span>
            <span>/</span>
            <span className="text-blue-700 font-medium">{data.headline}</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-blue-950 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Briefcase size={14} />
              {data.industryEn}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-4">
              {data.headline}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-4">{data.description}</p>
            <p className="text-white/90 text-base leading-relaxed mb-8 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
              {data.answerBlock}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              ปรึกษาฟรี <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.stats.map((s) => (
              <div key={s.label} className="bg-blue-800/40 border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400 font-serif mb-1">{s.metric}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {data.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-gray-700 text-lg leading-relaxed">{p}</p>
          ))}
          {data.relatedBlog && (
            <p className="text-gray-600">
              อ่านเพิ่ม:{" "}
              <Link href={data.relatedBlog.href} className="text-blue-700 hover:underline">
                {data.relatedBlog.name}
              </Link>
              {" · "}
              <Link href="/pricing" className="text-blue-700 hover:underline">ดูราคา</Link>
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-950 font-serif mb-4">Pain Points ที่เราแก้</h2>
            <ul className="space-y-3">
              {data.painPoints.map((p) => (
                <li key={p} className="flex gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-950 font-serif mb-4">สิ่งที่รวมในแพ็กเกจ</h2>
            <ul className="space-y-3">
              {data.services.map((s) => (
                <li key={s} className="flex gap-2 text-gray-700">
                  <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-950 font-serif mb-6">Keywords เป้าหมาย</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.keywords.map((kw) => (
              <span key={kw} className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <BlogFaqSection faqs={data.faqs} />
        </div>
      </section>

      <section className="py-16 bg-green-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">
            พร้อมให้{data.industry}ของคุณติด Google?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-8 py-3 rounded-xl">
              <Phone size={18} /> ปรึกษาฟรี
            </Link>
            <Link href="/services/seo-phuket" className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10">
              บริการ SEO ภูเก็ต
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
