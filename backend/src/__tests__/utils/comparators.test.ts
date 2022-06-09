import mongoose from 'mongoose';

import { containsObjectId } from 'utils/comparator/containsObjectId';
import { isEqualObjectId } from 'utils/comparator/compareObjectIds';

describe('Comparators tests', () => {
  const createObjectId = () => new mongoose.Types.ObjectId();

  it('Should checks containing ObjectId', () => {
    const falsyId = createObjectId();
    const correctId = createObjectId();
    const arrayOfIds = [createObjectId(), correctId];
    expect(containsObjectId(arrayOfIds, correctId)).toBeTruthy();
    expect(containsObjectId(arrayOfIds, falsyId)).toBeFalsy();
  });

  it('Should compare two ObjectIds', () => {
    const id = createObjectId();

    const isEqualObjectIds = isEqualObjectId(id, id);
    expect(isEqualObjectIds).toBeTruthy();
  });
});
