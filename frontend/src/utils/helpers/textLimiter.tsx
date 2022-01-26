const textLimiter = (description: string | undefined, limit: number): string => {
  const AFTER = '...';
  const limitedText = description?.slice(0, limit) + AFTER;
  return limitedText;
};

export default textLimiter;
