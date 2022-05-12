import { INotification } from 'types/Notification';

export interface INotificationsProps {
  isNotificationsOpen: boolean;
  isContainsUnread: boolean;
  handleNotificationsOpen: () => void;
  handleNotificationsClose: () => void;
  notifications?: INotificationsBarContainerProps['notifications'];
}

export interface INotificationsBarContainerProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  notifications?: INotification[];
}

export interface INotificationPlateProps {
  note: INotification;
}
