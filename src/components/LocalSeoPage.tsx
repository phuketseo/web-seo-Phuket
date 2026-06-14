import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin, Phone } from "lucide-react";
import { BlogFaqSection } from "@/components/blog/BlogFaqSection";

interface LocalSeoPageProps {
  area: string;
  areaEn: string;
  slug: string;
  description: string;
  businesses: string[];
  keywords: string[];
  landmarks: string[];
  stats: { metric: string; label: string }[];
  intro?: string[];
  faqs?: { q: string; a: string }[];
}

export default function LocalSeoPage({
  area, areaEn, slug, description, businesses, keywords, landmarks, stats, intro, faqs,
}: LocalSeoPageProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-700">หน้าแรก</Link>
            <span>/</span>
            <span className="text-gray-400">Local SEO</span>
            <span>/</span>
            <span className="text-blue-700 font-medium">SEO {area}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <MapPin size={14} />
              Local SEO {area}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif leading-tight mb-4">
              SEO {area}
              <br />
              <span className="text-green-400">ติดอันดับ Google</span>
              <br />
              ในพื้นที่ {area}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-xl hover:-translate-y-0.5">
                ปรึกษาฟรี <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-blue-200">
              {["เชี่ยวชาญตลาด " + area, "Google Maps Optimization", "Local Pack Rankings"].map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-400" />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-blue-800/40 border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400 font-serif mb-1">{s.metric}</div>
                <div className="text-blue-200 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {intro?.length ? (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-gray-700 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-gray-600 leading-relaxed">
              อ่านเพิ่ม:{" "}
              <Link href="/blog/google-my-business-phuket" className="text-blue-700 hover:underline">
                Google Business Profile ภูเก็ต
              </Link>
              {" · "}
              <Link href="/services/seo-phuket" className="text-blue-700 hover:underline">
                บริการ SEO ภูเก็ต
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      {/* Businesses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-950 font-serif mb-4">
              ธุรกิจที่เราดูแลใน{area}
            </h2>
            <p className="text-gray-600">เราเข้าใจตลาด{area}เป็นอย่างดี พร้อมกลยุทธ์ที่ตรงกับกลุ่มเป้าหมายในพื้นที่</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {businesses.map((b) => (
              <div key={b} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center hover:shadow-md hover:border-blue-200 transition-all">
                <div className="text-blue-950 font-semibold text-sm">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-950 font-serif mb-3">
              Keywords ที่เราดันอันดับใน{area}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {keywords.map((kw) => (
              <span key={kw} className="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-950 font-serif mb-3">
              พื้นที่ที่เราให้บริการใน{area}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {landmarks.map((lm) => (
              <div key={lm} className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700">
                <MapPin size={13} className="text-green-500" />
                {lm}
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqs?.length ? (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogFaqSection faqs={faqs} />
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">
            พร้อมให้ธุรกิจของคุณใน{area}ติดอันดับ Google?
          </h2>
          <p className="text-blue-200 mb-8">ปรึกษาฟรี เราจะวิเคราะห์ตลาดใน{area}และแนะนำกลยุทธ์ที่เหมาะสม</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl">
              <Phone size={18} /> ปรึกษาฟรี
            </Link>
            <Link href="/services/seo-phuket" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all">
              ดูบริการ SEO ทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
