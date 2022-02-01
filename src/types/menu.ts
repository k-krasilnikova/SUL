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
}

export interface IRolesMenu {
  [key: string]: Array<MenuItemProps>;
}
