import { NextFunction, Request, Response } from 'express';

import { readNotificationProvider } from 'db/providers/notificationProvider';

const readNotifications = async (
  req: Request,
  res: Response<string, { id: string }>,
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
