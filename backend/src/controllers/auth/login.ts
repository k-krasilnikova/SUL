import { compare } from 'bcrypt';
import { Request, Response } from 'express';

import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { IUser } from 'interfaces/Ientities/Iusers';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { generateJWT } from 'utils/auth/authUtils';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { isError } from 'utils/typeGuards/isError';
import { TIME_30D_SEC } from 'config/constants';
import { ILoginPayload } from 'interfaces/Iauth/authInterfaces';

const login = async (
  req: Request<Record<string, never>, Record<string, never>, ILoginPayload>,
  res: Response,
  next: TMiddlewareCall,
) => {
  try {
    const { login: username, password } = req.body;
    const dbUser: IUser = await authProvider(username);
    const isValidPass = await compare(password, dbUser.passwordHash);
    if (!isValidPass) {
      throw new Error('wrong password');
    }
    const tokens = generateJWT(dbUser);
    await saveTokenProvider(tokens.refreshToken, dbUser);

    res.cookie('refreshToken', tokens.refreshToken, { maxAge: TIME_30D_SEC, httpOnly: true });
    res.json(generateInitialDto(dbUser, tokens));
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default login;
