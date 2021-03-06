enum Routes {
  namespace = '/api',
  account = '/account',
  users = '/users',
  courses = '/courses',
  clientCourses = '/clientCourses',
  materials = '/materials',
  pendingCourses = '/pendingCourses',
  tests = '/tests',
  employees = '/employees',
  skills = '/skills',
}

enum SubRoutes {
  login = '/login',
  logout = '/logout',
  refresh = '/refresh',
  getTestTime = '/:id/test/time',
  passTest = '/:id/test/pass',
  getTestResult = '/:id/test/result',
  startTest = '/:id/test/start',
  getCourseTest = '/:id/test',
  getTest = '/:id',
  startCourse = '/:id/start',
  updateCourse = '/:id/edit',
  createCourse = '/create',
  getClientCourse = '/:id',
  getClientCourses = '',
  passCourseStage = '/:id',
  getAssessments = '/assessments',
  manageCourseAssessment = '/:id/assessment',
  getCourseMaterials = '/:id/materials',
  getCourse = '/:id',
  getEditCoursePayload = '/:id/edit/payload',
  getCoursesMap = '/map',
  deleteCourse = '/:id',
  getCourses = '',
  applyCourse = '',
  assignEmployeeCourse = '',
  assignEmployeeCourses = '/:id',
  getEmployeeInfo = '/:id',
  getEmployees = '',
  getPendingCourses = '',
  getEmployeeAvailableCourses = '/:id/courses/available',
  approvePendingCourse = '/approveCourse',
  declinePendingCourse = '/declineCourse',
  getUserInfo = '/:id',
  getAllSkills = '',
  readNotifications = '/notifications',
}

export { Routes, SubRoutes };
