import { getUserProvider } from 'db/providers/userProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/middleware/common';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { isError } from 'utils/typeGuards/isError';

const getProfileController = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id } = res.locals;
    const profileInfo = await getUserProvider(id);
    res.json(generateInitialDto(profileInfo));
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export { getProfileController };
