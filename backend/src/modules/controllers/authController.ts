import { compare } from 'bcrypt';
import { Request, Response } from 'express';

import { authProvider, saveTokenProvider } from 'db/providers/authProvider';
import { getUserProvider } from 'db/providers/userProvider';
import { IUser } from 'interfaces/db/entities';
import { TMiddlewareCall } from 'interfaces/middleware/common';
import { generateJWT, verifyRefreshToken } from 'utils/auth/authUtils';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { isError } from 'utils/typeGuards/isError';

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

    res.json(generateInitialDto(dbUser, tokens));
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

const refreshController = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const refreshToken = req.headers.authorization;
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
    await saveTokenProvider(newTokens.refreshToken, dbUser);

    res.json({ ...newTokens });
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export { loginController, refreshController };
