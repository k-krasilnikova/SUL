export const shortifyCourseDescription = (str: string, windowWidth?: string): string => {
  let maxLegth;
  if (windowWidth === 'small') {
    maxLegth = 180;
  } else {
    maxLegth = 420;
  }
  return str.length > maxLegth ? `${str.slice(0, maxLegth)}...` : str;
};
