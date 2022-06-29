import { BaseSyntheticEvent, ReactNode } from 'react';

import { TUserInfo } from 'types/user';
import { INotification } from 'types/notifications';
import { IMenuItemProps } from 'types/menu';

export interface IAuthorizedLayoutProps {
  isMobileMenuOpen: boolean;
  isSqueeze: boolean;
  handleConfirmLogOutOpen: () => void;
  toggleMobileMenu: () => void;
  toggleSqueeze: () => void;
  userInfo?: TUserInfo;
  notifications?: INotification[];
}

export type THeaderProps = Omit<IAuthorizedLayoutProps, 'isSqueeze' | 'toggleSqueeze' | 'pageName'>;

export interface IMenuContainerProps
  extends Partial<Pick<IAuthorizedLayoutProps, 'isSqueeze' | 'toggleSqueeze'>> {
  isMobileVersion?: boolean;
}

enum MenuNavLinkClassNames {
  active = 'active',
  inactive = 'inactive',
  default = 'default',
}

export type TMenuNavLinkClasses = {
  [key in MenuNavLinkClassNames]: string;
};

export interface IMenuProps extends IMenuContainerProps {
  menuItemsList: IMenuItemProps[];
  classes: TMenuNavLinkClasses;
}

export type TMenuMobileContainerProps = Pick<
  IAuthorizedLayoutProps,
  'userInfo' | 'isMobileMenuOpen' | 'toggleMobileMenu' | 'handleConfirmLogOutOpen'
>;

export interface IMenuMobileProps extends Omit<TMenuMobileContainerProps, 'isMobileMenuOpen'> {
  isShowMenu: boolean;
  handleSpaceHolderClick: (event: BaseSyntheticEvent) => void;
}

export type TPageWrapperContainerProps = Pick<IAuthorizedLayoutProps, 'isSqueeze'>;

export interface IPageWrapperProps extends TPageWrapperContainerProps {
  children: ReactNode;
}

export type TSearchCoursesContainer = Pick<
  IAuthorizedLayoutProps,
  'isMobileMenuOpen' | 'toggleMobileMenu'
>;

export interface IStyledProps {
  isMobileVersion?: boolean;
  isSqueeze?: boolean;
}
