import React from 'react';
import { useState } from 'react';

import { User } from 'types/user';

import Header from './Header';

const HeaderContainer: React.FC<User> = ({ firstName, lastName, avatar }) => {
  const [anchorElNotifications, setAnchorElNotifications] = useState<null | HTMLElement>(null);
  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotifications(anchorElNotifications ? null : event.currentTarget);
  };
  const openNotifications = Boolean(anchorElNotifications);
  const [anchorElFilter, setAnchorElFilter] = useState<null | HTMLElement>(null);
  const handleFilterOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElFilter(anchorElFilter ? null : event.currentTarget);
  };
  const openFilter = Boolean(anchorElFilter);
  return (
    <Header
      firstName={firstName}
      lastName={lastName}
      avatar={avatar}
      openNotifications={openNotifications}
      openFilter={openFilter}
      anchorElNotifications={anchorElNotifications}
      anchorElFilter={anchorElFilter}
      handleNotificationsOpen={handleNotificationsOpen}
      handleFilterOpen={handleFilterOpen}
    />
  );
};
export default HeaderContainer;
