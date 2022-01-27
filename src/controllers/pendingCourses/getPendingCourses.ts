import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IUser } from 'interfaces/Ientities/Iusers';
import { getUserProvider } from 'db/providers/userProvider';
import { verifyAccessToken } from 'utils/auth/authUtils';

const getPendingCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1];
    if (accessToken) {
      const decodetToken = await verifyAccessToken(accessToken);
      const user: IUser = await getUserProvider(decodetToken.id);
      res.json(user.pendingCourses);
    }
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getPendingCourses;
