import { FC } from 'react';
import { ClickAwayListener } from '@mui/material';

import { NO_NOTIFICATIONS } from 'constants/messages';
import { alertIcon } from 'icons';

import { INotificationsProps } from './types';

import { NotificationsButton, Notifications, TextWrapper, RedMark } from './styled';
import NotificationPlate from './NotificationPlate';

const NotificationsBar: FC<INotificationsProps> = ({
  notifications,
  isNotificationsOpen,
  isContainsUnread,
  handleNotificationsOpen,
  handleNotificationsClose,
}) => (
  <>
    <NotificationsButton onClick={handleNotificationsOpen}>
      <img alt="notifications" src={alertIcon} />
      {isNotificationsOpen && (
        <ClickAwayListener onClickAway={handleNotificationsClose}>
          <Notifications>
            {notifications?.length ? (
              notifications.map((note) => <NotificationPlate note={note} key={`${note._id}`} />)
            ) : (
              <TextWrapper>{NO_NOTIFICATIONS}</TextWrapper>
            )}
          </Notifications>
        </ClickAwayListener>
      )}
      {isContainsUnread && <RedMark />}
    </NotificationsButton>
  </>
);

export default NotificationsBar;
