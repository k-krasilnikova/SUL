import { BadgeType } from 'enums/badgeType';
import { getUserProfileCache } from 'utils/cache';

export const getBadgeContentByType = (type?: BadgeType): number | undefined => {
  const userProfileCache = getUserProfileCache();

  const USER_FIELDS_BY_TYPE = {
    requests: 'pendingRequestsAmount',
    assessments: 'pendingAssessmentsAmount',
  } as const;

  return userProfileCache[USER_FIELDS_BY_TYPE[type as BadgeType]];
};
