import { Schema, model } from 'mongoose';

import { ISkillGroup } from 'interfaces/Ientities/ISkillGroup';

const skillGroupSchema = new Schema<ISkillGroup>({
  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    },
  ],
});

const SkillGroupModel = model<ISkillGroup>('SkillGroup', skillGroupSchema, 'skillGroups');

export default SkillGroupModel;
