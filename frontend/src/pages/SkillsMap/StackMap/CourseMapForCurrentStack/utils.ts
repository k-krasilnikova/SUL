import { EmployeeRank } from 'enums/employee';

export const getRankNameByRankId = (ranklId: EmployeeRank): string => {
  const rankNames = {
    [EmployeeRank.Junior]: 'Junior Rank',
    [EmployeeRank.Middle]: 'Middle Rank',
    [EmployeeRank.Senior]: 'Senior Rank',
  };

  return rankNames[ranklId];
};
