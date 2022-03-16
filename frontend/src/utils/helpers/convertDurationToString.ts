import { CourseDuration } from 'types/course';

export const convertDurationToString = (duration: CourseDuration): string =>
  `${(duration.days && duration.days.toString().concat('d ')) || ''}` +
  `${(duration.hours && duration.hours.toString().concat('h ')) || ''}` +
  `${(duration.minutes && duration.minutes.toString().concat('m')) || ''}`;
