const TRAILING_SPACES_REGEX = /[\s]{2,}/g;
const SPACE = ' ';

const fullTrim = (value: string): string => value.trim().replace(TRAILING_SPACES_REGEX, SPACE);

export default fullTrim;
