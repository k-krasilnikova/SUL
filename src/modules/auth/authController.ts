import { compare } from 'bcrypt';
import { Request, Response } from 'express';

import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { IUser } from 'interfaces/entities/Iusers';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { generateJWT, verifyRefreshToken } from 'utils/auth/authUtils';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { isError } from 'utils/typeGuards/isError';
import { TIME_30D_SEC } from 'config/constants';

const loginController = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { login, password } = req.body;
    const dbUser: IUser = await authProvider(login);
    const isValidPass = await compare(password, dbUser.passwordHash);
    if (!isValidPass) {
      throw new Error('wrong password');
    }
    const tokens = await generateJWT(dbUser);
    await saveTokenProvider(tokens.refreshToken, dbUser);

    res.cookie('refreshToken', tokens.refreshToken, {maxAge: TIME_30D_SEC, httpOnly: true});
    res.json(generateInitialDto(dbUser, tokens));
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

const refreshController = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const refreshToken = req.cookies;
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
    res.cookie('refreshToken', newTokens.refreshToken, {maxAge: TIME_30D_SEC, httpOnly: true});
    await saveTokenProvider(newTokens.refreshToken, dbUser);

    res.json({ ...newTokens });
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export { loginController, refreshController };
