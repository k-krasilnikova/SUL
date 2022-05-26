import { Types } from 'mongoose';

import { NOTHING } from 'config/constants';
import {
  getCommonSkill,
  getPopulatedUserSkill,
  getUserSkill,
  updateUserSkill,
} from 'db/providers/skillProvider';
import { ICourse } from 'interfaces/Ientities/Icourses';
import { ITechnologyGroup } from 'interfaces/Ientities/Iusers';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';
import { containsObjectId } from 'utils/comparator/ObjectId/containsObjectId';

const specifyUserTechnologies = async (
  techs: ITechnologyGroup[],
  userSkills: IUserSkill[],
): Promise<ITechnologyGroup[]> => {
  const updatedTechList = techs;

  await Promise.all(
    userSkills.map(async (userSkill) => {
      const userSkillPopulated = await getPopulatedUserSkill(userSkill._id || '');
      const isGroupExists = techs.some((tech) =>
        isEqualObjectId(tech.group, userSkillPopulated.skill.group),
      );

      if (isGroupExists) {
        updatedTechList.map((tech) => {
          if (isEqualObjectId(tech.group, userSkillPopulated.skill.group) && userSkill._id) {
            tech.achievedSkills.push(userSkill._id);
          }
          return tech;
        });
      } else {
        const newTechnology: ITechnologyGroup = {
          group: userSkillPopulated.skill.group,
          achievedSkills: [],
          isPrimary: false,
        };
        if (userSkill._id) {
          newTechnology.achievedSkills.push(userSkill._id);
        }
        updatedTechList.push(newTechnology);
      }
    }),
  );

  return updatedTechList;
};

const specifySkills = (userSkills: IUserSkill[], techArray: ICourse['technologies']) => {
  const skillIds = userSkills.map((userSkill) => userSkill.skill);
  const newSkills = techArray.filter((tech) => !containsObjectId(skillIds, tech.skill));
  const oldSkills = techArray.filter((tech) => containsObjectId(skillIds, tech.skill));
  return { newSkills, oldSkills };
};

const calculatePoints = (skillPoints: number, userScore: number) => {
  const isAdditionalScore = skillPoints > userScore;
  return isAdditionalScore ? skillPoints - userScore : NOTHING;
};

const addPointToUserSkill =
  (userId: string) =>
  async ({ skill, points }: { skill: string | Types.ObjectId; points: number }) => {
    const { score } = await getUserSkill(userId, skill);
    const { maxScore } = await getCommonSkill(skill);
    const isSkillIncomplete = score < maxScore;
    const newPoints = calculatePoints(points, score);
    return isSkillIncomplete && updateUserSkill(userId, newPoints, skill);
  };

export { specifyUserTechnologies, specifySkills, addPointToUserSkill };
