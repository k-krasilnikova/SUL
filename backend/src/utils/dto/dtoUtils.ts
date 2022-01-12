import { ITokens } from 'interfaces/Iauth/authInterfaces';
import { IUser } from 'interfaces/Ientities/Iusers';

const generateInitialDto = (user: IUser, tokens?: ITokens) => {
  const { passwordHash, refreshToken, ...userDataToClient } = user;
  return { ...tokens, ...userDataToClient };
};

export { generateInitialDto };
