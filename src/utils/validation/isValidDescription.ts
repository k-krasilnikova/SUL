const isValidDescription = (description: unknown): boolean =>
  Boolean(description && typeof description === 'string');

export default isValidDescription;
