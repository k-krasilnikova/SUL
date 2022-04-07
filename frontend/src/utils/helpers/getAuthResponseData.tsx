import Cookies from 'js-cookie';
import { COOKIE_VALUES } from 'constants/authConstants';

export enum TokenTypes {
  refreshToken = 'refreshToken',
  accessToken = 'accessToken',
}

export const getAuthResponseData = (
  tokenType: TokenTypes.accessToken | TokenTypes.refreshToken,
): string | undefined => {
  if (tokenType === TokenTypes.accessToken) {
    const backendData: string | undefined = Cookies.get(COOKIE_VALUES?.uniqAccessToken);
    if (backendData) {
      return JSON.parse(backendData);
    }
    return undefined;
  }
  if (tokenType === TokenTypes.refreshToken) {
    const backendData: string | undefined = Cookies.get(COOKIE_VALUES?.uniqRefreshToken);
    if (backendData) {
      return JSON.parse(backendData);
    }
    return undefined;
  }
};
