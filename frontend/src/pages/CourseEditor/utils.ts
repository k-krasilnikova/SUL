import { Numbers } from 'enums/numbers';
import { IFormattedValues, IFormQuestion, IFormTechnology, IFormValues } from './types';

const EMPTY_LENGTH = 0;
const FIRST_LETTER_INDEX = 0;
const SECOND_LETTER_INDEX = 1;
const TRAILING_SPACES_REGEX = /[\s]{2,}/g;
const MS_PARAMETER = 1000;
const START_DATE_PARAMETER = 11;
const END_DATE_PARAMETER = 16;

export const getPointsArr = (maxPoints: number): number[] => {
  const pointsArr = [];
  for (let i = Numbers.one; i <= maxPoints; i += Numbers.one) {
    pointsArr.push(i);
  }
  return pointsArr;
};

export const formatFieldValue = (value: string): string => {
  let formattedValue = value.replace(TRAILING_SPACES_REGEX, ' ').trim();
  if (formattedValue.length > EMPTY_LENGTH) {
    formattedValue =
      formattedValue[FIRST_LETTER_INDEX].toUpperCase() + formattedValue.slice(SECOND_LETTER_INDEX);
  }
  return formattedValue;
};

export const formatValuesForSubmit = (values: IFormValues): IFormattedValues => {
  const formattedValues = {
    avatar: values.avatar,
    title: values.title,
    description: values.description,
    materials: values.materials.map((material) => ({ content: [material] })),
    technologies: values.technologies.map((technology: IFormTechnology) => ({
      skill: technology._id,
      points: technology.points,
    })),
    test: {
      title: values.test.title,
      timeout: values.test.timeout,
      questions: values.test.questions.map((question: IFormQuestion) => ({
        question: question.question,
        correctAnswer: question.correctAnswer,
        answers: question.answers.map((answer) => ({
          aN: answer.aN,
          variant: answer.variant,
        })),
      })),
    },
  };
  return formattedValues;
};

export const convertSecondsToString = (duration: number): string => {
  return new Date(duration * MS_PARAMETER)
    .toISOString()
    .substring(START_DATE_PARAMETER, END_DATE_PARAMETER);
};
