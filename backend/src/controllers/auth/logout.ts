import { NextFunction, Request, Response } from 'express';

import { addTokenToBlackList, clearTokenProvider } from 'db/providers/authProvider';

const logout = async (
  req: Request,
  res: Response<{ message: string }, { id: string }>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    await clearTokenProvider(userId);
    res.clearCookie('refreshToken');

    const accessToken = req.headers.authorization?.split(' ')[1];
    if (accessToken) {
      await addTokenToBlackList(accessToken);
    }

    res.json({ message: 'Logout is successful' });
  } catch (error) {
    next(error);
  }
};

export default logout;
