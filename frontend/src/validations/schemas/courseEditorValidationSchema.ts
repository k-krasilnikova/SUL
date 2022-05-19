import { string, object, array } from 'yup';

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

const MIN_MATERIAL_LENGTH = 10;
const MAX_MATERIAL_LENGTH = 5000;

const MIN_TEST_QUESTIONS_AMOUNT = 5;
const MIN_SKILLS_AMOUNT = 1;

const MIN_QUESTION_LENGTH = 10;
const MAX_QUESTION_LENGTH = 1000;

const MIN_TASK_TITLE_LENGTH = 2;
const MAX_TASK_TITLE_LENGTH = 400;

const MIN_TASK_DESCRIPTION_LENGTH = 100;

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
    .required('Description is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_DESCRIPTION_LENGTH, 'Description should be of minimum 50 characters length')
    .max(MAX_DESCRIPTION_LENGTH, 'Description should be of maximum 3000 characters length'),
  material: string()
    .required('Material text is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_MATERIAL_LENGTH, 'Text should be of minimum 10 characters length')
    .max(MAX_MATERIAL_LENGTH, 'Text should be of maximum 5000 characters length'),
  questions: array().required().min(MIN_TEST_QUESTIONS_AMOUNT),
  question: string()
    .required('Question is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_QUESTION_LENGTH, 'Question should be of minimum 10 characters length')
    .max(MAX_QUESTION_LENGTH, 'Question should be of maximum 1000 characters length'),
  answer: string().required('Answer is required').trim().transform(fullTrim),
  skills: array().required().min(MIN_SKILLS_AMOUNT),
  taskTitle: string()
    .required('Title is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_TASK_TITLE_LENGTH, 'Title should be of minimum 2 characters length')
    .max(MAX_TASK_TITLE_LENGTH, 'Title should be of maximum 400 characters length'),
  taskDescription: string()
    .required('Description is required')
    .trim()
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly)
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_TASK_DESCRIPTION_LENGTH, 'Description should be of minimum 100 characters length'),
});

export default courseEditorValidationSchema;
