import { COURSE_FIELDS } from 'config/constants';

const MIN_TITLE_LENGTH = 2;
const MAX_TITLE_LENGTH = 100;

const MIN_DESCRIPTION_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 3000;

const MIN_EXERCISE_TITLE_LENGTH = 2;
const MAX_EXERCISE_TITLE_LENGTH = 400;

const MIN_PLAIN_MATERIAL_LENGTH = 10;
const MAX_PLAIN_MATERIAL_LENGTH = 5000;

const MIN_EXERCISE_TASK_LENGTH = 100;

const MIN_QUESTION_LENGTH = 10;
const MAX_QUESTION_LENGTH = 1000;

const FIRST_LETTER_INDEX = 0;
const SECOND_LETTER_INDEX = 1;

const MIN_QUESTIONS_PER_TEST = 5;

const COURSE_VALIDATION_ERRORS: { [key: string]: string } = {
  [COURSE_FIELDS.title]: 'Invalid course title.',
  [COURSE_FIELDS.description]: 'Invalid course description.',
  [COURSE_FIELDS.technologies]: 'Invalid course technologies.',
  [COURSE_FIELDS.materials]: 'Invalid course materials.',
  [COURSE_FIELDS.test]: 'Invalid course test.',
  [COURSE_FIELDS.avatar]: 'Invalid course avatar.',
  [COURSE_FIELDS.complexity]: 'Invalid course complexity.',
};

export {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  FIRST_LETTER_INDEX,
  SECOND_LETTER_INDEX,
  MIN_DESCRIPTION_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MIN_PLAIN_MATERIAL_LENGTH,
  MAX_PLAIN_MATERIAL_LENGTH,
  MIN_QUESTIONS_PER_TEST,
  MIN_QUESTION_LENGTH,
  MAX_QUESTION_LENGTH,
  MIN_EXERCISE_TITLE_LENGTH,
  MAX_EXERCISE_TITLE_LENGTH,
  MIN_EXERCISE_TASK_LENGTH,
  COURSE_VALIDATION_ERRORS,
};
