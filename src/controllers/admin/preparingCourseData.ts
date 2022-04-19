import { NextFunction, Request, Response } from 'express';

import { addMaterialStages } from 'utils/normaliser/materials';
import isValidCourseData from 'utils/validation/isValidCourseData';
import { skillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const preparingCourseData = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = req.body;

    const isValidData = isValidCourseData(courseDataFromRequest);

    const courseDataToSave: ICreateCourseBody = { technologies: [] };

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

      courseDataToSave.technologies = await skillsToCourseTechs(courseDataFromRequest.technologies);

      courseDataToSave.test = await addCourseTest(courseDataFromRequest.test);
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
