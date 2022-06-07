import { ITest } from 'interfaces/entities/test';

const setAnswerProperNumbersToQuestions = (questions: ITest['questions']): ITest['questions'] =>
  questions.map((question, index) => ({ ...question, qN: index + 1 }));

export { setAnswerProperNumbersToQuestions };
