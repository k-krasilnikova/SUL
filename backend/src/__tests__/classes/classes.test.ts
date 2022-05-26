import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import ForbiddenError from 'classes/errors/clientErrors/ForbiddenError';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import UnauthorizedError from 'classes/errors/clientErrors/UnauthorizedError';
import CommonHttpError from 'classes/errors/common/CommonHttpError';
import InternalServerError from 'classes/errors/serverErrors/InternalServerError';
import ServiceUnavailableError from 'classes/errors/serverErrors/ServiceUnavailableError';
import Mail from 'classes/Mail/Mail';
import { STATUS_CODES } from 'config/constants';

jest.mock('classes/Mail/Mail');

describe('Mail classes', () => {
  it('Calls the class constructor', () => {
    const newMail = new Mail();
    expect(Mail).toBeCalledTimes(1);
    expect(newMail).toBeInstanceOf(Mail);
    expect(newMail).toHaveProperty('sendMail');
  });

  it('Should call sendMail method', async () => {
    const sendMailMock = jest.spyOn(Mail.prototype, 'sendMail').mockImplementation(async () => {
      await Promise.resolve();
    });
    const msg = {
      to: 'test',
      subject: 'test',
      text: 'test',
    };
    const mailClient = new Mail();
    await mailClient.sendMail(msg);
    expect(sendMailMock).toHaveBeenCalled();
    expect(sendMailMock).toBeCalledWith(msg);
  });
});

describe('Errors classes', () => {
  const testMsg = 'test error';
  const noMsg = '';
  const unknownError = 'Unknown error.';

  it('Should create CommonHttpError instance', () => {
    let testCommonError = new CommonHttpError(testMsg);
    expect(testCommonError).toHaveProperty('message');
    expect(testCommonError).toHaveProperty('name');
    expect(testCommonError).toHaveProperty('statusCode');
    expect(testCommonError).toBeInstanceOf(CommonHttpError);
    expect(testCommonError.message).toBe(testMsg);

    testCommonError = new CommonHttpError(noMsg);
    expect(testCommonError).toBeInstanceOf(CommonHttpError);
    expect(testCommonError.message).toBe(unknownError);
  });

  it('Should create ServiceUnavailableError', () => {
    let testServiceUnavailable = new ServiceUnavailableError(testMsg);
    expect(testServiceUnavailable).toBeInstanceOf(ServiceUnavailableError);
    expect(testServiceUnavailable).toBeInstanceOf(CommonHttpError);
    expect(testServiceUnavailable).toHaveProperty('message');
    expect(testServiceUnavailable).toHaveProperty('name');
    expect(testServiceUnavailable).toHaveProperty('statusCode');
    expect(testServiceUnavailable.message).toEqual(testMsg);
    expect(testServiceUnavailable.statusCode).toEqual(
      STATUS_CODES.serverErrors.SERVICE_UNAVAILABLE,
    );

    testServiceUnavailable = new ServiceUnavailableError(noMsg);
    expect(testServiceUnavailable.message).toEqual(unknownError);
  });

  it('Should create InternalServerError', () => {
    let testInternalServerError = new InternalServerError(testMsg);
    expect(testInternalServerError).toBeInstanceOf(InternalServerError);
    expect(testInternalServerError).toBeInstanceOf(CommonHttpError);
    expect(testInternalServerError).toHaveProperty('message');
    expect(testInternalServerError).toHaveProperty('name');
    expect(testInternalServerError).toHaveProperty('statusCode');
    expect(testInternalServerError.message).toEqual(testMsg);
    expect(testInternalServerError.statusCode).toEqual(
      STATUS_CODES.serverErrors.INTERNAL_SERVER_ERROR,
    );

    testInternalServerError = new InternalServerError(noMsg);
    expect(testInternalServerError.message).not.toBe(unknownError);
    expect(testInternalServerError.message).toBe('Unknown server error.');
  });

  it('Should create BadRequestError', () => {
    let testBadRequestError = new BadRequestError(testMsg);
    expect(testBadRequestError).toBeInstanceOf(BadRequestError);
    expect(testBadRequestError).toBeInstanceOf(CommonHttpError);
    expect(testBadRequestError).toHaveProperty('message');
    expect(testBadRequestError).toHaveProperty('name');
    expect(testBadRequestError).toHaveProperty('statusCode');
    expect(testBadRequestError.message).toBe(testMsg);
    expect(testBadRequestError.statusCode).toBe(STATUS_CODES.clientErrors.BAD_REQUEST);

    testBadRequestError = new BadRequestError(noMsg);
    expect(testBadRequestError.message).toBe(unknownError);
  });

  it('Should create ForbiddenError', () => {
    let testForbiddenError = new ForbiddenError(testMsg);
    expect(testForbiddenError).toBeInstanceOf(ForbiddenError);
    expect(testForbiddenError).toBeInstanceOf(CommonHttpError);
    expect(testForbiddenError).toHaveProperty('message');
    expect(testForbiddenError).toHaveProperty('name');
    expect(testForbiddenError).toHaveProperty('statusCode');
    expect(testForbiddenError.message).toBe(testMsg);
    expect(testForbiddenError.statusCode).toBe(STATUS_CODES.clientErrors.FORBIDDEN);

    testForbiddenError = new ForbiddenError(noMsg);
    expect(testForbiddenError.message).toBe(unknownError);
  });

  it('Should create NotFoundError', () => {
    let testNotFoundError = new NotFoundError(testMsg);
    expect(testNotFoundError).toBeInstanceOf(NotFoundError);
    expect(testNotFoundError).toBeInstanceOf(CommonHttpError);
    expect(testNotFoundError).toHaveProperty('message');
    expect(testNotFoundError).toHaveProperty('name');
    expect(testNotFoundError).toHaveProperty('statusCode');
    expect(testNotFoundError.message).toBe(testMsg);
    expect(testNotFoundError.statusCode).toBe(STATUS_CODES.clientErrors.NOT_FOUND);

    testNotFoundError = new NotFoundError(noMsg);
    expect(testNotFoundError.message).toBe(unknownError);
  });

  it('Should create UnauthorizedError', () => {
    let testUnathorizedError = new UnauthorizedError(testMsg);
    expect(testUnathorizedError).toBeInstanceOf(UnauthorizedError);
    expect(testUnathorizedError).toBeInstanceOf(CommonHttpError);
    expect(testUnathorizedError).toHaveProperty('message');
    expect(testUnathorizedError).toHaveProperty('name');
    expect(testUnathorizedError).toHaveProperty('statusCode');
    expect(testUnathorizedError.message).toBe(testMsg);
    expect(testUnathorizedError.statusCode).toBe(STATUS_CODES.clientErrors.UNAUTHORIZED);

    testUnathorizedError = new UnauthorizedError(noMsg);
    expect(testUnathorizedError.message).toBe(unknownError);
  });
});
