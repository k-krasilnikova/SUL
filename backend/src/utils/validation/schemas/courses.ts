import { number, NumberSchema, string, StringSchema } from 'yup';

import { UserRank } from 'enums/users';

import capitalizeFirstLetter from '../../string/capitalizeFirstLetter';
import fullTrim from '../../string/fullTrim';
import { convertToTypeUnsafe } from '../../typeConversion/common';

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

const ComplexityValidator: NumberSchema = number()
  .required()
  .test((complexity) => Object.values(UserRank).includes(convertToTypeUnsafe<number>(complexity)));

export { TitleValidator, DescriptionValidator, ComplexityValidator };
