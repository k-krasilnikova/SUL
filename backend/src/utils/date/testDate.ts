import moment from 'moment';

import { DISABLE_TEST_DAYS } from 'config/constants';
import { UPDATE_TEST_STATUSES_JOB_START_HOURS } from 'utils/schedule/constants';

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

export { generateTestStatusToUpdateDates };
