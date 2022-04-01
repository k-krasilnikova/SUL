import { ObjectId } from 'mongoose';

import { getCommonSkill, getUserSkill, updateUserSkill } from 'db/providers/skillProvider';

const calculatePoints = (courseComplexity: number, userScore: number) =>
  courseComplexity > userScore && courseComplexity - userScore;

export const addPointToUserSkill =
  (complexity: number, userId: string) => async (commonSkillId: string | ObjectId) => {
    const { score } = await getUserSkill(userId, commonSkillId);
    const { maxScore } = await getCommonSkill(commonSkillId);
    const points = calculatePoints(complexity, score);
    return points && score < maxScore && updateUserSkill(userId, points, commonSkillId);
  };
