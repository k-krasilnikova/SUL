import { ObjectId } from 'mongoose';

import NotificationModel from 'db/models/Notification';
import { NotificationStatuses, NotificationTitles } from 'enums/notificationEnums';
import BadRequestError from '../../classes/errors/clientErrors/BadRequestError';

export const getUserNotifications = async (userId: string) => {
  const dbNotifications = await NotificationModel.find({ userId }).lean();

  return dbNotifications || [];
};

export const addUserNotification = async (
  userId: ObjectId,
  status: NotificationStatuses,
  title: NotificationTitles,
) => {
  if (userId) {
    await NotificationModel.create({
      userId,
      status,
      title,
      description: `Request for course was ${title}`,
    });
  } else {
    throw new BadRequestError('Invalid data for notification.');
  }
};
