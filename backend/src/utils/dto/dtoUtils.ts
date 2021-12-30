import { ITokens } from 'interfaces/auth/authInterfaces';
import { IUser } from 'interfaces/entities/user';

const generateInitialDto = (user: IUser, tokens?: ITokens) => {
  const { _id: id, passwordHash, refreshToken, ...userDataToClient } = user;
  return { ...tokens, ...userDataToClient };
};

export { generateInitialDto };
