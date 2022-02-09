import CommonHttpError from 'classes/errors/common/CommonHttpError';

const isExpectedHttpError = (error: unknown): error is CommonHttpError => {
  return error instanceof CommonHttpError;
};

export default isExpectedHttpError;
