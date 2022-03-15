import { getPopulatedUserSkill } from 'db/providers/skillProvider';
import { ITechnologyGroup } from 'interfaces/Ientities/Iusers';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { isEqualObjectId } from 'utils/comparator/ObjectId/compareObjectIds';

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

export { specifyUserTechnologies };
