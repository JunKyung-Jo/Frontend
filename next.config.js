/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "findfriend.kro.kr",
      },
    ],
  },
};

module.exports = nextConfig;
