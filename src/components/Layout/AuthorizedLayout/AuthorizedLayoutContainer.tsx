import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useLogOut } from 'api/logOut';
import { useGetUserInfo } from 'api/userInfo';
import { ConfirmLogOut } from 'components/Dialogs';
import Loader from 'components/Loader';
import { useToggle } from 'hooks';
import { Loaders } from 'enums/loader';

import AuthorizedLayout from './AuthorizedLayout';

const EMPTY_ARGUMENT = null;

const AuthorizedLayoutContainer: FC = () => {
  const { pathname } = useLocation();

  const [isMobileMenuOpen, toggleMobileMenuOpen] = useToggle();
  const [isSqueeze, toggleSqueeze] = useToggle();
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

  const { data: profileInfoData, isLoading: isProfileLoading } = useGetUserInfo();

  const { mutate: logOutMutate, isLoading: isLogOutLoading } = useLogOut(pathname);

  const { avatar, firstName, lastName, notifications } = profileInfoData || {};
  const userInfo = { avatar, firstName, lastName };

  const handleLogOut = () => {
    logOutMutate(EMPTY_ARGUMENT);
  };
  const handleConfirmLogOutOpen = () => {
    setConfirmOpen(true);
  };
  const handleCancelLogOut = () => {
    setConfirmOpen(false);
  };

  return (
    <>
      {isProfileLoading ? (
        <Loader type={Loaders.content} />
      ) : (
        <>
          <AuthorizedLayout
            userInfo={userInfo}
            notifications={notifications}
            isMobileMenuOpen={isMobileMenuOpen}
            isSqueeze={isSqueeze}
            handleConfirmLogOutOpen={handleConfirmLogOutOpen}
            toggleMobileMenu={toggleMobileMenuOpen}
            toggleSqueeze={toggleSqueeze}
          />
          <ConfirmLogOut
            isOpened={isConfirmOpen}
            isLoading={isLogOutLoading}
            handleLogOut={handleLogOut}
            handleCancelLogOut={handleCancelLogOut}
          />
        </>
      )}
    </>
  );
};

export default AuthorizedLayoutContainer;
