import { UserRank } from 'enums/users';

import { ComplexityValidator } from '../schemas/courses';

const validateComplexity = (complexity?: UserRank): UserRank | null | undefined => {
  try {
    return complexity ? ComplexityValidator.validateSync(complexity) : undefined;
  } catch {
    return null;
  }
};

export default validateComplexity;
