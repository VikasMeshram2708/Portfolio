import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "is.gd",
        protocol: "https",
        pathname: "/**",
        port: "",
        search:""
      },
    ],
  },
};

export default nextConfig;
