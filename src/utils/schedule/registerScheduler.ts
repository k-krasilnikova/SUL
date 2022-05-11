import cron from 'node-cron';

import { createSchedulePattern } from './common';
import { SCHEDULER_OPTIONS } from './constants';
import updateTestStatuses from './schedulers/updateTestStatuses';

const registerScheduler = (): void => {
  cron.schedule(createSchedulePattern(SCHEDULER_OPTIONS.UPDATE_TEST_STATUSES), updateTestStatuses, {
    timezone: 'Europe/Minsk',
  });
};

export default registerScheduler;
