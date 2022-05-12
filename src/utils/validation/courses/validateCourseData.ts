import { UserRank } from 'enums/users';
import { ICourseDataValidationResult, ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { convertToTimePeriod } from 'utils/typeConversion/datetime/datetimeTypeConversions';

import isValidComplexity from './isValidComplexity';
import validateMaterials from './validateMaterials';
import isValidAvatar from './isValidAvatar';
import validateTest from './validateTest';
import validateTitle from './validateTitle';
import validateDescription from './validateDescription';
import validateTechnologies from './validateTechnologies';

const validateCourseData = (courseData: ICreateCourseBody): ICourseDataValidationResult => {
  const validatedTitle = validateTitle(courseData.title);
  const validatedComplexity = isValidComplexity(courseData.complexity)
    ? convertToTypeUnsafe<UserRank>(courseData.complexity)
    : null;
  const validatedDescription = validateDescription(courseData.description);
  const validatedMaterias = validateMaterials(courseData.materials);
  const validatedAvatar = isValidAvatar(courseData.avatar)
    ? convertToTypeUnsafe<string>(courseData.avatar)
    : null;
  const validatedTest = validateTest(courseData.test);
  const validatedTechnologies = validateTechnologies(courseData.technologies);
  const validatedLessons = validatedMaterias?.length || null;
  const validatedDuration =
    validatedLessons && validatedTest
      ? convertToTimePeriod(validatedLessons * ESTIMATE_TIME_PER_LESSON + validatedTest.timeout)
      : null;

  const validCourseData: ICourseDataValidationResult = {
    title: validatedTitle,
    description: validatedDescription,
    avatar: validatedAvatar,
    materials: validatedMaterias,
    complexity: validatedComplexity,
    test: validatedTest,
    technologies: validatedTechnologies,
    lessons: validatedLessons,
    duration: validatedDuration,
    similarCourses: [],
  };

  return validCourseData;
};

export default validateCourseData;
