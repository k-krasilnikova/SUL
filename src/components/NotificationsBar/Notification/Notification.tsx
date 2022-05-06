import React from 'react';

import { NOTIFICATION_STATUSES, NOTIFICATION_TYPES } from 'constants/statuses';
import { warningIcon, redWarningIcon } from 'icons';
import { Notification } from 'types/notification';

import { NotificationContainer, ImageWrapper, Title, Description } from './styled';

interface NotificationProps {
  note: Notification;
}

const NotificationPlate: React.FC<NotificationProps> = ({ note }) => {
  const isOldNotification = note.status === NOTIFICATION_STATUSES.old;
  const isUserNotifications = note.type === NOTIFICATION_TYPES.user;

  return (
    <NotificationContainer isOld={isOldNotification}>
      <ImageWrapper>
        <img alt="notification" src={isOldNotification ? warningIcon : redWarningIcon} />
      </ImageWrapper>
      {isUserNotifications ? (
        <div>
          <Title>{`${note.courseName} is ${note.title}`}</Title>
          <Description>{note.description}</Description>
        </div>
      ) : (
        <div>
          <Title>{note.userName}</Title>
          <Description>{`${note.description} ${note.courseName}`}</Description>
        </div>
      )}
    </NotificationContainer>
  );
};

export default NotificationPlate;
