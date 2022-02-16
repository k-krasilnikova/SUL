import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcrypt';

import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { IUser } from 'interfaces/Ientities/Iusers';
import { generateJWT } from 'utils/auth/authUtils';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { TIME_30D_SEC } from 'config/constants';
import { ILoginPayload } from 'interfaces/Iauth/authInterfaces';
import UnauthorizedError from 'classes/errors/clientErrors/UnauthorizedError';

const login = async (
  req: Request<Record<string, never>, Record<string, never>, ILoginPayload>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { login: username, password } = req.body;
    const dbUser: IUser = await authProvider(username);
    const isValidPass = await compare(password, dbUser.passwordHash);
    if (!isValidPass) {
      throw new UnauthorizedError('Password is incorrect');
    }
    const tokens = generateJWT(dbUser);
    await saveTokenProvider(tokens.refreshToken, dbUser);

    res.cookie('refreshToken', tokens.refreshToken, { maxAge: TIME_30D_SEC, httpOnly: true });
    res.json(generateInitialDto(dbUser, tokens));
  } catch (error) {
    next(error);
  }
};

export default login;
