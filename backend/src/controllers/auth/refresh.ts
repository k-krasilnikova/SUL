import { Request, Response } from 'express';

import { saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { generateJWT, verifyRefreshToken } from 'utils/auth/authUtils';
import { isError } from 'utils/typeGuards/isError';
import { TIME_30D_SEC } from 'config/constants';

interface ICoikies {
  refreshToken: string;
}

const refresh = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { refreshToken }: { refreshToken: string } = req.cookies as ICoikies;
    if (!refreshToken) {
      throw new Error('no credentials');
    }
    const decodeRefreshToken = verifyRefreshToken(refreshToken);

    const dbUser = await getUserProvider(decodeRefreshToken.id);
    const isValidToken = refreshToken === dbUser?.refreshToken;
    if (!isValidToken) {
      throw new Error('refresh time expired');
    }

    const newTokens = generateJWT(dbUser);
    res.cookie('refreshToken', newTokens.refreshToken, { maxAge: TIME_30D_SEC, httpOnly: true });
    await saveTokenProvider(newTokens.refreshToken, dbUser);

    res.json({ ...newTokens });
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default refresh;
