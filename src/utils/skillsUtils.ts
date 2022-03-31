import { getPopulatedUserSkill, updateUserSkill } from 'db/providers/skillProvider';
import { UserRank } from 'enums/users';
import { IUser } from 'interfaces/Ientities/Iusers';
import { ObjectId } from 'mongoose';

export const addPointToUserSkill =
  (points: number, userId: string) => async (skillId: string | ObjectId) => {
    const {
      skill: { maxScore },
      score,
    } = await getPopulatedUserSkill(skillId);
    return score < maxScore && updateUserSkill(userId, points, skillId);
  };

export const calculatePoints = (userRank: IUser['rank'], courseRank: UserRank) =>
  Number(userRank < courseRank);
