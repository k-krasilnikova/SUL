import { NextFunction, Request, Response } from 'express';

import isExpectedHttpError from 'utils/typeGuards/isExpectedHttpError';
import { verifyAccessToken } from 'utils/auth/authUtils';
import UnauthorizedError from 'classes/errors/clientErrors/UnauthorizedError';
import ForbiddenError from 'classes/errors/clientErrors/ForbiddenError';
import { checkTokenInBlacklist } from '../db/providers/authProvider';

const withAuth =
  (roles: Array<string>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = req.headers.authorization?.split(' ')[1];

      let notValidToken;
      if (accessToken) {
        notValidToken = checkTokenInBlacklist(accessToken);
      }

      if (!accessToken || notValidToken) {
        throw new UnauthorizedError('No access token provided.');
      } else {
        const decodedToken = verifyAccessToken(accessToken);
        res.locals = decodedToken;

        const compare = roles.some((role) => role === decodedToken.role);

        if (!compare) {
          throw new ForbiddenError('No access permission.');
        }
        next();
      }
    } catch (error) {
      if (isExpectedHttpError(error)) {
        next(error);
      } else {
        const unauthorizedErr = new ForbiddenError('Invalid access token.');
        next(unauthorizedErr);
      }
    }
  };

export default withAuth;
