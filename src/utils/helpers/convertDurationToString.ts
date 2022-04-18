import { TimeProps } from 'types/time';

export const convertDurationToString = (duration: TimeProps): string =>
  `${(duration.days && duration.days.toString().concat('d ')) || ''}` +
  `${(duration.hours && duration.hours.toString().concat('h ')) || ''}` +
  `${(duration.minutes && duration.minutes.toString().concat('m')) || ''}`;
