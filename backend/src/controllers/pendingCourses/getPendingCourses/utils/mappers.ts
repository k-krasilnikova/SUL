import { NOTHING } from 'config/constants';
import { ITimePeriod } from 'interfaces/common/datetime';
import { IPendingCourse, TPendingCourses } from 'interfaces/entities/users';
import { convertToTimePeriod } from 'utils/typeConversion/datetimeTypeConversions';

const mapPendingCourse = (course: IPendingCourse): IPendingCourse => {
  const { date: applicationDate } = course;
  const currentDate = new Date();

  const difference = applicationDate ? currentDate.getTime() - applicationDate.getTime() : NOTHING;

  const elapsedTime: ITimePeriod = convertToTimePeriod(difference);

  const mappedCourse: IPendingCourse = { ...course, date: undefined, elapsed: elapsedTime };

  return mappedCourse;
};

const mapPendingCourses = (courses: TPendingCourses): TPendingCourses =>
  courses.map(mapPendingCourse);

export { mapPendingCourses };
