const ENVIROMENTS = {
  qa: 'test',
  prod: 'production',
  local: 'local',
};

const DEFAULT_ACCESS_TIMEOUT = '1d';
const DEFAULT_REFRESH_TIMEOUT = '7d';
const DEFAULT_CONNECTION_STRING = 'CONN_STRING_NOT_SET';

const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
};

const SALT_ROUNDS = 10;

export {
  DEFAULT_CONNECTION_STRING,
  DEFAULT_ACCESS_TIMEOUT,
  DEFAULT_REFRESH_TIMEOUT,
  USER_ROLES,
  SALT_ROUNDS,
  ENVIROMENTS,
};
