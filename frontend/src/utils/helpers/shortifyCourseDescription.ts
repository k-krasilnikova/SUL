import { WINDOW_SIZE } from 'constants/windowWidth';
import { PAGES } from 'constants/pages';

export const shortifyCourseDescription = (
  str: string,
  windowWidth?: string,
  pageName?: string,
): string => {
  let maxLength = 420;
  if (windowWidth === WINDOW_SIZE.lg.name && pageName === PAGES.detailed) {
    maxLength = 180;
  }
  if (windowWidth === WINDOW_SIZE.md.name && pageName === PAGES.detailed) {
    maxLength = 120;
  }
  if (windowWidth === WINDOW_SIZE.sm.name && pageName === PAGES.detailed) {
    maxLength = 100;
  }
  if (
    windowWidth === WINDOW_SIZE.lg.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 190;
  }
  if (
    windowWidth === WINDOW_SIZE.md.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 320;
  }
  if (
    windowWidth === WINDOW_SIZE.sm.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 60;
  }
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};
