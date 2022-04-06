import React, { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {
  Profile,
  MyCourses,
  LearningCourse,
  CoursesList,
  Help,
  Employees,
  Requests,
  Skills,
  SignIn,
  NotFound,
  DetailedCourse,
  PassingTest,
  SkillsMap,
  EmployeeProfile,
} from 'pages';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import AnonymousRoute from 'components/AnonymousRoute/AnonymousRoute';
import AuthRoute from 'components/AuthRoute/AuthRoute';
import Loader from 'components/Loader';
import { queryClient } from 'api/base';
import { LOADER } from 'constants/loaderTypes';
import { PATHS } from 'constants/routes';
import { PAGES } from 'constants/pages';
import { ROLE } from 'constants/menuRoles';

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loader color="primary" type={LOADER.page} />}>
      <BrowserRouter basename={PATHS.home}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Navigate replace to="/profile" />} />
            <Route path={PATHS.profile} element={<Profile />} />
            <Route path={PATHS.myCourses}>
              <Route index element={<MyCourses />} />
              <Route path={PATHS.course} element={<DetailedCourse page={PAGES.myCourses} />} />
              <Route path={PATHS.learnClientCourse} element={<LearningCourse />} />
              <Route path={PATHS.courseTest} element={<PassingTest />} />
            </Route>
            <Route path={PATHS.coursesList}>
              <Route index element={<CoursesList />} />
              <Route path={PATHS.course} element={<DetailedCourse page={PAGES.coursesList} />} />
            </Route>
            <Route path={PATHS.help} element={<Help />} />
            <Route
              path={PATHS.employees}
              element={
                <AuthRoute roles={[ROLE.manager]}>
                  <Route index element={<Employees />} />
                  <Route path={PATHS.employee} element={<EmployeeProfile />} />
                </AuthRoute>
              }
            />
            <Route
              path={PATHS.requests}
              element={
                <AuthRoute roles={[ROLE.manager]}>
                  <Requests />
                </AuthRoute>
              }
            />
            <Route
              path={PATHS.skills}
              element={
                <AuthRoute roles={[ROLE.admin]}>
                  <Skills />
                </AuthRoute>
              }
            />
            <Route
              path={PATHS.skillsMap}
              element={
                <AuthRoute roles={[ROLE.employee]}>
                  <SkillsMap />
                </AuthRoute>
              }
            />
          </Route>
          <Route
            path={PATHS.signIn}
            element={
              <AnonymousRoute>
                <SignIn />
              </AnonymousRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
