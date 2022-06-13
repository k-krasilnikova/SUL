const ENVIROMENTS = {
  qa: 'test',
  prod: 'production',
  local: 'local',
  dev: 'dev',
  backdev: 'backdev',
  devdebug: 'devdebug',
};

const WRONG_ID = '111111111111';
const JEST_TIMEOUT = 60000;
const DEFAULT_ACCESS_TIMEOUT = '1d';
const DEFAULT_REFRESH_TIMEOUT = '7d';
const DEFAULT_CONNECTION_STRING = 'CONN_STRING_NOT_SET';
const DEFAULT_EMAIL = 'default@mail.com';
const DEFAULT_TXT = 'default';
const DEFAULT_NO_SECRET = 'undefined';
const PASS_THRESHOLD = 0.7;
const DESTRUCTION_TIMEOUT = '720h';

const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  EMPLOYEE: 'employee',
};

const TIME_1S_MS = 1000;
const TIME_30D_SEC = 2592000000;
const TIME_1M_SEC = 60;
const TIME_1H_SEC = 60 * TIME_1M_SEC;
const TIME_1D_SEC = 24 * TIME_1H_SEC;
const DISABLE_TEST_DAYS = 7;

const PERCENTS = 100;

const ESTIMATE_TIME_PER_LESSON = 1 * TIME_1D_SEC;

const SALT_ROUNDS = 10;
const TWO_DIGITS = 2;
const REQUIRED_PCT = 1;
const DEFAULT_N_PER_PAGE = 10;
const FIRST_PAGE = 1;
const NOTHING = 0;
const INITIAL_INDX = 0;
const NO_FILTER = {};
const DEFAULT_ORDER_FIELD = 'title';
const DEFAULT_ORDER_CLIENT_COURSES_FIELD = 'course.title';
const NOTIFICATIONS_COUNT = 10;

const ASSESSMENT_RESULTS = {
  approved: 'approved',
  declined: 'declined',
};

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

const CLIENT_COURSE_FIELDS = {
  user: 'user',
  course: 'course',
  status: 'status',
  testResult: 'testResult',
  progress: 'progress',
  date: 'date',
  applyDate: 'applyDate',
  startTestDate: 'startTestDate',
  finishTestDate: 'finishTestDate',
} as const;

const COURSE_FIELDS = {
  title: 'title',
  description: 'description',
  technologies: 'technologies',
  complexity: 'complexity',
  materials: 'materials',
  test: 'test',
  avatar: 'avatar',
} as const;

export {
  DEFAULT_CONNECTION_STRING,
  DEFAULT_ACCESS_TIMEOUT,
  DEFAULT_REFRESH_TIMEOUT,
  DEFAULT_NO_SECRET,
  DEFAULT_ORDER_FIELD,
  DEFAULT_EMAIL,
  DEFAULT_TXT,
  USER_ROLES,
  SALT_ROUNDS,
  ENVIROMENTS,
  TIME_1S_MS,
  TIME_30D_SEC,
  TIME_1M_SEC,
  TIME_1H_SEC,
  TIME_1D_SEC,
  ESTIMATE_TIME_PER_LESSON,
  DEFAULT_N_PER_PAGE,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
  INITIAL_INDX,
  REQUIRED_PCT,
  ASSESSMENT_RESULTS,
  STATUS_CODES,
  PASS_THRESHOLD,
  TWO_DIGITS,
  DESTRUCTION_TIMEOUT,
  DISABLE_TEST_DAYS,
  PERCENTS,
  CLIENT_COURSE_FIELDS,
  COURSE_FIELDS,
  WRONG_ID,
  JEST_TIMEOUT,
  NOTIFICATIONS_COUNT,
  DEFAULT_ORDER_CLIENT_COURSES_FIELD,
};
