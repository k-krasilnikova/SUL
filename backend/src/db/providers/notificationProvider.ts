import { ObjectId } from 'mongoose';

import NotificationModel from 'db/models/Notification';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
  NotificationType,
} from 'enums/notificationEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

export const getUserNotifications = async (userId: string) => {
  const dbNotifications = await NotificationModel.find({ userId })
    .sort({ _id: -1 })
    .limit(10)
    .lean();

  return dbNotifications || [];
};

export const addUserNotification = async (
  userId: ObjectId | string,
  courseName: string,
  userName: string,
  status: NotificationStatuses,
  title: NotificationTitles,
  description: NotificationDescription,
  type: NotificationType,
) => {
  if (userId) {
    await NotificationModel.create({
      userId,
      userName,
      courseName,
      status,
      title,
      description,
      type,
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
