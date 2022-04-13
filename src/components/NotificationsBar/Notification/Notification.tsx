import React from 'react';

import { NOTIFICATION_STATUSES } from 'constants/statuses';
import { warningIcon, redWarningIcon } from 'icons';
import { Notification } from 'types/notification';

import { NotificationContainer, ImageWrapper, Title, Description } from './styled';

interface NotificationProps {
  note: Notification;
}

const NotificationPlate: React.FC<NotificationProps> = ({ note }) => {
  const isOldNotification = note.status === NOTIFICATION_STATUSES.old;

  return (
    <NotificationContainer isOld={isOldNotification}>
      <ImageWrapper>
        <img alt="notification" src={isOldNotification ? warningIcon : redWarningIcon} />
      </ImageWrapper>
      <div>
        <Title>{note.title}</Title>
        <Description>{note.description}</Description>
      </div>
    </NotificationContainer>
  );
};

export default NotificationPlate;
