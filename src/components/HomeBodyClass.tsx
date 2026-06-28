"use client";

import { useEffect } from "react";

/** Navbar gradient CTA on homepage only */
export function HomeBodyClass() {
  useEffect(() => {
    document.body.dataset.page = "home";
    return () => {
      delete document.body.dataset.page;
    };
  }, []);
  return null;
}
