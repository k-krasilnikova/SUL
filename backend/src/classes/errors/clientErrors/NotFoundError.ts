import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class NotFoundError extends CommonHttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = STATUS_CODES.clientErrors.NOT_FOUND;
  }
}

export default NotFoundError;
