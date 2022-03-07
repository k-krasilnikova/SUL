import React from 'react';
import { ClickAwayListener } from '@mui/material';

import { Notification } from 'types/notification';
import { alertIcon } from 'icons';

import NotificationPlate from './Notification';
import { NotificationsButton, Notifications, TextWrapper } from './styled';

interface NotificationsProps {
  isNotificationsOpen: boolean;
  handleNotificationsOpen: () => void;
  handleNotificationsClose: () => void;
  isContainsUnread: boolean;
  notifications?: Notification[];
}

const NotificationsBar: React.FC<NotificationsProps> = ({
  notifications,
  isNotificationsOpen,
  handleNotificationsOpen,
  handleNotificationsClose,
  isContainsUnread,
}) => (
  <ClickAwayListener onClickAway={handleNotificationsClose}>
    <NotificationsButton onClick={handleNotificationsOpen} isContainsUnread={isContainsUnread}>
      <img alt="notifications" src={alertIcon} />
      {isNotificationsOpen && (
        <Notifications>
          {notifications?.length ? (
            notifications.map((note) => <NotificationPlate note={note} key={`${note._id}`} />)
          ) : (
            <TextWrapper>No notifications yet</TextWrapper>
          )}
        </Notifications>
      )}
    </NotificationsButton>
  </ClickAwayListener>
);

export default NotificationsBar;
