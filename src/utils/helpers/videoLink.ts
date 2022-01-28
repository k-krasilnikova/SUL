export const optimizeLink = (link: string): string => {
  const shortenTo = link.indexOf('&');
  const optimizedLink = link.slice(0, shortenTo);
  return optimizedLink;
};
