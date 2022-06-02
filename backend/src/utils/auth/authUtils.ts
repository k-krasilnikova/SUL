import jwt from 'jsonwebtoken';

import {
  DEFAULT_ACCESS_TIMEOUT,
  DEFAULT_NO_SECRET,
  DEFAULT_REFRESH_TIMEOUT,
} from 'config/constants';
import { IAccessJwtPayload, IRefreshJwtPayload, ITokens } from 'interfaces/auth/authInterfaces';
import { IUser } from 'interfaces/entities/users';
import InternalServerError from 'classes/errors/serverErrors/InternalServerError';
import { TBaseRequest } from 'interfaces/requests/base';

const generateJWT = (userData: IUser): ITokens => {
  try {
    const { _id: id, role } = userData;
    const timeout = process.env.JWT_EXPIRATION_TIME_ACCESS || DEFAULT_ACCESS_TIMEOUT;
    const refreshTimeout = process.env.JWT_EXPIRATION_TIME_REFRESH || DEFAULT_REFRESH_TIMEOUT;

    const accessToken = jwt.sign({ id, role }, `${process.env.JWT_SECRET || DEFAULT_NO_SECRET}`, {
      expiresIn: timeout,
    });

    const refreshToken = jwt.sign(
      { id },
      `${process.env.JWT_REFRESH_SECRET || DEFAULT_NO_SECRET}`,
      {
        expiresIn: refreshTimeout,
      },
    );
    return { accessToken, refreshToken };
  } catch (error) {
    throw new InternalServerError('Could not generate token.');
  }
};

const verifyAccessToken = (accessToken: string): IAccessJwtPayload => {
  const secret = process.env.JWT_SECRET || DEFAULT_NO_SECRET;

  const payload = jwt.verify(accessToken, secret) as IAccessJwtPayload;
  return payload;
};

const verifyRefreshToken = (refreshToken: string): IRefreshJwtPayload => {
  const secret = process.env.JWT_REFRESH_SECRET || DEFAULT_NO_SECRET;

  const payload = jwt.verify(refreshToken, secret) as IRefreshJwtPayload;
  return payload;
};

export const extractAccessTokenValue = (req: TBaseRequest) => {
  return req.headers.authorization?.split(' ')[1];
};

export { generateJWT, verifyAccessToken, verifyRefreshToken };
