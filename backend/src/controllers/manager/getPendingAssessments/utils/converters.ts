import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';
import { TAssessmentRequest } from 'interfaces/response/response';
import { calculateTimeElapsed } from 'utils/typeConversion/datetimeTypeConversions';

const convertToAssessmentsRequests = (courses: IClientCoursePopulated[]): TAssessmentRequest[] =>
  courses.map((clCourse) => ({
    _id: clCourse._id,
    course: clCourse.course,
    user: clCourse.user,
    elapsed: calculateTimeElapsed(clCourse.startTestDate || new Date(), new Date()),
  }));

export { convertToAssessmentsRequests };
