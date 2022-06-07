import { Schema, model } from 'mongoose';

import { INotification } from 'interfaces/entities/users';

const schema = new Schema<INotification>({
  title: { type: String, required: true },
  courseName: { type: String },
  userName: { type: String },
  description: { type: String, required: true },
  status: { type: String, required: true, default: 'new' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, required: true },
});

const NotificationModel = model<INotification>('Notification', schema, 'notifications');

export default NotificationModel;
