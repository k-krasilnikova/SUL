import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const checkCourseDuplicates = (courseArr: IClientCourse[], courseId: string) => {
  const arr = courseArr.find((clientCourse) => {
    if ('_id' in clientCourse.course && clientCourse.course._id !== undefined) {
      return clientCourse.course._id.toString() === courseId;
    }

    return clientCourse.course.toString() === courseId;
  });
  return arr;
};

export { checkCourseDuplicates };
