export const compareStrings = (stringToCheck: string, stringToSearch: string): boolean => {
  const stringIsFound =
    stringToCheck.toLocaleLowerCase().includes(stringToSearch.trimEnd().toLocaleLowerCase()) ||
    stringToCheck.toLowerCase().includes(stringToSearch.toLowerCase());
  return stringIsFound;
};
