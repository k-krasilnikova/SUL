const ENVIROMENTS = {
  qa: 'test',
  prod: 'production',
  local: 'local',
};

const DEFAULT_ACCESS_TIMEOUT = '1d';
const DEFAULT_REFRESH_TIMEOUT = '7d';
const DEFAULT_CONNECTION_STRING = 'CONN_STRING_NOT_SET';
const DEFAULT_NO_SECRET = 'undefined';

const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
};

const TIME_30D_SEC = 2592000000;

const SALT_ROUNDS = 10;

const DEFAULT_N_PER_PAGE = 10;
const FIRST_PAGE = 1;
const NOTHING = 0;
const INITIAL_INDX = 0;
const NO_FILTER = {};
const DEFAULT_ORDER_FIELD = '_id';
const ORDER_TYPE = {
  asc: 1,
  desc: -1,
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
  ORDER_TYPE,
  NO_FILTER,
  INITIAL_INDX,
};
