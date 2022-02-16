import { ISkill } from 'interfaces/Ientities/Iusers';

const specifySkills = (userSkills: ISkill[], techArray: Array<string>) => {
  const skillsNames = userSkills.map((skill) => skill.name);
  const newSkills = techArray.filter((skill) => !skillsNames.includes(skill));
  const oldSkills = techArray.filter((skill) => skillsNames.includes(skill));
  return { newSkills, oldSkills };
};

export { specifySkills };
