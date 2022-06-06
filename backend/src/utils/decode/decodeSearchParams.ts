const decodeAndFormatSearchParams = (title: string): string => {
  const symbols = '/+-#%@&^=';
  let decodedTitle = decodeURI(title);

  for (let s = 0; s < decodedTitle.length; s += 1) {
    if (symbols.includes(decodedTitle[s])) {
      decodedTitle = `${decodedTitle.slice(0, s)}\\${decodedTitle.slice(s)}`;
      s += 1;
    }
  }

  return decodedTitle;
};

export default decodeAndFormatSearchParams;
