import { NextFunction } from 'express';

import {
  TReadNotificationsRequest,
  TReadNotificationsResponse,
} from 'interfaces/requests/notifications/readNotifications';
import { readNotificationProvider } from 'db/providers/notificationProvider';

const readNotifications = async (
  req: TReadNotificationsRequest,
  res: TReadNotificationsResponse,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    await readNotificationProvider(userId);

    res.json('Notifications statuses were changed.');
  } catch (error) {
    next(error);
  }
};

export default readNotifications;
