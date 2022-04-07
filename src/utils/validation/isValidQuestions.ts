import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const CORRECT_ANSWERS_AMOUNT = 1;

const isValidAnswer = (answer: { aN: unknown; variant: unknown }): boolean =>
  Boolean(
    answer &&
      typeof answer.aN === 'number' &&
      answer.aN > 0 &&
      answer.variant &&
      typeof answer.variant === 'string',
  );

const isQuestionsHasCorrectAnswer = (questions: IUpdateCourseBody['test']): boolean =>
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
        typeof question.question === 'string' &&
        question.answers?.every(isValidAnswer) &&
        typeof question.correctAnswer === 'number',
    ),
  );

  const isAnswersStructureValid = validationChecks.every((check) => check);

  const allValidationsPassed = isAnswersStructureValid && isQuestionsHasCorrectAnswer(questions);

  return allValidationsPassed;
};

export default isValidQuestions;
