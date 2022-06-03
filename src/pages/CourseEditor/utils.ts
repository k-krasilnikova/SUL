import { Numbers } from 'enums/numbers';

export const getPointsArr = (maxPoints: number): number[] => {
  const pointsArr = [];
  for (let i = Numbers.one; i <= maxPoints; i += Numbers.one) {
    pointsArr.push(i);
  }
  return pointsArr;
};
