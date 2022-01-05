import { Request, Response } from 'express';

import { saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { generateJWT, verifyRefreshToken } from 'utils/auth/authUtils';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const refresh = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const refreshToken = req.headers.authorization;
    if (!refreshToken) {
      throw new Error('no access');
    }

    const decodeRefreshToken = await verifyRefreshToken(refreshToken);

    const dbUser = await getUserProvider(decodeRefreshToken.id);

    const isValidToken = refreshToken === dbUser?.refreshToken;
    if (!isValidToken) {
      throw new Error('access time expired');
    }

    const newTokens = await generateJWT(dbUser);
    await saveTokenProvider(newTokens.refreshToken, dbUser);

    res.json({ ...newTokens });
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default refresh;
