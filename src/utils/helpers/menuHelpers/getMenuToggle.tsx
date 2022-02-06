import Cookies from 'js-cookie';

import { MENU_VALUES } from 'constants/menuPaths';

export const getMenuToggle = (): boolean | undefined => {
  const menuStatus: string | undefined = Cookies.get(MENU_VALUES.menuStatus);
  if (menuStatus) {
    return JSON.parse(menuStatus);
  }
  return undefined;
};
