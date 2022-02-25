import { Schema, model } from 'mongoose';

import { INotification } from 'interfaces/Ientities/Iusers';

const schema = new Schema<INotification>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true, default: 'new' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

const NotificationModel = model<INotification>('Notification', schema, 'notifications');

export default NotificationModel;
