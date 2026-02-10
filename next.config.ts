import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "ui-avatars.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
