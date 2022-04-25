import { isInteger, uniqWith } from 'lodash';

import { NOTHING } from 'config/constants';
import { IUpdateCourseBody, IUpdateCourseTest } from 'interfaces/ICourses/IQueryCourses';

import { MAX_QUESTION_LENGTH, MIN_QUESTIONS_PER_TEST, MIN_QUESTION_LENGTH } from './constants';
import capitalizeFirstLetter from '../../string/capitalizeFirstLetter';
import fullTrim from '../../string/fullTrim';
import { convertToTypeUnsafe } from '../../typeConversion/common';
import { isNotNumbersOnly, isNotSpecialsOnly } from '../strings';

const CORRECT_ANSWERS_AMOUNT = 1;

const validateAnswer = (answer: string): string | null => {
  const answerValue = capitalizeFirstLetter(fullTrim(convertToTypeUnsafe<string>(answer)));

  const isValidated = answerValue !== ' ';

  return isValidated ? answerValue : null;
};

const isValidAnswer = (answer: { aN: unknown; variant: unknown }): boolean =>
  Boolean(
    answer &&
      typeof answer.aN === 'number' &&
      answer.aN > NOTHING &&
      answer.variant &&
      typeof answer.variant === 'string' &&
      validateAnswer(convertToTypeUnsafe<string>(answer.variant)),
  );

const isQuestionsHaveNoAnswerDuplicates = (questions: IUpdateCourseTest['questions']): boolean =>
  Boolean(
    questions?.every((question) => {
      const uniqueAnswers = uniqWith(question.answers, (a, b) => a.aN === b.aN);
      return uniqueAnswers.length === question.answers.length;
    }),
  );

const isQuestionsHaveCorrectAnswer = (questions: IUpdateCourseTest['questions']): boolean =>
  Boolean(
    questions?.every(
      (question) =>
        question.answers.filter((answer) => answer.aN === question.correctAnswer).length ===
        CORRECT_ANSWERS_AMOUNT,
    ),
  );

const isValidQuiestionLength = (question: string): boolean =>
  question.length >= MIN_QUESTION_LENGTH && question.length <= MAX_QUESTION_LENGTH;

const validateQuestion = (question: string): string | null => {
  const questionValue = capitalizeFirstLetter(fullTrim(convertToTypeUnsafe<string>(question)));

  const isValidated =
    isValidQuiestionLength(question) && isNotNumbersOnly(question) && isNotSpecialsOnly(question);

  return isValidated ? questionValue : null;
};

const validateTest = (test: IUpdateCourseBody['test']): IUpdateCourseBody['test'] | null => {
  if (!test) {
    return null;
  }

  const questionsValidationChecks = test.questions.map((question) =>
    Boolean(
      typeof question.qN === 'number' &&
        question.qN > MIN_QUESTIONS_PER_TEST &&
        question.question &&
        typeof question.question === 'string' &&
        validateQuestion(convertToTypeUnsafe<string>(question.question)) &&
        question.answers?.every(isValidAnswer) &&
        typeof question.correctAnswer === 'number',
    ),
  );

  const isQuestionsStructureValid = questionsValidationChecks.every((check) => check);

  const { timeout } = test;
  const isTestTimeoutValid = Boolean(timeout && isInteger(timeout) && timeout > NOTHING);

  const allValidationsPassed =
    isQuestionsStructureValid &&
    isTestTimeoutValid &&
    isQuestionsHaveCorrectAnswer(test.questions) &&
    isQuestionsHaveNoAnswerDuplicates(test.questions);

  const validQuestions = test.questions.map((questionElement) => {
    const validQuestion = validateQuestion(questionElement.question);
    const validAnswers = questionElement.answers.map((answer) => ({
      ...answer,
      variant: convertToTypeUnsafe<string>(validateAnswer(answer.variant)),
    }));
    return {
      ...questionElement,
      question: convertToTypeUnsafe<string>(validQuestion),
      answers: validAnswers,
    };
  });

  const validTest = { ...test, questions: validQuestions };

  return allValidationsPassed ? validTest : null;
};

export default validateTest;
