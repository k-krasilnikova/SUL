import { NextFunction, Request, Response } from 'express';

import { addTokenToBlackList, clearTokenProvider } from 'db/providers/authProvider';
import { extractAccessTokenValue } from '../../utils/auth/authUtils';

const logout = async (
  req: Request,
  res: Response<{ message: string }, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    await clearTokenProvider(userId);
    res.clearCookie('refreshToken');

    const accessToken = extractAccessTokenValue(req);

    if (accessToken) {
      await addTokenToBlackList(accessToken);
    }

    res.json({ message: 'Logout is successful' });
  } catch (error) {
    next(error);
  }
};

export default logout;
