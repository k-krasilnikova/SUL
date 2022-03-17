const formatInputValue = (inputValue: string): string => {
  const formattedValue = inputValue.split(/\s+/).join(' ').trimStart();
  return formattedValue;
};

export default formatInputValue;
