import { string, StringSchema } from 'yup';

import capitalizeFirstLetter from 'utils/string/capitalizeFirstLetter';
import fullTrim from 'utils/string/fullTrim';

import {
  MAX_DESCRIPTION_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MIN_TITLE_LENGTH,
} from '../courses/constants';
import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';

const TitleValidator: StringSchema = string()
  .required()
  .trim()
  .test(isNotNumbersOnly)
  .test(isNotSpecialsOnly)
  .transform(fullTrim)
  .transform(capitalizeFirstLetter)
  .max(MAX_TITLE_LENGTH)
  .min(MIN_TITLE_LENGTH);

const DescriptionValidator: StringSchema = string()
  .required()
  .trim()
  .test(isNotNumbersOnly)
  .test(isNotSpecialsOnly)
  .transform(fullTrim)
  .transform(capitalizeFirstLetter)
  .max(MAX_DESCRIPTION_LENGTH)
  .min(MIN_DESCRIPTION_LENGTH);

export { TitleValidator, DescriptionValidator };
