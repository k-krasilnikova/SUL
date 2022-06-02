import { Types } from 'mongoose';

import { getCommonSkill, getUserSkill, updateUserSkill } from 'db/providers/skillProvider';
import { NOTHING } from 'config/constants';

const calculatePoints = (skillPoints: number, userScore: number) => {
  const isAdditionalScore = skillPoints > userScore;
  return isAdditionalScore ? skillPoints - userScore : NOTHING;
};

export const addPointToUserSkill =
  (userId: string) =>
  async ({ skill, points }: { skill: string | Types.ObjectId; points: number }) => {
    const { score } = await getUserSkill(userId, skill);
    const { maxScore } = await getCommonSkill(skill);

    const isSkillIncomplete = score < maxScore;

    const newPoints = calculatePoints(points, score);

    return isSkillIncomplete && updateUserSkill(userId, newPoints, skill);
  };
