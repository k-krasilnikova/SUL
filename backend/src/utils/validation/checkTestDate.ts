export const checkTestDate = (date: Date) => {
  return new Date(date).getTime() < Date.now();
};
