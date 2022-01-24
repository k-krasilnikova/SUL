export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface MenuProps {
  menuList: MenuItemProps[];
  children?: React.ReactNode;
  menuItem?: string;
  setCurrentMenuPath: (e: string) => void;
  getCurrentMenuPath?: () => string | undefined;
  path?: string;
  classes?: any;
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
