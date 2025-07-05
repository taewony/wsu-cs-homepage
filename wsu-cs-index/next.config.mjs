/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: isProd ? 'export' : undefined,
  assetPrefix: isProd ? '/cs-wsu-main-index/' : undefined,
  basePath: isProd ? '/cs-wsu-main-index' : undefined,
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
