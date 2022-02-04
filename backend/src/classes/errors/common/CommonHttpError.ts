class CommonHttpError implements Error {
  name: string;

  message: string;

  statusCode: number;

  constructor(message: string) {
    this.name = 'CommonHttpError';
    this.message = message || 'Unknown error.';
  }
}

export default CommonHttpError;
