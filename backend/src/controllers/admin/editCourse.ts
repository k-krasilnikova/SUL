import { COURSE_FIELDS } from 'config/constants';
import { updateCourseField } from 'db/providers/courseProvider';
import { NextFunction, Request, Response } from 'express';

import { IUpdateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { addMaterialStages } from 'utils/normaliser/materials';
import isValidMaterials from 'utils/typeGuards/isValidMaterial';

const editCourse = async (
  req: Request<{ id: string }, never, IUpdateCourseBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;
    const dataToUpdate = req.body;

    // all the validdations here

    const updatedData: IUpdateCourseBody = {};

    // update description
    if (dataToUpdate.description) {
      await updateCourseField(courseId, COURSE_FIELDS.description, dataToUpdate.description);
      updatedData.description = dataToUpdate.description;
    }

    // update materials
    const isMaterialsValid =
      dataToUpdate.materials?.length && isValidMaterials(dataToUpdate.materials);
    if (isMaterialsValid && dataToUpdate.materials) {
      const materialsWithStages = addMaterialStages(dataToUpdate.materials);
      await updateCourseField(courseId, COURSE_FIELDS.materials, materialsWithStages);
      updatedData.materials = dataToUpdate.materials;
    }

    res.locals.results = updatedData;

    next();
  } catch (error) {
    next(error);
  }
};

export default editCourse;
