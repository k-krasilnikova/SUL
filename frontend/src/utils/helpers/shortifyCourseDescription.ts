import { WINDOW_SIZE } from 'constants/windowWidth';
import { PAGES } from 'constants/pages';

export const shortifyCourseDescription = (
  str: string,
  windowWidth?: string,
  pageName?: string,
): string => {
  let maxLength = 220;
  if (windowWidth === WINDOW_SIZE.xl.name && pageName === PAGES.detailed) {
    maxLength = 200;
  }
  if (windowWidth === WINDOW_SIZE.lg.name && pageName === PAGES.detailed) {
    maxLength = 180;
  }
  if (windowWidth === WINDOW_SIZE.xmd.name && pageName === PAGES.detailed) {
    maxLength = 140;
  }
  if (windowWidth === WINDOW_SIZE.md.name && pageName === PAGES.detailed) {
    maxLength = 120;
  }
  if (windowWidth === WINDOW_SIZE.sm.name && pageName === PAGES.detailed) {
    maxLength = 75;
  }
  if (
    windowWidth === WINDOW_SIZE.xl.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 120;
  }
  if (
    windowWidth === WINDOW_SIZE.lg.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 95;
  }
  if (
    windowWidth === WINDOW_SIZE.xmd.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 110;
  }
  if (
    windowWidth === WINDOW_SIZE.md.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 60;
  }
  if (
    windowWidth === WINDOW_SIZE.sm.name &&
    (pageName === PAGES.myCourses || pageName === PAGES.coursesList)
  ) {
    maxLength = 80;
  }
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};
