import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', 
  basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
