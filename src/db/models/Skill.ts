import { Schema, model } from 'mongoose';

import ISkill from 'interfaces/entities/skill';

const skillSchema = new Schema<ISkill>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  maxScore: { type: Number, required: true },
  group: { type: Schema.Types.ObjectId, required: true, ref: 'SkillGroup' },
});

const SkillModel = model<ISkill>('Skill', skillSchema, 'skills');

export default SkillModel;
