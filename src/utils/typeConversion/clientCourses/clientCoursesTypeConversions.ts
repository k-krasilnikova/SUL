import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { TAssessmentRequest } from 'interfaces/IResponse/IResponse';

import { calculateTimeElapsed } from '../datetime/datetimeTypeConversions';

const convertToAssessmentsRequests = (courses: IClientCoursePopulated[]): TAssessmentRequest[] =>
  courses.map((clCourse) => ({
    _id: clCourse._id,
    course: clCourse.course,
    user: clCourse.user,
    elapsed: calculateTimeElapsed(clCourse.startTestDate || new Date(), new Date()),
  }));

export { convertToAssessmentsRequests };
