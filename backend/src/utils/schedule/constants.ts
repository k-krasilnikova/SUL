export const UPDATE_TEST_STATUSES_JOB_START_HOURS = 7;

export const SCHEDULER_OPTIONS = {
  UPDATE_TEST_STATUSES: {
    hours: String(UPDATE_TEST_STATUSES_JOB_START_HOURS),
    minute: '0',
    second: '0',
  } as const,
} as const;

export const UPDATE_TEST_STATUSES_TIME_RANGE = 12;
