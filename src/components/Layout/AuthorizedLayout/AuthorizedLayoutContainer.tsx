import { FC } from 'react';

import { useGetUserInfo } from 'api/userInfo';
import Loader from 'components/Loader';
import { useToggle } from 'hooks';
import { Loaders } from 'enums/loader';
import { IAuthorizedLayoutContainerProps } from 'components/Layout/types';

import AuthorizedLayout from './AuthorizedLayout';

const AuthorizedLayoutContainer: FC<IAuthorizedLayoutContainerProps> = ({ pageName, children }) => {
  const { data: profileInfoData, isLoading: isProfileLoading } = useGetUserInfo();

  const [isMobileMenuOpen, toggleMobileMenuOpen] = useToggle();
  const [isSqueeze, toggleSqueeze] = useToggle();

  const { avatar, firstName, lastName, notifications } = profileInfoData || {};
  const userInfo = { avatar, firstName, lastName };

  return (
    <>
      {isProfileLoading ? (
        <Loader type={Loaders.content} />
      ) : (
        <AuthorizedLayout
          pageName={pageName}
          userInfo={userInfo}
          notifications={notifications}
          isMobileMenuOpen={isMobileMenuOpen}
          isSqueeze={isSqueeze}
          toggleMobileMenu={toggleMobileMenuOpen}
          toggleSqueeze={toggleSqueeze}
        >
          {children}
        </AuthorizedLayout>
      )}
    </>
  );
};

export default AuthorizedLayoutContainer;
