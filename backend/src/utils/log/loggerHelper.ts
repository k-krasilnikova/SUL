import { ENVIROMENTS } from 'config/constants';

const isLogsDisplayed = (): boolean =>
  process.env.NODE_ENV === ENVIROMENTS.qa ||
  process.env.NODE_ENV === ENVIROMENTS.prod ||
  process.env.NODE_ENV === ENVIROMENTS.devdebug;

export { isLogsDisplayed };
