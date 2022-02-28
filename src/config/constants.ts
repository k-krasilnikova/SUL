const ENVIROMENTS = {
  qa: 'test',
  prod: 'production',
  local: 'local',
};

const DEFAULT_ACCESS_TIMEOUT = '1d';
const DEFAULT_REFRESH_TIMEOUT = '7d';
const DEFAULT_CONNECTION_STRING = 'CONN_STRING_NOT_SET';
const DEFAULT_NO_SECRET = 'undefined';
const PASS_THRESHOLD = 0.7;

const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
};

const TIME_30D_SEC = 2592000000;

const SALT_ROUNDS = 10;
const TWO_DIGITS = 2;
const REQUIRED_PCT = 1;
const DEFAULT_N_PER_PAGE = 10;
const FIRST_PAGE = 1;
const NOTHING = 0;
const INITIAL_INDX = 0;
const NO_FILTER = {};
const DEFAULT_ORDER_FIELD = '_id';

const STATUS_CODES = {
  success: {
    OK: 200,
  },
  clientErrors: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
  },
  serverErrors: {
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
  },
};

export {
  DEFAULT_CONNECTION_STRING,
  DEFAULT_ACCESS_TIMEOUT,
  DEFAULT_REFRESH_TIMEOUT,
  DEFAULT_NO_SECRET,
  DEFAULT_ORDER_FIELD,
  USER_ROLES,
  SALT_ROUNDS,
  ENVIROMENTS,
  TIME_30D_SEC,
  DEFAULT_N_PER_PAGE,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
  INITIAL_INDX,
  REQUIRED_PCT,
  STATUS_CODES,
  PASS_THRESHOLD,
  TWO_DIGITS,
};