import UserModel from 'db/models/User';
import { IUser } from 'interfaces/Ientities/Iusers';

const authProvider = async (login: string) => {
  const dbUser = await UserModel.findOne({ username: login }).lean();
  if (!dbUser) {
    throw new Error('user not found');
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

export { authProvider, saveTokenProvider, clearTokenProvider };
