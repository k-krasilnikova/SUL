import { Request, Response } from 'express';

import { getMaterialsProvider } from 'db/providers/courseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getAllMaterials = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    console.log('in controller');
    const allMaterials = await getMaterialsProvider();
    res.json(allMaterials);
  } catch (error) {
    console.log('in controller error', error);
    if (isError(error)) {
      next(error);
    }
  }
};

export default getAllMaterials;
