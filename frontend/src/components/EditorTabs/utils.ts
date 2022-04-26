export const getKeyFromPath = (path: string, basePath: string): string | null => {
  if (path === basePath) {
    return null;
  }
  return path.replace(`${basePath}/`, '');
};
