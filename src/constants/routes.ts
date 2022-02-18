export const PATHS: {
  home: string;
  profile: string;
  coursesList: string;
  myCourses: string;
  help: string;
  signIn: string;
  requests: string;
  employees: string;
  skills: string;
  notFound: string;
  learnCourse: string;
} = {
  home: '/',
  profile: '/profile',
  coursesList: '/courses-list',
  myCourses: '/my-courses',
  help: '/help',
  signIn: '/signin',
  requests: '/pending-requests',
  employees: '/employees',
  skills: '/skills',
  notFound: '/not-found',
  learnCourse: '/my-courses/learn',
};

export const API: {
  getProfile: string;
  getToken: string;
  getCourses: string;
  getMyCourses: string;
  logOut: string;
} = {
  getProfile: '/api/users',
  getToken: '/api/account/login',
  getCourses: 'api/courses',
  getMyCourses: '/api/clientCourses',
  logOut: 'api/account/logout',
};
