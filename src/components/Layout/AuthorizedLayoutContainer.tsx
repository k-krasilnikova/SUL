import React, { useState } from 'react';
import { useGetUserInfo } from 'api/userInfo';

import AuthorizedLayout from './AuthorizedLayout';

interface Props {
  pageName: string;
  children: React.ReactNode;
}

const AuthorizedLayoutContainer: React.FC<Props> = ({ pageName, children }) => {
  const { data } = useGetUserInfo();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <AuthorizedLayout
      pageName={pageName}
      firstName={data?.firstName}
      lastName={data?.lastName}
      avatar={data?.avatar}
      isMobileMenuOpen={isMobileMenuOpen}
      toggleMobileMenu={toggleMobileMenu}
    >
      {children}
    </AuthorizedLayout>
  );
};

export default AuthorizedLayoutContainer;
