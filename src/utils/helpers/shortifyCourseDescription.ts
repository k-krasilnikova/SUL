import { WINDOW_SIZE } from 'constants/windowWidth';

export const shortifyCourseDescription = (
  str: string,
  windowWidth?: string,
  type?: string,
): string => {
  let maxLength = 420;
  if (windowWidth === WINDOW_SIZE.lg.name && type === 'similarCourses') {
    maxLength = 180;
  }
  if (windowWidth === WINDOW_SIZE.md.name && type === 'similarCourses') {
    maxLength = 120;
  }
  if (windowWidth === WINDOW_SIZE.sm.name && type === 'similarCourses') {
    maxLength = 100;
  }
  if (windowWidth === WINDOW_SIZE.lg.name && (type === 'myCourses' || type === 'coursesList')) {
    maxLength = 260;
  }
  if (windowWidth === WINDOW_SIZE.md.name && (type === 'myCourses' || type === 'coursesList')) {
    maxLength = 190;
  }
  if (windowWidth === WINDOW_SIZE.sm.name && (type === 'myCourses' || type === 'coursesList')) {
    maxLength = 60;
  }
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
};
