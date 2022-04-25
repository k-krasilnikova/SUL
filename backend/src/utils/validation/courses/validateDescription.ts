import { MAX_DESCRIPTION_LENGTH, MIN_DESCRIPTION_LENGTH } from './constants';
import isValidText from './isValidText';
import { convertToTypeUnsafe } from '../../typeConversion/common';
import fullTrim from '../../string/fullTrim';
import capitalizeFirstLetter from '../../string/capitalizeFirstLetter';
import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';

const isValidLength = (value: string) =>
  value.length <= MAX_DESCRIPTION_LENGTH && value.length >= MIN_DESCRIPTION_LENGTH;

const validateDescription = (description?: string): string | null => {
  if (!isValidText(description)) {
    return null;
  }

  const descriptionValue = capitalizeFirstLetter(
    fullTrim(convertToTypeUnsafe<string>(description)),
  );

  const isDescriptionValid =
    isValidLength(descriptionValue) &&
    isNotNumbersOnly(descriptionValue) &&
    isNotSpecialsOnly(descriptionValue);

  return isDescriptionValid ? descriptionValue : null;
};

export default validateDescription;
