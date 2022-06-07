import CommonHttpError from 'classes/errors/common/CommonHttpError';
import { isError } from 'utils/typeGuards/isError';
import isExpectedHttpError from 'utils/typeGuards/isExpectedHttpError';

describe('Type guards tests', () => {
  it('Is object instance of Error', () => {
    const validError = new Error('Error');
    const invalidError = {};

    const functionWrapper = (err: unknown): boolean => isError(err);

    expect(functionWrapper(validError)).toBeTruthy();
    expect(functionWrapper(invalidError)).toBeFalsy();
  });

  it('Is object instance of CommonHttpError', () => {
    const validError = new CommonHttpError('Error');
    const invalidError = {};

    const functionWrapper = (err: unknown): boolean => isExpectedHttpError(err);

    expect(functionWrapper(validError)).toBeTruthy();
    expect(functionWrapper(invalidError)).toBeFalsy();
  });
});
