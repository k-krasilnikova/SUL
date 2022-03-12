const checkWhitespace = (event: React.KeyboardEvent, inputValue: string): void => {
  const { key } = event;
  const formattedKey = key.trim();
  if (!formattedKey && !inputValue.length) {
    event.preventDefault();
  }
};

export default checkWhitespace;
