import { ISchedulerTimeOptions } from 'interfaces/common/scheduler';

export const UPDATE_TEST_STATUSES_JOB_START_HOURS = 7;

export const SCHEDULER_OPTIONS: Record<string, ISchedulerTimeOptions> = {
  UPDATE_TEST_STATUSES: {
    hour: String(UPDATE_TEST_STATUSES_JOB_START_HOURS),
    minute: '0',
    second: '0',
  } as const,
} as const;

export const UPDATE_TEST_STATUSES_TIME_RANGE = 12;
