import { Request, Response } from 'express';

import { getUserProvider } from 'db/providers/userProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { isError } from 'utils/typeGuards/isError';

const getProfileInformation = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id } = req.params;
    const profileInfo = await getUserProvider(id);
    res.json(generateInitialDto(profileInfo));
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export { getProfileInformation };
