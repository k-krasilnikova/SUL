import Cookies from 'js-cookie';

export const getAuthResponseData = (cookieName: string): string | undefined => {
  const backendData: string | undefined = Cookies.get(cookieName);
  if (backendData) return JSON.parse(backendData);
};
