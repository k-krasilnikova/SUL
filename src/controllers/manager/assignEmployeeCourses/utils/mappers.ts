import { uniqWith } from 'lodash';

import { ICourseToAssign } from 'interfaces/courses/query';

const coursesToAssignComparator = (a: ICourseToAssign, b: ICourseToAssign): boolean =>
  a.courseId === b.courseId;

const removeCoursesToAssignDuplicates = (courses: ICourseToAssign[]): ICourseToAssign[] =>
  uniqWith(courses, coursesToAssignComparator);

export { removeCoursesToAssignDuplicates };
