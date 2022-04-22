import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

import isValidText from './isValidText';
import isValidComplexity from './isValidComplexity';
import isValidMaterials from './isValidMaterials';
import isValidAvatar from './isValidAvatar';
import isValidTest from './isValidTest';

const isValidCourseData = (courseData: ICreateCourseBody): boolean => {
  const isTitleValid = isValidText(courseData.title);

  if (!isTitleValid) {
    throw new BadRequestError('Invalid course title.');
  }

  const isComplexityValid = isValidComplexity(courseData.complexity);

  if (!isComplexityValid) {
    throw new BadRequestError('Invalid course complexity.');
  }

  const isDescriptionValid = isValidText(courseData.description);

  if (!isDescriptionValid) {
    throw new BadRequestError('Invalid course description.');
  }

  const isMaterialsValid = isValidMaterials(courseData.materials);

  if (!isMaterialsValid) {
    throw new BadRequestError('Invalid course materials.');
  }

  const isQuestionsValid = isValidTest(courseData.test);

  if (!isQuestionsValid) {
    throw new BadRequestError('Invalid course questions.');
  }

  const isAvatarValid = isValidAvatar(courseData.avatar);

  if (!isAvatarValid) {
    throw new BadRequestError('Invalid course avatar.');
  }

  return (
    isTitleValid &&
    isComplexityValid &&
    isDescriptionValid &&
    isMaterialsValid &&
    isQuestionsValid &&
    isAvatarValid
  );
};

export default isValidCourseData;
