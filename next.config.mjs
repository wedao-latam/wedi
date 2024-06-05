import withBundleAnalyzer from '@next/bundle-analyzer';
import { withContentlayer } from "next-contentlayer";

// Initialize withBundleAnalyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx", "ts", "js"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  // webpack: (config) => {
  //   config.ignoreWarnings = [
  //     /critical dependency:/,
  //   ];
  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

// Combine all configurations
export default withContentlayer(bundleAnalyzer(nextConfig));
