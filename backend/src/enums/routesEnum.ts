enum Routes {
  namespace = '/api',
  account = '/account',
  users = '/users',
}

enum SubRoutes {
  login = '/login',
  refresh = '/refresh',
  profile = '/profile',
}

enum Params {
  id = '/:id',
}

export { Routes, SubRoutes, Params };
