"use client";

import { useEffect, useState } from "react";

export function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-40 h-[2px] bg-slate-200/80 top-[var(--site-header-height)]"
      aria-hidden
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #9333ea 0%, #7c3aed 35%, #6366f1 65%, #2563eb 100%)",
        }}
      />
    </div>
  );
}
