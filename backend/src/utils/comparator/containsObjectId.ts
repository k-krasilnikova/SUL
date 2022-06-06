import { Types } from 'mongoose';

const containsObjectId = (array: Types.ObjectId[], searchValue: Types.ObjectId): boolean =>
  array.some((objId) => searchValue.toString() === objId.toString());

export { containsObjectId };
