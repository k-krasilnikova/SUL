import { ObjectId } from 'mongoose';
import { uniqWith } from 'lodash';

import { IStackMember } from 'interfaces/Ientities/IStackMember';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';

const getStackCoursesUniqueIds = (stack: IStackMember[]): ObjectId[] =>
  uniqWith(
    stack.reduce(
      (ids, stackMember) => ids.concat(stackMember.relatedCourses),
      new Array<ObjectId>(),
    ),
    isEqualObjectId,
  );

export { getStackCoursesUniqueIds };
