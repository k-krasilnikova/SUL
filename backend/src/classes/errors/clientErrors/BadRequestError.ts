import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class BadRequestError extends CommonHttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = STATUS_CODES.clientErrors.BAD_REQUEST;
  }
}

export default BadRequestError;
