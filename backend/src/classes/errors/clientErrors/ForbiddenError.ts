import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class ForbiddenError extends CommonHttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = STATUS_CODES.clientErrors.FORBIDDEN;
  }
}

export default ForbiddenError;
