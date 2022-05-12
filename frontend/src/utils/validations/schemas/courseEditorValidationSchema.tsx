import { string, object } from 'yup';

import {
  fullTrim,
  isNotNumbersOnly,
  isNotSpecialsOnly,
  capitalizeFirstLetter,
} from 'utils/helpers/strings';

const MIN_TITLE_LENGTH = 2;
const MAX_TITLE_LENGTH = 100;

const MIN_DESCRIPTION_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 3000;

const courseEditorValidationSchema = object().shape({
  title: string()
    .required('Title is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_TITLE_LENGTH, 'Title should be of minimum 2 characters length')
    .max(MAX_TITLE_LENGTH, 'Title should be of maximum 100 characters length'),
  description: string()
    .required('Title is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_DESCRIPTION_LENGTH, 'Title should be of minimum 2 characters length')
    .max(MAX_DESCRIPTION_LENGTH, 'Title should be of maximum 100 characters length'),
});

export default courseEditorValidationSchema;
