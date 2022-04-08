import { intersectionWith, isEmpty, uniqWith } from 'lodash';

import { ICourseToAssign } from 'interfaces/ICourses/IQueryCourses';
import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

const coursesToAssignComparator = (a: ICourseToAssign, b: ICourseToAssign): boolean =>
  a.courseId === b.courseId;

const removeCoursesToAssignDuplicates = (courses: ICourseToAssign[]): ICourseToAssign[] =>
  uniqWith(courses, coursesToAssignComparator);

const courseToCourseToAssignComparator = (a: IClientCoursePopulated, b: ICourseToAssign): boolean =>
  String(a.course._id) === String(b.courseId);

const isCoursesToAssignHaveDuplicates = (
  courses: IClientCoursePopulated[],
  toAssign: ICourseToAssign[],
): boolean => !isEmpty(intersectionWith(courses, toAssign, courseToCourseToAssignComparator));

export { removeCoursesToAssignDuplicates, isCoursesToAssignHaveDuplicates };
