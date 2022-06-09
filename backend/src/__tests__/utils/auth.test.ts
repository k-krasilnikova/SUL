import { Types } from 'mongoose';

import { ITokens } from 'interfaces/auth/auth';
import { IUser } from 'interfaces/entities/users';
import { TBaseRequest } from 'interfaces/requests/base';
import {
  extractAccessTokenValue,
  generateJWT,
  verifyAccessToken,
  verifyRefreshToken,
} from 'utils/auth/auth';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';
import { USER_ROLES } from 'config/constants';

describe('Auth utils tests', () => {
  const createObjectId = () => new Types.ObjectId();

  const validUserPayload: IUser = convertToTypeUnsafe<IUser>({});
  const invalidUserPayload: IUser = convertToTypeUnsafe<IUser>(undefined);

  let validTokens: ITokens;
  const invalidTokens: ITokens = {
    accessToken: 'invalidAccessToken',
    refreshToken: 'invalidRefreshToken',
  };

  beforeAll(() => {
    const userId = createObjectId();
    const userRole = convertToTypeUnsafe<IUser['role']>(USER_ROLES.EMPLOYEE);

    validUserPayload._id = userId;
    validUserPayload.role = userRole;

    validTokens = generateJWT(validUserPayload);
  });

  it('Generating JWT with valid payload', () => {
    expect(() => generateJWT(validUserPayload)).not.toThrow();
  });

  it('Generating JWT with invalid payload', () => {
    expect(() => generateJWT(invalidUserPayload)).toThrow();
  });

  it('Extracting token value from request', () => {
    const tokenMock = 'someTokenValue';
    const requestMock = convertToTypeUnsafe<TBaseRequest>({
      headers: {
        authorization: `Bearer ${tokenMock}`,
      },
    });

    const extractedValue = extractAccessTokenValue(requestMock);

    expect(extractedValue).toBe(tokenMock);
  });

  it('Verify valid access token', () => {
    expect(() => verifyAccessToken(validTokens.accessToken)).not.toThrow();
  });

  it('Verify invalid access token', () => {
    expect(() => verifyAccessToken(invalidTokens.accessToken)).toThrow();
  });

  it('Verify valid refresh token', () => {
    expect(() => verifyRefreshToken(validTokens.refreshToken)).not.toThrow();
  });

  it('Verify invalid refresh token', () => {
    expect(() => verifyRefreshToken(invalidTokens.refreshToken)).toThrow();
  });
});
