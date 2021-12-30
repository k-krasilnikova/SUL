interface requestErrors {
  readonly [key: string]: string;
}
interface cookiesTypes {
  readonly [key: string]: string;
}

const REQUESTERRORS: requestErrors = {
  getError: 'Smth went wrong - 404',
  postError: 'Smth went wrong - 500',
};

const COOKIESVALUES: cookiesTypes = {
  uniqAccessToken: 'accessToken',
  uniqRefreshToken: 'refreshToken',
  uniqUserId: 'userId',
};

const TOKEN_FETCH_URL = 'http://localhost:3001/api/account/login';
const REACT_APP_BACKEND_URL = 'http://localhost:3001';

const { getError, postError } = REQUESTERRORS;
const { uniqAccessToken, uniqRefreshToken, uniqUserId } = COOKIESVALUES;
export {
  getError,
  postError,
  uniqAccessToken,
  uniqRefreshToken,
  uniqUserId,
  TOKEN_FETCH_URL,
  REACT_APP_BACKEND_URL,
};
