// Prefix for files in /public when the site is served from a sub-path (GitHub Pages: /ibn).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
