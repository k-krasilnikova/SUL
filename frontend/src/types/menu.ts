export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface IMenuProps {
  menuList: MenuItemProps[];
  children?: React.ReactNode;
  menuItem?: string;
  setCurrentMenuPath?: (e: string) => void;
  getCurrentMenuPath?: () => string | undefined;
  path?: string;
  classes: {
    [key: string]: string | undefined;
  };
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
