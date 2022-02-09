import { STATUS_CODES } from 'config/constants';

import CommonHttpError from '../common/CommonHttpError';

class ServiceUnavailableError extends CommonHttpError {
  constructor(message: string) {
    super(message);
    this.statusCode = STATUS_CODES.serverErrors.SERVICE_UNAVAILABLE;
  }
}

export default ServiceUnavailableError;
