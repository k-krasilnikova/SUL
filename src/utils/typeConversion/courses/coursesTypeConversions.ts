import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';
import { getTestById } from 'db/providers/testProvider';
import { ICourseInfo, ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

import { convertToCourseDuration } from '../datetime/datetimeTypeConversions';

const convertToCourseInfo = async (course: ICourseWithStatus): Promise<ICourseInfo> => {
  const lessons = course.materials.length;

  const test = await getTestById(course.test);

  const durationSeconds = course.materials.length * ESTIMATE_TIME_PER_LESSON + test.timeout;
  const duration = convertToCourseDuration(durationSeconds);

  const convertedCourseInfo: ICourseInfo = { ...course, lessons, duration, materials: undefined };

  return convertedCourseInfo;
};

const convertToCourseInfoArray = async (courses: ICourseWithStatus[]): Promise<ICourseInfo[]> =>
  Promise.all(courses.map((course) => convertToCourseInfo(course)));

export { convertToCourseInfo, convertToCourseInfoArray };
