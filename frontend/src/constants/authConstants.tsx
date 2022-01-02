interface requestErrors {
  readonly [key: string]: string;
}
interface cookiesTypes {
  readonly [key: string]: string;
}

const REQUEST_ERRORS: requestErrors = {
  getError: 'Smth went wrong - 404',
  postError: 'Smth went wrong - 500',
};

const COOKIE_VALUES: cookiesTypes = {
  uniqAccessToken: 'accessToken',
  uniqUserId: 'userId',
};

export { REQUEST_ERRORS, COOKIE_VALUES };
