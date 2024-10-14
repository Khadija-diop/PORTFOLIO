/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/PORTFOLIO/",
  basePath: "/PORTFOLIO",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 10000,
};

export default nextConfig;
