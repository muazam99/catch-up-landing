import type { NextConfig } from "next";

const blogImageHostname = process.env.BLOG_IMAGE_HOST;
const blogImageProtocol = process.env.BLOG_IMAGE_PROTOCOL === "http" ? "http" : "https";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: blogImageHostname
      ? [
          {
            protocol: blogImageProtocol,
            hostname: blogImageHostname,
          },
        ]
      : [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
