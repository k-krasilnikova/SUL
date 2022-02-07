export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface IMenuProps {
  menuList: MenuItemProps[];
  isSqueeze?: boolean;
  handleSqueeze?: () => void;
  classes: {
    [key: string]: string | undefined;
  };
  children?: React.ReactNode;
  menuItem?: string;
  pathname?: string;
  isTabHeader?: null;
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
