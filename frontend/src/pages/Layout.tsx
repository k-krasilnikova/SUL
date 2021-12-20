import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PATHS from '../constants/routes';
import HeaderAuthorized from "../components/Layout/HeaderAuthorized"
import Menu from "../components/Layout/Menu"

const Layout: React.FC = () => (
  <BrowserRouter basename={PATHS.home}>
    <HeaderAuthorized />
    <Menu /> 
    <Routes>
      <Route path={PATHS.profile}>
      </Route>
      <Route path={PATHS.myCourses}>
      </Route>
      <Route path={PATHS.allCourses}>
      </Route>
      <Route path={PATHS.help}>
      </Route>
    </Routes>
  </BrowserRouter> 
);

export default Layout;