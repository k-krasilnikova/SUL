import { Dictionary, groupBy, pullAll, sortBy } from 'lodash';

import CourseStatus from 'enums/coursesEnums';
import { UserRank } from 'enums/users';
import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';
import {
  ICourseShortInfo,
  ICoursesMapElement,
  ICoursesMapResponse,
  IStackMapElement,
} from 'interfaces/IResponse/IResponse';
import { TUserStackMemberPopulated } from 'interfaces/Ientities/IStackMember';
import { COURSE_FIELDS } from 'config/constants';

const shortifyCourseInfo = (course: ICourseWithStatus): ICourseShortInfo => ({
  _id: course._id,
  title: course.title,
  avatar: course.avatar,
  isCompleted: course.status === CourseStatus.completed,
});

const shortifyCourses = (courses: ICourseWithStatus[]): ICourseShortInfo[] =>
  courses.map(shortifyCourseInfo);

const groupedCoursesReducer =
  (groupedCourses: Dictionary<[ICourseWithStatus, ...ICourseWithStatus[]]>) =>
  (coursesMapElements: ICoursesMapElement[], key: string) =>
    coursesMapElements.concat({
      rank: Number(key),
      courses: shortifyCourses(groupedCourses[key]),
    });

const generateCoursesMapResponse = (
  stack: TUserStackMemberPopulated[],
  userRank: UserRank,
): ICoursesMapResponse => {
  const coursesMapResponseCascade: ICoursesMapResponse = { userRank, stackMap: [] };

  stack.forEach((stackMember) => {
    const groupedCourses = groupBy(stackMember.member.relatedCourses, COURSE_FIELDS.complexity);
    const coursesDictKeys = Object.keys(groupedCourses);
    const coursesMap = coursesDictKeys.reduce(
      groupedCoursesReducer(groupedCourses),
      new Array<ICoursesMapElement>(),
    );
    const stackMapElement: IStackMapElement = { stack: stackMember.member.name, coursesMap };
    coursesMapResponseCascade.stackMap.push(stackMapElement);
  });

  return coursesMapResponseCascade;
};

const missingMapElementsFiller =
  (map: ICoursesMapResponse) =>
  (rank: string | UserRank): ICoursesMapResponse => {
    map.stackMap.forEach((stackMember) => {
      const hasRank = stackMember.coursesMap.some((mapElement) => mapElement.rank === rank);
      if (!hasRank) {
        const newRankMapElement: ICoursesMapElement = { rank: rank as UserRank, courses: [] };
        stackMember.coursesMap.push(newRankMapElement);
        const sortedCoursesMap = sortBy(stackMember.coursesMap, ['rank']);
        pullAll(stackMember.coursesMap, stackMember.coursesMap);
        stackMember.coursesMap.push(...sortedCoursesMap);
      }
    });
    return map;
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
