import { NextFunction } from 'express';

import { TEditCourseRequest, TEditCourseResponse } from 'interfaces/requests/admin/editCourse';
import { IEditCoursePayload } from 'interfaces/requests/common/payloads';
import { COURSE_FIELDS } from 'config/constants';
import {
  addSimilarCoursesProvider,
  getCourseProvider,
  refreshCourseLessonsAndDuration,
  updateCourseField,
} from 'db/providers/courseProvider';
import { isProperTechnologies } from 'db/providers/skillProvider';
import { getCourseTest, updateTest } from 'db/providers/testProvider';
import { validateCourseData } from 'utils/validation/courses';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import checkCourseValidationResult from 'utils/validation/courses/checkCourseValidationResult';
import { COURSE_VALIDATION_ERRORS } from 'utils/validation/courses/constants';
import { BadRequestError } from 'classes/errors/clientErrors';

const editCourse = async (
  req: TEditCourseRequest,
  res: TEditCourseResponse,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const { id: userId } = res.locals;
    const dataToUpdate = req.body;

    const courseDataValidationResult = validateCourseData(dataToUpdate);
    checkCourseValidationResult(courseDataValidationResult);

    const updatedData: IEditCoursePayload = {};
    const {
      title: validatedTitle,
      complexity: validatedComplexity,
      description: validatedDescription,
      materials: validatedMaterias,
      avatar: validatedAvatar,
      test: validatedTest,
      technologies: validatedTechnologies,
    } = courseDataValidationResult;

    if (validatedTitle) {
      const { title } = await updateCourseField(courseId, COURSE_FIELDS.title, validatedTitle);
      updatedData.title = title;
    }

    if (validatedDescription) {
      const { description } = await updateCourseField(
        courseId,
        COURSE_FIELDS.description,
        validatedDescription,
      );
      updatedData.description = description;
    }

    if (validatedComplexity) {
      const { complexity } = await updateCourseField(
        courseId,
        COURSE_FIELDS.complexity,
        validatedComplexity,
      );
      updatedData.complexity = complexity;
    }

    if (validatedAvatar) {
      const { avatar } = await updateCourseField(courseId, COURSE_FIELDS.avatar, validatedAvatar);
      updatedData.avatar = avatar;
    }

    if (validatedMaterias) {
      const { materials } = await updateCourseField(
        courseId,
        COURSE_FIELDS.materials,
        validatedMaterias,
      );
      updatedData.materials = materials;
    }

    if (validatedTechnologies) {
      const isTechsValid = await isProperTechnologies(dataToUpdate.technologies);
      if (!isTechsValid) {
        throw new BadRequestError(COURSE_VALIDATION_ERRORS[COURSE_FIELDS.technologies]);
      }

      const { technologies } = await updateCourseField(
        courseId,
        COURSE_FIELDS.technologies,
        dataToUpdate.technologies,
      );

      const course = await getCourseProvider(courseId, userId);
      await addSimilarCoursesProvider(course);

      updatedData.technologies =
        convertToTypeUnsafe<IEditCoursePayload['technologies']>(technologies);
    }

    if (validatedTest) {
      const test = await getCourseTest(courseId);

      if (test._id && dataToUpdate.test) {
        const { questions, timeout, title } = await updateTest({
          testId: test._id,
          questions: validatedTest.questions,
          timeout: validatedTest.timeout,
          title: validatedTest.title,
        });

        const newTest: IEditCoursePayload['test'] = { timeout, title, questions };
        updatedData.test = newTest;
      }
    }

    await refreshCourseLessonsAndDuration(courseId);

    res.locals.results = updatedData;

    next();
  } catch (error) {
    next(error);
  }
};

export default editCourse;
