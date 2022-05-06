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
    setNotificationsOpen(!isNotificationsOpen);
  };

  const handleNotificationsClose = () => {
    setNotificationsOpen(false);
    if (newNotification) {
      readNotificationsMutation({});
    }
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
