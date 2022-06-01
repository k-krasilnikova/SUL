import { ITokens, ITokensDto } from 'interfaces/Iauth/authInterfaces';
import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import { IUser, TUserDataToClient } from 'interfaces/Ientities/Iusers';

const generateInitialDto = (
  user: IUser,
  tokens?: ITokens,
): TUserDataToClient & (ITokensDto | undefined) => {
  const { passwordHash, refreshToken, accessToken, ...userDataToClient } = user;
  return { ...tokens, ...userDataToClient };
};

const generateProgressDto = (numberOfStages: number): IProgress[] => {
  const progress = [];
  for (let i = 1; i <= numberOfStages; i += 1) {
    progress.push({
      stage: i,
      isCompleted: false,
    });
  }
  return progress;
};

export { generateInitialDto, generateProgressDto };
