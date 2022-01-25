import React, { useState } from 'react';

import { User } from 'types/user';
import { useLogOut } from 'api/logOut';

import Header from './Header';

const HeaderContainer: React.FC<User> = ({ firstName, lastName, avatar }) => {
  const [notificationsAnchor, setNotificationsAnchor] = useState<null | HTMLElement>(null);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);

  const handleNotificationsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchor(notificationsAnchor ? null : event.currentTarget);
    setNotificationsOpen(!isNotificationsOpen);
  };

  const handleFilterOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchor(filterAnchor ? null : event.currentTarget);
    setFilterOpen(!isFilterOpen);
  };

  const handleNotificationsClose = () => {
    setNotificationsOpen(!isNotificationsOpen);
    setNotificationsAnchor(null);
  };

  const handleFilterClose = () => {
    setFilterOpen(!isFilterOpen);
    setFilterAnchor(null);
  };

  const { mutateAsync } = useLogOut();
  const handleLogOut = (): void => {
    mutateAsync({
      login: 'user',
      password: 'user',
    });
  };

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
      handleNotificationsClose={handleNotificationsClose}
      handleFilterClose={handleFilterClose}
      handleLogOut={handleLogOut}
    />
  );
};
export default HeaderContainer;
