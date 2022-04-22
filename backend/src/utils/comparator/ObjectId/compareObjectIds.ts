import { ObjectId } from 'mongoose';

const isEqualObjectId = (value: ObjectId | string, equalTo: ObjectId | string): boolean =>
  String(value) === String(equalTo);

export { isEqualObjectId };
