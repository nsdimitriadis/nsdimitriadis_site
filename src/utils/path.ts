export function withBase(path: string | undefined): string | undefined {
  if (!path) return path;
  // If already absolute external URL, leave as is
  if (/^https?:\/\//i.test(path)) return path;
  // @ts-ignore BASE_URL is provided by Vite/Astro in runtime builds
  const base = (import.meta as any).env?.BASE_URL || '/';
  // Ensure we don't double-insert slashes
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}


