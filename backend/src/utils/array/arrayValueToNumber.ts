const arrayValueToNumber = (arr: string[] | []): number[] =>
  arr.length ? arr.map((value) => +value) : [];

export { arrayValueToNumber };
