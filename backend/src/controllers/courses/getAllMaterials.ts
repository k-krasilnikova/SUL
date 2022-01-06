import { Request, Response } from 'express';

import { getMaterialsProvider } from 'db/providers/courseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { TMaterials } from 'interfaces/entities/Imaterials';

const getAllMaterials = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    console.log('in controller');
    const allMaterials: TMaterials = await getMaterialsProvider();
    res.json(allMaterials);
  } catch (error) {
    console.log('in controller error', error);
    if (isError(error)) {
      next(error);
    }
  }
};

export default getAllMaterials;
