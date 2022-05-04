import { TIME_1D_SEC, TIME_1H_SEC, TIME_1M_SEC, TIME_1S_MS } from 'config/constants';
import { ICourseDuration, ITimePeriod } from 'interfaces/common/datetime';

const convertToCourseDuration = (seconds: number): ICourseDuration => {
  const days = Math.floor(seconds / TIME_1D_SEC);
  const hours = Math.floor((seconds - days * TIME_1D_SEC) / TIME_1H_SEC);
  const minutes = Math.ceil((seconds - days * TIME_1D_SEC - hours * TIME_1H_SEC) / TIME_1M_SEC);

  const duration = { days, hours, minutes };

  return duration;
};

const convertToTimePeriod = (milliseconds: number): ITimePeriod => {
  const seconds = Math.ceil(milliseconds / TIME_1S_MS);

  const days = Math.floor(seconds / TIME_1D_SEC);
  const hours = Math.floor((seconds - days * TIME_1D_SEC) / TIME_1H_SEC);
  const minutes = Math.ceil((seconds - days * TIME_1D_SEC - hours * TIME_1H_SEC) / TIME_1M_SEC);

  const period: ITimePeriod = { days, hours, minutes };

  return period;
};

const calculateTimeElapsed = (from: Date, to: Date): ITimePeriod => {
  const difference = to.getTime() - from.getTime();
  const timePeriod = convertToTimePeriod(difference);
  return timePeriod;
};

export { convertToCourseDuration, convertToTimePeriod, calculateTimeElapsed };
