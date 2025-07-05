/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/wsu-cs-homepage/' : undefined,
  basePath: isProd ? '/wsu-cs-homepage' : undefined,
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
