import { string, StringSchema } from 'yup';

import { MAX_TITLE_LENGTH, MIN_TITLE_LENGTH } from '../courses/constants';

const TitleValidation: StringSchema = string()
  .required()
  .max(MAX_TITLE_LENGTH)
  .min(MIN_TITLE_LENGTH)
  .trim();

export { TitleValidation };
