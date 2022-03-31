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
}

enum SubRoutes {
  login = '/login',
  logout = '/logout',
  refresh = '/refresh',
  profile = '/profile',
  materials = '/materials',
  start = '/start',
  finish = '/finish',
  test = '/test',
  result = '/result',
  approveCourse = '/approveCourse',
  declineCourse = '/declineCourse',
  assessment = '/assessment',
}

enum Params {
  noParams = '',
  id = '/:id',
}

export { Routes, SubRoutes, Params };
