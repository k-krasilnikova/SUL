import { ICourseDataValidationResult } from 'interfaces/ICourses/IQueryCourses';
import { IEditCoursePayload, TCreateCoursePayload } from 'interfaces/requests/common/payloads';
import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';
import { convertToCourseDuration } from 'utils/typeConversion/datetime/datetimeTypeConversions';

import validateComplexity from './validateComplexity';
import validateMaterials from './validateMaterials';
import validateAvatar from './validateAvatar';
import validateTest from './validateTest';
import validateTitle from './validateTitle';
import validateDescription from './validateDescription';
import validateTechnologies from './validateTechnologies';

const validateCourseData = (
  courseData: TCreateCoursePayload | IEditCoursePayload,
): ICourseDataValidationResult => {
  const { title, complexity, description, materials, avatar, test, technologies } = courseData;

  const validatedTitle = validateTitle(title);
  const validatedComplexity = validateComplexity(complexity);
  const validatedDescription = validateDescription(description);
  const validatedMaterias = validateMaterials(materials);
  const validatedAvatar = validateAvatar(avatar);
  const validatedTest = validateTest(test);
  const validatedTechnologies = validateTechnologies(technologies);
  const validatedLessons = materials ? materials.length : undefined;
  const validatedDuration =
    validatedLessons && validatedTest
      ? convertToCourseDuration(validatedLessons * ESTIMATE_TIME_PER_LESSON + validatedTest.timeout)
      : undefined;

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
