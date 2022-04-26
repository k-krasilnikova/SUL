import { Dictionary, groupBy, pullAll, sortBy } from 'lodash';
import { ObjectId } from 'mongoose';

import CourseStatus from 'enums/coursesEnums';
import { UserRank } from 'enums/users';
import {
  ICourseShortInfo,
  ICoursesMapElement,
  ICoursesMapResponse,
  IStackMapElement,
} from 'interfaces/IResponse/IResponse';
import { TUserStackMemberPopulated } from 'interfaces/Ientities/IStackMember';
import { ICourseWithStatus, TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';
import { COURSE_FIELDS } from 'config/constants';
import { getCourseStatusProvider } from 'db/providers/courseProvider';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

const filterOnlyAvailableCourses = (courses: ICourseWithStatus[]): ICourseWithStatus[] =>
  courses.filter((course) => !course.status);

const normalizeeAvailableCoursesInfo = (courses: ICourseWithStatus[]): TAvailableCourse[] =>
  courses.map((course) => ({ _id: course._id, title: course.title }));

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
    const stackMapElement: IStackMapElement = {
      stack: stackMember.member.name,
      isPrimary: stackMember.isPrimary,
      coursesMap,
    };
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

const fillStackWithStatuses = async (
  userStack: TUserStackMemberPopulated[],
  userId: string | ObjectId,
): Promise<TUserStackMemberPopulated[]> =>
  Promise.all(
    userStack.map(async (stackMember) => {
      const updatedRelatedCourses = await Promise.all(
        stackMember.member.relatedCourses.map(async (course) => ({
          ...course,
          status: await getCourseStatusProvider(convertToTypeUnsafe<ObjectId>(course._id), userId),
        })),
      );
      const newMember = { ...stackMember };
      newMember.member.relatedCourses = updatedRelatedCourses;
      return newMember;
    }),
  );

export {
  shortifyCourseInfo,
  shortifyCourses,
  generateCoursesMapResponse,
  addMissingCoursesMapElements,
  fillStackWithStatuses,
  filterOnlyAvailableCourses,
  normalizeeAvailableCoursesInfo,
};
