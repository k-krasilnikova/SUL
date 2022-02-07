import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class InternalServerError extends CommonHttpError {
  constructor() {
    super('Unknown server error.');
    this.statusCode = STATUS_CODES.serverErrors.INTERNAL_SERVER_ERROR;
  }
}

export default InternalServerError;
