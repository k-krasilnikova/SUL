import { NextFunction, Request, Response } from 'express';

import { getMaterialsProvider } from 'db/providers/courseProvider';

const getMaterials = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: courseId } = req.params;
    const queryParams = req.query;
    const material = await getMaterialsProvider({ courseId, ...queryParams });
    res.json(material);
  } catch (error) {
    next(error);
  }
};

export default getMaterials;
