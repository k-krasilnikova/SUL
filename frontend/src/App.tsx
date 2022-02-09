import React, { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS } from 'constants/routes';
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
  TestResult,
} from 'pages';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import AnonymousRoute from 'components/AnonymousRoute/AnonymousRoute';
import Loader from 'components/Loader';
import { queryClient } from 'api/base';

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loader color="primary" />}>
      <BrowserRouter basename={PATHS.home}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path={PATHS.profile} element={<Profile />} />
            <Route path={PATHS.myCourses}>
              <Route index element={<MyCourses />} />
              <Route path=":courseId" element={<LearningCourse />} />
              <Route path=":courseId/test" element={<PassingTest />} />
              <Route path=":courseId/test/result" element={<TestResult />} />
            </Route>
            <Route path={PATHS.coursesList}>
              <Route index element={<CoursesList />} />
              <Route path=":courseId" element={<DetailedCourse />} />
            </Route>
            <Route path={PATHS.help} element={<Help />} />
            <Route path={PATHS.employees} element={<Employees />} />
            <Route path={PATHS.requests} element={<Requests />} />
            <Route path={PATHS.skills} element={<Skills />} />
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
