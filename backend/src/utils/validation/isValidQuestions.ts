import { NOTHING } from 'config/constants';
import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { uniqWith } from 'lodash';

const CORRECT_ANSWERS_AMOUNT = 1;

const isValidAnswer = (answer: { aN: unknown; variant: unknown }): boolean =>
  Boolean(
    answer &&
      typeof answer.aN === 'number' &&
      answer.aN > NOTHING &&
      answer.variant &&
      typeof answer.variant === 'string',
  );

const isQuestionsHaveNoAnswerDuplicates = (questions: IUpdateCourseBody['test']): boolean =>
  Boolean(
    questions?.every((question) => {
      const uniqueAnswers = uniqWith(question.answers, (a, b) => a.aN === b.aN);
      return uniqueAnswers.length === question.answers.length;
    }),
  );

const isQuestionsHaveCorrectAnswer = (questions: IUpdateCourseBody['test']): boolean =>
  Boolean(
    questions?.every(
      (question) =>
        question.answers.filter((answer) => answer.aN === question.correctAnswer).length ===
        CORRECT_ANSWERS_AMOUNT,
    ),
  );

const isValidQuestions = (questions: IUpdateCourseBody['test']): boolean => {
  if (!questions || !questions.length) {
    return false;
  }

  const validationChecks = questions.map((question) =>
    Boolean(
      typeof question.qN === 'number' &&
        question.qN > NOTHING &&
        question.question &&
        typeof question.question === 'string' &&
        question.answers?.every(isValidAnswer) &&
        typeof question.correctAnswer === 'number',
    ),
  );

  const isQuestionsStructureValid = validationChecks.every((check) => check);

  const allValidationsPassed =
    isQuestionsStructureValid &&
    isQuestionsHaveCorrectAnswer(questions) &&
    isQuestionsHaveNoAnswerDuplicates(questions);

  return allValidationsPassed;
};

export default isValidQuestions;
