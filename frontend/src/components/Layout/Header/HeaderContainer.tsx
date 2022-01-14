import React from 'react';
import { useState } from 'react';

import { User } from 'types/user';

import Header from './Header';

const HeaderContainer: React.FC<User> = ({ firstName, lastName, avatar }) => {
  const [notificationsAnchor, setNotificationsAnchor] = useState<null | HTMLElement>(null);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);

  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchor(notificationsAnchor ? null : event.currentTarget);
  };

  const handleFilterOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchor(filterAnchor ? null : event.currentTarget);
  };

  const isNotificationsOpen = Boolean(notificationsAnchor);
  const isFilterOpen = Boolean(filterAnchor);

  return (
    <Header
      firstName={firstName}
      lastName={lastName}
      avatar={avatar}
      isNotificationsOpen={isNotificationsOpen}
      isFilterOpen={isFilterOpen}
      notificationsAnchor={notificationsAnchor}
      filterAnchor={filterAnchor}
      handleNotificationsOpen={handleNotificationsOpen}
      handleFilterOpen={handleFilterOpen}
    />
  );
};
export default HeaderContainer;
