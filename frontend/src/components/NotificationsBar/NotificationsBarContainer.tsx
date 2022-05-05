import { useState, FC } from 'react';

import { useReadNotifications } from 'api/userInfo';
import { NOTIFICATION_STATUSES } from 'constants/statuses';

import { INotificationsBarContainerProps } from './types';
import NotificationsBar from './NotificationsBar';

const NotificationsBarContainer: FC<INotificationsBarContainerProps> = ({
  notifications,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);

  const { mutate: readNotificationsMutation } = useReadNotifications();

  const newNotification = notifications?.find(
    (notification) => notification.status === NOTIFICATION_STATUSES.new,
  );

  const handleNotificationsOpen = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
    if (newNotification) {
      readNotificationsMutation({});
    }
    setNotificationsOpen(true);
  };

  const handleNotificationsClose = () => {
    setNotificationsOpen(false);
  };

  return (
    <NotificationsBar
      notifications={notifications}
      isContainsUnread={Boolean(newNotification)}
      isNotificationsOpen={isNotificationsOpen}
      handleNotificationsOpen={handleNotificationsOpen}
      handleNotificationsClose={handleNotificationsClose}
    />
  );
};

export default NotificationsBarContainer;
