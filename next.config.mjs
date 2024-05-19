/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/resume",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
      unoptimized: true,
  },
  reactStrictMode: true,
  assetPrefix: '/resume/',
  trailingSlash: true,
  };

export default nextConfig;
