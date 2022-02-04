import Cookies from 'js-cookie';

import { MENU_VALUES } from 'constants/menuPaths';

export const setMenuToggle = (): boolean | undefined => {
  const menuStatus: string | undefined = Cookies.get(MENU_VALUES.menuStatus);
  const isMenuOpen = true;
  if (!menuStatus || menuStatus === 'true') {
    Cookies.set(MENU_VALUES.menuStatus, 'false');
    return !isMenuOpen;
  }
  Cookies.set(MENU_VALUES.menuStatus, 'true');
  return isMenuOpen;
};
