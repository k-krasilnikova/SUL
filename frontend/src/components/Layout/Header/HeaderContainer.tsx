import React, { useState } from 'react';

import { User } from 'types/user';
import { useLogOut } from 'api/logOut';

import Header from './Header';

const HeaderContainer: React.FC<User> = ({ firstName, lastName, avatar }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);

  const handleNotificationsOpen = () => {
    setNotificationsOpen(!isNotificationsOpen);
  };
  const handleFilterOpen = () => {
    setFilterOpen(!isFilterOpen);
  };
  const handleNotificationsClose = () => {
    setNotificationsOpen(false);
  };
  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const { mutateAsync } = useLogOut();
  const handleLogOut = (): void => {
    mutateAsync({
      login: 'user',
      password: 'user',
    });
  };

  return (
    <>
      <Header
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
        isNotificationsOpen={isNotificationsOpen}
        isFilterOpen={isFilterOpen}
        handleNotificationsOpen={handleNotificationsOpen}
        handleFilterOpen={handleFilterOpen}
        handleNotificationsClose={handleNotificationsClose}
        handleFilterClose={handleFilterClose}
        handleLogOut={handleLogOut}
      />
    </>
  );
};
export default HeaderContainer;
