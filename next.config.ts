import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "brown-glamorous-bear-418.mypinata.cloud",
      },
      {
        hostname: "example.com",
      },
      {
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
