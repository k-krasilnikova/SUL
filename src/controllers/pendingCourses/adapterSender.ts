import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from 'classes/errors/clientErrors';

const adapterSender = async (
  req: Request,
  res: Response<unknown, { results: unknown }>,
  next: NextFunction,
) => {
  try {
    const { results } = res.locals;
    if (!results) {
      throw new BadRequestError('Invalid query.');
    }
    res.json(results);
  } catch (err) {
    next(err);
  }
};

export default adapterSender;
