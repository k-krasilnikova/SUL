import { NextFunction } from 'express';

import {
  IGetEditCoursePayloadResponse,
  TGetEditCoursePayloadRequest,
  TGetEditCoursePayloadResponse,
} from 'interfaces/requests/admin/getEditCoursePayload';
import { getCourseByIdProvider } from 'db/providers/courseProvider';
import { getSkills } from 'db/providers/skillProvider';

import { mapAvailableSkills, mapCourseMaterials, mapCourseTechnologies } from './utils/mappers';

const getEditCoursePayload = async (
  req: TGetEditCoursePayloadRequest,
  res: TGetEditCoursePayloadResponse,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;

    const course = await getCourseByIdProvider(courseId);
    const {
      _id: id,
      title,
      description,
      complexity,
      test,
      avatar,
      technologies,
      materials,
    } = course;

    const availableSkills = await getSkills();

    const mappedAvailableSkills = mapAvailableSkills(availableSkills);
    const mappedTechnologies = mapCourseTechnologies(technologies);
    const mappedMaterials = mapCourseMaterials(materials);

    const payload: IGetEditCoursePayloadResponse = {
      _id: id,
      title,
      description,
      complexity,
      avatar,
      technologies: mappedTechnologies,
      materials: mappedMaterials,
      test,
      allSkills: mappedAvailableSkills,
    };

    res.json(payload);
  } catch (error) {
    next(error);
  }
};

export default getEditCoursePayload;
