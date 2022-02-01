export const shortifyCourseDescription = (str: string, maxLegth = 420): string => {
  return str.length > maxLegth ? `${str.slice(0, maxLegth)}...` : str;
};
