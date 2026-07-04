import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/images/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.phuketseo.com" }],
        destination: "https://phuketseo.com/:path*",
        permanent: true,
      },
      // บทความ demo ที่ลบแล้ว — ส่งต่อไป cluster Google Maps ที่เกี่ยวข้อง
      {
        source: "/blog/google-maps-ran-kafe-phuket",
        destination: "/blog/dan-andap-google-maps-phuket",
        permanent: true,
      },
      // Next.js serve icon ที่ /icon.png — แต่ metadata เดิมชี้ /icon ทำให้ GSC เจอ 404
      {
        source: "/icon",
        destination: "/icon.png",
        permanent: true,
      },
      {
        source: "/apple-icon",
        destination: "/apple-icon.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
