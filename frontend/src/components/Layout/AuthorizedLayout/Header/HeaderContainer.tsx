import { FC, useState } from 'react';

import { useLogOut } from 'api/logOut/';
import ConfirmLogOut from 'components/ConfirmLogOut';
import { IHeaderContainerProps } from 'components/Layout/types';

import Header from './Header';

const EMPTY_ARGUMENT = null;

const HeaderContainer: FC<IHeaderContainerProps> = ({
  userInfo,
  notifications,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const { mutate: logOutMutate, isLoading: isLogOutLoading } = useLogOut();

  const handleLogOut = () => {
    logOutMutate(EMPTY_ARGUMENT);
  };
  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };
  const handleCancelLogOut = () => {
    setConfirmOpen(false);
  };

  return (
    <>
      <Header
        userInfo={userInfo}
        notifications={notifications}
        isMobileMenuOpen={isMobileMenuOpen}
        handleConfirmOpen={handleConfirmOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <ConfirmLogOut
        isOpened={isConfirmOpen}
        isLoading={isLogOutLoading}
        handleLogOut={handleLogOut}
        handleCancelLogOut={handleCancelLogOut}
      />
    </>
  );
};
export default HeaderContainer;
