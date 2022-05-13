import {
  ICourseDataValidationResult,
  ICreateCourseBody,
  IUpdateCourseBody,
} from 'interfaces/ICourses/IQueryCourses';
import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';
import { convertToTimePeriod } from 'utils/typeConversion/datetime/datetimeTypeConversions';

import validateComplexity from './validateComplexity';
import validateMaterials from './validateMaterials';
import validateAvatar from './validateAvatar';
import validateTest from './validateTest';
import validateTitle from './validateTitle';
import validateDescription from './validateDescription';
import validateTechnologies from './validateTechnologies';

const validateCourseData = (
  courseData: ICreateCourseBody | IUpdateCourseBody,
): ICourseDataValidationResult => {
  const { title, complexity, description, materials, avatar, test, technologies } = courseData;

  const validatedTitle = validateTitle(title);
  const validatedComplexity = validateComplexity(complexity);
  const validatedDescription = validateDescription(description);
  const validatedMaterias = validateMaterials(materials);
  const validatedAvatar = validateAvatar(avatar);
  const validatedTest = validateTest(test);
  const validatedTechnologies = validateTechnologies(technologies);
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
