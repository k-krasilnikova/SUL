import moment from 'moment';

import { DISABLE_TEST_DAYS } from 'config/constants';
import { UPDATE_TEST_STATUSES_JOB_START_HOURS } from 'utils/schedule/constants';

/**
 * Returns an array that contains start test date and estimated finishTestDate
 * @param {number} testTimeSeconds
 * @returns {[Date, Date]} An array of 2 elements: startTestDate and finishTestDate
 */
const generateStartAndFinishTestDates = (testTimeSeconds: number): [Date, Date] => {
  const startTestDate = new Date();
  const finishTestDate = moment(startTestDate).add(testTimeSeconds, 's').toDate();

  return [startTestDate, finishTestDate];
};

const generateTestStatusToUpdateDates = (checkRangeHours: number): [Date, Date] => {
  const currentDate = new Date();

  const startPointDate = moment(
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      UPDATE_TEST_STATUSES_JOB_START_HOURS,
    ),
  )
    .add(-DISABLE_TEST_DAYS, 'd')
    .toDate();

  const from = moment(startPointDate).add(-checkRangeHours, 'h').toDate();

  const to = moment(startPointDate).add(checkRangeHours, 'h').toDate();

  return [from, to];
};

export { generateStartAndFinishTestDates, generateTestStatusToUpdateDates };
