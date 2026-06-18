import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { localSeo, navLinks, primaryServices } from "@/components/nav-data";
import NavbarMobileMenuLazy from "@/components/NavbarMobileMenuLazy";

const navLinkClass =
  "px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors whitespace-nowrap shrink-0";

function ChevronIcon() {
  return (
    <svg
      aria-hidden
      width={13}
      height={13}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-transform group-hover:rotate-180"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function NavDropdown({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="relative shrink-0 group">
      <span className="flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-[13px] xl:text-sm font-medium text-slate-600 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors whitespace-nowrap cursor-default">
        {label}
        <ChevronIcon />
      </span>
      <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 py-2 z-50 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150 pointer-events-none group-hover:pointer-events-auto">
        {children}
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header
      data-site-header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-100 py-2.5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between gap-3 min-h-[44px]">
          <Link href="/" className="flex items-center gap-2 shrink-0 min-w-0">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs tracking-tight">PS</span>
            </div>
            <div className="hidden sm:block min-w-0">
              <div className="font-bold text-base leading-tight text-slate-900 whitespace-nowrap [font-family:Tahoma,'Segoe_UI',sans-serif]">
                PhuketSEO
              </div>
              <div className="text-[10px] tracking-widest uppercase text-slate-400 whitespace-nowrap [font-family:Tahoma,'Segoe_UI',sans-serif]">
                SEO + Web ภูเก็ต
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1 min-w-0 flex-nowrap overflow-visible">
            <NavDropdown label="บริการ">
              {primaryServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </NavDropdown>

            <NavDropdown label="Local SEO">
              {localSeo.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </NavDropdown>

            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden 2xl:block text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-[13px] xl:text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5 whitespace-nowrap"
            >
              ปรึกษาฟรี
            </Link>
          </div>

          <NavbarMobileMenuLazy />
        </div>
      </div>
    </header>
  );
}
