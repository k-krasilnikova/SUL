import { TInitialDTO } from 'interfaces/dto/initial';
import { ITokens } from 'interfaces/auth/auth';
import { IProgress } from 'interfaces/courses/query';
import { IUser } from 'interfaces/entities/users';

const generateInitialDto = (user: IUser, tokens?: ITokens): TInitialDTO => {
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
