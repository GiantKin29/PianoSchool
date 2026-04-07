import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PianoSchool",
  images: { unoptimized: true },
};

export default nextConfig;
