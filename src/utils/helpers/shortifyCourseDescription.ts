import { WINDOW_SIZE } from 'constants/windowWidth';

export const shortifyCourseDescription = (str: string, windowWidth?: string): string => {
  let maxLength;
  if (windowWidth === WINDOW_SIZE.lg.name) {
    maxLength = 180;
  } else {
    maxLength = 420;
  }
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};
