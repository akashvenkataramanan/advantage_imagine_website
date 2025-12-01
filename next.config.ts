import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  basePath: "/advantage_imagine_website",
  assetPrefix: "/advantage_imagine_website/",
};

export default nextConfig;
