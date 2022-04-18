import { MenuItemProps } from 'types/menu';

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
