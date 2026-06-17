#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

DATES = {
    "seo-sme-phuket": "2026-06-17",
    "seo-restaurants-phuket": "2026-06-16",
    "nap-local-seo-phuket": "2026-06-15",
    "local-seo-phuket-town": "2026-06-14",
    "local-seo-kata-phuket": "2026-06-13",
    "low-season-seo-phuket": "2026-06-12",
    "near-me-seo-phuket": "2026-06-11",
    "website-speed-seo-phuket": "2026-06-10",
    "local-seo-patong-phuket": "2026-06-09",
    "seo-tours-phuket": "2026-06-08",
    "seo-real-estate-phuket": "2026-06-07",
    "google-reviews-phuket": "2026-06-06",
    "direct-booking-hotel-phuket": "2026-06-05",
    "seo-clinic-phuket": "2026-06-04",
    "google-ads-vs-seo-phuket": "2026-06-03",
    "rab-tam-web-phuket": "2026-06-02",
    "geo-kue-arai": "2026-06-01",
    "aeo-kue-arai": "2026-05-31",
    "ai-overview-kue-arai": "2026-05-30",
    "seo-phuket-kue-arai": "2026-05-29",
    "local-seo-phuket-kue-arai": "2026-05-28",
    "raaka-seo-phuket": "2026-05-27",
    "seo-for-phuket-spas": "2026-05-25",
    "gemini-hotel-competitor-analysis": "2026-05-24",
    "seo-for-phuket-hotels": "2026-05-26",
    "instagram-marketing-phuket-restaurants": "2026-05-23",
    "web-design-phuket-real-estate": "2026-05-22",
    "google-my-business-phuket": "2026-05-21",
    "tiktok-marketing-phuket-services": "2026-05-20",
    "content-marketing-phuket-foreigners": "2026-05-19",
}


def main() -> None:
    path = ROOT / "src/lib/blog-posts-meta.ts"
    text = path.read_text(encoding="utf-8")
    marker = "export const blogPostsMeta"
    if marker not in text:
        raise SystemExit("blogPostsMeta not found")

    head, tail = text.split(marker, 1)
    body = marker + tail

    for slug, iso in DATES.items():
        pattern = rf'(slug:\s*"{re.escape(slug)}"[\s\S]*?dateISO:\s*")[^"]+(")'
        body, n = re.subn(pattern, rf"\g<1>{iso}\g<2>", body, count=1)
        if n != 1:
            raise SystemExit(f"failed: {slug}")

    path.write_text(head + body, encoding="utf-8", newline="\n")
    print("OK meta dates")


if __name__ == "__main__":
    main()
