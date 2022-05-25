import { Dictionary, groupBy, orderBy, pullAll, sortBy } from 'lodash';
import { Types } from 'mongoose';

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
import { getClientCourseByCourseId } from 'db/providers/clientCourseProvider';

const filterOnlyAvailableCourses = (courses: ICourseWithStatus[]): ICourseWithStatus[] =>
  courses.filter((course) => !course.status);

const normalizeAvailableCoursesInfo = (courses: ICourseWithStatus[]): TAvailableCourse[] =>
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

const addClientCoursesIdsToCoursesMapElement = async (
  mapElement: ICoursesMapElement,
  userId: string | Types.ObjectId,
): Promise<ICoursesMapElement> => {
  const updatedCourses = await Promise.all(
    mapElement.courses.map(async (courseShortInfo) => {
      const clientCourse = await getClientCourseByCourseId(
        convertToTypeUnsafe<string | Types.ObjectId>(courseShortInfo._id),
        userId,
      );
      const updatedCourseInfo: ICourseShortInfo = {
        ...courseShortInfo,
        clientCourseId: clientCourse?._id,
      };
      return updatedCourseInfo;
    }),
  );
  const updatedMapElement: ICoursesMapElement = { ...mapElement, courses: updatedCourses };
  return updatedMapElement;
};

const addClientCoursesIdsToCoursesMap = async (
  courseMap: ICoursesMapElement[],
  userId: string | Types.ObjectId,
): Promise<ICoursesMapElement[]> =>
  Promise.all(courseMap.map((map) => addClientCoursesIdsToCoursesMapElement(map, userId)));

const generateCoursesMapResponse = async (
  stack: TUserStackMemberPopulated[],
  userRank: UserRank,
  userId: string | Types.ObjectId,
): Promise<ICoursesMapResponse> => {
  const coursesMapResponseCascade: ICoursesMapResponse = { userRank, stackMap: [] };

  await Promise.all(
    stack.map(async (stackMember) => {
      const groupedCourses = groupBy(stackMember.member.relatedCourses, COURSE_FIELDS.complexity);
      const coursesDictKeys = Object.keys(groupedCourses);
      const coursesMap = coursesDictKeys.reduce(
        groupedCoursesReducer(groupedCourses),
        new Array<ICoursesMapElement>(),
      );
      const filledCoursesMap = await addClientCoursesIdsToCoursesMap(coursesMap, userId);
      const stackMapElement: IStackMapElement = {
        stack: stackMember.member.name,
        isPrimary: stackMember.isPrimary,
        coursesMap: filledCoursesMap,
      };
      return coursesMapResponseCascade.stackMap.push(stackMapElement);
    }),
  );

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
  userId: string | Types.ObjectId,
): Promise<TUserStackMemberPopulated[]> =>
  Promise.all(
    userStack.map(async (stackMember) => {
      const updatedRelatedCourses = await Promise.all(
        stackMember.member.relatedCourses.map(async (course) => ({
          ...course,
          status: await getCourseStatusProvider(
            convertToTypeUnsafe<Types.ObjectId>(course._id),
            userId,
          ),
        })),
      );
      const newMember = { ...stackMember };
      newMember.member.relatedCourses = updatedRelatedCourses;
      return newMember;
    }),
  );

const sortCoursesMapElement = (mapElement: ICoursesMapElement): ICoursesMapElement => ({
  ...mapElement,
  courses: sortBy(mapElement.courses, ['isCompleted', 'title']),
});

const sortCoursesMap = (coursesMap: ICoursesMapElement[]): ICoursesMapElement[] =>
  coursesMap.map(sortCoursesMapElement);

const sortStackMapElement = (stackMapElement: IStackMapElement): IStackMapElement => ({
  ...stackMapElement,
  coursesMap: sortCoursesMap(stackMapElement.coursesMap),
});

const sortStackMap = (stackMap: IStackMapElement[]): IStackMapElement[] =>
  orderBy(stackMap, ['isPrimary', 'stack'], ['desc', 'asc']);

const sortCoursesMapResponse = (mapResponse: ICoursesMapResponse): ICoursesMapResponse => ({
  ...mapResponse,
  stackMap: sortStackMap(mapResponse.stackMap.map(sortStackMapElement)),
});

export {
  shortifyCourseInfo,
  shortifyCourses,
  generateCoursesMapResponse,
  addMissingCoursesMapElements,
  fillStackWithStatuses,
  sortCoursesMapResponse,
  filterOnlyAvailableCourses,
  normalizeAvailableCoursesInfo,
};
