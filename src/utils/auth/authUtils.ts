import jwt from 'jsonwebtoken';

import {
  DEFAULT_ACCESS_TIMEOUT,
  DEFAULT_NO_SECRET,
  DEFAULT_REFRESH_TIMEOUT,
} from 'config/constants';
import { IAccessJwtPayload, IRefreshJwtPayload, ITokens } from 'interfaces/Iauth/authInterfaces';
import { IUser } from 'interfaces/Ientities/Iusers';

const generateJWT = async (userData: IUser): Promise<ITokens> => {
  try {
    if (!userData._id) {
      throw new Error('wrong user id');
    }

    const { _id: id, role } = userData;
    const timeout = process.env.JWT_EXPIRATION_TIME_ACCESS || DEFAULT_ACCESS_TIMEOUT;
    const refreshTimeout = process.env.JWT_EXPIRATION_TIME_REFRESH || DEFAULT_REFRESH_TIMEOUT;

    const accessToken = await jwt.sign({ id, role }, `${process.env.JWT_SECRET}`, {
      expiresIn: timeout,
    });

    const refreshToken = await jwt.sign({ id }, `${process.env.JWT_REFRESH_SECRET}`, {
      expiresIn: refreshTimeout,
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error('not generate token');
  }
};

const verifyAccessToken = async (accessToken: string): Promise<IAccessJwtPayload> => {
  const secret = process.env.JWT_SECRET || DEFAULT_NO_SECRET;

  const payload = (await jwt.verify(accessToken, secret)) as IAccessJwtPayload;
  return payload;
};

const verifyRefreshToken = async (refreshToken: string): Promise<IRefreshJwtPayload> => {
  const secret = process.env.JWT_REFRESH_SECRET || DEFAULT_NO_SECRET;

  const payload = (await jwt.verify(refreshToken, secret)) as IRefreshJwtPayload;
  return payload;
};

export { generateJWT, verifyAccessToken, verifyRefreshToken };
