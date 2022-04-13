import { PATHS } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';

import transformRoute from './transformRoute';

export const chooseListPath = (
  course: ICourse,
  index: number,
  clientCourses?: ClientCourse[],
): string =>
  clientCourses
    ? transformRoute(PATHS.myCourseDetails, clientCourses[index]._id)
    : transformRoute(PATHS.courseDetails, course._id);
