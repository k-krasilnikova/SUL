const FIRST_LETTER_INDEX = 0;
const SECOND_LETTER_INDEX = 1;

const capitalizeFirstLetter = (value: string): string =>
  value.charAt(FIRST_LETTER_INDEX).toUpperCase() + value.slice(SECOND_LETTER_INDEX);

export default capitalizeFirstLetter;
