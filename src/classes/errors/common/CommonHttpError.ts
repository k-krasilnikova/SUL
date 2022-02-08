class CommonHttpError implements Error {
  name: string;

  message: string;

  statusCode = 0;

  constructor(message: string) {
    this.name = 'CommonHttpError';
    this.message = message || 'Unknown error.';
  }
}

export default CommonHttpError;
