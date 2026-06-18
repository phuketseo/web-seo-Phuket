"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/utils";
import { localSeo, navLinks, primaryServices } from "@/components/nav-data";

function MenuIcon() {
  return (
    <svg aria-hidden width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl">
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
            <div className="pt-3 space-y-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="block text-center text-sm text-slate-500 hover:text-indigo-600"
              >
                {siteConfig.phone}
              </a>
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
    </>
  );
}
