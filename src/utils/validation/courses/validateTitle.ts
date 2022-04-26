import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';
import { convertToTypeUnsafe } from '../../typeConversion/common';
import { TitleValidation } from '../schemas/courses';
import capitalizeFirstLetter from '../../string/capitalizeFirstLetter';
import fullTrim from '../../string/fullTrim';

const validateTitle = (title?: string): string | null => {
  try {
    const partlyValidatedTitle = TitleValidation.validateSync(title);

    const titleValue = capitalizeFirstLetter(
      fullTrim(convertToTypeUnsafe<string>(partlyValidatedTitle)),
    );

    const isValidated = isNotNumbersOnly(titleValue) && isNotSpecialsOnly(titleValue);

    return isValidated ? titleValue : null;
  } catch {
    return null;
  }
};

export default validateTitle;
