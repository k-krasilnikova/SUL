const START_SYMBOL = 0;
export const MAX_LENGTH = 25;

export const getShortedSkillName = (str: string): string => {
  return str.length > MAX_LENGTH ? `${str.slice(START_SYMBOL, MAX_LENGTH)}...` : str;
};
