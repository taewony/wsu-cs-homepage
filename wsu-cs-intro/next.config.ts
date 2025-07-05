import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/wsu-cs-homepage/intro/' : undefined,
  basePath: isProd ? '/wsu-cs-homepage/intro' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
