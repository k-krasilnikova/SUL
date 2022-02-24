import { Schema, model } from 'mongoose';

import IUserSkill from 'interfaces/Ientities/IUserSkill';

const userSkillSchema = new Schema<IUserSkill>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  skill: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const UserSkillModel = model<IUserSkill>('UserSkill', userSkillSchema, 'userSkills');

export default UserSkillModel;
