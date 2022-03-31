import { NextFunction, Request, Response } from 'express';

import { getFullUserInformationProvider } from 'db/providers/userProvider';
import { getUserNotifications } from 'db/providers/notificationProvider';
import { generateInitialDto } from 'utils/dto/dtoUtils';

const getProfileInformation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const profileInfo = await getFullUserInformationProvider(id);
    const notifications = await getUserNotifications(id);
    profileInfo.notifications = notifications;
    res.json(generateInitialDto(profileInfo));
  } catch (error) {
    next(error);
  }
};

export default getProfileInformation;
