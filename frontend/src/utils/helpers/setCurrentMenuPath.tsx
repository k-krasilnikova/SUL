import Cookies from 'js-cookie';
import { MENU_VALUES } from 'constants/menuPaths';

export const setCurrentMenuPath = (e: string): void => {
  Cookies.set(MENU_VALUES.menuPath, e);
};
