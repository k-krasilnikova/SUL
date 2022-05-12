export const getPointsArr = (maxPoints: number): number[] => {
  const pointsArr = [];
  for (let i = 1; i <= maxPoints; i += 1) {
    pointsArr.push(i);
  }
  return pointsArr;
};
