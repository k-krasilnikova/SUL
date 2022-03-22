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
  skillsMap: string;
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
  skillsMap: '/skills-map',
};

export const API: {
  getProfile: string;
  getToken: string;
  getCourses: string;
  getCoursesRequests: string;
  approveRequest: string;
  declineRequest: string;
  getMyCourses: string;
  logOut: string;
  getEmployees: string;
} = {
  getProfile: '/api/users',
  getToken: '/api/account/login',
  getCourses: '/api/courses',
  getCoursesRequests: '/api/pendingCourses',
  approveRequest: '/api/pendingCourses/approveCourse',
  declineRequest: '/api/pendingCourses/declineCourse',
  getMyCourses: '/api/clientCourses',
  logOut: '/api/account/logout',
  getEmployees: '/api/employees',
};
