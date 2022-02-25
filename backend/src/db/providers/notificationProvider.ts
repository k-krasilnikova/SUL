import NotificationModel from 'db/models/Notification';

export const getUserNotifications = async (userId: string) => {
  const dbNotifications = await NotificationModel.find({ userId }).lean();

  return dbNotifications || [];
};
