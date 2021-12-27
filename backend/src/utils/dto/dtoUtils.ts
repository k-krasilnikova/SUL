import { ITokens } from 'interfaces/auth/authInterfaces';
import { IUser } from 'interfaces/db/entities';

const generateInitialDto = (user: IUser, tokens?: ITokens) => {
  const { _id: id, passwordHash, refreshToken, ...userDataToClient } = user;
  return { ...tokens, ...userDataToClient };
};

export { generateInitialDto };
