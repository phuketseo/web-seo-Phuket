
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, TrendingUp, Users, Briefcase, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ผลงานของเรา - PhuketSEO | กรณีศึกษา Digital Marketing ที่ประสบความสำเร็จ',
  description: 'ดูผลงานและกรณีศึกษา Digital Marketing ที่ PhuketSEO ได้สร้างความสำเร็จให้กับธุรกิจต่างๆ ในภูเก็ต ทั้งโรงแรม อสังหาริมทรัพย์ ร้านอาหาร และคลินิก',
};

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'โรงแรมหรูในภูเก็ต',
      description: 'เพิ่มการเข้าชมเว็บไซต์และยอดจองห้องพักอย่างก้าวกระโดดด้วยกลยุทธ์ SEO และการตลาดเนื้อหาที่ตรงจุด',
      metric: '+250% Traffic',
      icon: TrendingUp,
      bgColor: 'bg-gradient-to-br from-blue-800 to-blue-600',
    },
    {
      title: 'โครงการอสังหาริมทรัพย์',
      description: 'สร้าง Leads คุณภาพสูงและเพิ่มยอดขายโครงการด้วยแคมเปญโฆษณาออนไลน์และการจัดการ Social Media ที่มีประสิทธิภาพ',
      metric: '+320% Leads',
      icon: Users,
      bgColor: 'bg-gradient-to-br from-green-600 to-green-400',
    },
    {
      title: 'ร้านอาหารชื่อดัง',
      description: 'ยกระดับการรับรู้แบรนด์และเพิ่มยอดจองโต๊ะผ่านการตลาดดิจิทัลที่เน้นประสบการณ์ลูกค้าและการรีวิวออนไลน์',
      metric: '+180% Bookings',
      icon: Briefcase,
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-400',
    },
    {
      title: 'คลินิกความงามและสุขภาพ',
      description: 'ดึงดูดลูกค้าใหม่และสร้างความน่าเชื่อถือด้วยเนื้อหาที่ให้ความรู้และแคมเปญโฆษณาที่เข้าถึงกลุ่มเป้าหมายอย่างแม่นยำ',
      metric: '+200% Appointments',
      icon: HeartPulse,
      bgColor: 'bg-gradient-to-br from-green-700 to-green-500',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'PhuketSEO',
        'url': 'https://www.phuketseo.com/case-studies',
        'logo': 'https://www.phuketseo.com/logo.png', // Placeholder, replace with actual logo URL
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+66-81-234-5678', // Placeholder, replace with actual phone number
          'contactType': 'customer service',
          'areaServed': 'TH',
          'availableLanguage': 'Thai',
        },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'หน้าแรก',
            'item': 'https://www.phuketseo.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'ผลงานของเรา',
            'item': 'https://www.phuketseo.com/case-studies',
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#1e3a8a] to-[#2548b0] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">ผลงานของเรา</h1>
          <p className="text-xl md:text-2xl mb-8">กรณีศึกษาความสำเร็จด้าน Digital Marketing ที่ PhuketSEO ภาคภูมิใจ</p>
          <Link href="/contact" className="inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
            ปรึกษาผู้เชี่ยวชาญฟรี
          </Link>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12 text-[#1e3a8a]">เรื่องราวความสำเร็จของลูกค้า</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {caseStudies.map((study, index) => (
              <div key={index} className={`relative p-8 rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 ${study.bgColor} text-white`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M14.75 28.5L25 39.25L35.25 28.5L25 17.75L14.75 28.5ZM64.75 28.5L75 39.25L85.25 28.5L75 17.75L64.75 28.5ZM14.75 71.5L25 82.25L35.25 71.5L25 60.75L14.75 71.5ZM64.75 71.5L75 82.25L85.25 71.5L75 60.75L64.75 71.5Z\" fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3C/path%3E%3C/svg%3E")' }}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <study.icon className="w-10 h-10 text-white mr-4" />
                    <h3 className="text-3xl font-serif font-bold">{study.title}</h3>
                  </div>
                  <p className="text-lg mb-6">{study.description}</p>
                  <div className="bg-white text-[#1e3a8a] px-6 py-3 rounded-full inline-block font-bold text-xl shadow-md">
                    {study.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#1e3a8a]">พร้อมที่จะสร้างเรื่องราวความสำเร็จของคุณเองหรือยัง?</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">ให้ PhuketSEO เป็นส่วนหนึ่งในการขับเคลื่อนธุรกิจของคุณสู่ความสำเร็จ</p>
          <Link href="/contact" className="inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out shadow-lg text-lg">
            ติดต่อเราวันนี้
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
