import type { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import { Users, Award, Lightbulb } from 'lucide-react';
import { organizationJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา - PhuketSEO: ผู้เชี่ยวชาญด้านการตลาดดิจิทัลในภูเก็ต',
  description: 'เรียนรู้เกี่ยวกับ PhuketSEO, เรื่องราวของบริษัท, ค่านิยม, ทีมงานผู้เชี่ยวชาญ และใบรับรองของเราในฐานะผู้นำด้าน SEO และการตลาดดิจิทัลในภูเก็ต',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "หน้าแรก",
                "item": "https://www.phuketseo.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "เกี่ยวกับเรา",
                "item": "https://www.phuketseo.com/about"
              }
            ]
          }
        `}
      </script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...organizationJsonLd,
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#25D366] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">เกี่ยวกับเรา</h1>
          <p className="text-xl">PhuketSEO: พันธมิตรทางธุรกิจของคุณสู่ความสำเร็จในโลกดิจิทัล</p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-16">
        {/* Company Story Section */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-8 text-center">เรื่องราวของเรา</h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-4">PhuketSEO ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะเป็นผู้นำด้านการตลาดดิจิทัลในภูเก็ต เราเริ่มต้นจากการเป็นทีมเล็กๆ ที่มีความหลงใหลในการช่วยให้ธุรกิจท้องถิ่นเติบโตในโลกออนไลน์ ด้วยความเข้าใจอย่างลึกซึ้งในตลาดภูเก็ตและความเชี่ยวชาญด้าน SEO เราได้ช่วยให้ลูกค้าจำนวนมากประสบความสำเร็จในการเข้าถึงกลุ่มเป้าหมายและเพิ่มยอดขาย</p>
            <p>ตลอดหลายปีที่ผ่านมา เราได้พัฒนาและขยายบริการของเราให้ครอบคลุมทุกด้านของการตลาดดิจิทัล ไม่ว่าจะเป็นการออกแบบเว็บไซต์, การจัดการโซเชียลมีเดีย, การโฆษณาแบบเสียเงิน และอื่นๆ อีกมากมาย เราภูมิใจในผลงานของเราและมุ่งมั่นที่จะส่งมอบผลลัพธ์ที่ยอดเยี่ยมให้กับลูกค้าทุกราย</p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-8 text-center">ค่านิยมของเรา</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold text-[#25D366] mb-4">ความเชี่ยวชาญ</h3>
              <p>เรามุ่งมั่นที่จะเป็นผู้เชี่ยวชาญในทุกด้านของการตลาดดิจิทัล และอัปเดตความรู้และเทคนิคใหม่ๆ อยู่เสมอ</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold text-[#25D366] mb-4">ความโปร่งใส</h3>
              <p>เราเชื่อมั่นในการสื่อสารที่ตรงไปตรงมาและโปร่งใสกับลูกค้าของเราในทุกขั้นตอน</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl font-semibold text-[#25D366] mb-4">ผลลัพธ์</h3>
              <p>เป้าหมายสูงสุดของเราคือการส่งมอบผลลัพธ์ที่จับต้องได้และสร้างมูลค่าที่แท้จริงให้กับธุรกิจของลูกค้า</p>
            </div>
          </div>
        </section>

        {/* Team Section - Placeholder for now, will add actual team members later */}
        <section className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-8 text-center">ทีมงานของเรา</h2>
          <div className="max-w-3xl mx-auto text-lg text-center">
            <p>เรามีทีมงานผู้เชี่ยวชาญที่มีประสบการณ์และความรู้ความสามารถในการขับเคลื่อนธุรกิจของคุณให้ประสบความสำเร็จ</p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-[#25D366]"><Users size={48} /></div>
                <h3 className="font-serif text-xl font-semibold text-[#1e3a8a]">คุณสมชาย ดิจิทัล</h3>
                <p className="text-gray-600">ผู้ก่อตั้ง & ผู้เชี่ยวชาญ SEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-[#25D366]"><Users size={48} /></div>
                <h3 className="font-serif text-xl font-semibold text-[#1e3a8a]">คุณอรอนงค์ เว็บมาสเตอร์</h3>
                <p className="text-gray-600">หัวหน้าฝ่ายออกแบบเว็บไซต์</p>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-[#25D366]"><Users size={48} /></div>
                <h3 className="font-serif text-xl font-semibold text-[#1e3a8a]">คุณวิชัย โซเชียล</h3>
                <p className="text-gray-600">ผู้จัดการฝ่ายโซเชียลมีเดีย</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section - Placeholder */}
        <section>
          <h2 className="font-serif text-4xl font-bold text-[#1e3a8a] mb-8 text-center">ใบรับรองและรางวัล</h2>
          <div className="max-w-3xl mx-auto text-lg text-center">
            <p>เราได้รับการรับรองจากสถาบันชั้นนำและได้รับรางวัลมากมายที่ยืนยันถึงคุณภาพและความเชี่ยวชาญของเรา</p>
            <div className="flex justify-center items-center space-x-8 mt-8">
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg text-[#25D366]"><Award size={48} /></div>
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg text-[#25D366]"><Award size={48} /></div>
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded-lg text-[#25D366]"><Award size={48} /></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}