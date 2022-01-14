import Cookies from 'js-cookie';
import { COOKIE_VALUES } from 'constants/authConstants';

export const getUserIdCookie = (): string | undefined => {
  const backendData: string | undefined = Cookies.get(COOKIE_VALUES?.uniqUserId);
  if (backendData) {
    return JSON.parse(backendData);
  }
  return undefined;
};
