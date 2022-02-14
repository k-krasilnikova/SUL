import React, { useState } from 'react';

import { ConfirmLogOutModalWindow } from 'components/Layout/Header/ConfirmLogOut';
import { User } from 'types/user';
import { useLogOut } from 'api/logOut/';

import Header from './Header';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  pageName?: string;
}

type Props = User & MobileMenuProps;

const HeaderContainer: React.FC<Props> = ({
  firstName,
  lastName,
  avatar,
  isMobileMenuOpen,
  toggleMobileMenu,
  pageName,
}) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

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

  const { mutateAsync, status } = useLogOut();
  const handleConfirm = (): void => {
    setConfirmOpen(true);
  };

  const handleLogOut = (): void => {
    mutateAsync(EMPTY_ARGUMENT);
  };
  const cancelLogOut = (): void => {
    setConfirmOpen(false);
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
        pageName={pageName}
      />
      <ConfirmLogOutModalWindow
        handleLogOut={handleLogOut}
        isConfirmOpen={isConfirmOpen}
        cancelLogOut={cancelLogOut}
        status={status}
      />
    </>
  );
};
export default HeaderContainer;