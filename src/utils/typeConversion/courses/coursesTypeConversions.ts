import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';
import { ICourseInfo, ICourseStatus } from 'interfaces/ICourses/IQueryCourses';

import { convertToCourseDuration } from '../datetime/datetimeTypeConversions';

const convertToCourseInfo = (course: ICourseStatus): ICourseInfo => {
  const lessons = course.materials.length;
  const durationSeconds = course.materials.length * ESTIMATE_TIME_PER_LESSON;

  const duration = convertToCourseDuration(durationSeconds);

  const convertedCourseInfo: ICourseInfo = { ...course, lessons, duration, materials: undefined };

  return convertedCourseInfo;
};

const convertToCourseInfoArray = (courses: ICourseStatus[]): ICourseInfo[] =>
  courses.map((course) => convertToCourseInfo(course));

export { convertToCourseInfo, convertToCourseInfoArray };
