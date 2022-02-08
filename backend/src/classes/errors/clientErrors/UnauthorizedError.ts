import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class UnauthorizedError extends CommonHttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = STATUS_CODES.clientErrors.UNAUTHORIZED;
  }
}

export default UnauthorizedError;
