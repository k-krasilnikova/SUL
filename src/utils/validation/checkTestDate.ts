import moment from 'moment';

import { DISABLE_TEST_DAYS } from 'config/constants';

export const checkTestDate = (date: Date): boolean => {
  const currentDate = new Date();
  const testDate = new Date(date);
  return moment(testDate).add(DISABLE_TEST_DAYS, 'd').toDate() < currentDate;
};
