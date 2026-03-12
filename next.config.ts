import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: "export",
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://thiagomarquesrosendo.github.io/smtt_registro_acidentes/:path*', // URL da API externa
      },
    ];
  },
};

export default nextConfig;
