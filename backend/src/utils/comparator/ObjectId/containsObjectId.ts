import { ObjectId } from 'mongoose';

const containsObjectId = (array: ObjectId[], searchValue: ObjectId): boolean =>
  array.some((objId) => searchValue.toString() === objId.toString());

export { containsObjectId };
