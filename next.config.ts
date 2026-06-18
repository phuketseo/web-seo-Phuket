import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
