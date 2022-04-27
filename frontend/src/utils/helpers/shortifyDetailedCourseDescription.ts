const START_SYMBOL = 0;
export const MAX_LENGTH = 140;

export const shortifyDetailedCourseDescription = (str: string): string => {
  return str.slice(START_SYMBOL, MAX_LENGTH);
};
