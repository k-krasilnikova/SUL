import { Schema, model } from 'mongoose';

import { IStackMember } from 'interfaces/entities/stackMember';

const schema = new Schema<IStackMember>({
  name: { type: String, unique: true, required: true },
  relatedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

const StackMemberModel = model<IStackMember>('StackMember', schema, 'stackMembers');

export default StackMemberModel;
