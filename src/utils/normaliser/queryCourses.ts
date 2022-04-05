import { ICourseToAssign } from 'interfaces/ICourses/IQueryCourses';

const removeCoursesToAssignDuplicates = (courses: ICourseToAssign[]): ICourseToAssign[] =>
  courses.reduce((reduced, course) => {
    const hasDuplicate = reduced.some((savedCourse) => savedCourse.courseId === course.courseId);
    if (!hasDuplicate) {
      reduced.push(course);
    }
    return reduced;
  }, new Array<ICourseToAssign>());

export { removeCoursesToAssignDuplicates };
