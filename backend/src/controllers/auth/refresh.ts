import { NextFunction, Request, Response } from 'express';

import { saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { generateJWT, verifyRefreshToken } from 'utils/auth/authUtils';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import ForbiddenError from 'classes/errors/clientErrors/ForbiddenError';
import isExpectedHttpError from 'utils/typeGuards/isExpectedHttpError';

interface ICookies {
  refreshToken: string;
}

const refresh = async (req: Request, res: Response, next: NextFunction) => {
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

    const newTokens = generateJWT(dbUser);

    await saveTokenProvider(newTokens.refreshToken, dbUser);

    res.json({ ...newTokens });
  } catch (error) {
    if (isExpectedHttpError(error)) {
      next(error);
    } else {
      const forbiddenError = new ForbiddenError('ERROR: Invalid refresh token.');
      next(forbiddenError);
    }
  }
};

export default refresh;
