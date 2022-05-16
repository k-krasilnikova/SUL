import { Types } from 'mongoose';

import NotificationModel from 'db/models/Notification';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
} from 'enums/notificationEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

export const getUserNotifications = async (userId: string) => {
  const dbNotifications = await NotificationModel.find({ userId }).lean();

  return dbNotifications || [];
};

export const addUserNotification = async (
  userId: Types.ObjectId,
  status: NotificationStatuses,
  title: NotificationTitles,
  description: NotificationDescription,
) => {
  if (userId) {
    await NotificationModel.create({
      userId,
      status,
      title,
      description,
    });
  } else {
    throw new BadRequestError('Invalid data for notification.');
  }
};

export const readNotificationProvider = async (userId: string) => {
  if (userId) {
    await NotificationModel.updateMany({ userId }, { status: NotificationStatuses.old });
  } else {
    throw new BadRequestError('Invalid data for notification.');
  }
};
