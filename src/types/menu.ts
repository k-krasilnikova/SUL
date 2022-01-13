export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface MenuProps {
  menuList: MenuItemProps[];
  children?: React.ReactNode;
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
