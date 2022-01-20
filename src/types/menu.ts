export interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

export interface MenuProps {
  menuList: MenuItemProps[];
  children?: React.ReactNode;
  toggleTab?: string;
  // toggleHandler: (e: any, path: any) => any;
  // toggleLoader: (path: any) => any;
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
