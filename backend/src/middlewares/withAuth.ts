import { NextFunction, Response } from 'express';

import isExpectedHttpError from 'utils/typeGuards/isExpectedHttpError';
import { checkTokenInBlacklist } from 'db/providers/authProvider';
import { TBaseRequest } from 'interfaces/requests/base';
import { ForbiddenError, UnauthorizedError } from 'classes/errors/clientErrors';
import { extractAccessTokenValue, verifyAccessToken } from 'utils/auth/auth';

const withAuth =
  (roles: Array<string>) => async (req: TBaseRequest, res: Response, next: NextFunction) => {
    try {
      const accessToken = extractAccessTokenValue(req);

      let notValidToken;
      if (accessToken) {
        notValidToken = await checkTokenInBlacklist(accessToken);
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
