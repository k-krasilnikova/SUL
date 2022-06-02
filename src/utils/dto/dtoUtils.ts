import { ITokens } from 'interfaces/auth/authInterfaces';
import { IProgress } from 'interfaces/courses/queryCourses';
import { IUser } from 'interfaces/entities/users';

const generateInitialDto = (user: IUser, tokens?: ITokens) => {
  const { passwordHash, refreshToken, ...userDataToClient } = user;
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
