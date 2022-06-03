import { NextFunction } from 'express';

import { getMaterialsProvider } from 'db/providers/courseProvider';
import {
  TGetMaterialsRequest,
  TGetMaterialsResponse,
} from 'interfaces/requests/courses/getMaterials';

const getMaterials = async (
  req: TGetMaterialsRequest,
  res: TGetMaterialsResponse,
  next: NextFunction,
) => {
  try {
    const { id: courseId } = req.params;

    const material = await getMaterialsProvider(courseId);

    res.json(material);
  } catch (error) {
    next(error);
  }
};

export default getMaterials;
