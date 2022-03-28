import { TEST_DISABLE_DAYS } from 'constants/time';

const checkTestDate = (date: string | undefined, timeout = TEST_DISABLE_DAYS): boolean => {
  if (!date) {
    return true;
  }
  const testDate = new Date(date);
  return testDate.setDate(testDate.getDate() + timeout) < Date.now();
};

export default checkTestDate;
