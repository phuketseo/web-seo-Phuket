import React from 'react';
import Link from 'next/link';
import { CheckCircle, XCircle, Star, Briefcase, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'ราคาบริการ - PhuketSEO | แผนการตลาดดิจิทัลสำหรับธุรกิจของคุณ',
  description: 'สำรวจแผนราคาบริการ SEO และการตลาดดิจิทัลที่หลากหลายของเรา ออกแบบมาเพื่อธุรกิจทุกขนาดในภูเก็ตและทั่วประเทศไทย',
  alternates: {
    canonical: 'https://www.phuketseo.com/pricing',
  },
  openGraph: {
    title: 'ราคาบริการ - PhuketSEO | แผนการตลาดดิจิทัลสำหรับธุรกิจของคุณ',
    description: 'สำรวจแผนราคาบริการ SEO และการตลาดดิจิทัลที่หลากหลายของเรา ออกแบบมาเพื่อธุรกิจทุกขนาดในภูเก็ตและทั่วประเทศไทย',
    url: 'https://www.phuketseo.com/pricing',
    siteName: 'PhuketSEO',
    locale: 'th_TH',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "หน้าแรก",
          "item": "https://www.phuketseo.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ราคาบริการ",
          "item": "https://www.phuketseo.com/pricing"
        }
      ]
    },
    {
      "@type": "Organization",
      "name": "PhuketSEO",
      "url": "https://www.phuketseo.com",
      "logo": "https://www.phuketseo.com/logo.png", // Placeholder, assuming a logo exists
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+66-81-234-5678", // Placeholder
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.facebook.com/phuketseo", // Placeholder
        "https://www.instagram.com/phuketseo" // Placeholder
      ]
    }
  ]
};

const PricingPage: React.FC = () => {
  const features = [
    { name: 'การวิเคราะห์ Keyword เบื้องต้น', starter: true, professional: true, enterprise: true },
    { name: 'การปรับแต่ง On-Page SEO', starter: true, professional: true, enterprise: true },
    { name: 'รายงานประสิทธิภาพรายเดือน', starter: true, professional: true, enterprise: true },
    { name: 'การสร้าง Backlink คุณภาพ', starter: false, professional: true, enterprise: true },
    { name: 'การจัดการ Google My Business', starter: false, professional: true, enterprise: true },
    { name: 'การวิเคราะห์คู่แข่งเชิงลึก', starter: false, professional: true, enterprise: true },
    { name: 'การตลาดเนื้อหา (Content Marketing)', starter: false, professional: false, enterprise: true },
    { name: 'การจัดการโฆษณา Google Ads', starter: false, professional: false, enterprise: true },
    { name: 'ที่ปรึกษา SEO ส่วนตัว', starter: false, professional: false, enterprise: true },
    { name: 'การวิเคราะห์ Conversion Rate Optimization (CRO)', starter: false, professional: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-blue-900 mb-6">ราคาบริการ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PhuketSEO นำเสนอแผนการตลาดดิจิทัลที่ยืดหยุ่นและปรับแต่งได้ เพื่อตอบสนองความต้องการและงบประมาณของธุรกิจทุกขนาด
            ไม่ว่าคุณจะเป็นธุรกิจขนาดเล็กที่เพิ่งเริ่มต้น หรือองค์กรขนาดใหญ่ที่ต้องการขยายตลาด เรามีแพ็กเกจที่เหมาะสมสำหรับคุณ
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-t-4 border-blue-700">
            <Star className="text-blue-700 w-12 h-12 mb-4" />
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">Starter</h2>
            <p className="text-5xl font-bold text-blue-800 mb-4">฿9,900<span className="text-xl font-normal">/เดือน</span></p>
            <p className="text-gray-600 mb-6">เหมาะสำหรับธุรกิจขนาดเล็กที่ต้องการเริ่มต้นการตลาดดิจิทัล</p>
            <ul className="text-left text-gray-700 mb-8 space-y-2">
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การวิเคราะห์ Keyword เบื้องต้น</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การปรับแต่ง On-Page SEO</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> รายงานประสิทธิภาพรายเดือน</li>
              <li className="flex items-center text-gray-500"><XCircle className="text-red-500 w-5 h-5 mr-2" /> การสร้าง Backlink คุณภาพ</li>
            </ul>
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
              เลือกแพ็กเกจ
            </Link>
          </div>

          {/* Professional Plan */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-t-4 border-green-500 transform scale-105">
            <Briefcase className="text-green-600 w-12 h-12 mb-4" />
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">Professional</h2>
            <p className="text-5xl font-bold text-blue-800 mb-4">฿19,900<span className="text-xl font-normal">/เดือน</span></p>
            <p className="text-gray-600 mb-6">สำหรับธุรกิจที่ต้องการเติบโตและขยายฐานลูกค้าอย่างจริงจัง</p>
            <ul className="text-left text-gray-700 mb-8 space-y-2">
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> ทุกอย่างในแพ็กเกจ Starter</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การสร้าง Backlink คุณภาพ</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การจัดการ Google My Business</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การวิเคราะห์คู่แข่งเชิงลึก</li>
            </ul>
            <Link href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
              เลือกแพ็กเกจ
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg flex flex-col items-center text-center border-t-4 border-blue-700">
            <TrendingUp className="text-blue-700 w-12 h-12 mb-4" />
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">Enterprise</h2>
            <p className="text-5xl font-bold text-blue-800 mb-4">฿39,900<span className="text-xl font-normal">/เดือน</span></p>
            <p className="text-gray-600 mb-6">โซลูชันครบวงจรสำหรับองค์กรขนาดใหญ่ที่ต้องการผลลัพธ์สูงสุด</p>
            <ul className="text-left text-gray-700 mb-8 space-y-2">
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> ทุกอย่างในแพ็กเกจ Professional</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การตลาดเนื้อหา (Content Marketing)</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> การจัดการโฆษณา Google Ads</li>
              <li className="flex items-center"><CheckCircle className="text-green-500 w-5 h-5 mr-2" /> ที่ปรึกษา SEO ส่วนตัว</li>
            </ul>
            <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out">
              เลือกแพ็กเกจ
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-blue-900 text-center mb-10">เปรียบเทียบคุณสมบัติ</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="py-4 px-6 text-left text-lg font-semibold rounded-tl-lg">คุณสมบัติ</th>
                  <th className="py-4 px-6 text-center text-lg font-semibold">Starter</th>
                  <th className="py-4 px-6 text-center text-lg font-semibold bg-green-500">Professional</th>
                  <th className="py-4 px-6 text-center text-lg font-semibold rounded-tr-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 text-left font-medium text-gray-700">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.starter ? <CheckCircle className="text-green-500 w-6 h-6 mx-auto" /> : <XCircle className="text-red-500 w-6 h-6 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.professional ? <CheckCircle className="text-green-500 w-6 h-6 mx-auto" /> : <XCircle className="text-red-500 w-6 h-6 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.enterprise ? <CheckCircle className="text-green-500 w-6 h-6 mx-auto" /> : <XCircle className="text-red-500 w-6 h-6 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="text-center bg-blue-800 text-white p-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-serif font-bold mb-6">ไม่แน่ใจว่าแพ็กเกจไหนเหมาะกับคุณ?</h2>
          <p className="text-xl mb-8">
            ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาฟรี เพื่อช่วยคุณเลือกแผนการตลาดดิจิทัลที่เหมาะสมที่สุดสำหรับเป้าหมายธุรกิจของคุณ
          </p>
          <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out">
            ติดต่อเราเพื่อขอคำปรึกษาฟรี
          </Link>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
