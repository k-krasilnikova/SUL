import React, { useState } from 'react';

import { IUser } from 'types/user';
import { useLogOut } from 'api/logOut/';
import ConfirmLogOut from 'components/ConfirmLogOut';

import Header from './Header';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

type Props = IUser & MobileMenuProps;

const HeaderContainer: React.FC<Props> = ({
  firstName,
  lastName,
  avatar,
  notifications,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const EMPTY_ARGUMENT = null;

  const { mutateAsync, isLoading } = useLogOut();
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
        firstName={firstName || 'Test'}
        lastName={lastName || 'Tester'}
        avatar={avatar}
        notifications={notifications}
        handleConfirm={handleConfirm}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <ConfirmLogOut
        isOpened={isConfirmOpen}
        isLoading={isLoading}
        handleLogOut={handleLogOut}
        handleCancelLogOut={cancelLogOut}
      />
    </>
  );
};
export default HeaderContainer;
