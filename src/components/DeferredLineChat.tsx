"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LineChat = dynamic(() => import("@/components/LineChat"), { ssr: false });

function LineChatPlaceholder() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-14 h-14 pointer-events-none"
      aria-hidden
    />
  );
}

export default function DeferredLineChat() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => setReady(true);

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(load, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }

    const id = setTimeout(load, 3500);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return <LineChatPlaceholder />;
  return <LineChat />;
}
