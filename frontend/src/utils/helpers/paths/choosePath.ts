import { PATHS } from 'constants/routes';
import { IClientCourse } from 'types/clientCourse';
import { ICourse } from 'types/course';

import transformRoute from './transformRoute';

export const chooseListPath = (
  course: ICourse,
  index: number,
  clientCourses?: IClientCourse[],
): string =>
  clientCourses
    ? transformRoute(PATHS.myCourseDetails, clientCourses[index]._id)
    : transformRoute(PATHS.courseDetails, course._id);
