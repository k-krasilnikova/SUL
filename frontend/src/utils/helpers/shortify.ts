export const shortify = (str: string, maxLegth = 420): string => {
  return `${str.slice(0, maxLegth)}...`;
};
