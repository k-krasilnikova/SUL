const formatInputValue = (inputValue: string): string =>
  inputValue.replace(/\s\s+/g, ' ').trimStart();

export default formatInputValue;
