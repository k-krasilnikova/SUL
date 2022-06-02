import mongoose from 'mongoose';

import { mapLoginPayload } from 'controllers/auth/login/utils/mappers';
import { ITokens } from 'interfaces/auth/authInterfaces';

describe('Login mappers tests', () => {
  const createObjectId = () => new mongoose.Types.ObjectId();

  it('Map login payload', () => {
    const userId = createObjectId();
    const tokens: ITokens = { accessToken: 'accessTokenMock', refreshToken: 'refreshTokenMock' };

    const payload = mapLoginPayload(tokens, userId);

    expect(payload).toEqual({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      _id: userId,
    });
  });
});
