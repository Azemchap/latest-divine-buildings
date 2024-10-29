import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // Pattern for image URLs from Sanity
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '', // Leave empty for default
        pathname: '/**', // This allows all paths
      },
      // You can add more patterns here if needed
    ],
  },
};

export default nextConfig;
