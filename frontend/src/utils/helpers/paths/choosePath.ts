import { PATHS } from 'constants/routes';
import { ClientCourse } from 'types/clientCourse';
import { Course } from 'types/course';

export const chooseListPath = (
  course: Course,
  index: number,
  clientCourses?: ClientCourse[],
): string =>
  clientCourses
    ? `${PATHS.myCourses}/${clientCourses[index]._id}`
    : `${PATHS.coursesList}/${course._id}`;
