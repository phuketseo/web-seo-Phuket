import re

path = "src/lib/blog-posts-meta.ts"
text = open(path, encoding="utf-8").read()

replacements = {
    "seo-for-phuket-spas": "SEO สปาภูเก็t ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วย Local SEO และการมองเห็นบน Google",
    "gemini-hotel-competitor-analysis": "Competitive Audit โรงแรมภูเก็t วิเคราะห์คู่แข่งในโซนและวางแผน SEO ตามข้อมูลจริง",
    "seo-for-phuket-hotels": "SEO โรงแรมภูเก็t ทำอย่างไรให้ Direct Booking โต ลด OTA ด้วยการมองเห็นบน Google",
    "instagram-marketing-phuket-restaurants": "ร้านอาหารภูเก็t ทำ Google Maps ก่อน Instagram — Social เป็นเทคนิคเสริม",
    "web-design-phuket-real-estate": "เว็บอสังหาริมทรัพย์ภูเก็t ที่ดึง lead ได้จริง — mobile-first และ SEO structure",
    "google-my-business-phuket": "Google Business Profile ภูเก็t ทำอย่างไรให้ธุรกิจโผล่ Maps",
    "tiktok-marketing-phuket-services": "ธุรกิจบริการภูเก็t ทำ Google Maps ก่อน TikTok — Social เป็นเทคนิคเสริม",
    "content-marketing-phuket-foreigners": "Content EN สำหรับธุรกิจภูเก็t ดึงลูกค้าต่างชาติจาก Google organic",
    "seo-phuket-kue-arai": "SEO ภูเก็t คืออะไร ทำไมธุรกิจในภูเก็tต้องทำ และควรเริ่มจากอะไร",
    "local-seo-phuket-kue-arai": "Local SEO ภูเก็t ทำอย่างไรให้ธุรกิจโผล่ Google Maps ในโzonจริง",
}

for slug, desc in replacements.items():
    pattern = rf'(slug: "{slug}"[\s\S]*?description:\s*\n?\s*")([^"]*)(")'
    new_text, n = re.subn(pattern, lambda m: m.group(1) + desc + m.group(3), text, count=1)
    if n:
        text = new_text
        print(f"updated {slug}")
    else:
        pattern2 = rf'(slug: "{slug}"[\s\S]*?description: ")([^"]*)(")'
        new_text, n2 = re.subn(pattern2, lambda m: m.group(1) + desc + m.group(3), text, count=1)
        if n2:
            text = new_text
            print(f"updated {slug} (inline)")
        else:
            print(f"MISS {slug}")

# fix accidental latin t in Thai words
text = text.replace("\u0e47t", "\u0e15")  # ็t -> ต after เ
text = text.replace("โzon", "โซน")
text = text.replace("ภูเก็t", "ภูเก็ต")

open(path, "w", encoding="utf-8").write(text)
print("done")
