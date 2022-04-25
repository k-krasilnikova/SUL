const NUMBERS_ONLY_REGEX = /^\d+$/;

const isNotNumbersOnly = (value: string) => !NUMBERS_ONLY_REGEX.test(value);

export default isNotNumbersOnly;
