import { BaseSyntheticEvent } from 'react';

import { TUserInfo } from 'types/user';
import { INotification } from 'types/notification';
import { IMenuItemProps } from 'types/menu';

interface ILayoutProps {
  pageName: string;
}

export type TDefaultLayoutProps = ILayoutProps;

export type TAuthorizedLayoutContainerProps = ILayoutProps;

export interface IAuthorizedLayoutProps extends TAuthorizedLayoutContainerProps {
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

export interface IMenuMobileProps extends TMenuMobileContainerProps {
  isMobileWindowSize: boolean;
  handleSpaceHolderClick: (event: BaseSyntheticEvent) => void;
}

export interface IStyledProps {
  isMobileVersion?: boolean;
  isSqueeze?: boolean;
}
