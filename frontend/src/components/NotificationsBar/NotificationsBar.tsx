import React from 'react';

import { Notification } from 'types/notification';

import NotificationPlate from './Notification';
import { Notifications, TextWrapper } from './styled';

interface NotificationsProps {
  notifications?: Array<Notification>;
}

const NotificationsBar: React.FC<NotificationsProps> = ({ notifications }) => (
  <Notifications>
    {notifications?.length ? (
      notifications.map((note) => <NotificationPlate note={note} key={`${note._id}`} />)
    ) : (
      <TextWrapper>No notifications yet</TextWrapper>
    )}
  </Notifications>
);

export default NotificationsBar;
