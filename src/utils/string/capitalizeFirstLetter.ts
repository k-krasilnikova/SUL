import { FIRST_LETTER_INDEX, SECOND_LETTER_INDEX } from '../validation/courses/constants';

const capitalizeFirstLetter = (value: string): string =>
  value.charAt(FIRST_LETTER_INDEX).toUpperCase() + value.slice(SECOND_LETTER_INDEX);

export default capitalizeFirstLetter;
