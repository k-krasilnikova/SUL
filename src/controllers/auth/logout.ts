import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { verifyAccessToken } from 'utils/auth/authUtils';
import { clearTokenProvider } from 'db/providers/authProvider';

const logout = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1];
    if (accessToken) {
      const decodetToken = await verifyAccessToken(accessToken);
      await clearTokenProvider(decodetToken.id);
      res.clearCookie('refreshToken');
      res.json({ message: 'Logout is successful' });
    }
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default logout;
