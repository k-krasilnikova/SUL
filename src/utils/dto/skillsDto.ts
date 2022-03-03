import ISkill from 'interfaces/Ientities/ISkill';
import IUserSkill from 'interfaces/Ientities/IUserSkill';

const specifySkills = (userSkills: IUserSkill[], techArray: ISkill[]) => {
  const skillsIds = userSkills.map((userSkill) => userSkill.skill);
  const newSkills = techArray.filter((tech) => (tech._id ? !skillsIds.includes(tech._id) : false));
  const oldSkills = techArray.filter((tech) => (tech._id ? skillsIds.includes(tech._id) : false));
  return { newSkills, oldSkills };
};

export { specifySkills };
