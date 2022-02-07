import { Skill } from 'types/skill';

const isSkillCompleted = (skillGroup: Skill): boolean => {
  let completed = true;
  for (let item = 0; item < skillGroup.skillList.length; item += 1) {
    if (skillGroup.skillList[item].score < skillGroup.skillList[item].maxScore) {
      completed = false;
      break;
    }
  }
  return completed;
};

export default isSkillCompleted;
