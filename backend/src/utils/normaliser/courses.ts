import { Dictionary, groupBy } from 'lodash';

import CourseStatus from 'enums/coursesEnums';
import { UserRank } from 'enums/users';
import { ICourseStatus } from 'interfaces/ICourses/IQueryCourses';
import {
  ICourseShortInfo,
  ICoursesMapElement,
  ICoursesMapResponse,
} from 'interfaces/IResponse/IResponse';
import { COURSE_FIELDS } from 'config/constants';

const shortifyCourseInfo = (course: ICourseStatus): ICourseShortInfo => ({
  _id: course._id,
  title: course.title,
  avatar: course.avatar,
  isCompleted: course.status === CourseStatus.completed,
});

const shortifyCourses = (courses: ICourseStatus[]): ICourseShortInfo[] =>
  courses.map(shortifyCourseInfo);

const groupedCoursesReducer =
  (groupedCourses: Dictionary<[ICourseStatus, ...ICourseStatus[]]>) =>
  (coursesMapElements: ICoursesMapElement[], key: string) =>
    coursesMapElements.concat({
      rank: Number(key),
      courses: shortifyCourses(groupedCourses[key]),
    });

const generateCoursesMapResponse = (courses: ICourseStatus[], userRank: UserRank) => {
  const groupedCourses = groupBy(courses, COURSE_FIELDS.complexity);

  const coursesDictKeys = Object.keys(groupedCourses);

  const responseCourses = coursesDictKeys.reduce(
    groupedCoursesReducer(groupedCourses),
    new Array<ICoursesMapElement>(),
  );

  const response: ICoursesMapResponse = { userRank, coursesMap: responseCourses };

  return response;
};

const missingMapElementsFiller = (map: ICoursesMapResponse) => (rank: string | UserRank) => {
  const hasRank = map.coursesMap.some((mapElement) => mapElement.rank === rank);
  if (!hasRank) {
    const newRankMapElement: ICoursesMapElement = { rank: rank as UserRank, courses: [] };
    map.coursesMap.push(newRankMapElement);
  }
};

const addMissingCoursesMapElements = (
  coursesMapResponse: ICoursesMapResponse,
): ICoursesMapResponse => {
  const ranksValues = Object.values(UserRank).filter(Number.isInteger);

  const filledMap = { ...coursesMapResponse };

  ranksValues.forEach(missingMapElementsFiller(filledMap));

  return filledMap;
};

export {
  shortifyCourseInfo,
  shortifyCourses,
  generateCoursesMapResponse,
  addMissingCoursesMapElements,
};
