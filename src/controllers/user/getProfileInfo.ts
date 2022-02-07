import { Request, Response } from 'express';

import { getUserProvider } from 'db/providers/userProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { generateInitialDto } from 'utils/dto/dtoUtils';

const getProfileInformation = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id } = req.params;
    const profileInfo = await getUserProvider(id);
    res.json(generateInitialDto(profileInfo));
  } catch (error) {
    next(error);
  }
};

export default getProfileInformation;
