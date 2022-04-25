const SPECIAL_SYMBOLS_ONLY_REGEX = /^[\W_]+$/;

const isNotSpecialsOnly = (value: string) => !SPECIAL_SYMBOLS_ONLY_REGEX.test(value);

export default isNotSpecialsOnly;
