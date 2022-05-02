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

  return (
    <>
      {isProfileLoading ? (
        <Loader type={Loaders.content} />
      ) : (
        <AuthorizedLayout
          pageName={pageName}
          firstName={profileInfoData?.firstName}
          lastName={profileInfoData?.lastName}
          avatar={profileInfoData?.avatar}
          notifications={profileInfoData?.notifications}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          isSqueeze={isSqueeze}
          handleSqueeze={handleSqueeze}
          classes={classes}
        >
          {children}
        </AuthorizedLayout>
      )}
    </>
  );
};

export default AuthorizedLayoutContainer;
