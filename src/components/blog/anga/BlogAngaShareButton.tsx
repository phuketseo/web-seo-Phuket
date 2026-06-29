"use client";

import { Share2 } from "lucide-react";
import { useCallback, useState } from "react";

type Props = {
  url: string;
  title: string;
};

export function BlogAngaShareButton({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* user cancelled or unsupported */
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }, [title, url]);

  return (
    <button
      type="button"
      onClick={handleShare}
      className="btn-pill-ghost !px-4 !py-2 !text-sm gap-1.5"
      aria-label="แชร์บทความ"
    >
      <Share2 size={15} aria-hidden />
      <span>{copied ? "คัดลอกลิงก์แล้ว" : "แชร์"}</span>
    </button>
  );
}
