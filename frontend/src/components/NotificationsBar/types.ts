import { Notification } from 'types/notification';

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
  notifications?: Notification[];
}
