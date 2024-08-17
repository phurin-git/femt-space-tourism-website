export function getDevPath(path: string) {
  return import.meta.env.DEV ? path : path;
}