import { NextFunction, Request, Response } from 'express';

import { COURSE_FIELDS } from 'config/constants';
import { updateCourseField } from 'db/providers/courseProvider';
import { isProperTechnologies } from 'db/providers/skillProvider';
import { getCourseTest, updateTest } from 'db/providers/testProvider';
import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { addMaterialStages } from 'utils/normaliser/materials';
import { setAnswerProperNumbersToQuestions } from 'utils/normaliser/test';
import {
  isValidAvatar,
  validateMaterials,
  validateTechnologies,
  validateTest,
  validateTitle,
} from 'utils/validation/courses';
import validateDescription from 'utils/validation/courses/validateDescription';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

const editCourse = async (
  req: Request<{ id: string }, never, IUpdateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const dataToUpdate = req.body;

    const updatedData: IUpdateCourseBody = {};

    const validTitle = validateTitle(dataToUpdate.title);
    if (validTitle) {
      const { title } = await updateCourseField(courseId, COURSE_FIELDS.title, validTitle);
      updatedData.title = title;
    }

    const validDescription = validateDescription(dataToUpdate.description);
    if (validDescription) {
      const { description } = await updateCourseField(
        courseId,
        COURSE_FIELDS.description,
        validDescription,
      );
      updatedData.description = description;
    }

    const isAvatarValid = isValidAvatar(dataToUpdate.avatar);
    if (isAvatarValid) {
      const { avatar } = await updateCourseField(
        courseId,
        COURSE_FIELDS.avatar,
        dataToUpdate.avatar,
      );
      updatedData.avatar = avatar;
    }

    const validMaterials = validateMaterials(dataToUpdate.materials);
    if (validMaterials) {
      const materialsWithStages = addMaterialStages(validMaterials);
      const { materials } = await updateCourseField(
        courseId,
        COURSE_FIELDS.materials,
        materialsWithStages,
      );
      updatedData.materials = materials;
    }

    const isTechsValid =
      dataToUpdate.technologies &&
      validateTechnologies(dataToUpdate.technologies) &&
      (await isProperTechnologies(dataToUpdate.technologies));
    if (isTechsValid) {
      const { technologies } = await updateCourseField(
        courseId,
        COURSE_FIELDS.technologies,
        dataToUpdate.technologies,
      );
      updatedData.technologies =
        convertToTypeUnsafe<IUpdateCourseBody['technologies']>(technologies);
    }

    const validTest = validateTest(dataToUpdate.test);
    if (validTest) {
      const test = await getCourseTest(courseId);
      if (test._id && dataToUpdate.test) {
        const properQuestionsToSet = setAnswerProperNumbersToQuestions(validTest.questions);
        const { questions, timeout, title } = await updateTest({
          testId: test._id,
          questions: properQuestionsToSet,
          timeout: validTest.timeout,
          title: validTest.title,
        });
        const newTest: IUpdateCourseBody['test'] = { timeout, title, questions };
        updatedData.test = newTest;
      }
    }

    res.locals.results = updatedData;

    next();
  } catch (error) {
    next(error);
  }
};

export default editCourse;
