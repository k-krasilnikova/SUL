import { NextFunction } from 'express';

import { TLogoutRequest, TLogoutResponse } from 'interfaces/requests/auth/logout';
import { addTokenToBlackList, clearTokenProvider } from 'db/providers/authProvider';
import { extractAccessTokenValue } from 'utils/auth/authUtils';

const logout = async (req: TLogoutRequest, res: TLogoutResponse, next: NextFunction) => {
  try {
    const { id: userId } = res.locals;

    await clearTokenProvider(userId);
    res.clearCookie('refreshToken');

    const accessToken = extractAccessTokenValue(req);

    if (accessToken) {
      await addTokenToBlackList(accessToken);
    }

    res.json('Logout prefomed successfully.');
  } catch (error) {
    next(error);
  }
};

export default logout;
