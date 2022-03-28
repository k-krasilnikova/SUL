import { NextFunction, Request, Response } from 'express';

import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const adapterSender = async (
  req: Request,
  res: Response<unknown, { results: Record<'updateStatus', string> }>,
  next: NextFunction,
) => {
  try {
    const {
      results: { updateStatus },
    } = res.locals;
    if (!updateStatus) {
      throw new BadRequestError('Invalid query.');
    }
    res.json(updateStatus);
  } catch (err) {
    next(err);
  }
};

export default adapterSender;
