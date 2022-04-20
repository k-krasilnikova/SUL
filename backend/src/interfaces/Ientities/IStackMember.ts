import { ObjectId } from 'mongoose';

import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

interface IStackMember {
  _id?: ObjectId;
  name: string;
  relatedCourses: ObjectId[];
}

type TStackMemberPopulated = Omit<IStackMember, 'relatedCourses'> & {
  relatedCourses: ICourseWithStatus[];
};

interface IUserStackMemberDatabase {
  member: ObjectId;
  isPrimary: boolean;
}

type TUserStackMember = IUserStackMemberDatabase & {
  member: IStackMember;
};

type TUserStackMemberPopulated = Omit<TUserStackMember, 'member'> & {
  member: TStackMemberPopulated;
};

type TUserStackMemberShort = Omit<TUserStackMember, 'member'> & {
  member: Pick<TUserStackMember['member'], 'name'>;
};

export {
  IStackMember,
  IUserStackMemberDatabase,
  TUserStackMember,
  TUserStackMemberShort,
  TUserStackMemberPopulated,
  TStackMemberPopulated,
};
