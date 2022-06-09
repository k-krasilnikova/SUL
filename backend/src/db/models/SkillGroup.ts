import { Schema, model } from 'mongoose';

import { ISkillGroup } from 'interfaces/entities/skillGroup';

const skillGroupSchema = new Schema<ISkillGroup>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    },
  ],
});

const SkillGroupModel = model<ISkillGroup>('SkillGroup', skillGroupSchema, 'skillGroups');

export default SkillGroupModel;
