import { compare } from 'bcrypt';
import { Request, Response } from 'express';

import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { IUser } from 'interfaces/entities/Iusers';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { generateJWT } from 'utils/auth/authUtils';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { isError } from 'utils/typeGuards/isError';
import { TIME_30D_SEC } from 'config/constants';

const login = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { login: username, password } = req.body;
    const dbUser: IUser = await authProvider(username);
    const isValidPass = await compare(password, dbUser.passwordHash);
    if (!isValidPass) {
      throw new Error('wrong password');
    }
    const tokens = await generateJWT(dbUser);
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
