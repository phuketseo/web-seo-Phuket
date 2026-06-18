"use client";

import dynamic from "next/dynamic";

const NavbarMobileMenu = dynamic(() => import("@/components/NavbarMobileMenu"), {
  ssr: false,
  loading: () => (
    <button
      type="button"
      className="lg:hidden p-2 rounded-lg w-[38px] h-[38px] shrink-0"
      aria-label="เปิดเมนู"
      disabled
    />
  ),
});

export default function NavbarMobileMenuLazy() {
  return <NavbarMobileMenu />;
}
