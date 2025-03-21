import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        pathname: '/tr/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
