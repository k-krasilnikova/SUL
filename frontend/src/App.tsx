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
  SkillsMap,
  EmployeeProfile,
} from 'pages';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import AnonymousRoute from 'components/AnonymousRoute/AnonymousRoute';
import Loader from 'components/Loader';
import { queryClient } from 'api/base';
import { LOADER } from 'constants/loaderTypes';

const PAGES = {
  myCourses: 'myCourses',
  coursesList: 'coursesList',
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loader color="primary" type={LOADER.page} />}>
      <BrowserRouter basename={PATHS.home}>
        <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path={PATHS.profile} element={<Profile />} />
          <Route path={PATHS.myCourses}>
            <Route index element={<MyCourses />} />
            <Route path=":courseId" element={<DetailedCourse page={PAGES.myCourses} />} />
            <Route path="learn/:courseId" element={<LearningCourse />} />
            <Route path="learn/:courseId/test" element={<PassingTest />} />
          </Route>
          <Route path={PATHS.coursesList}>
            <Route index element={<CoursesList />} />
            <Route path=":courseId" element={<DetailedCourse page={PAGES.coursesList} />} />
          </Route>
          <Route path={PATHS.help} element={<Help />} />
          <Route path={PATHS.employees}>
            <Route index element={<Employees />} />
            <Route path=":employeeId" element={<EmployeeProfile />} />
          </Route>
          <Route path={PATHS.requests} element={<Requests />} />
          <Route path={PATHS.skills} element={<Skills />} />
          <Route path={PATHS.skillsMap} element={<SkillsMap />} />
          {/* </Route> */}
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
