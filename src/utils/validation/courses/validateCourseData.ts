import { UserRank } from 'enums/users';
import { ICreateCourseBody, IPreparedCourseData } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

import isValidComplexity from './isValidComplexity';
import validateMaterials from './validateMaterials';
import isValidAvatar from './isValidAvatar';
import validateTest from './validateTest';
import validateTitle from './validateTitle';
import validateDescription from './validateDescription';
import validateTechnologies from './validateTechnologies';

const validateCourseData = (courseData: ICreateCourseBody): IPreparedCourseData => {
  const validTitle = validateTitle(courseData.title);
  if (!validTitle) {
    throw new BadRequestError('Invalid course title.');
  }

  const isComplexityValid = isValidComplexity(courseData.complexity);
  if (!isComplexityValid) {
    throw new BadRequestError('Invalid course complexity.');
  }

  const validDescription = validateDescription(courseData.description);
  if (!validDescription) {
    throw new BadRequestError('Invalid course description.');
  }

  const validMaterias = validateMaterials(courseData.materials);
  if (!validMaterias) {
    throw new BadRequestError('Invalid course materials.');
  }

  const validTest = validateTest(courseData.test);
  if (!validTest) {
    throw new BadRequestError('Invalid course test.');
  }

  const isAvatarValid = isValidAvatar(courseData.avatar);
  if (!isAvatarValid) {
    throw new BadRequestError('Invalid course avatar.');
  }

  const validTechnologies = validateTechnologies(courseData.technologies);
  if (!validTechnologies) {
    throw new BadRequestError('Invalid course technologies.');
  }

  const validCourseData: IPreparedCourseData = {
    title: validTitle,
    description: validDescription,
    avatar: convertToTypeUnsafe<string>(courseData.avatar),
    materials: validMaterias,
    complexity: convertToTypeUnsafe<UserRank>(courseData.complexity),
    test: validTest,
    technologies: validTechnologies,
    lessons: validMaterias.length,
    duration: {},
    similarCourses: [],
  };

  return validCourseData;
};

export default validateCourseData;
