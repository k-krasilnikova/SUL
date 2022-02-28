import CourseStatus from 'enums/coursesEnums';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const checkCourseDuplicates = (courseArr: IClientCourse[], courseId: string): boolean => {
  const alreadyAppliedCourse = courseArr.find((clientCourse) => {
    if (clientCourse && '_id' in clientCourse.course && clientCourse.course._id) {
      return (
        clientCourse.course._id.toString() === courseId &&
        clientCourse.status !== CourseStatus.rejected
      );
    }
    return null;
  });
  return Boolean(alreadyAppliedCourse);
};

export { checkCourseDuplicates };