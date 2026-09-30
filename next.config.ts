import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ibnonline.co.uk", pathname: "/wp-content/uploads/**" }],
  },
};

export default nextConfig;
