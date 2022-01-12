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
};

export const API: {
  getProfile: string;
  getToken: string;
  getMyCourses: string;
  logOut: string;
} = {
  getProfile: '/api/users',
  getToken: '/api/account/login',
  getMyCourses: '/api/clientCourses',
  logOut: '/api/logOut',
};
