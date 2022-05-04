import React, { useState } from 'react';

import { useGetUserInfo } from 'api/userInfo';
import { setMenuToggle } from 'utils/helpers/menuHelpers/setMenuToggle';
import { getMenuToggle } from 'utils/helpers/menuHelpers/getMenuToggle';

import AuthorizedLayout from './AuthorizedLayout';
import { useLayOutStyles } from './styled';
import Loader from '../Loader';
import { Loaders } from '../../enums/loader';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

const AuthorizedLayoutContainer: React.FC<Props> = ({ pageName, children }) => {
  const { data: profileInfoData, isLoading: isProfileLoading } = useGetUserInfo();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const currentMenuStatus = getMenuToggle();
  const [isSqueeze, setSqueeze] = useState<boolean | undefined>(currentMenuStatus);
  const handleSqueeze = () => {
    const toggleStatus = setMenuToggle();
    setSqueeze(toggleStatus);
  };
  const classes = useLayOutStyles();

  const { firstName, lastName, avatar, notifications } = profileInfoData || {};

  return (
    <>
      {isProfileLoading ? (
        <Loader type={Loaders.content} />
      ) : (
        <AuthorizedLayout
          classes={classes}
          avatar={avatar}
          pageName={pageName}
          firstName={firstName}
          lastName={lastName}
          notifications={notifications}
          isMobileMenuOpen={isMobileMenuOpen}
          isSqueeze={isSqueeze}
          toggleMobileMenu={toggleMobileMenu}
          handleSqueeze={handleSqueeze}
        >
          {children}
        </AuthorizedLayout>
      )}
    </>
  );
};

export default AuthorizedLayoutContainer;
