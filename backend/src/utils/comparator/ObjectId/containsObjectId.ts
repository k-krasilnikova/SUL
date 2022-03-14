import { ObjectId } from 'mongoose';

const containsObjectId = (array: ObjectId[], searchValue: ObjectId): boolean =>
  !!array.filter((objId) => searchValue.toString() === objId.toString()).length;

export { containsObjectId };
