import { COURSE_FIELDS } from 'config/constants';
import { updateCourseField } from 'db/providers/courseProvider';
import { skillsExist } from 'db/providers/skillProvider';
import { getCourseTest, updateTestQuestions } from 'db/providers/testProvider';
import { NextFunction, Request, Response } from 'express';

import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { addMaterialStages } from 'utils/normaliser/materials';
import isValidDescription from 'utils/validation/isValidDescription';
import isValidMaterials from 'utils/validation/isValidMaterials';
import isValidQuestions from 'utils/validation/isValidQuestions';
import isValidTechnologies from 'utils/validation/isValidTechnologies';

const editCourse = async (
  req: Request<{ id: string }, never, IUpdateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const dataToUpdate = req.body;

    const updatedData: IUpdateCourseBody = {};

    // update description [TESTED]
    const isDescriptionValid = isValidDescription(dataToUpdate.description);
    if (isDescriptionValid) {
      const { description } = await updateCourseField(
        courseId,
        COURSE_FIELDS.description,
        dataToUpdate.description,
      );
      updatedData.description = description;
    }

    // update materials [TESTED]
    const isMaterialsValid = isValidMaterials(dataToUpdate.materials);
    if (isMaterialsValid && dataToUpdate.materials) {
      const materialsWithStages = addMaterialStages(dataToUpdate.materials);
      const { materials } = await updateCourseField(
        courseId,
        COURSE_FIELDS.materials,
        materialsWithStages,
      );
      updatedData.materials = materials;
    }

    // update skills
    const isSkillsValid = isValidTechnologies(dataToUpdate.skills);
    const skillsIds = dataToUpdate.skills?.reduce(
      (ids, tech) => ids.concat([tech.skill]),
      new Array<string>(),
    );
    const isSkillsExist = await skillsExist(skillsIds);
    if (isSkillsValid && isSkillsExist) {
      const { technologies } = await updateCourseField(
        courseId,
        COURSE_FIELDS.technologies,
        dataToUpdate.skills,
      );
      updatedData.skills = technologies as unknown as IUpdateCourseBody['skills'];
    }

    // update test questions
    const isQuestionsValid = isValidQuestions(dataToUpdate.test);
    if (isQuestionsValid) {
      const test = await getCourseTest(courseId);
      if (test._id && dataToUpdate.test) {
        const { questions } = await updateTestQuestions(test._id, dataToUpdate.test);
        updatedData.test = questions;
      }
    }

    res.locals.results = updatedData;

    // TODO: check as and is operators logics

    next();
  } catch (error) {
    next(error);
  }
};

export default editCourse;
