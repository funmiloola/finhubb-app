import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
        },
       {
        protocol: "https",
        hostname: "static2.finnhub.io",
      },
    ],
  },
};

export default nextConfig;
