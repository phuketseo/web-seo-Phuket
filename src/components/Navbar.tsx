"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/utils";

const primaryServices = [
  { name: "บริการ SEO ภูเก็ต", href: "/services/seo-phuket" },
  { name: "ทำเว็บไซต์ + SEO", href: "/services/web-design" },
  { name: "AI Search (AEO/GEO)", href: "/services/ai-search-visibility" },
];

const localSeo = [
  { name: "SEO ป่าตอง", href: "/local/patong" },
  { name: "SEO กะตะ", href: "/local/kata" },
  { name: "SEO กมลา", href: "/local/kamala" },
  { name: "SEO กะทู้", href: "/local/kathu" },
  { name: "SEO ตัวเมืองภูเก็ต", href: "/local/phuket-town" },
  { name: "SEO ถลาง", href: "/local/thalang" },
];

const navLinks = [
  { name: "วิธีการ", href: "/methodology/phuket-visibility-stack" },
  { name: "ผลงาน", href: "/case-studies" },
  { name: "ราคา", href: "/pricing" },
  { name: "บทความ", href: "/blog" },
  { name: "ติดต่อ", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-tight">PS</span>
            </div>
            <div>
              <div className="font-bold text-base leading-tight font-serif text-slate-900">PhuketSEO</div>
              <div className="text-[10px] tracking-widest uppercase text-slate-400">SEO + Web ภูเก็ต</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {primaryServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {s.name}
              </Link>
            ))}

            <div className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                onMouseEnter={() => setLocalOpen(true)}
                onMouseLeave={() => setLocalOpen(false)}
              >
                Local SEO <ChevronDown size={13} className={`transition-transform ${localOpen ? "rotate-180" : ""}`} />
              </button>
              {localOpen && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-2xl shadow-xl shadow-slate-100 border border-slate-100 py-2 z-50"
                  onMouseEnter={() => setLocalOpen(true)}
                  onMouseLeave={() => setLocalOpen(false)}
                >
                  {localSeo.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-100 hover:-translate-y-0.5"
            >
              ปรึกษาฟรี
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">บริการหลัก</p>
            {primaryServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2 mt-2">Local SEO</p>
            {localSeo.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-3 mt-3 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ปรึกษาฟรี
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
