const SPECIAL_SYMBOLS_ONLY_REGEX = /^[\W_]+$/;

const isNotSpecialsOnly = (value?: string): boolean =>
  value ? !SPECIAL_SYMBOLS_ONLY_REGEX.test(value) : false;

export default isNotSpecialsOnly;
