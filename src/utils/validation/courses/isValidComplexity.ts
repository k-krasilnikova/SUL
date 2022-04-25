import { UserRank } from 'enums/users';

const isValidComplexity = (complexity?: UserRank): boolean =>
  Boolean(
    complexity &&
      typeof complexity === 'number' &&
      complexity > 0 &&
      Object.values(UserRank).includes(complexity),
  );

export default isValidComplexity;
