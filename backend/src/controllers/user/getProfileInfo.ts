import { NextFunction, Request, Response } from 'express';

import { getEmployeesProvider, getFullUserInformationProvider } from 'db/providers/userProvider';
import { getUserNotifications } from 'db/providers/notificationProvider';
import { getPendingAssessmentsProvider } from 'db/providers/clientCourseProvider';
import { generateInitialDto } from 'utils/dto/dtoUtils';
import { TUserInfoResponse } from 'interfaces/IResponse/IResponse';
import { USER_ROLES } from 'config/constants';

const getProfileInformation = async (req: Request, res: Response, next: NextFunction) => {
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
    res.json(generateInitialDto(profileInfo));
  } catch (error) {
    next(error);
  }
};

export default getProfileInformation;
