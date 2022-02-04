import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class InternalServerError extends CommonHttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = STATUS_CODES.serverErrors.INTERNAL_SERVER_ERROR;
  }
}

export default InternalServerError;
