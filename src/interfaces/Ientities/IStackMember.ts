import { ObjectId } from 'mongoose';

interface IStackMember {
  _id?: ObjectId;
  name: string;
  relatedCourses: ObjectId[];
}

interface IUserStackMemberDatabase {
  member: ObjectId;
  isPrimary: boolean;
}

type TUserStackMember = IUserStackMemberDatabase & {
  member: IStackMember;
};

type TUserStackMemberShort = Omit<TUserStackMember, 'member'> & {
  member: Pick<TUserStackMember['member'], 'name'>;
};

export { IStackMember, IUserStackMemberDatabase, TUserStackMember, TUserStackMemberShort };
