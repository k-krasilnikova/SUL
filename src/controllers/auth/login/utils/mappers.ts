import { Types } from 'mongoose';

import { ITokens } from 'interfaces/Iauth/authInterfaces';
import { TResponsePayload } from 'interfaces/requests/auth/login';

const mapLoginPayload = (tokens: ITokens, userId: Types.ObjectId): TResponsePayload => ({
  ...tokens,
  _id: userId,
});

export { mapLoginPayload };
