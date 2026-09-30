import type { NextConfig } from "next";

// GitHub Pages serves the site from /ibn; local dev and other hosts leave BASE_PATH empty.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "ibnonline.co.uk", pathname: "/wp-content/uploads/**" }],
  },
};

export default nextConfig;
