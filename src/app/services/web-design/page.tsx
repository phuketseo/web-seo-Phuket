
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Code, Layout, ShoppingCart, Briefcase, PenTool, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/utils';
import { organizationJsonLd, faqSchema } from '@/lib/schema';
import { siteImages } from '@/lib/images';
import { webDesignContent } from '@/lib/service-content';
import { ServiceFaqSection } from '@/components/ServiceFaqSection';

export const metadata: Metadata = {
  title: 'รับทำเว็บไซต์ภูเก็ต — เว็บเร็ว ติด Google | PhuketSEO',
  description: 'เว็บเร็ว ติด Google พร้อม SEO และ AI Search structure สำหรับธุรกิจในภูเก็ต Setup จาก ฿29,900 + ดูแลรายเดือนในแพ็ก Pro',
  keywords: ['รับทำเว็บไซต์ภูเก็ต', 'ออกแบบเว็บไซต์', 'สร้างเว็บไซต์', 'เว็บดีไซน์ภูเก็ต', 'PhuketSEO'],
  openGraph: {
    title: 'รับทำเว็บไซต์ภูเก็ต ออกแบบเว็บมืออาชีพ | PhuketSEO',
    description: 'บริการรับทำเว็บไซต์ ออกแบบเว็บสวยงาม ทันสมัย รองรับทุกอุปกรณ์ เพิ่มยอดขายให้ธุรกิจของคุณในภูเก็ต เริ่มต้นเพียง 15,000 บาท',
    url: 'https://phuketseo.com/services/web-design',
    type: 'website',
  },
};

export default function WebDesignServicePage() {
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
            "item": "https://phuketseo.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "บริการ",
            "item": "https://phuketseo.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "รับทำเว็บไซต์",
            "item": "https://phuketseo.com/services/web-design"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Web Design Service",
        "provider": {
          ...organizationJsonLd,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.phoneInternational,
            email: siteConfig.email,
            contactType: "customer service",
          },
        },
        "name": "รับทำเว็บไซต์ภูเก็ต",
        "description": "บริการรับทำเว็บไซต์ ออกแบบเว็บสวยงาม ทันสมัย รองรับทุกอุปกรณ์ เพิ่มยอดขายให้ธุรกิจของคุณในภูเก็ต เริ่มต้นเพียง 15,000 บาท",
        "url": "https://phuketseo.com/services/web-design",
        "areaServed": {
          "@type": "Place",
          "name": "ภูเก็ต, ประเทศไทย"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "THB",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "15000"
          }
        }
      },
      faqSchema(webDesignContent.faqs)
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#254a9e] text-white py-20 md:py-32 overflow-hidden">
        <Image
          src={siteImages.services.webDesign.src}
          alt=""
          fill
          className="object-cover opacity-20 pointer-events-none"
          priority
          sizes="100vw"
          aria-hidden
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in-up">
            รับทำเว็บไซต์ภูเก็ต: สร้างตัวตนดิจิทัลที่โดดเด่น
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
            PhuketSEO ผู้เชี่ยวชาญด้านการออกแบบและพัฒนาเว็บไซต์ ที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืนในภูเก็ตและทั่วโลก
          </p>
          <Link href="/contact" className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up animation-delay-400">
            ปรึกษาฟรี!
          </Link>
        </div>
        {/* Abstract shapes for background effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute w-64 h-64 bg-white rounded-full -top-16 -left-16"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-32 -right-32"></div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          {webDesignContent.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-gray-700 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="text-gray-600 leading-relaxed">
            อ่านเพิ่ม:{" "}
            <Link href="/blog/web-design-phuket-real-estate" className="text-blue-700 hover:underline">
              Web Design อสังหาฯ ภูเก็ต
            </Link>
            {" · "}
            <Link href="/services/seo-phuket" className="text-blue-700 hover:underline">
              บริการ SEO ภูเก็ต
            </Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1e3a8a]">
            ทำไมต้องเลือก PhuketSEO สำหรับเว็บไซต์ของคุณ?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Layout className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">ออกแบบสวยงามและทันสมัย</h3>
              <p className="text-gray-700">เราสร้างสรรค์เว็บไซต์ที่ดึงดูดสายตา ใช้งานง่าย และสะท้อนเอกลักษณ์ของแบรนด์คุณได้อย่างสมบูรณ์แบบ</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Code className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">พัฒนาด้วยเทคโนโลยีล่าสุด</h3>
              <p className="text-gray-700">ใช้ Next.js, React และ Tailwind CSS เพื่อประสิทธิภาพสูงสุด ความปลอดภัย และความยืดหยุ่น</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[#1e3a8a]">รองรับ SEO เต็มรูปแบบ</h3>
              <p className="text-gray-700">เว็บไซต์ของเราถูกสร้างขึ้นโดยคำนึงถึง SEO เพื่อให้ติดอันดับการค้นหาและเข้าถึงลูกค้าได้มากขึ้น</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Types Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1e3a8a]">
            ประเภทเว็บไซต์ที่เราเชี่ยวชาญ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <ShoppingCart className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">เว็บไซต์ E-commerce</h3>
              <p className="text-gray-700">สร้างร้านค้าออนไลน์ที่ใช้งานง่าย ปลอดภัย และเพิ่มยอดขายให้กับสินค้าของคุณ</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <Briefcase className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">เว็บไซต์องค์กร/ธุรกิจ</h3>
              <p className="text-gray-700">นำเสนอข้อมูลบริษัท บริการ และสร้างความน่าเชื่อถือให้กับแบรนด์ของคุณ</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <PenTool className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">เว็บไซต์ Portfolio/ส่วนตัว</h3>
              <p className="text-gray-700">แสดงผลงาน ความสามารถ และสร้างแบรนด์ส่วนบุคคลที่น่าประทับใจ</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <Layout className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">เว็บไซต์ Blog/ข่าวสาร</h3>
              <p className="text-gray-700">แพลตฟอร์มสำหรับแบ่งปันความรู้ ข่าวสาร และสร้างชุมชนออนไลน์</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <Code className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">เว็บไซต์ Landing Page</h3>
              <p className="text-gray-700">ออกแบบ Landing Page ที่เน้นการแปลงผู้เข้าชมให้เป็นลูกค้า</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <Briefcase className="w-12 h-12 text-[#1e3a8a] mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-[#1e3a8a]">เว็บไซต์อสังหาริมทรัพย์</h3>
              <p className="text-gray-700">นำเสนอโครงการอสังหาฯ ด้วยฟังก์ชันการค้นหาและแกลเลอรีที่น่าสนใจ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Callout Section */}
      <section className="bg-gradient-to-r from-[#25D366] to-[#fb923c] text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            เริ่มต้นสร้างเว็บไซต์ในฝันของคุณวันนี้
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            บริการรับทำเว็บไซต์คุณภาพสูงจาก PhuketSEO <span className="font-bold">เริ่มต้นเพียง ฿15,000</span>
          </p>
          <Link href="/contact" className="bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            ขอใบเสนอราคาฟรี
          </Link>
        </div>
      </section>

      <ServiceFaqSection faqs={webDesignContent.faqs} />

      {/* Contact Call to Action */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#1e3a8a]">
            พร้อมที่จะยกระดับธุรกิจของคุณแล้วหรือยัง?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700">
            ให้ PhuketSEO เป็นส่วนหนึ่งในการสร้างสรรค์เว็บไซต์ที่ทรงพลังและนำพาธุรกิจของคุณไปสู่ความสำเร็จ
          </p>
          <Link href="/contact" className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center w-fit mx-auto">
            <Phone className="w-6 h-6 mr-3" /> ติดต่อเราวันนี้
          </Link>
        </div>
      </section>
    </div>
  );
}
