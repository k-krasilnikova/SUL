import { UserRank } from 'enums/users';

import { ComplexityValidator } from '../schemas/courses';

const isValidComplexity = (complexity?: UserRank): boolean =>
  ComplexityValidator.isValidSync(complexity);

export default isValidComplexity;
