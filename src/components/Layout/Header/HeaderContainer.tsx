import React, { useState } from 'react';

import ConfirmLogOut from 'components/Layout/Header/ConfirmLogOut/ConfirmLogOut';
import { User } from 'types/user';
import { useLogOut } from 'api/logOut/';

import Header from './Header';

const HeaderContainer: React.FC<User> = ({ firstName, lastName, avatar }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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
    setConfirmOpen(true);
  };

  const handleLogOut = (): void => {
    mutateAsync(EMPTY_ARGUMENT);
  };
  const cancelLogOut = (): void => {
    setConfirmOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
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
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <ConfirmLogOut
        handleLogOut={handleLogOut}
        isConfirmOpen={isConfirmOpen}
        cancelLogOut={cancelLogOut}
      />
    </>
  );
};
export default HeaderContainer;
