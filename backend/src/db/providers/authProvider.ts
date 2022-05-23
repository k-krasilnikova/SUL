import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UserModel from 'db/models/User';
import { IUser } from 'interfaces/Ientities/Iusers';
import AccessTokenBlacklistModel from 'db/models/AccessTokens';

const authProvider = async (login: string): Promise<IUser> => {
  const dbUser = await UserModel.findOne({ username: login }).lean();
  if (!dbUser) {
    throw new NotFoundError('User not found.');
  }
  return dbUser;
};

const saveTokenProvider = async (token: string, user: IUser) => {
  await UserModel.updateOne(
    { _id: user._id },
    {
      $set: {
        refreshToken: token,
      },
    },
  );
};

const clearTokenProvider = async (userId: string): Promise<void> => {
  await UserModel.updateOne(
    { _id: userId },
    {
      $unset: {
        refreshToken: '',
      },
    },
  );
};

const addTokenToBlackList = async (accessToken: string): Promise<void> => {
  await AccessTokenBlacklistModel.create({ accessToken });
};

const checkTokenInBlacklist = async (accessToken: string) => {
  const notValidToken = await AccessTokenBlacklistModel.findOne({ accessToken }).lean();
  return notValidToken;
};

export {
  authProvider,
  saveTokenProvider,
  clearTokenProvider,
  addTokenToBlackList,
  checkTokenInBlacklist,
};
