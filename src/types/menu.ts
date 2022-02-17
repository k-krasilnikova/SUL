export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface IMenuProps {
  classes: {
    [key: string]: string | undefined;
  };
  menuList: MenuItemProps[];
  isSqueeze?: boolean;
  handleSqueeze?: () => void;
  children?: React.ReactNode;
  menuItem?: string;
  pathname?: string;
  isTabHeader?: null;
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
