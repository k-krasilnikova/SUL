import { intersectionWith, isEmpty } from 'lodash';

import { ICourseToAssign } from 'interfaces/courses/query';
import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';

const courseToCourseToAssignComparator = (a: IClientCoursePopulated, b: ICourseToAssign): boolean =>
  String(a.course._id) === String(b.courseId);

const isCoursesToAssignHaveDuplicates = (
  courses: IClientCoursePopulated[],
  toAssign: ICourseToAssign[],
): boolean => !isEmpty(intersectionWith(courses, toAssign, courseToCourseToAssignComparator));

export { isCoursesToAssignHaveDuplicates };
