/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["localhost"],
    unoptimized: true
  },
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  serverRuntimeConfig: {
    // Bind to a specific IP address
    host: '192.168.1.4', // Replace this with your desired IP address
  },
  
  // assetPrefix: ".",
};
