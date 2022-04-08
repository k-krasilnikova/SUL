import React from 'react';
import { ClickAwayListener } from '@mui/material';

import { NO_NOTIFICATIONS } from 'constants/messages';
import { Notification } from 'types/notification';
import { alertIcon } from 'icons';

import NotificationPlate from './Notification';
import { NotificationsButton, Notifications, TextWrapper, RedMark } from './styled';

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
    <>
      <NotificationsButton onClick={handleNotificationsOpen}>
        <img alt="notifications" src={alertIcon} />
        {isNotificationsOpen && (
          <Notifications>
            {notifications?.length ? (
              notifications.map((note) => <NotificationPlate note={note} key={`${note._id}`} />)
            ) : (
              <TextWrapper>{NO_NOTIFICATIONS}</TextWrapper>
            )}
          </Notifications>
        )}
      </NotificationsButton>
      {isContainsUnread && <RedMark />}
    </>
  </ClickAwayListener>
);

export default NotificationsBar;
