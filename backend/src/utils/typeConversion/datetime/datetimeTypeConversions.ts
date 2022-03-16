import { TIME_1D_SEC, TIME_1H_SEC, TIME_1M_SEC } from 'config/constants';
import { ICourseDuration } from 'interfaces/common/datetime';

const convertToCourseDuration = (seconds: number): ICourseDuration => {
  const days = Math.floor(seconds / TIME_1D_SEC);
  const hours = Math.floor((seconds - days * TIME_1D_SEC) / TIME_1H_SEC);
  const minutes = Math.ceil((seconds - days * TIME_1D_SEC - hours * TIME_1H_SEC) / TIME_1M_SEC);

  const duration = { days, hours, minutes };

  return duration;
};

export { convertToCourseDuration };
