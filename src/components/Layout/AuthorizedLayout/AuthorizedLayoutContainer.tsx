import { FC, useState } from 'react';

import { useLogOut } from 'api/logOut';
import { useGetUserInfo } from 'api/userInfo';
import { ConfirmLogOut } from 'components/Dialogs';
import Loader from 'components/Loader';
import { useToggle } from 'hooks';
import { Loaders } from 'enums/loader';
import { TAuthorizedLayoutContainerProps } from 'components/Layout/types';

import AuthorizedLayout from './AuthorizedLayout';

const EMPTY_ARGUMENT = null;

const AuthorizedLayoutContainer: FC<TAuthorizedLayoutContainerProps> = ({ pageName, children }) => {
  const { data: profileInfoData, isLoading: isProfileLoading } = useGetUserInfo();

  const { mutate: logOutMutate, isLoading: isLogOutLoading } = useLogOut();

  const [isMobileMenuOpen, toggleMobileMenuOpen] = useToggle();
  const [isSqueeze, toggleSqueeze] = useToggle();
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

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
            pageName={pageName}
            userInfo={userInfo}
            notifications={notifications}
            isMobileMenuOpen={isMobileMenuOpen}
            isSqueeze={isSqueeze}
            handleConfirmLogOutOpen={handleConfirmLogOutOpen}
            toggleMobileMenu={toggleMobileMenuOpen}
            toggleSqueeze={toggleSqueeze}
          >
            {children}
          </AuthorizedLayout>
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
