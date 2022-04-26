import capitalizeFirstLetter from 'utils/string/capitalizeFirstLetter';
import fullTrim from 'utils/string/fullTrim';
import { string, StringSchema } from 'yup';

import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from '../courses/constants';
import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';

const TitleValidation: StringSchema = string()
  .required()
  .max(MAX_TITLE_LENGTH)
  .min(MIN_TITLE_LENGTH)
  .trim()
  .test(isNotNumbersOnly)
  .test(isNotSpecialsOnly)
  .transform(fullTrim)
  .transform(capitalizeFirstLetter);

export { TitleValidation };
