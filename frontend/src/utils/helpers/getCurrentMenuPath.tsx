import Cookies from 'js-cookie';
import { MENU_VALUES } from 'constants/menuPaths';

export const getCurrentMenuPath = (): string | undefined => {
  return Cookies.get(MENU_VALUES?.menuPath);
};
