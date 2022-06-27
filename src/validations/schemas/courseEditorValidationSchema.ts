import { string, object, array, number } from 'yup';

import { isNotNumbersOnly, isNotSpecialsOnly } from 'validations/utils';
import {
  EXERCISE_DESCRIPTION_LENGTH_REGEX,
  EXERCISE_IS_NOT_NUMBERS_REGEX,
  MAX_DESCRIPTION_LENGTH,
  MAX_EXERCISE_TITLE_LENGTH,
  MAX_MATERIAL_LENGTH,
  MAX_QUESTION_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MIN_EXERCISE_TITLE_LENGTH,
  MIN_MATERIAL_LENGTH,
  MIN_QUESTION_LENGTH,
  MIN_SKILLS_AMOUNT,
  MIN_TEST_ANSWERS_AMOUNT,
  MIN_TEST_QUESTIONS_AMOUNT,
  MIN_TITLE_LENGTH,
} from 'constants/courseEditor';

const courseEditorValidationSchema = object().shape({
  title: string()
    .required('Title is required')
    .test('isNotNumbers', 'Title cannot contain only numbers', isNotNumbersOnly)
    .test('isNotSpecial', 'Title cannot contain only special characters', isNotSpecialsOnly)
    .min(MIN_TITLE_LENGTH, 'Title should be of minimum 2 characters length')
    .max(MAX_TITLE_LENGTH, 'Title should be of maximum 100 characters length'),
  description: string()
    .required('Description is required')
    .test('isNotNumbers', 'Description cannot contain only numbers', isNotNumbersOnly)
    .test('isNotSpecial', 'Description cannot contain only special characters', isNotSpecialsOnly)
    .min(MIN_DESCRIPTION_LENGTH, 'Description should be of minimum 50 characters length')
    .max(MAX_DESCRIPTION_LENGTH, 'Description should be of maximum 3000 characters length'),
  materials: array()
    .required()
    .of(
      object()
        .shape({
          plain: string()
            .required('Material is required')
            .test('isNotNumbers', 'Material text cannot contain only numbers', isNotNumbersOnly)
            .test(
              'isNotSpecial',
              'Material text cannot contain only special characters',
              isNotSpecialsOnly,
            )
            .min(MIN_MATERIAL_LENGTH, 'Material text should be of minimum 10 characters length')
            .max(MAX_MATERIAL_LENGTH, 'Material text should be of maximum 5000 characters length'),
          presentation: string()
            .required('Link is required')
            .matches(
              new RegExp(`(((https|http)://|)docs.google.com/presentation/d/)(.+?(?=(/.+|/|$)))`),
              'Should be link to google slides',
            ),
          video: string()
            .required('Link for video is required')
            .matches(/\b(https?:\/\/.*?\.[a-z]{2,4}\/[^\s]*\b)/g, 'Should be url type.'),
          exercise: object().shape({
            eN: number(),
            title: string()
              .min(
                MIN_EXERCISE_TITLE_LENGTH,
                'Exercise title should be of minimum 2 characters length',
              )
              .max(
                MAX_EXERCISE_TITLE_LENGTH,
                'Exercise title should be of maximum 400 characters length',
              )
              .matches(EXERCISE_IS_NOT_NUMBERS_REGEX, {
                excludeEmptyString: true,
                message: 'Exercise title cannot contain only numbers',
              })
              .test(
                'isNotSpecial',
                'Exercise title cannot contain only special characters',
                isNotSpecialsOnly,
              ),
            task: string()
              .matches(EXERCISE_DESCRIPTION_LENGTH_REGEX, {
                excludeEmptyString: true,
                message: 'Exercise description should be of minimum 100 characters length',
              })
              .matches(EXERCISE_IS_NOT_NUMBERS_REGEX, {
                excludeEmptyString: true,
                message: 'Exercise description cannot contain only numbers',
              })
              .test(
                'isNotSpecial',
                'Exercise title cannot contain only special characters',
                isNotSpecialsOnly,
              ),
          }),
        })
        .defined(),
    ),
  technologies: array()
    .required('The course should have at least 1 skill')
    .min(MIN_SKILLS_AMOUNT)
    .of(
      object().shape({
        name: string().required('Technology name is required'),
        points: number().required('Level is required'),
      }),
    ),
  test: object().shape({
    title: string()
      .required('Title is required')
      .test('isNotNumbers', 'Title cannot contain only numbers', isNotNumbersOnly)
      .test('isNotSpecial', 'Title cannot contain only special characters', isNotSpecialsOnly),
    questions: array()
      .required('Questions are required')
      .min(MIN_TEST_QUESTIONS_AMOUNT, 'The minimum amount of the questions in the test should be 5')
      .of(
        object().shape({
          question: string()
            .required('Question is required')
            .test('isNotNumbers', 'Question cannot contain only numbers', isNotNumbersOnly)
            .test(
              'isNotSpecial',
              'Question cannot contain only special characters',
              isNotSpecialsOnly,
            )
            .min(MIN_QUESTION_LENGTH, 'Question should be of minimum 10 characters length')
            .max(MAX_QUESTION_LENGTH, 'Question should be of maximum 1000 characters length'),
          answers: array()
            .required('Question answers are required')
            .min(MIN_TEST_ANSWERS_AMOUNT, 'The question should have at least 1 answer')
            .of(
              object().shape({
                variant: string().required('Answer is required'),
              }),
            ),
        }),
      ),
  }),
});

export default courseEditorValidationSchema;
