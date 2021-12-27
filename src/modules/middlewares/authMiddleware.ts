import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/middleware/common';
import { verifyAccessToken } from 'utils/auth/authUtils';
import { isError } from 'utils/typeGuards/isError';

const withAuth =
  (roles: Array<string>) => async (req: Request, res: Response, next: TMiddlewareCall) => {
    try {
      const accessToken = req.headers.authorization?.split(' ')[1];
      if (!accessToken) {
        throw new Error('no access, invalid access params');
      }

      const decodedToken = await verifyAccessToken(accessToken);
      res.locals = decodedToken;
      const compare = roles.some((role) => role === decodedToken.role);
      if (!compare) {
        throw new Error('no access permision');
      }

      next();
    } catch (error) {
      if (isError(error)) {
        next(error);
      }
    }
  };

export default withAuth;
