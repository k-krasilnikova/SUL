import { NextFunction, Request, Response } from 'express';

import { addMaterialStages } from 'utils/normaliser/materials';
import { setAnswerProperNumbersToQuestions } from 'utils/normaliser/test';
import {
  isValidCourseData,
  validateMaterials,
  validateTest,
  validateTitle,
} from 'utils/validation/courses';
import validateDescription from 'utils/validation/courses/validateDescription';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { getSkillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { ICreateCourseBody, IPreparedCourseData } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { ITest } from 'interfaces/Ientities/Itest';

const preparingCourseData = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = req.body;

    const isValidData = isValidCourseData(courseDataFromRequest);

    const courseDataToSave: IPreparedCourseData = { technologies: [] };

    if (
      isValidData &&
      courseDataFromRequest.materials &&
      courseDataFromRequest.technologies &&
      courseDataFromRequest.test
    ) {
      courseDataToSave.title = convertToTypeUnsafe<string>(
        validateTitle(courseDataFromRequest.title),
      );
      courseDataToSave.complexity = courseDataFromRequest.complexity;
      courseDataToSave.description = convertToTypeUnsafe<string>(
        validateDescription(courseDataFromRequest.description),
      );
      courseDataToSave.avatar = courseDataFromRequest.avatar;

      courseDataToSave.materials = addMaterialStages(
        convertToTypeUnsafe<ICourse['materials']>(
          validateMaterials(courseDataFromRequest.materials),
        ),
      );

      courseDataToSave.technologies = await getSkillsToCourseTechs(
        courseDataFromRequest.technologies,
      );

      const properQuestionsToSet = setAnswerProperNumbersToQuestions(
        courseDataFromRequest.test.questions,
      );

      courseDataToSave.test = await addCourseTest(
        convertToTypeUnsafe<ITest>(validateTest(courseDataFromRequest.test)),
        properQuestionsToSet,
      );
    } else {
      throw new BadRequestError('Invalid queries.');
    }

    res.locals.preparedCourseData = courseDataToSave;
    next();
  } catch (err) {
    next(err);
  }
};

export default preparingCourseData;
