import mongoose from 'mongoose';

import { containsObjectId } from 'utils/comparator/ObjectId/containsObjectId';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';

describe('comparators tests', () => {
  const createObjectId = () => new mongoose.Types.ObjectId();

  it('should checks containing ObjectId', () => {
    const falsyId = createObjectId();
    const correctId = createObjectId();
    const arrayOfIds = [createObjectId(), correctId];
    expect(containsObjectId(arrayOfIds, correctId)).toBeTruthy();
    expect(containsObjectId(arrayOfIds, falsyId)).toBeFalsy();
  });

  it('should compare two ObjectIds', () => {
    const id = createObjectId();

    const isEqualObjectIds = isEqualObjectId(id, id);
    expect(isEqualObjectIds).toBeTruthy();
  });
});
