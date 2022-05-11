import { TUserInfo } from 'types/user';
import { INotification } from 'types/notification';
import { IMenuItemProps } from 'types/menu';

interface ILayoutProps {
  pageName: string;
}

export interface IDefaultLayoutProps extends ILayoutProps {}

export interface IAuthorizedLayoutContainerProps extends ILayoutProps {}

export interface IAuthorizedLayoutProps extends IAuthorizedLayoutContainerProps {
  isMobileMenuOpen: boolean;
  isSqueeze: boolean;
  toggleMobileMenu: () => void;
  toggleSqueeze: () => void;
  userInfo?: TUserInfo;
  notifications?: INotification[];
}

export interface IHeaderContainerProps
  extends Omit<IAuthorizedLayoutProps, 'isSqueeze' | 'toggleSqueeze' | 'pageName'> {}

export interface IHeaderProps extends IHeaderContainerProps {
  handleConfirmOpen: () => void;
}

export interface IMenuContainerProps
  extends Pick<IAuthorizedLayoutProps, 'isSqueeze' | 'toggleSqueeze'> {}

enum MenuNavLinkClassNames {
  active = 'active',
  inactive = 'inactive',
  default = 'default',
}

type TMenuNavLinkClasses = {
  [key in MenuNavLinkClassNames]: string;
};

export interface IMenuProps extends IMenuContainerProps {
  menuItemsList: IMenuItemProps[];
  classes: TMenuNavLinkClasses;
}
