import { useState, FC } from 'react';

import { Notification as NotificationType } from 'types/notification';
import { NOTIFICATION_STATUSES } from 'constants/statuses';
import useReadNotifications from 'api/userInfo/setNotificationsStatus';

import NotificationsBar from './NotificationsBar';

interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  notifications?: NotificationType[];
}

const NotificationsBarContainer: FC<Props> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  notifications,
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
