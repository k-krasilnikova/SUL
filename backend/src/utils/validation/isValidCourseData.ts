import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import isValidText from './isValidText';
import isValidComplexity from './isValidComplexity';
import isValidMaterials from './isValidMaterials';
import isValidQuestions from './isValidQuestions';
import isValidAvatar from './isValidAvatar';

const isValidCourseData = (courseData: ICreateCourseBody): boolean => {
  return (
    isValidText(courseData.title) &&
    isValidComplexity(courseData.complexity) &&
    isValidText(courseData.description) &&
    isValidMaterials(courseData.materials) &&
    isValidQuestions(courseData.test?.questions) &&
    isValidAvatar(courseData.avatar)
  );
};

export default isValidCourseData;
