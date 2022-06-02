import { Types } from 'mongoose';

import { ICourseWithStatus } from 'interfaces/courses/queryCourses';

interface IStackMember {
  _id?: Types.ObjectId;
  name: string;
  relatedCourses: Types.ObjectId[];
}

type TStackMemberPopulated = Omit<IStackMember, 'relatedCourses'> & {
  relatedCourses: ICourseWithStatus[];
};

interface IUserStackMemberDatabase {
  member: Types.ObjectId;
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
