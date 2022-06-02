import { Types } from 'mongoose';

import NotificationModel from 'db/models/Notification';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
  NotificationType,
} from 'enums/notification';
import { SortOrder } from 'enums/common';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { DEFAULT_ORDER_FIELD, NOTIFICATIONS_COUNT } from 'config/constants';

export const getUserNotifications = async (userId: string) => {
  const dbNotifications = await NotificationModel.find({ userId })
    .sort({ [DEFAULT_ORDER_FIELD]: SortOrder.desc })
    .limit(NOTIFICATIONS_COUNT)
    .lean();

  return dbNotifications || [];
};

export const addUserNotification = async (
  userId: Types.ObjectId | string,
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
