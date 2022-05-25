import { ObjectId } from 'mongoose';

import { ITokens } from 'interfaces/Iauth/authInterfaces';
import { TResponsePayload } from 'interfaces/requests/auth/login';

const mapLoginPayload = (
  tokens: ITokens,
  userId: ObjectId /* refactor after merge tests */,
): TResponsePayload => ({
  ...tokens,
  _id: userId,
});

export { mapLoginPayload };
