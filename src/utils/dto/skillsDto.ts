import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { containsObjectId } from 'utils/comparator/ObjectId/containsObjectId';
import { ICourse } from 'interfaces/Ientities/Icourses';

const specifySkills = (userSkills: IUserSkill[], techArray: ICourse['technologies']) => {
  const skillIds = userSkills.map((userSkill) => userSkill.skill);
  const newSkills = techArray.filter((tech) => !containsObjectId(skillIds, tech.skill));
  const oldSkills = techArray.filter((tech) => containsObjectId(skillIds, tech.skill));
  return { newSkills, oldSkills };
};

export { specifySkills };
