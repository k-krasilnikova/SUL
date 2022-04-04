import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { containsObjectId } from 'utils/comparator/ObjectId/containsObjectId';
import { ICourse } from 'interfaces/Ientities/Icourses';

const specifySkills = (userSkills: IUserSkill[], techArrayIds: ICourse['technologies']) => {
  const skillIds = userSkills.map((userSkill) => userSkill.skill);
  const newSkills = techArrayIds.filter((techId) => !containsObjectId(skillIds, techId.skill));
  const oldSkills = techArrayIds.filter((techId) => containsObjectId(skillIds, techId.skill));
  return { newSkills, oldSkills };
};

export { specifySkills };
