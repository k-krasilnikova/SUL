import { ICourse } from 'types/course';
import { IClientCourse } from 'types/clientCourse';

const DEFAULT_COURSES_TO_DISPLAY = 2;

// Removes the client courses and the currently selected course from the list of similar courses

const similarCoursePreparing = (
  commonCourseInfo?: ICourse,
  clientCoursesData?: IClientCourse[],
  coursesToDisplay?: number,
) => {
  let preparedSimilarCourses;
  let countCoursesToDisplay = DEFAULT_COURSES_TO_DISPLAY;

  if (coursesToDisplay) {
    countCoursesToDisplay = coursesToDisplay;
  }

  if (commonCourseInfo && clientCoursesData) {
    preparedSimilarCourses = commonCourseInfo.similarCourses.reduce((acc, course) => {
      if (
        !clientCoursesData?.find((clientCourse) => course._id === clientCourse.course._id) &&
        course._id !== commonCourseInfo?._id
      ) {
        acc.push(course as never);
      }
      return acc;
    }, []);
  }

  return preparedSimilarCourses?.slice(0, countCoursesToDisplay);
};

export default similarCoursePreparing;
