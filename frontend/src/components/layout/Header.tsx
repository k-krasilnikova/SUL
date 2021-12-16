import React from 'react';
import { NavLink } from "react-router-dom";

import PATHS from '../../constants/routes';
import {LayoutHeader, BrandLogo} from "./styled"

const Header: React.FC = () => (
  <LayoutHeader>
    <NavLink to={PATHS.home}>
      <BrandLogo>
        Skill Up Level
      </BrandLogo>
    </NavLink>
  </LayoutHeader>
)

export default Header