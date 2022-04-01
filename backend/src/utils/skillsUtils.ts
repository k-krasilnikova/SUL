import { ObjectId } from 'mongoose';

import { getCommonSkill, getUserSkill, updateUserSkill } from 'db/providers/skillProvider';
import { NOTHING } from 'config/constants';

const calculatePoints = (courseComplexity: number, userScore: number) => {
  const isAdditionalScore = courseComplexity > userScore;
  return isAdditionalScore ? courseComplexity - userScore : NOTHING;
};

export const addPointToUserSkill =
  (complexity: number, userId: string) => async (commonSkillId: string | ObjectId) => {
    const { score } = await getUserSkill(userId, commonSkillId);
    const { maxScore } = await getCommonSkill(commonSkillId);
    const isSkillIncomplete = score < maxScore;
    const points = calculatePoints(complexity, score);
    return isSkillIncomplete && updateUserSkill(userId, points, commonSkillId);
  };
