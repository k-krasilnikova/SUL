const INDEX_NOT_FOUND = -1;

export const optimizeLink = (link: string): string => {
  const shortenTo = link.indexOf('&');
  const optimizedLink = shortenTo === INDEX_NOT_FOUND ? link : link.slice(0, shortenTo);
  return optimizedLink;
};
