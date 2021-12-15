import React from 'react';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className='header'>
      <NavLink to="/" className='brand-logo'>
        <span>Skill Up Level</span>
      </NavLink>
    </div>
  );
}

export default Header