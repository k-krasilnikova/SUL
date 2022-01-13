enum Routes {
  namespace = '/api',
  account = '/account',
  users = '/users',
  courses = '/courses',
  clientCourses = '/clientCourses',
  materials = '/materials',
}

enum SubRoutes {
  login = '/login',
  refresh = '/refresh',
  profile = '/profile',
  materials = '/materials',
}

enum Params {
  noParams = '',
  id = '/:id',
}

export { Routes, SubRoutes, Params };
