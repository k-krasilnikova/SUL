import { Types } from 'mongoose';

import NotificationModel from 'db/models/Notification';
import {
  NotificationDescription,
  NotificationStatuses,
  NotificationTitles,
  NotificationType,
} from 'enums/notificationEnums';
import { SortOrder } from 'enums/common';
import { DEFAULT_ORDER_FIELD, NOTIFICATIONS_COUNT } from 'config/constants';
import { BadRequestError } from 'classes/errors/clientErrors';
import { INotification } from 'interfaces/Ientities/Iusers';

export const getUserNotifications = async (userId: string): Promise<INotification[]> => {
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
): Promise<void> => {
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

export const readNotificationProvider = async (userId: string): Promise<void> => {
  if (userId) {
    await NotificationModel.updateMany({ userId }, { status: NotificationStatuses.old });
  } else {
    throw new BadRequestError('Invalid data for notification.');
  }
};
