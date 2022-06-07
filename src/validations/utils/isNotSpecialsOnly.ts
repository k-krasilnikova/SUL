const SPECIAL_ONLY_REGEX = /^\W+$/;
const EMPTY_LENGTH = 0;

const isNotSpecialsOnly = (value?: string): boolean =>
  value && value.length > EMPTY_LENGTH ? !value?.match(SPECIAL_ONLY_REGEX) : true;

export default isNotSpecialsOnly;
