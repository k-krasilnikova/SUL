enum Routes {
  namespace = '/api',
  account = '/account',
  users = '/users',
  courses = '/courses',
  clientCourses = '/clientCourses',
  materials = '/materials',
  pendingCourses = '/pendingCourses',
  test = '/test',
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
  startCourse = '/:id/start',
  updateCourse = '/:id/edit',
  getClientCourse = '/:id',
  getClientCourses = '',
  passCourseStage = '/:id',
  manageCourseAssessment = '/:id/assessment',
  getCourseMaterials = '/:id/materials',
  getCourse = '/:id',
  getCourses = '',
  applyCourse = '',
  assignEmployeeCourse = '',
  assignEmployeeCourses = '/:id',
  getEmployeeInfo = '/:id',
  getEmployees = '',
  getPendingCourses = '',
  approvePendingCourse = '/approveCourse',
  declinePendingCourse = '/declineCourse',
  getUserInfo = '/:id',
  getAllSkills = '',
}

export { Routes, SubRoutes };
