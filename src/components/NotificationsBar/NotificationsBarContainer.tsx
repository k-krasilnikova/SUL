import React, { useState } from 'react';

import { Notification as NotificationType } from 'types/notification';
import { NOTIFICATION_STATUSES } from 'constants/statuses';

import NotificationsBar from './NotificationsBar';
import useReadNotifications from '../../api/userInfo/setNotificationsStatus';

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

  const { mutateAsync: readNotificationsMutation } = useReadNotifications();

  const newNotification = notifications?.find(
    (notification) => notification.status === NOTIFICATION_STATUSES.new,
  );

  const handleNotificationsOpen = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    setNotificationsOpen(!isNotificationsOpen);
    if (newNotification) {
      readNotificationsMutation({});
    }
  };

  const handleNotificationsClose = () => {
    setNotificationsOpen(false);
  };

  return (
    <NotificationsBar
      notifications={notifications}
      isNotificationsOpen={isNotificationsOpen}
      handleNotificationsOpen={handleNotificationsOpen}
      handleNotificationsClose={handleNotificationsClose}
      isContainsUnread={!!newNotification}
    />
  );
};

export default NotificationsBarContainer;
