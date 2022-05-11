import { ISchedulerTimeOptions } from 'interfaces/common/scheduler';

export const createSchedulePattern = ({
  second,
  minute,
  hour,
  dayOfMonth,
  month,
  dayOfWeek,
}: ISchedulerTimeOptions): string =>
  `${second || '*'} ${minute || '*'} ${hour || '*'} ${dayOfMonth || '*'} ${month || '*'} ${
    dayOfWeek || '*'
  }`;
