import React, { useEffect, useState } from 'react';

import { Notification as NotificationType } from 'types/notification';
import { NOTIFICATION_STATUSES } from 'constants/statuses';

import NotificationsBar from './NotificationsBar';

interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  notifications?: NotificationType[];
}

const NotificationsBarContainer: React.FC<Props> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  notifications,
}) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isContainsUnread, setUnread] = useState<boolean>(false);

  const handleNotificationsOpen = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    setNotificationsOpen(!isNotificationsOpen);
  };

  const handleNotificationsClose = () => {
    setNotificationsOpen(false);
  };

  useEffect(() => {
    if (notifications?.find((notification) => notification.status === NOTIFICATION_STATUSES.new)) {
      setUnread(true);
    }
  }, [notifications]);

  return (
    <NotificationsBar
      notifications={notifications}
      isNotificationsOpen={isNotificationsOpen}
      handleNotificationsOpen={handleNotificationsOpen}
      handleNotificationsClose={handleNotificationsClose}
      isContainsUnread={isContainsUnread}
    />
  );
};

export default NotificationsBarContainer;
