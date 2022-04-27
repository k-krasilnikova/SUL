import { NextFunction, Request, Response } from 'express';

import { addMaterialStages } from 'utils/normaliser/materials';
import isValidCourseData from 'utils/validation/isValidCourseData';
import { setAnswerProperNumbersToQuestions } from 'utils/normaliser/test';
import { getSkillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { ICreateCourseBody, IPreparedCourseData } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { ESTIMATE_TIME_PER_LESSON } from 'config/constants';
import { convertToCourseDuration } from 'utils/typeConversion/datetime/datetimeTypeConversions';

const preparingCourseData = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = req.body;

    const isValidData = isValidCourseData(courseDataFromRequest);

    const courseDataToSave: IPreparedCourseData = { technologies: [], similarCourses: [] };

    if (
      isValidData &&
      courseDataFromRequest.materials &&
      courseDataFromRequest.technologies &&
      courseDataFromRequest.test
    ) {
      courseDataToSave.title = courseDataFromRequest.title;
      courseDataToSave.complexity = courseDataFromRequest.complexity;
      courseDataToSave.description = courseDataFromRequest.description;
      courseDataToSave.avatar = courseDataFromRequest.avatar;

      courseDataToSave.materials = addMaterialStages(courseDataFromRequest.materials);

      courseDataToSave.technologies = await getSkillsToCourseTechs(
        courseDataFromRequest.technologies,
      );

      const properQuestionsToSet = setAnswerProperNumbersToQuestions(
        courseDataFromRequest.test.questions,
      );

      courseDataToSave.test = await addCourseTest(courseDataFromRequest.test, properQuestionsToSet);
    } else {
      throw new BadRequestError('Invalid queries.');
    }

    courseDataToSave.lessons = courseDataToSave.materials.length;

    const durationSeconds =
      courseDataToSave.materials.length * ESTIMATE_TIME_PER_LESSON + courseDataToSave.test.timeout;
    const duration = convertToCourseDuration(durationSeconds);

    courseDataToSave.duration = duration;

    res.locals.preparedCourseData = courseDataToSave;
    next();
  } catch (err) {
    next(err);
  }
};

export default preparingCourseData;
