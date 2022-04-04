import { PATHS } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { Course } from 'types/course';

import transformRoute from './transformRoute';

export const chooseListPath = (
  course: Course,
  index: number,
  clientCourses?: ClientCourse[],
): string =>
  clientCourses
    ? transformRoute(PATHS.myCourseDetails, clientCourses[index]._id)
    : transformRoute(PATHS.courseDetails, course._id);
