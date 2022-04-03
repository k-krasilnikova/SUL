import { ClientCourse } from 'types/clientCourse';
import { COURSE_STATUSES } from 'constants/statuses';

export const convertStatus = (status?: ClientCourse['status']): string => {
  if (status === COURSE_STATUSES.started) {
    return '37';
  }
  if (status === COURSE_STATUSES.testing) {
    return '80';
  }
  if (status === COURSE_STATUSES.completed) {
    return '100';
  }
  if (
    status === COURSE_STATUSES.failed ||
    status === COURSE_STATUSES.pending ||
    status === COURSE_STATUSES.approved
  ) {
    return '0';
  }

  return <string>status;
};
