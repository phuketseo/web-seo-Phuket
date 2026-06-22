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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const itemClass =
  "block px-3 py-2 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg text-sm transition-colors";

function MobileDropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { name: string; href: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="mt-0.5 ml-2 border-l border-slate-100 pl-2 space-y-0.5">
          {items.map((s) => (
            <Link key={s.href} href={s.href} className={itemClass} onClick={onNavigate}>
              {s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
        aria-expanded={isOpen}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl max-h-[min(70vh,520px)] overflow-y-auto">
          <div className="px-3 py-3 space-y-0.5">
            <MobileDropdown label="บริการ" items={primaryServices} onNavigate={close} />
            <MobileDropdown label="Local SEO" items={localSeo} onNavigate={close} />

            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={itemClass} onClick={close}>
                {item.name}
              </Link>
            ))}

            <div className="border-t border-slate-100 pt-2 mt-2 flex items-center gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex-1 text-center text-sm text-slate-500 hover:text-indigo-600 py-2"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
                onClick={close}
              >
                ขอคำปรึกษาฟรี
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
