import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { BrandGradientDefs } from "@/components/BrandGradientDefs";
import { HomeSection, HomeSectionHeader } from "@/components/home/HomeSection";
import { MarketingBreadcrumb } from "@/components/MarketingBreadcrumb";

type LegalSection = { title: string; content: string };

export function LegalPageLayout({
  title,
  breadcrumbLabel,
  lastUpdated,
  intro,
  sections,
  footerLinks,
}: {
  title: string;
  breadcrumbLabel: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  footerLinks?: { href: string; label: string }[];
}) {
  return (
    <div className="pt-24">
      <BrandGradientDefs />

      <section className="home-section-bg-white border-b border-slate-100/80">
        <div className="container-custom max-w-3xl py-10 sm:py-12">
          <MarketingBreadcrumb items={[{ label: "หน้าแรก", href: "/" }, { label: breadcrumbLabel }]} />
          <HomeSectionHeader
            eyebrow="Legal"
            title={title}
            description={<span className="text-slate-500 text-sm">อัปเดตล่าสุด: {lastUpdated}</span>}
            className="mb-0"
          />
        </div>
      </section>

      <HomeSection variant="muted" className="border-t-0" containerClass="max-w-3xl">
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base border-l-4 border-violet-400 pl-4">
          {intro}
        </p>
      </HomeSection>

      <HomeSection variant="white" containerClass="max-w-3xl">
        <div className="space-y-8 sm:space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2.5 sm:mb-3">
                {s.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{s.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h3 className="font-bold text-slate-900 mb-2">ติดต่อเรา</h3>
          <p className="text-sm text-slate-600">หากมีคำถาม ติดต่อได้ที่</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-1 block text-sm font-medium text-violet-600 hover:underline underline-offset-2"
          >
            {siteConfig.email}
          </a>
          {footerLinks && footerLinks.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-violet-600 hover:underline underline-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </HomeSection>
    </div>
  );
}
