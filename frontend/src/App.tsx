import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { queryClient } from 'api/base';
import { PATHS } from 'constants/routes';
import { PAGES } from 'constants/pages';
import { Role } from 'constants/menuRoles';
import { AnonymousRoute, AuthRoute, RoleRoute } from 'components/Routes';
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
  CourseEditor,
  CourseCreator,
} from 'pages';

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={PATHS.home}>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route index element={<Navigate replace to="/profile" />} />
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
          <Route element={<RoleRoute roles={[Role.manager]} />}>
            <Route path={PATHS.employees} element={<Employees />} />
            <Route path={PATHS.employeeProfile} element={<EmployeeProfile />} />
            <Route path={PATHS.requests} element={<Requests />} />
            <Route path={PATHS.pendingAssessments} element={<PendingAssessments />} />
          </Route>
          <Route element={<RoleRoute roles={[Role.admin]} />}>
            <Route path={PATHS.skills} element={<Skills />} />
          </Route>
          <Route element={<RoleRoute roles={[Role.admin]} />}>
            <Route path={PATHS.courseEditor} element={<CourseEditor />} />
          </Route>
          <Route element={<RoleRoute roles={[Role.admin]} />}>
            <Route path={PATHS.courseCreator} element={<CourseCreator />} />
          </Route>
          <Route element={<RoleRoute roles={[Role.employee]} />}>
            <Route path={PATHS.skillsMap} element={<SkillsMap />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path={PATHS.signIn}
          element={
            <AnonymousRoute>
              <SignIn />
            </AnonymousRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
