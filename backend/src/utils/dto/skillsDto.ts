import { ObjectId } from 'mongoose';

import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { containsObjectId } from 'utils/comparator/ObjectId/containsObjectId';

const specifySkills = (userSkills: IUserSkill[], techArrayIds: ObjectId[]) => {
  const skillIds = userSkills.map((userSkill) => userSkill.skill);
  const newSkills = techArrayIds.filter((techId) => !containsObjectId(skillIds, techId));
  const oldSkills = techArrayIds.filter((techId) => containsObjectId(skillIds, techId));
  return { newSkills, oldSkills };
};

export { specifySkills };
