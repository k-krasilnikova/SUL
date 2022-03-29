const checkPastedText = (event: React.ClipboardEvent): string => {
  event.preventDefault();
  const inputValue = event.clipboardData.getData('Text');
  const formattedValue = inputValue.split(/\s+/).join(' ').trimStart().trimEnd();
  return formattedValue;
};

export default checkPastedText;
