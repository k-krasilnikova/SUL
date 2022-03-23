import { DISABLE_TEST_DAYS } from 'config/constants';

export const checkTestDate = (date: Date) => {
  const testDate = new Date(date);
  return testDate.setDate(testDate.getDate() + DISABLE_TEST_DAYS) < Date.now();
};
