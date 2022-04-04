import { Schema, model } from 'mongoose';

interface IAccessToken {
  accessToken: string;
}

const accessTokenBlacklistSchema = new Schema<IAccessToken>({
  accessToken: { type: String },
});

const AccessTokenBlacklistModel = model<IAccessToken>(
  'accessTokenBlacklist',
  accessTokenBlacklistSchema,
  'accessTokenBlacklist',
);

export default AccessTokenBlacklistModel;
