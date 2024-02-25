/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // register: true,
  // skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);
