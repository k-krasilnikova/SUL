import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from './constants';
import isValidText from './isValidText';
import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';
import fullTrim from '../../string/fullTrim';
import capitalizeFirstLetter from '../../string/capitalizeFirstLetter';
import { convertToTypeUnsafe } from '../../typeConversion/common';

const isValidLength = (value: string) =>
  value.length <= MAX_TITLE_LENGTH && value.length >= MIN_TITLE_LENGTH;

const validateTitle = (title?: string): string | null => {
  if (!isValidText(title)) {
    return null;
  }

  const titleValue = capitalizeFirstLetter(fullTrim(convertToTypeUnsafe<string>(title)));

  const isValidated =
    isValidLength(titleValue) && isNotNumbersOnly(titleValue) && isNotSpecialsOnly(titleValue);

  return isValidated ? titleValue : null;
};

export default validateTitle;
