import type { NextConfig } from "next";

/** Project-site path on GitHub Pages, e.g. /ayusyntax (no trailing slash). */
function normalizeBasePath(path?: string): string {
  if (!path || path === "/") return "";
  const trimmed = path.replace(/\/$/, "");
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
