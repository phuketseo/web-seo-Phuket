
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Award, Users, TrendingUp, Lightbulb, Rocket, BarChart, DollarSign, HelpCircle, Share2, MessageCircle, Video } from 'lucide-react';
import { siteConfig, defaultOgImage } from '@/lib/utils';
import { organizationJsonLd, buildBreadcrumb } from '@/lib/schema';
import { siteImages } from '@/lib/images';

export const metadata = {
  title: 'Social Media Marketing ภูเก็ต — เพิ่มยอดขาย | PhuketSEO',
  description: 'บริการ Social Media Marketing ภูเก็ต โดยผู้เชี่ยวชาญ เพิ่มการรับรู้แบรนด์ สร้างยอดขาย และเข้าถึงลูกค้าเป้าหมายของคุณ เริ่มต้นเพียง ฿7,900/เดือน',
  alternates: { canonical: `${siteConfig.url}/services/social-media` },
  openGraph: {
    title: 'Social Media Marketing ภูเก็ต | PhuketSEO',
    description: 'บริการ Social Media Marketing ภูเก็ต — เทคนิคเสริม SEO หลัก',
    url: `${siteConfig.url}/services/social-media`,
    type: 'website',
    images: [defaultOgImage],
  },
};

export default function SocialMediaPage() {
  const breadcrumb = buildBreadcrumb([
    { name: 'หน้าแรก', url: siteConfig.url },
    { name: 'Social Media Marketing', url: `${siteConfig.url}/services/social-media` },
  ]);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: breadcrumb.itemListElement },
      {
        '@type': 'Service',
        'serviceType': 'Social Media Marketing',
        'provider': {
          ...organizationJsonLd,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteConfig.phoneInternational,
            email: siteConfig.email,
            contactType: 'customer service',
          },
        },
        'areaServed': {
          '@type': 'Place',
          'name': 'ภูเก็ต',
        },
        'description': 'บริการ Social Media Marketing ภูเก็ต โดยผู้เชี่ยวชาญ เพิ่มการรับรู้แบรนด์ สร้างยอดขาย และเข้าถึงลูกค้าเป้าหมายของคุณ',
        'name': 'Social Media Marketing ภูเก็ต',
        'url': 'https://phuketseo.com/services/social-media',
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'THB',
          'price': '7900',
          'availability': 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Social Media Marketing คืออะไร และสำคัญต่อธุรกิจในภูเก็ตอย่างไร?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Social Media Marketing คือการใช้แพลตฟอร์มโซเชียลมีเดียเพื่อโปรโมทสินค้า บริการ หรือแบรนด์ของคุณ การมีตัวตนบนโซเชียลมีเดียช่วยให้ธุรกิจในภูเก็ตเข้าถึงนักท่องเที่ยวและคนท้องถิ่นได้อย่างมีประสิทธิภาพ สร้างการรับรู้และกระตุ้นยอดขายได้อย่างรวดเร็ว',
            },
          },
          {
            '@type': 'Question',
            'name': 'PhuketSEO ให้บริการ Social Media Marketing บนแพลตฟอร์มใดบ้าง?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'เราให้บริการครอบคลุมแพลตฟอร์มยอดนิยม เช่น Facebook, Instagram, TikTok และ Line OA เพื่อให้ธุรกิจของคุณเข้าถึงกลุ่มเป้าหมายที่หลากหลายและเหมาะสมกับแต่ละแพลตฟอร์ม',
            },
          },
          {
            '@type': 'Question',
            'name': 'ใช้เวลานานแค่ไหนกว่าจะเห็นผลลัพธ์จากการทำ Social Media Marketing?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ผลลัพธ์อาจแตกต่างกันไปขึ้นอยู่กับเป้าหมายและงบประมาณ โดยทั่วไปแล้ว คุณจะเริ่มเห็นการเปลี่ยนแปลงในการมีส่วนร่วมและการรับรู้แบรนด์ภายใน 1-3 เดือน และยอดขายที่เพิ่มขึ้นในระยะยาว',
            },
          },
          {
            '@type': 'Question',
            'name': 'PhuketSEO มีกลยุทธ์เฉพาะสำหรับธุรกิจในภูเก็ตหรือไม่?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'แน่นอน! เราเข้าใจตลาดภูเก็ตเป็นอย่างดี และพัฒนากลยุทธ์ที่เน้นการเข้าถึงกลุ่มเป้าหมายทั้งนักท่องเที่ยวและคนท้องถิ่น โดยใช้เนื้อหาที่น่าสนใจและตรงกับความต้องการของตลาดในพื้นที่',
            },
          },
          {
            '@type': 'Question',
            'name': 'ค่าบริการ Social Media Marketing เริ่มต้นที่เท่าไหร่?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ค่าบริการของเราเริ่มต้นที่ ฿7,900 ต่อเดือน ซึ่งรวมถึงการวางแผนกลยุทธ์ การสร้างเนื้อหา การจัดการแคมเปญโฆษณา และการวิเคราะห์ผลลัพธ์ เรามีแพ็คเกจที่หลากหลายเพื่อตอบสนองความต้องการและงบประมาณของธุรกิจทุกขนาด',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#25D366] text-white py-20 md:py-32 overflow-hidden">
        <Image
          src={siteImages.services.socialMedia.src}
          alt=""
          fill
          className="object-cover opacity-20 pointer-events-none"
          priority
          sizes="100vw"
          aria-hidden
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4">
            Social Media Marketing ภูเก็ต
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            เพิ่มยอดขาย สร้างแบรนด์ให้เป็นที่รู้จัก และเข้าถึงลูกค้าเป้าหมายของคุณอย่างมีประสิทธิภาพ
          </p>
          <Link href="/contact" className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
            ปรึกษาฟรีวันนี้
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Users className="text-[#25D366] h-12 w-12 mb-3" />
            <p className="text-4xl font-bold text-[#1e3a8a]">500+</p>
            <p className="text-lg">ลูกค้าพึงพอใจ</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="text-[#25D366] h-12 w-12 mb-3" />
            <p className="text-4xl font-bold text-[#1e3a8a]">10+</p>
            <p className="text-lg">ปีแห่งประสบการณ์</p>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="text-[#25D366] h-12 w-12 mb-3" />
            <p className="text-4xl font-bold text-[#1e3a8a]">250%+</p>
            <p className="text-lg">ยอดเข้าชมเพิ่มขึ้นโดยเฉลี่ย</p>
          </div>
        </div>
      </section>

      {/* Why Social Media Marketing? */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            ทำไม Social Media Marketing จึงสำคัญสำหรับธุรกิจคุณในภูเก็ต?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Lightbulb className="text-[#25D366] h-10 w-10 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">เข้าถึงกลุ่มเป้าหมายที่กว้างขึ้น</h3>
              <p className="text-gray-700">
                โซเชียลมีเดียช่วยให้ธุรกิจของคุณเชื่อมต่อกับลูกค้าทั้งในภูเก็ตและนักท่องเที่ยวจากทั่วโลก สร้างการรับรู้แบรนด์ในวงกว้างและเพิ่มโอกาสทางธุรกิจ
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Rocket className="text-[#25D366] h-10 w-10 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">สร้างการมีส่วนร่วมและยอดขาย</h3>
              <p className="text-gray-700">
                ด้วยเนื้อหาที่น่าสนใจและแคมเปญที่ตรงจุด เราช่วยกระตุ้นให้ลูกค้ามีส่วนร่วมกับแบรนด์ของคุณ นำไปสู่การตัดสินใจซื้อและเพิ่มยอดขายในที่สุด
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <BarChart className="text-[#25D366] h-10 w-10 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">วิเคราะห์และปรับปรุงกลยุทธ์</h3>
              <p className="text-gray-700">
                เราใช้ข้อมูลเชิงลึกเพื่อวิเคราะห์ประสิทธิภาพของแคมเปญ และปรับปรุงกลยุทธ์อย่างต่อเนื่อง เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดสำหรับธุรกิจของคุณ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            บริการ Social Media Marketing ของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Share2 className="text-[#1e3a8a] h-12 w-12 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold mb-3">Facebook Marketing</h3>
              <p className="text-gray-700 mb-4">
                เข้าถึงลูกค้าจำนวนมหาศาลด้วยกลยุทธ์ Facebook ที่แม่นยำ สร้างแคมเปญโฆษณาที่ตรงกลุ่มเป้าหมาย เพิ่มการมีส่วนร่วม และกระตุ้นยอดขาย
              </p>
              <Link href="/contact" className="text-[#25D366] hover:underline font-medium">
                เรียนรู้เพิ่มเติม <ChevronRight className="inline-block h-4 w-4" />
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MessageCircle className="text-[#1e3a8a] h-12 w-12 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold mb-3">Instagram Marketing</h3>
              <p className="text-gray-700 mb-4">
                สร้างแบรนด์ให้โดดเด่นด้วยภาพและวิดีโอที่สวยงามบน Instagram ดึงดูดกลุ่มลูกค้าที่ชื่นชอบไลฟ์สไตล์และเทรนด์ใหม่ๆ
              </p>
              <Link href="/contact" className="text-[#25D366] hover:underline font-medium">
                เรียนรู้เพิ่มเติม <ChevronRight className="inline-block h-4 w-4" />
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Video className="text-[#1e3a8a] h-12 w-12 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold mb-3">TikTok Marketing</h3>
              <p className="text-gray-700 mb-4">
                เจาะตลาดคนรุ่นใหม่ด้วยวิดีโอสั้นที่สร้างสรรค์บน TikTok สร้างกระแสไวรัลและเพิ่มการรับรู้แบรนด์อย่างรวดเร็ว
              </p>
              <Link href="/contact" className="text-[#25D366] hover:underline font-medium">
                เรียนรู้เพิ่มเติม <ChevronRight className="inline-block h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            ขั้นตอนการทำงานของเรา
          </h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="absolute hidden md:block h-1 w-full bg-[#25D366] top-1/2 transform -translate-y-1/2 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="bg-[#1e3a8a] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="font-serif text-xl font-semibold mb-2">วิเคราะห์</h3>
              <p className="text-gray-700">ทำความเข้าใจธุรกิจ กลุ่มเป้าหมาย และคู่แข่งของคุณอย่างลึกซึ้ง</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="bg-[#1e3a8a] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="font-serif text-xl font-semibold mb-2">วางแผน</h3>
              <p className="text-gray-700">พัฒนากลยุทธ์ Social Media ที่ปรับให้เข้ากับเป้าหมายและงบประมาณของคุณ</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="bg-[#1e3a8a] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="font-serif text-xl font-semibold mb-2">ดำเนินการ</h3>
              <p className="text-gray-700">สร้างเนื้อหา จัดการแคมเปญโฆษณา และดูแลช่องทางโซเชียลมีเดียของคุณ</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md w-full md:w-1/4">
              <div className="bg-[#1e3a8a] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="font-serif text-xl font-semibold mb-2">รายงานผล</h3>
              <p className="text-gray-700">ติดตาม วิเคราะห์ และรายงานผลลัพธ์ พร้อมปรับปรุงกลยุทธ์อย่างต่อเนื่อง</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Social Proof */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-[#1e3a8a]">
            ผลลัพธ์ที่จับต้องได้จากลูกค้าของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold text-[#25D366] mb-3">+250%</p>
              <p className="text-xl font-semibold text-[#1e3a8a]">ยอดเข้าชมเว็บไซต์</p>
              <p className="text-gray-600">สำหรับธุรกิจโรงแรม</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold text-[#25D366] mb-3">+320%</p>
              <p className="text-xl font-semibold text-[#1e3a8a]">จำนวน Leads</p>
              <p className="text-gray-600">สำหรับธุรกิจอสังหาริมทรัพย์</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold text-[#25D366] mb-3">+180%</p>
              <p className="text-xl font-semibold text-[#1e3a8a]">ยอดจองโต๊ะ</p>
              <p className="text-gray-600">สำหรับร้านอาหาร</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-5xl font-bold text-[#25D366] mb-3">+200%</p>
              <p className="text-xl font-semibold text-[#1e3a8a]">ยอดนัดหมาย</p>
              <p className="text-gray-600">สำหรับคลินิก</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            แพ็คเกจ Social Media Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1e3a8a]">
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Starter</h3>
              <p className="text-4xl font-bold text-[#25D366] mb-2">฿7,900</p>
              <p className="text-gray-600 mb-6">ต่อเดือน</p>
              <ul className="text-gray-700 space-y-3 flex-grow mb-8">
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> วางแผนกลยุทธ์เบื้องต้น</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> สร้างเนื้อหา 8 โพสต์/เดือน</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> จัดการ 1 แพลตฟอร์ม (Facebook/Instagram)</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> รายงานผลรายเดือน</li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-[#25D366] text-white hover:bg-green-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                เริ่มต้นแพ็คเกจ
              </Link>
            </div>

            {/* Professional Package */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#25D366]">
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Professional</h3>
              <p className="text-4xl font-bold text-[#1e3a8a] mb-2">฿15,900</p>
              <p className="text-gray-600 mb-6">ต่อเดือน</p>
              <ul className="text-gray-700 space-y-3 flex-grow mb-8">
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> วางแผนกลยุทธ์เชิงลึก</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> สร้างเนื้อหา 15 โพสต์/เดือน</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> จัดการ 2 แพลตฟอร์ม</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> บริหารจัดการแคมเปญโฆษณา</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> รายงานผลและวิเคราะห์เชิงลึก</li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-[#1e3a8a] text-white hover:bg-blue-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                เลือกแพ็คเกจยอดนิยม
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1e3a8a]">
              <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-4">Enterprise</h3>
              <p className="text-4xl font-bold text-[#25D366] mb-2">฿29,900+</p>
              <p className="text-gray-600 mb-6">ต่อเดือน</p>
              <ul className="text-gray-700 space-y-3 flex-grow mb-8">
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> กลยุทธ์เฉพาะบุคคล</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> สร้างเนื้อหาไม่จำกัด</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> จัดการทุกแพลตฟอร์ม</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> ทีมงานดูแลส่วนตัว</li>
                <li><ChevronRight className="inline-block h-4 w-4 text-[#25D366] mr-2" /> การวิเคราะห์และปรับปรุงแบบเรียลไทม์</li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-[#25D366] text-white hover:bg-green-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                ติดต่อเพื่อรับข้อเสนอพิเศษ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e3a8a]">
            คำถามที่พบบ่อยเกี่ยวกับ Social Media Marketing
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-3 flex items-center"><HelpCircle className="text-[#25D366] mr-3" /> Social Media Marketing คืออะไร และสำคัญต่อธุรกิจในภูเก็ตอย่างไร?</h3>
              <p className="text-gray-700">
                Social Media Marketing คือการใช้แพลตฟอร์มโซเชียลมีเดียเพื่อโปรโมทสินค้า บริการ หรือแบรนด์ของคุณ การมีตัวตนบนโซเชียลมีเดียช่วยให้ธุรกิจในภูเก็ตเข้าถึงนักท่องเที่ยวและคนท้องถิ่นได้อย่างมีประสิทธิภาพ สร้างการรับรู้และกระตุ้นยอดขายได้อย่างรวดเร็ว
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-3 flex items-center"><HelpCircle className="text-[#25D366] mr-3" /> PhuketSEO ให้บริการ Social Media Marketing บนแพลตฟอร์มใดบ้าง?</h3>
              <p className="text-gray-700">
                เราให้บริการครอบคลุมแพลตฟอร์มยอดนิยม เช่น Facebook, Instagram, TikTok และ Line OA เพื่อให้ธุรกิจของคุณเข้าถึงกลุ่มเป้าหมายที่หลากหลายและเหมาะสมกับแต่ละแพลตฟอร์ม
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-3 flex items-center"><HelpCircle className="text-[#25D366] mr-3" /> ใช้เวลานานแค่ไหนกว่าจะเห็นผลลัพธ์จากการทำ Social Media Marketing?</h3>
              <p className="text-gray-700">
                ผลลัพธ์อาจแตกต่างกันไปขึ้นอยู่กับเป้าหมายและงบประมาณ โดยทั่วไปแล้ว คุณจะเริ่มเห็นการเปลี่ยนแปลงในการมีส่วนร่วมและการรับรู้แบรนด์ภายใน 1-3 เดือน และยอดขายที่เพิ่มขึ้นในระยะยาว
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-3 flex items-center"><HelpCircle className="text-[#25D366] mr-3" /> PhuketSEO มีกลยุทธ์เฉพาะสำหรับธุรกิจในภูเก็ตหรือไม่?</h3>
              <p className="text-gray-700">
                แน่นอน! เราเข้าใจตลาดภูเก็ตเป็นอย่างดี และพัฒนากลยุทธ์ที่เน้นการเข้าถึงกลุ่มเป้าหมายทั้งนักท่องเที่ยวและคนท้องถิ่น โดยใช้เนื้อหาที่น่าสนใจและตรงกับความต้องการของตลาดในพื้นที่
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold mb-3 flex items-center"><HelpCircle className="text-[#25D366] mr-3" /> ค่าบริการ Social Media Marketing เริ่มต้นที่เท่าไหร่?</h3>
              <p className="text-gray-700">
                ค่าบริการของเราเริ่มต้นที่ ฿7,900 ต่อเดือน ซึ่งรวมถึงการวางแผนกลยุทธ์ การสร้างเนื้อหา การจัดการแคมเปญโฆษณา และการวิเคราะห์ผลลัพธ์ เรามีแพ็คเกจที่หลากหลายเพื่อตอบสนองความต้องการและงบประมาณของธุรกิจทุกขนาด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#25D366] to-[#1e3a8a] text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            พร้อมทำให้ธุรกิจคุณติดอันดับบน Social Media แล้วหรือยัง?
          </h2>
          <p className="text-xl md:text-2xl mb-10">
            ปรึกษาผู้เชี่ยวชาญของเราวันนี้ เพื่อวางแผนกลยุทธ์ที่เหมาะสมกับธุรกิจของคุณ
          </p>
          <Link href="/contact" className="bg-white text-[#1e3a8a] hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out shadow-lg">
            ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </Link>
          <div className="mt-10 text-lg">
            <p>โทร: <a href={`tel:${siteConfig.phone}`} className="underline hover:text-gray-200">{siteConfig.phone}</a></p>
            <p>LINE ID: <span className="font-semibold">@phuketseo</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}
