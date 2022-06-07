import { NextFunction } from 'express';

import { TRefreshRequest, TRefreshResponse } from 'interfaces/requests/auth/refresh';
import { saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { generateJWT, verifyRefreshToken } from 'utils/auth/auth';
import isExpectedHttpError from 'utils/typeGuards/isExpectedHttpError';
import { BadRequestError, ForbiddenError } from 'classes/errors/clientErrors';

interface ICookies {
  refreshToken: string;
}

const refresh = async (req: TRefreshRequest, res: TRefreshResponse, next: NextFunction) => {
  try {
    const { refreshToken } = req.cookies as ICookies;

    if (!refreshToken) {
      throw new BadRequestError('No refresh token provided.');
    }

    const refreshTokenStr = JSON.parse(refreshToken) as string;
    const decodeRefreshToken = verifyRefreshToken(refreshTokenStr);

    const dbUser = await getUserProvider(decodeRefreshToken.id);

    const isValidToken = verifyRefreshToken(refreshTokenStr);
    if (!isValidToken) {
      throw new ForbiddenError('Invalid refresh token.');
    }

    const refreshedTokens = generateJWT(dbUser);
    await saveTokenProvider(refreshedTokens.refreshToken, dbUser);

    res.json(refreshedTokens);
  } catch (error) {
    if (isExpectedHttpError(error)) {
      next(error);
    } else {
      const forbiddenError = new ForbiddenError('Invalid refresh token.');
      next(forbiddenError);
    }
  }
};

export default refresh;
