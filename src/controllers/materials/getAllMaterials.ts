import { Request, Response } from 'express';

import { getMaterialsProvider } from 'db/providers/materialProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getAllMaterials = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const allMaterials = await getMaterialsProvider();
    res.json(allMaterials);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getAllMaterials;
