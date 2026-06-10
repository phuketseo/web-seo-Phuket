import Link from 'next/link';
import { Home, ChevronRight, Search } from 'lucide-react';

export const metadata = {
  title: 'บล็อก - PhuketSEO: บทความการตลาดดิจิทัลสำหรับธุรกิจภูเก็ต',
  description: 'อ่านบทความล่าสุดเกี่ยวกับการตลาดดิจิทัล, SEO, โซเชียลมีเดีย และการสร้างเว็บไซต์สำหรับธุรกิจในภูเก็ตและประเทศไทย',
};

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'เพิ่มยอดขายโรงแรมในภูเก็ตด้วย SEO: กลยุทธ์ที่พิสูจน์แล้ว',
      category: 'SEO',
      date: '2026-05-20',
      slug: 'seo-for-phuket-hotels',
      description: 'ค้นพบวิธีที่ SEO สามารถช่วยให้โรงแรมของคุณโดดเด่นในตลาดการแข่งขันสูงของภูเก็ตและดึงดูดนักท่องเที่ยวได้มากขึ้น'
    },
    {
      id: 2,
      title: 'การตลาดบน Instagram สำหรับธุรกิจร้านอาหารในภูเก็ต',
      category: 'Social Media',
      date: '2026-05-15',
      slug: 'instagram-marketing-phuket-restaurants',
      description: 'เรียนรู้เคล็ดลับและกลยุทธ์ในการใช้ Instagram เพื่อโปรโมทร้านอาหารของคุณในภูเก็ตและดึงดูดลูกค้าใหม่ๆ'
    },
    {
      id: 3,
      title: 'สร้างเว็บไซต์ที่ดึงดูดลูกค้าสำหรับธุรกิจอสังหาริมทรัพย์ในภูเก็ต',
      category: 'Web Design',
      date: '2026-05-10',
      slug: 'web-design-phuket-real-estate',
      description: 'แนวทางในการออกแบบเว็บไซต์อสังหาริมทรัพย์ที่สวยงามและใช้งานง่าย เพื่อเปลี่ยนผู้เยี่ยมชมให้เป็นลูกค้าที่มีศักยภาพ'
    },
    {
      id: 4,
      title: 'Google My Business: เครื่องมือสำคัญสำหรับธุรกิจขนาดเล็กในภูเก็ต',
      category: 'Local SEO',
      date: '2026-05-05',
      slug: 'google-my-business-phuket',
      description: 'ใช้ประโยชน์จาก Google My Business เพื่อเพิ่มการมองเห็นธุรกิจของคุณบน Google Maps และ Search ในพื้นที่ภูเก็ต'
    },
    {
      id: 5,
      title: 'กลยุทธ์ TikTok Marketing สำหรับธุรกิจบริการในภูเก็ต',
      category: 'Social Media',
      date: '2026-04-30',
      slug: 'tiktok-marketing-phuket-services',
      description: 'เจาะลึกกลยุทธ์การตลาดบน TikTok ที่จะช่วยให้ธุรกิจบริการของคุณเข้าถึงกลุ่มเป้าหมายวัยรุ่นและสร้างกระแสในภูเก็ต'
    },
    {
      id: 6,
      title: 'Content Marketing: สร้างเนื้อหาที่ดึงดูดลูกค้าชาวต่างชาติในภูเก็ต',
      category: 'Content Marketing',
      date: '2026-04-25',
      slug: 'content-marketing-phuket-foreigners',
      description: 'แนวทางการสร้างสรรค์เนื้อหาที่น่าสนใจและตรงใจนักท่องเที่ยวต่างชาติ เพื่อเพิ่มการมีส่วนร่วมและยอดขายในภูเก็ต'
    },
  ];

  const categories = ['ทั้งหมด', 'SEO', 'Social Media', 'Web Design', 'Local SEO', 'Content Marketing'];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "บล็อก",
                "item": "https://www.phuketseo.com/blog"
              }
            ]
          })
        }}
      />

      {/* Header Section */}
      <header className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif font-bold mb-4">บล็อกของเรา</h1>
          <p className="text-xl">บทความและข้อมูลเชิงลึกด้านการตลาดดิจิทัลสำหรับธุรกิจของคุณ</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="flex items-center hover:text-blue-700">
            <Home className="w-4 h-4 mr-1" /> หน้าแรก
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-700">บล็อก</span>
        </nav>

        {/* Category Filter and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 space-y-4 sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-green-500 hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="ค้นหาบทความ..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center text-white text-2xl font-bold p-4">
                  {/* Placeholder for image or gradient */}
                  <span className="font-serif">บทความ</span>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-sm text-green-600 font-semibold mb-2">{post.category} - {post.date}</p>
                  <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-200">{post.title}</h2>
                  <p className="text-gray-700 text-base leading-relaxed">{post.description}</p>
                </div>
                <div className="p-6 pt-0">
                  <span className="text-blue-700 font-semibold hover:underline">อ่านเพิ่มเติม &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer (Placeholder) */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 PhuketSEO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
