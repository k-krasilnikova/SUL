import { SECONDS_PARAMETER } from 'constants/courseEditor';
import { Numbers } from 'enums/numbers';

import { IFormattedValues, IFormQuestion, IFormTechnology, IFormValues, IMaterial } from './types';

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

export const formatValueTrim = (value: string): string =>
  value.replace(TRAILING_SPACES_REGEX, ' ').trim();

export const formatStringToFirstUppercase = (value: string): string => {
  if (value.length > EMPTY_LENGTH) {
    return value[FIRST_LETTER_INDEX].toUpperCase() + value.slice(SECOND_LETTER_INDEX);
  }
  return value;
};

export const convertTimeoutToSeconds = (timeout: string): number => {
  const [hours, minutes] = timeout.split(':');
  const totalSeconds =
    Number(hours) * SECONDS_PARAMETER * SECONDS_PARAMETER + Number(minutes) * SECONDS_PARAMETER;
  return totalSeconds;
};

export const formatValuesForSubmit = (values: IFormValues): IFormattedValues => {
  const materials: IMaterial[] = [];
  values.materials.forEach((material, index) => {
    const formattedMaterial: IMaterial = {
      content: [{ type: material.type, material: material.material }],
    };
    if (material.exercise && material.exercise.title !== '' && material.exercise.task !== '') {
      formattedMaterial.exercise = {
        eN: index + Numbers.one,
        title: material.exercise.title,
        task: material.exercise.task,
      };
    }
    materials.push(formattedMaterial);
  });

  const formattedValues = {
    avatar: values.avatar,
    complexity: values.complexity,
    title: values.title,
    description: values.description,
    materials,
    technologies: values.technologies.map((technology: IFormTechnology) => ({
      skill: technology._id,
      points: technology.points,
    })),
    test: {
      title: values.test.title,
      timeout: convertTimeoutToSeconds(values.test.timeout),
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
