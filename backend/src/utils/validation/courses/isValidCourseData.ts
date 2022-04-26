import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

import isValidComplexity from './isValidComplexity';
import validateMaterials from './isValidMaterials';
import isValidAvatar from './isValidAvatar';
import validateTest from './validateTest';
import validateTitle from './validateTitle';
import validateDescription from './validateDescription';

const isValidCourseData = (courseData: ICreateCourseBody): boolean => {
  const isTitleValid = validateTitle(courseData.title);

  if (!isTitleValid) {
    throw new BadRequestError('Invalid course title.');
  }

  const isComplexityValid = isValidComplexity(courseData.complexity);

  if (!isComplexityValid) {
    throw new BadRequestError('Invalid course complexity.');
  }

  const isDescriptionValid = validateDescription(courseData.description);

  if (!isDescriptionValid) {
    throw new BadRequestError('Invalid course description.');
  }

  const isMaterialsValid = validateMaterials(courseData.materials);

  if (!isMaterialsValid) {
    throw new BadRequestError('Invalid course materials.');
  }

  const isQuestionsValid = validateTest(courseData.test);

  if (!isQuestionsValid) {
    throw new BadRequestError('Invalid course questions.');
  }

  const isAvatarValid = isValidAvatar(courseData.avatar);

  if (!isAvatarValid) {
    throw new BadRequestError('Invalid course avatar.');
  }

  return Boolean(
    isTitleValid &&
      isComplexityValid &&
      isDescriptionValid &&
      isMaterialsValid &&
      isQuestionsValid &&
      isAvatarValid,
  );
};

export default isValidCourseData;
