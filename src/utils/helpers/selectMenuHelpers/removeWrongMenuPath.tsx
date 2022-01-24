import Cookies from 'js-cookie';
import { MENU_VALUES } from 'constants/menuPaths';

const removeWrongMenuPath = (): void => {
  Cookies.remove(MENU_VALUES.menuPath);
};

export default removeWrongMenuPath;
