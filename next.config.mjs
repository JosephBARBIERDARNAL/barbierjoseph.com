/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/JosephBARBIERDARNAL/static/**",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
