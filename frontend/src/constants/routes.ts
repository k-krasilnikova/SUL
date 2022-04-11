export const PATHS: {
  home: string;
  profile: string;
  coursesList: string;
  courseDetails: string;
  myCourses: string;
  myCourseDetails: string;
  course: string;
  help: string;
  signIn: string;
  requests: string;
  employees: string;
  employee: string;
  employeeProfile: string;
  skills: string;
  notFound: string;
  learnCourse: string;
  learnCourseTest: string;
  learnClientCourse: string;
  courseTest: string;
  skillsMap: string;
} = {
  home: '/',
  profile: '/profile',
  coursesList: '/courses-list',
  courseDetails: '/courses-list/:courseId',
  myCourses: '/my-courses',
  myCourseDetails: '/my-courses/:clientCourseId',
  course: ':courseId',
  help: '/help',
  signIn: '/signin',
  requests: '/pending-requests',
  employees: '/employees',
  employee: ':employeeId',
  employeeProfile: '/employees/:employeeId',
  skills: '/skills',
  notFound: '/not-found',
  learnCourse: '/my-courses/learn/:courseId',
  learnCourseTest: '/my-courses/learn/:courseId/test',
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
  employees: string;
  refresh: string;
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
  employees: '/api/employees',
  refresh: '/api/account/refresh',
};
