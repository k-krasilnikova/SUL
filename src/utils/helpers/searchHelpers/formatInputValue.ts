const formatInputValue = (inputValue: string): string => {
  const formattedValue = inputValue.split(/\s+/).join(' ').trimStart().trimEnd();
  return formattedValue;
};

export default formatInputValue;
