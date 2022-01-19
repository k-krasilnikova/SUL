import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getMaterialsProvider } from 'db/providers/materialProvider';

const getMaterials = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: courseId } = req.params;
    const queryParams = req.query;
    const material = await getMaterialsProvider({ courseId, ...queryParams });
    res.json(material);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getMaterials;
