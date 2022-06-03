import CommonHttpError from 'classes/errors/common/CommonHttpError';

const isExpectedHttpError = (error: unknown): error is CommonHttpError =>
  error instanceof CommonHttpError;

export default isExpectedHttpError;
