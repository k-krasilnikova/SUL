const checkWhitespace = (event: React.KeyboardEvent, inputValue: string): void => {
  const { key } = event;
  const formattedKey = key.trim();
  if (
    (!formattedKey && !inputValue.length) ||
    (!formattedKey && inputValue[inputValue.length - 2] === ' ')
  ) {
    event.preventDefault();
  }
};

export default checkWhitespace;
