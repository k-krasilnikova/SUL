export const setFirstLetterUppercase = (stringToFormat: string): string => {
  const formattedString = stringToFormat[0].toUpperCase() + stringToFormat.slice(1);
  return formattedString;
};
