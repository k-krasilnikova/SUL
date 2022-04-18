import dayjs, { Dayjs } from 'dayjs';

type TDate = string | number | globalThis.Date | Dayjs | null | undefined;

export const getDurationBetweenDates = (startDate: TDate, endDate?: TDate): number =>
  dayjs(startDate).diff(dayjs(endDate));
