import { NextFunction } from 'express';

import {
  TGetProfileInfoRequest,
  TGetProfileInfoResponse,
} from 'interfaces/requests/user/getProfileInfo';
import { TUserInfoResponse } from 'interfaces/response/response';
import { getEmployeesProvider, getFullUserInformationProvider } from 'db/providers/userProvider';
import { getUserNotifications } from 'db/providers/notificationProvider';
import { getPendingAssessmentsProvider } from 'db/providers/clientCourseProvider';
import { USER_ROLES } from 'config/constants';

const getProfileInformation = async (
  req: TGetProfileInfoRequest,
  res: TGetProfileInfoResponse,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const profileInfo: TUserInfoResponse = await getFullUserInformationProvider(id);
    const notifications = await getUserNotifications(id);
    profileInfo.notifications = notifications;
    if (profileInfo.role === USER_ROLES.MANAGER) {
      profileInfo.pendingRequestsAmount = profileInfo.pendingCourses.length;
      const employees = await getEmployeesProvider(id);
      const employeesIds = employees.map((employee) => String(employee._id));
      profileInfo.pendingAssessmentsAmount = (
        await getPendingAssessmentsProvider(employeesIds)
      ).length;
    }
    res.json(profileInfo);
  } catch (error) {
    next(error);
  }
};

export default getProfileInformation;
