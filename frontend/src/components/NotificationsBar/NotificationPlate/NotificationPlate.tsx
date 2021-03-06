import { FC } from 'react';

import { NOTIFICATION_STATUSES, NOTIFICATION_TYPES } from 'constants/statuses';
import { warningIcon, redWarningIcon } from 'icons';

import { NotificationContainer, ImageWrapper, Title, Description } from './styled';
import { INotificationPlateProps } from '../types';

const NotificationPlate: FC<INotificationPlateProps> = ({ note }) => {
  const isOldNotification = note.status === NOTIFICATION_STATUSES.old;
  const isUserNotifications = note.type === NOTIFICATION_TYPES.employee;

  const { courseName, title, description, userName } = note;

  const notificationTitle = isUserNotifications ? `${courseName} is ${title}` : userName;
  const notificationDescription = isUserNotifications
    ? description
    : `${description} ${courseName}`;

  return (
    <NotificationContainer isOld={isOldNotification}>
      <ImageWrapper>
        <img alt="notification" src={isOldNotification ? warningIcon : redWarningIcon} />
      </ImageWrapper>
      <div>
        <Title>{notificationTitle}</Title>
        <Description>{notificationDescription}</Description>
      </div>
    </NotificationContainer>
  );
};

export default NotificationPlate;
