const NUMBERS_ONLY_REGEX = /^\d+$/;

const isNotNumbersOnly = (value?: string): boolean =>
  value ? !NUMBERS_ONLY_REGEX.test(value) : false;

export default isNotNumbersOnly;
