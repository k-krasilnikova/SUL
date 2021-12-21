import { DEFAULT_ACCESS_TIMEOUT, DEFAULT_REFRESH_TIMEOUT } from 'config/constants';
import { IUser } from 'interfaces/db/entities';
import jwt from 'jsonwebtoken';

const generateJWT = async (userData: IUser) => {
  try {
    if (!userData._id) {
      throw new Error('wrong user id');
    }
    const { _id: id, username: login, role } = userData;
    const timeout = process.env.JWT_EXPIRATION_TIME_ACCESS || DEFAULT_ACCESS_TIMEOUT;
    const refreshTimeout = process.env.JWT_EXPIRATION_TIME_REFRESH || DEFAULT_REFRESH_TIMEOUT;
    const accessToken = await jwt.sign({ id, login, role }, `${process.env.JWT_SECRET}`, {
      expiresIn: timeout,
    });
    const refreshToken = await jwt.sign({ login }, `${process.env.JWT_REFRESH_TOKEN}`, {
      expiresIn: refreshTimeout,
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error('not generate token');
  }
};

export { generateJWT };
