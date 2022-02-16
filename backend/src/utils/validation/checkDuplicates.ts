import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const checkCourseDuplicates = (courseArr: IClientCourse[], courseId: string): boolean => {
  const alreadyAppliedCourse = courseArr.find((clientCourse) => {
    if (clientCourse && clientCourse._id) {
      return clientCourse._id.toString() === courseId;
    }
    return null;
  });
  return Boolean(alreadyAppliedCourse);
};

export { checkCourseDuplicates };
