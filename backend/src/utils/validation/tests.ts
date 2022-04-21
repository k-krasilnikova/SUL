import { checkTestDate } from './checkTestDate';

const isTestAvailableByDate = (estimatedFinishDate?: Date): boolean => {
  if (!estimatedFinishDate) {
    return true;
  }

  const currentDate = new Date();

  const isAvailable = currentDate < estimatedFinishDate ? true : checkTestDate(estimatedFinishDate);

  return isAvailable;
};

export { isTestAvailableByDate };
