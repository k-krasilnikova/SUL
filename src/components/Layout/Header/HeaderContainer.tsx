import React, { useState } from 'react';

import Confirm from 'components/Confirm/Confirm';
import { User } from 'types/user';
import { useLogOut } from 'api/logOut/';

import Header from './Header';

const HeaderContainer: React.FC<User> = ({ firstName, lastName, avatar }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const EMPTY_ARGUMENT = null;
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
  const handleConfirm = (): void => {
    setShowConfirm(true);
  };

  const handleLogOut = (): void => {
    mutateAsync(EMPTY_ARGUMENT);
  };
  const cancelLogOut = (): void => {
    setShowConfirm(false);
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
        handleConfirm={handleConfirm}
      />
      <Confirm handleLogOut={handleLogOut} showConfirm={showConfirm} cancelLogOut={cancelLogOut} />
    </>
  );
};
export default HeaderContainer;
