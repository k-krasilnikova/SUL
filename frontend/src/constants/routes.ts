export const PATHS: {
  home: string;
  profile: string;
  coursesList: string;
  myCourses: string;
  course: string;
  help: string;
  signIn: string;
  requests: string;
  employees: string;
  employee: string;
  skills: string;
  notFound: string;
  learnCourse: string;
  learnClientCourse: string;
  courseTest: string;
  skillsMap: string;
} = {
  home: '/',
  profile: '/profile',
  coursesList: '/courses-list',
  myCourses: '/my-courses',
  course: ':courseId',
  help: '/help',
  signIn: '/signin',
  requests: '/pending-requests',
  employees: '/employees',
  employee: ':employeeId',
  skills: '/skills',
  notFound: '/not-found',
  learnCourse: '/my-courses/learn',
  learnClientCourse: 'learn/:courseId',
  courseTest: 'learn/:courseId/test',
  skillsMap: '/skills-map',
};

export const API: {
  getProfile: string;
  getToken: string;
  getCourses: string;
  getCoursesRequests: string;
  getEmployeesList: string;
  approveRequest: string;
  declineRequest: string;
  getMyCourses: string;
  logOut: string;
} = {
  getProfile: '/api/users',
  getToken: '/api/account/login',
  getCourses: '/api/courses',
  getCoursesRequests: '/api/pendingCourses',
  getEmployeesList: '/api/employees',
  approveRequest: '/api/pendingCourses/approveCourse',
  declineRequest: '/api/pendingCourses/declineCourse',
  getMyCourses: '/api/clientCourses',
  logOut: '/api/account/logout',
};
