import React from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import { Profile, MyCourses, CoursesList, Help, Employees, Requests, Skills, SignIn } from 'pages';
import { queryClient } from 'api/base';
import theme from './themeSettings';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={PATHS.home}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path={PATHS.profile} element={<Profile />} />
            <Route path={PATHS.myCourses} element={<MyCourses />} />
            <Route path={PATHS.coursesList} element={<CoursesList />} />
            <Route path={PATHS.help} element={<Help />} />
            <Route path={PATHS.employees} element={<Employees />} />
            <Route path={PATHS.requests} element={<Requests />} />
            <Route path={PATHS.skills} element={<Skills />} />
          </Route>
          <Route path={PATHS.signIn} element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
