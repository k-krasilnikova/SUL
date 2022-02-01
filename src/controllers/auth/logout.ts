import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { clearTokenProvider } from 'db/providers/authProvider';

const logout = async (
  req: Request,
  res: Response<{ message: string }, { id: string }>,
  next: TMiddlewareCall,
) => {
  try {
    const { id: userId } = res.locals;
    await clearTokenProvider(userId);
    res.clearCookie('refreshToken');
    res.json({ message: 'Logout is successful' });
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default logout;
