import Cookies from 'js-cookie';
import { MENU_VALUES } from 'constants/menuPaths';

export const removeMenuStatus = (): void => {
  Cookies.remove(MENU_VALUES.menuStatus);
};
