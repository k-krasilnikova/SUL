import CourseStatus from 'enums/courses';
import { NotificationDescription, NotificationTitles } from 'enums/notification';

type NotificationInfo = {
  title: NotificationTitles;
  description: NotificationDescription;
};

const convertCourseStatusToNotificationInfo = (
  status: CourseStatus,
  withAssessment?: boolean,
): NotificationInfo => {
  const convertedNotification: {
    [key: string]: NotificationInfo;
  } = {
    [CourseStatus.pending]: {
      title: NotificationTitles.applied,
      description: NotificationDescription.applied,
    },
    [CourseStatus.approved]: {
      title: withAssessment
        ? NotificationTitles.approvedWithInterview
        : NotificationTitles.approved,
      description: withAssessment
        ? NotificationDescription.approvedWithInterview
        : NotificationDescription.approved,
    },
    [CourseStatus.rejected]: {
      title: NotificationTitles.declined,
      description: NotificationDescription.declined,
    },
    [CourseStatus.failed]: {
      title: NotificationTitles.employeePassTestFailed,
      description: NotificationDescription.employeePassTestFailed,
    },
    [CourseStatus.completed]: {
      title: NotificationTitles.employeePassTestSuccessfully,
      description: NotificationDescription.employeePassTestSuccessfully,
    },
  };

  return convertedNotification[status];
};

export default convertCourseStatusToNotificationInfo;
