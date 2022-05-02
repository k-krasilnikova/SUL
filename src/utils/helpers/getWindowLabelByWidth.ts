import { WINDOW_SIZE } from 'constants/windowWidth';

export const getWindowLabelByWidth = (): string => {
  const windowWidth = window.innerWidth;

  if (windowWidth > WINDOW_SIZE.xl.width && windowWidth <= WINDOW_SIZE.xxl.width) {
    return WINDOW_SIZE.xl.name;
  }
  if (windowWidth <= WINDOW_SIZE.xl.width && windowWidth > WINDOW_SIZE.lg.width) {
    return WINDOW_SIZE.lg.name;
  }
  if (windowWidth <= WINDOW_SIZE.lg.width && windowWidth > WINDOW_SIZE.xmd.width) {
    return WINDOW_SIZE.xmd.name;
  }
  if (windowWidth <= WINDOW_SIZE.xmd.width && windowWidth > WINDOW_SIZE.md.width) {
    return WINDOW_SIZE.md.name;
  }
  if (windowWidth <= WINDOW_SIZE.md.width && windowWidth > WINDOW_SIZE.sm.width) {
    return WINDOW_SIZE.sm.name;
  }
  if (windowWidth <= WINDOW_SIZE.sm.width) {
    return WINDOW_SIZE.xs.name;
  }
  return WINDOW_SIZE.xxl.name;
};
