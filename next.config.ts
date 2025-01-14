import type { NextConfig } from 'next';

const nextConfig = {
  // devIndicators: {
  //   appIsrStatus: false, // defaults to true
  //   buildActivity: true, // defaults to true
  //   buildActivityPosition: 'bottom-right',
  // },

  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    cssChunking: true,
    optimizePackageImports: [],
  },
  images: {
    // deviceSizes: [640, 750, 828, 1080, 1280, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.tripi.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gcs.tripi.vn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.ophim.live',
        pathname: '/uploads/movies/**',
      },
    ],
  },

  logging: false,
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //     hmrRefreshes: true,
  //   },
  // },
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ['pino', 'pino-pretty'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
} satisfies NextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
//
// module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig;
