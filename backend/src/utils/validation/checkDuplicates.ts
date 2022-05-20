import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

const checkCourseDuplicates = (courseArr: IClientCoursePopulated[], courseId: string): boolean => {
  const alreadyAppliedCourse = courseArr.find((clientCourse) => {
    if (clientCourse && '_id' in clientCourse.course && clientCourse.course._id) {
      return clientCourse.course._id.toString() === courseId;
    }
    return null;
  });
  console.log('IN CHECL DUPLICATE', alreadyAppliedCourse, '\n COURSES ARRAY', courseArr);
  return Boolean(alreadyAppliedCourse);
};

export { checkCourseDuplicates };
