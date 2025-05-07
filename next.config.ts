import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'github.com', 
      'vercel.app', 
      'fly.dev', 
      'lh3.googleusercontent.com',
      'yourdomain.com'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fly.dev',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/themes'
    ]
  },
};

export default nextConfig;
