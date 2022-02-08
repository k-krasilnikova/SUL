import { ISkills } from 'interfaces/Ientities/Iusers';

const specifySkills = (userSkills: { skills: ISkills[] }, techArray: Array<string>) => {
  const skillsNames = userSkills.skills.map((skill) => skill.name);
  const differingSkills = skillsNames.filter((skill) => !techArray.includes(skill));
  const commonSkills = skillsNames.filter((skill) => !techArray.includes(skill));
  return { differingSkills, commonSkills };
};

export { specifySkills };
