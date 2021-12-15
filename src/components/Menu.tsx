import React from 'react';
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HelpIcon from '@mui/icons-material/Help';

const Menu: React.FC = () => {
  return (
    <div className='menu-tabs'>
      <NavLink to="/profile" className='menu-tab'>
        <AccountCircleIcon fontSize="large" color="inherit"/><span className="menu-tab-name">Profile</span>
      </NavLink>
      <NavLink to="/possible-courses" className='menu-tab'>
        <ArticleIcon fontSize="large" color="inherit"/><span className="menu-tab-name">Possible courses</span>
      </NavLink>
      <NavLink to="/my-courses" className='menu-tab'>
        <FolderSpecialIcon fontSize="large" color="inherit"/><span className="menu-tab-name">My courses</span>
      </NavLink>
      <NavLink to="/help" className='menu-tab'>
        <HelpIcon fontSize="large" color="inherit"/><span className="menu-tab-name">Help</span>
      </NavLink>
    </div>
  );
}

export default Menu