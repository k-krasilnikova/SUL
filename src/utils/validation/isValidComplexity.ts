import { UserRank } from '../../enums/users';

const isValidComplexity = (complexity?: UserRank): boolean =>
  Boolean(complexity && typeof complexity === 'number');

export default isValidComplexity;
