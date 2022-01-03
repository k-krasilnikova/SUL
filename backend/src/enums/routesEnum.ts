enum Routes {
  namespace = '/api',
  account = '/account',
  users = '/users',
  courses = '/courses',
}

enum SubRoutes {
  login = '/login',
  refresh = '/refresh',
  profile = '/profile',
}

enum Params {
  noParams = '/',
  id = '/:id',
}

export { Routes, SubRoutes, Params };
