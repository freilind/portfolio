/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: true,
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
