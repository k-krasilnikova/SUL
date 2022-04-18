export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
