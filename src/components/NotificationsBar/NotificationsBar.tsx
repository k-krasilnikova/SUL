import { FC } from 'react';
import { ClickAwayListener } from '@mui/material';

import { NO_NOTIFICATIONS } from 'constants/messages';
import { alertIcon } from 'icons';

import { INotificationsProps } from './types';
import NotificationPlate from './Notification';
import { NotificationsButton, Notifications, TextWrapper, RedMark } from './styled';

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
    </NotificationsButton>
    {isContainsUnread && <RedMark />}
  </>
);

export default NotificationsBar;
