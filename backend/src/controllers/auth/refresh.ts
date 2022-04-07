import { NextFunction, Request, Response } from 'express';

import { saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { generateJWT, verifyRefreshToken } from 'utils/auth/authUtils';
import { TIME_30D_SEC } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import ForbiddenError from 'classes/errors/clientErrors/ForbiddenError';
import isExpectedHttpError from 'utils/typeGuards/isExpectedHttpError';

interface ICookies {
  refreshToken: string;
}

const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken }: { refreshToken: string } = req.cookies as ICookies;

    if (!refreshToken) {
      throw new BadRequestError('No refresh token provided.');
    }

    const decodeRefreshToken = verifyRefreshToken(refreshToken);

    const dbUser = await getUserProvider(decodeRefreshToken.id);
    const isValidToken = refreshToken === dbUser?.refreshToken;
    if (!isValidToken) {
      throw new ForbiddenError('Invalid refresh token.');
    }

    const newTokens = generateJWT(dbUser);
    res.cookie('refreshToken', newTokens.refreshToken, { maxAge: TIME_30D_SEC, httpOnly: true });
    await saveTokenProvider(newTokens.refreshToken, dbUser);

    res.json({ ...newTokens });
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
