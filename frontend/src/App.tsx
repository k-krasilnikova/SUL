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
  PendingAssessments,
} from 'pages';
import { AnonymousRoute, PrivateRoute, RoleRoute } from 'components/Routes';
import Loader from 'components/Loader';
import { queryClient } from 'api/base';
import { PATHS } from 'constants/routes';
import { PAGES } from 'constants/pages';
import { Role } from 'constants/menuRoles';

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loader />}>
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
                <RoleRoute roles={[Role.manager]}>
                  <Employees />
                </RoleRoute>
              }
            />
            <Route
              path={PATHS.employeeProfile}
              element={
                <RoleRoute roles={[Role.manager]}>
                  <EmployeeProfile />
                </RoleRoute>
              }
            />
            <Route
              path={PATHS.requests}
              element={
                <RoleRoute roles={[Role.manager]}>
                  <Requests />
                </RoleRoute>
              }
            />
            <Route
              path={PATHS.skills}
              element={
                <RoleRoute roles={[Role.admin]}>
                  <Skills />
                </RoleRoute>
              }
            />
            <Route
              path={PATHS.skillsMap}
              element={
                <RoleRoute roles={[Role.employee]}>
                  <SkillsMap />
                </RoleRoute>
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
          <Route
            path={PATHS.pendingAssessments}
            element={
              <RoleRoute roles={[Role.manager]}>
                <PendingAssessments />
              </RoleRoute>
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
