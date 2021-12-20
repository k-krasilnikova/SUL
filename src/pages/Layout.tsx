import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PATHS from '../constants/routes';
import Header from '../components/layout/Header';
import Menu from '../components/layout/Menu';

const Layout: React.FC = () => (
  <BrowserRouter basename={PATHS.home}>
    <Header />
    <Menu />
    <Routes>
      <Route path={PATHS.profile}></Route>
      <Route path={PATHS.myCourses}></Route>
      <Route path={PATHS.allCourses}></Route>
      <Route path={PATHS.help}></Route>
    </Routes>
  </BrowserRouter>
);

export default Layout;
