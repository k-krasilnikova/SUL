import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getMaterialProvider } from 'db/providers/materialProvider';

const getMaterials = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id } = req.params;
    const params = req.query;
    const material = await getMaterialProvider({ id, ...params });
    res.json(material);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getMaterials;
