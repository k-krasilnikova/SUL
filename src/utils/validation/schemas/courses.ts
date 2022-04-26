import { array, number, NumberSchema, object, string, StringSchema } from 'yup';
import { uniqWith } from 'lodash';

import { UserRank } from 'enums/users';
import { TIME_1M_SEC } from 'config/constants';
import { ITest } from 'interfaces/Ientities/Itest';

import capitalizeFirstLetter from '../../string/capitalizeFirstLetter';
import fullTrim from '../../string/fullTrim';
import { convertToTypeUnsafe } from '../../typeConversion/common';
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_QUESTION_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MIN_QUESTIONS_PER_TEST,
  MIN_QUESTION_LENGTH,
  MIN_TITLE_LENGTH,
} from '../courses/constants';
import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';

const CORRECT_ANSWERS_AMOUNT = 1;

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

const answerValidationSchema = {
  aN: number().required().positive(),
  variant: string()
    .required()
    .trim()
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .test((value) => value !== ' '),
};

const AnswerValidator = object(answerValidationSchema).required();

const questionObjectValidationSchema = {
  qN: number().optional(),
  question: string()
    .required()
    .trim()
    .transform(fullTrim)
    .transform(capitalizeFirstLetter)
    .min(MIN_QUESTION_LENGTH)
    .max(MAX_QUESTION_LENGTH)
    .test(isNotNumbersOnly)
    .test(isNotSpecialsOnly),
  answers: array().required().of(AnswerValidator),
  correctAnswer: number().required().positive(),
};

const QuestionObjectValidator = object(questionObjectValidationSchema);

const isQuestionsHaveNoAnswerDuplicates = (questions?: ITest['questions']): boolean =>
  Boolean(
    questions?.every((question) => {
      const uniqueAnswers = uniqWith(question.answers, (a, b) => a.aN === b.aN);
      return uniqueAnswers.length === question.answers.length;
    }),
  );

const isQuestionsHaveCorrectAnswer = (questions?: ITest['questions']): boolean =>
  Boolean(
    questions?.every(
      (question) =>
        question.answers.filter((answer) => answer.aN === question.correctAnswer).length ===
        CORRECT_ANSWERS_AMOUNT,
    ),
  );

const testValidationSchema = {
  questions: array()
    .required()
    .of(QuestionObjectValidator)
    .min(MIN_QUESTIONS_PER_TEST)
    .test((questions) =>
      isQuestionsHaveNoAnswerDuplicates(convertToTypeUnsafe<ITest['questions']>(questions)),
    )
    .test((questions) =>
      isQuestionsHaveCorrectAnswer(convertToTypeUnsafe<ITest['questions']>(questions)),
    ),
  timeout: number().required().positive().min(TIME_1M_SEC),
  title: TitleValidator,
};

const TestValidator = object(testValidationSchema).required();

export { TitleValidator, DescriptionValidator, ComplexityValidator, TestValidator };
