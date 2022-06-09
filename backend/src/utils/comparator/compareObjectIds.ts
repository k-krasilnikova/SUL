import { Types } from 'mongoose';

const isEqualObjectId = (
  value: Types.ObjectId | string,
  equalTo: Types.ObjectId | string,
): boolean => String(value) === String(equalTo);

export { isEqualObjectId };
