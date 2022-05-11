export const createSchedulePattern = ({
  second,
  minute,
  hour,
  dayOfMonth,
  month,
  dayOfWeek,
}: {
  second?: string;
  minute?: string;
  hour?: string;
  dayOfMonth?: string;
  month?: string;
  dayOfWeek?: string;
}): string =>
  `${second || '*'} ${minute || '*'} ${hour || '*'} ${dayOfMonth || '*'} ${month || '*'} ${
    dayOfWeek || '*'
  }`;
