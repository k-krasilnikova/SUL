import { WINDOW_SIZE } from 'constants/windowWidth';

export const getWindowWidth = (): string => {
  let windowWidth = WINDOW_SIZE.xxl.name;
  if (window.innerWidth > WINDOW_SIZE.xl.width && window.innerWidth < WINDOW_SIZE.xxl.width) {
    windowWidth = WINDOW_SIZE.xl.name;
  }
  if (window.innerWidth < WINDOW_SIZE.xl.width && window.innerWidth > WINDOW_SIZE.lg.width) {
    windowWidth = WINDOW_SIZE.lg.name;
  }
  if (window.innerWidth < WINDOW_SIZE.lg.width && window.innerWidth > WINDOW_SIZE.xmd.width) {
    windowWidth = WINDOW_SIZE.xmd.name;
  }
  if (window.innerWidth < WINDOW_SIZE.xmd.width && window.innerWidth > WINDOW_SIZE.md.width) {
    windowWidth = WINDOW_SIZE.md.name;
  }
  if (window.innerWidth <= WINDOW_SIZE.md.width && window.innerWidth > WINDOW_SIZE.sm.width) {
    windowWidth = WINDOW_SIZE.sm.name;
  }
  return windowWidth;
};
