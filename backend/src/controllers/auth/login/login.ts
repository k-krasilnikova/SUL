import { NextFunction } from 'express';
import { compare } from 'bcrypt';

import { TLoginRequest, TLoginResponse } from 'interfaces/requests/auth/login';
import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { generateJWT } from 'utils/auth/authUtils';
import UnauthorizedError from 'classes/errors/clientErrors/UnauthorizedError';

import { mapLoginPayload } from './utils/mappers';

const login = async (req: TLoginRequest, res: TLoginResponse, next: NextFunction) => {
  try {
    const { login: username, password } = req.body;
    const user = await authProvider(username);
    const isValidPass = await compare(password, user.passwordHash);
    if (!isValidPass) {
      throw new UnauthorizedError('Password is incorrect.');
    }
    const tokens = generateJWT(user);
    await saveTokenProvider(tokens.refreshToken, user);
    const responsePayload = mapLoginPayload(tokens, user._id);
    res.json(responsePayload);
  } catch (error) {
    next(error);
  }
};

export default login;
