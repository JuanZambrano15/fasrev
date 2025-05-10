import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack"; // 👈 Importa webpack si no lo has hecho

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      {
        module: /@mapbox\/node-pre-gyp\/lib\/util\/nw-pre-gyp\/index\.html/,
      },
    ];

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Indica a Webpack que 'fs' no está disponible en el cliente
      };
    }

    return config;
  },
};

module.exports = nextConfig;

