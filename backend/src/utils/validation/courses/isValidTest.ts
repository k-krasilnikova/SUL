import { isInteger, uniqWith } from 'lodash';

import { NOTHING } from 'config/constants';
import { IUpdateCourseBody, IUpdateCourseTest } from 'interfaces/ICourses/IQueryCourses';

const CORRECT_ANSWERS_AMOUNT = 1;

const isValidAnswer = (answer: { aN: unknown; variant: unknown }): boolean =>
  Boolean(
    answer &&
      typeof answer.aN === 'number' &&
      answer.aN > NOTHING &&
      answer.variant &&
      typeof answer.variant === 'string',
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

const isValidTest = (test: IUpdateCourseBody['test']): boolean => {
  if (!test) {
    return false;
  }

  const questionsValidationChecks = test.questions.map((question) =>
    Boolean(
      typeof question.qN === 'number' &&
        question.qN > NOTHING &&
        question.question &&
        typeof question.question === 'string' &&
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

  return allValidationsPassed;
};

export default isValidTest;
