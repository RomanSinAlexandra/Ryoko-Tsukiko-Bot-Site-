import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/Ryoko-Tsukiko-Bot-Site-';

const nextConfig = {
output: 'export',
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '', // Добавляет префикс к JS/CSS файлам
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
