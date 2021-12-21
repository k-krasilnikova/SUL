import UserModel from 'db/models/User';
import { IUser } from 'interfaces/db/entities';

const authProvider = async (login: string) => {
  const dbUser = await UserModel.findOne({ username: login });
  if (!dbUser) {
    throw new Error('user not found');
  }
  return dbUser;
};

const saveTokenProvider = async (token: string, user: IUser) => {
  await UserModel.updateOne(
    { _id: user._id },
    {
      $set: {},
    },
  );
};

export { authProvider, saveTokenProvider };
