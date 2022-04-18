import { NextFunction, Request, Response } from 'express';

import isValidDescription from 'utils/validation/isValidDescription';
import isValidMaterials from 'utils/validation/isValidMaterials';
import { addMaterialStages } from 'utils/normaliser/materials';
import isValidQuestions from 'utils/validation/isValidQuestions';
import isValidAvatar from 'utils/validation/isValidAvatar';
import { skillsToCourseTechs } from 'db/providers/skillProvider';
import { addCourseTest } from 'db/providers/testProvider';
import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const preparingCourseData = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseDataFromRequest = req.body;

    const courseDataToSave: ICreateCourseBody = { technologies: [] };

    courseDataToSave.title = courseDataFromRequest.title;
    courseDataToSave.complexity = courseDataFromRequest.complexity;

    const isDescriptionValid = isValidDescription(courseDataFromRequest.description);

    if (isDescriptionValid) {
      courseDataToSave.description = courseDataFromRequest.description;
    }

    const isMaterialsValid = isValidMaterials(courseDataFromRequest.materials);

    if (isMaterialsValid && courseDataFromRequest.materials) {
      const materialsWithStages = addMaterialStages(courseDataFromRequest.materials);

      courseDataToSave.materials = materialsWithStages;
    }

    if (courseDataFromRequest.technologies) {
      const techsForCourse = await skillsToCourseTechs(courseDataFromRequest.technologies);

      courseDataToSave.technologies = techsForCourse;
    }

    const isQuestionsValid = isValidQuestions(courseDataFromRequest.test?.questions);

    if (isQuestionsValid && courseDataFromRequest.test) {
      const test = await addCourseTest(courseDataFromRequest.test);
      courseDataToSave.test = test;
    }

    const isAvatarValid = isValidAvatar(courseDataFromRequest.avatar);
    if (isAvatarValid) {
      courseDataToSave.avatar = courseDataFromRequest.avatar;
    }

    res.locals.results = courseDataToSave;
    next();
  } catch (err) {
    next(err);
  }
};

export default preparingCourseData;
