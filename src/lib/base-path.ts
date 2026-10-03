const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Repo subpath on GitHub Pages, e.g. `/ayusyntax` (no trailing slash). */
export const basePath = rawBasePath.replace(/\/$/, "");

/** Prefix public asset and image paths when `basePath` is set. */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
