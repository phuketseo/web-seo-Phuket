"use client";

import dynamic from "next/dynamic";

const LineChat = dynamic(() => import("@/components/LineChat"), { ssr: false });

export default function DeferredLineChat() {
  return <LineChat />;
}
