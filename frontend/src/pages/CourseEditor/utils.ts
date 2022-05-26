import { Numbers } from 'enums/numbers';

const EMPTY_LENGTH = 0;
const FIRST_LETTER_INDEX = 0;
const SECOND_LETTER_INDEX = 1;
const TRAILING_SPACES_REGEX = /[\s]{2,}/g;

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
    formattedValue = formattedValue[FIRST_LETTER_INDEX].toUpperCase() + formattedValue.slice(SECOND_LETTER_INDEX);
  }
  return formattedValue;
};
