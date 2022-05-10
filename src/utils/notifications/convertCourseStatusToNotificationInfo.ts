import CourseStatus from 'enums/coursesEnums';
import { NotificationDescription, NotificationTitles } from 'enums/notificationEnums';

type NotificationInfo = {
  title: NotificationTitles;
  description: NotificationDescription;
};

const convertCourseStatusToNotificationInfo = (status: CourseStatus) => {
  const convertedNotification: {
    [key: string]: NotificationInfo;
  } = {
    [CourseStatus.pending]: {
      title: NotificationTitles.applied,
      description: NotificationDescription.applied,
    },
    [CourseStatus.approved]: {
      title: NotificationTitles.approved,
      description: NotificationDescription.approved,
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
