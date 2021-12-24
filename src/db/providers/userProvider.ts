import UserModel from 'db/models/User';

const getUserProvider = async (userId: string) => {
  const dbUser = await UserModel.findById(userId).lean();
  if (!dbUser) {
    throw new Error('user not found');
  }
  return dbUser;
};

export { getUserProvider };
