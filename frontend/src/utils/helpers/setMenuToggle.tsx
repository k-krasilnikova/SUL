import Cookies from 'js-cookie';
import { MENU_VALUES } from 'constants/menuPaths';

export const setMenuToggle = (): boolean | undefined => {
  const menuStatus: string | undefined = Cookies.get(MENU_VALUES.menuStatus);
  if (menuStatus === undefined) {
    Cookies.set(MENU_VALUES.menuStatus, 'false');
    return false;
  }
  if (menuStatus === 'true') {
    Cookies.set(MENU_VALUES.menuStatus, 'false');
    return false;
  }
  Cookies.set(MENU_VALUES.menuStatus, 'true');
  return true;
};
