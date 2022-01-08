import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { TMaterials } from 'interfaces/entities/Imaterials';
import { getMaterialProvider } from 'db/providers/courseProvider';

const getMaterials = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id } = req.params;
    const allMaterials: TMaterials = await getMaterialProvider(id);
    res.json(allMaterials);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getMaterials;
