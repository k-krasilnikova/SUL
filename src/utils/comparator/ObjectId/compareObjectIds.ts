import { ObjectId } from 'mongoose';

const isEqualObjectId = (value: ObjectId, equalTo: ObjectId): boolean =>
  value.toString() === equalTo.toString();

export { isEqualObjectId };
