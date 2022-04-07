import Cookies from 'js-cookie';
import { COOKIE_VALUES } from 'constants/authConstants';

export const getAuthResponseData = (): string | undefined => {
  const backendData: string | undefined = Cookies.get(COOKIE_VALUES?.uniqAccessToken);
  if (backendData) {
    return JSON.parse(backendData);
  }
  return undefined;
};
