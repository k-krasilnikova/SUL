import { FC } from 'react';
import { ClickAwayListener } from '@material-ui/core';

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
    <ClickAwayListener onClickAway={handleNotificationsClose}>
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
        {isContainsUnread && <RedMark />}
      </NotificationsButton>
    </ClickAwayListener>
  </>
);

export default NotificationsBar;
